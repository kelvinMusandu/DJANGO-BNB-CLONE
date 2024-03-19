'use client'
import Image from "next/image";

import Modal from "./Modal";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";

import LoginModal from "./LoginModal";

const AddPropertyButton = () => {
    const addPropertyModal = useAddPropertyModal();

    return (
        <>
            <Modal 
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label="Add Property"
                content={<p>test</p>}
            />
        </>
    )

}

export default AddPropertyButton;