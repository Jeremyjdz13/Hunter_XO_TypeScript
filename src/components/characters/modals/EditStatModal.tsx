import { useRef } from "react";
import Title from "../Title";
import EditStatForm from "../forms/EditStatForm";

interface EditStatModalProps {
    storedTitle: string
    isOpen: boolean
    onClose: () => void
}

export default function EditStatModal({ 
    storedTitle,
    isOpen,
    onClose
}: EditStatModalProps) {

    const modalRef = useRef<HTMLDialogElement | undefined>()

    return (
  
        <dialog open={isOpen} ref={modalRef}>
            <button onClick={onClose}>close</button>
            <Title storedTitle={storedTitle} />
            <EditStatForm />
        </dialog>
    )
}