'use client';
import Modal from "./Modal";

import { useRouter } from "next/navigation";
import useSignupModal from "@/app/hooks/useSignupModal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
import apiService from "@/app/services/apiServices";
import { HandleLogin } from "@/app/lib/actions";

const SignupModal = () => {
    const router = useRouter();
    const SignupModal = useSignupModal();
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const[errors, setErrors] = useState<string[]>([]);

    const submitSignup = async () => {
        const FormData = {
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.postWithoutToken('/api/auth/register/', JSON.stringify(FormData))

        if(response.access){
            HandleLogin(response.user.pk, response.access, response.refresh);

            SignupModal.close()

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
            <form 
            action={submitSignup}
            className="space-y-4">
                <input onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="Your Email" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input onChange={(e) => setPassword1(e.target.value)} type ="password" placeholder="Your Password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                <input onChange={(e) => setPassword2(e.target.value)} type ="password" placeholder="Confirm Password" className="w-full h-[54px] px-4 border border-gray-100 rounded-xl" />
                
                {errors.map((error, index) => {
                    return (
                        <div key={`error_${index}`} className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                            {error}
                        </div>
                    )
                })}
                
                <CustomButton 
                    label="Submit"
                    onClick={submitSignup}
                />
            </form>
        </>
           
    )  
    return (
        <Modal 
            isOpen={SignupModal.isOpen}
            close={SignupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;