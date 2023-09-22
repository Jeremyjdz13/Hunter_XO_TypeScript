import { useRef } from "react"
import Stat from "../components/Stat/Stat"
import { statModalStyles } from "../styles/StatModalStyles"
import { StatData } from "../CharacterTypes"

type StatModalProps = {
    groupTitle: string
    stat: StatData
    groupName: string
}
export default function StatModal({ groupTitle, stat, groupName  }: StatModalProps) {
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
                <Stat
                    groupTitle={groupTitle}
                    groupName={groupName}
                    stat={stat}
            />
            </dialog>
        </div>
    )
}