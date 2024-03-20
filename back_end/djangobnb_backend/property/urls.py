from django.urls import path
from . import api


urlpatterns = [
    path('', api.properties_list, name='api_properties_list'),
    path('create/', api.create_property, name='api_create_property'),
    path('<uuid:pk>/', api.property_detail, name='api_property_detail'),
]