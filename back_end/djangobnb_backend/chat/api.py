from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework_simplejwt.tokens import AccessToken

from .models import Conversation, ConversationMessage
from useraccount.models import User
from .serializers import ConversationListSerializer, ConversationDetailSerializer, ConversationMessageSerializer

@api_view(['GET'])
def conversations_list(request):
    serializer = ConversationListSerializer(request.user.conversations.all(), many=True)

    return JsonResponse(serializer.data, safe=False)

@api_view(['GET'])
def conversations_detail(request, pk):
    conversation = request.user.conversations.get(pk=pk) #makes sure you can only get conversations that you are a part of

    conversation_serializer = ConversationDetailSerializer(conversation, many=False)
    messages_serializer = ConversationMessageSerializer(conversation.messages.all(), many=True)

    return JsonResponse({
        'conversation': conversation_serializer.data,
        'messages': messages_serializer.data
    }, safe=False)