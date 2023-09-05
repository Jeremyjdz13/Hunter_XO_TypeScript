import { useRef } from "react"
import CharacterStat from "../components/CharacterStat"
import { CharacterStatProps } from "../CharacterTypes"
import { statModalStyles } from "../styles/StatModalStyles"

export default function StatModal({ groupTitle, traits, groupName, character  }: CharacterStatProps) {
    const modalRef = useRef(null)

    function handleOpenModal() {
        (modalRef.current! as HTMLDialogElement).showModal()
    }

    function handleCloseModal() {
        (modalRef.current! as HTMLDialogElement).close()
    }

    return (
        <div>
            <button
                onClick={handleOpenModal}
                style={statModalStyles.buttonOpen}
            >
                {groupTitle}
            </button>
            <dialog style={statModalStyles.container} ref={modalRef} >
                <button 
                    onClick={handleCloseModal}
                    style={statModalStyles.buttonClose}
                >
                    Close
                </button>
                <CharacterStat
                    groupTitle={groupTitle}
                    groupName={groupName}
                    traits={traits}
                    character={character}
            />
            </dialog>
        </div>
    )
}