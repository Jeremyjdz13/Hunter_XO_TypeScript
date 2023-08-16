import { useRef } from "react"
import CharacterStat from "../CharacterStat"
import { CharacterStatProps } from "../../../api/types/CharacterTypes"
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
            >{groupTitle}</button>
            <dialog style={statModalStyles.container} ref={modalRef} >
                <button 
                    onClick={handleCloseModal}
                >Close</button>
                <div>
                    <CharacterStat
                        groupTitle={groupTitle}
                        groupName={groupName}
                        traits={traits}
                        character={character}
                    />
                    {groupName === "powers" && (
                        <CharacterStat
                            groupTitle="Power Stunts"
                            traits={character.powerStunts}
                            groupName="powerStunts" 
                            character={character}
                        />
                        )
                    }
                
                </div>
            </dialog>
        </div>
    )
}