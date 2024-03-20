'use client';
import Modal from "./Modal";

import useLoginModal from "@/app/hooks/useLoginModal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import { useRouter } from "next/navigation";
import { HandleLogin } from "@/app/lib/actions";
import apiService from "@/app/services/apiServices";


const LoginModal = () => {
    const router = useRouter();
    const LoginModal = useLoginModal();
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('')
    const[errors, setErrors] = useState<string[]>([]);

    const submitLogin = async () => {
        const FormData = {
            email: email,
            password: password
        }

        const response = await apiService.postWithoutToken('/api/auth/login/', JSON.stringify(FormData))

        if(response.access){
            HandleLogin(response.user.pk, response.access, response.refresh);

            LoginModal.close()

            router.push('/')

        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any ) => {
                return error;
            }) 

            setErrors(tmpErrors);
        }
    }

    const content = (
        <>
            <form className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="Your Email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input onChange={(e) => setPassword(e.target.value)} type ="password" placeholder="Your Password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                
                {errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                            {error}
                        </div>
                    )
                })}
                
                <CustomButton 
                    label="Submit"
                    onClick={submitLogin}
                />
            </form>
        </>
           
    )  
    return (
        <Modal 
            isOpen={LoginModal.isOpen}
            close={LoginModal.close}
            label="Log In"
            content={content}
        />
    )
}

export default LoginModal;