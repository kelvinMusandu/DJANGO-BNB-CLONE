'use client'

import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import LoginModal from "../modals/LoginModal";

interface AddPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const addPropertyModal = useAddPropertyModal();
    const LoginModal = useLoginModal();
    const airbnbYourHome = () => {
        if(userId){
            addPropertyModal.open();
        }else{
            LoginModal.open();
        }
        
    }
    return (
        <div 
        onClick={airbnbYourHome}
        className="cursor-pointer p-2  text-sm font-semibold rounded-full hover:bg-gray-200">
            DjangoBnb your home
        </div>
    )
}

export default AddPropertyButton;