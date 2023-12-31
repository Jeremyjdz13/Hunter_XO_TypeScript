import { useEffect, useState } from "react"
import { SelectedCharacter, StatData } from "../../../../api/types/CharacterTypes"
import { characterStyles } from "../../styles/CharacterStyles"
import { useCharacter } from "../../../../api/CharacterContext"
import EditStatModal from "../../modals/EditStatModal"
import DiceModal from "../../modals/DiceModal"

type ClickableTitleProps = {
    groupTitle: string
}

export default function ClickableTitle({ groupTitle } : ClickableTitleProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleContextMenu(e: { preventDefault: () => void}){
        e.preventDefault()
        console.log("Right Click")

        setIsModalOpen(true)
    }

    function handleCloseModal() {
        setIsModalOpen(false)
    }
    return (
        <div>
            {
                <div
                    onContextMenu={handleContextMenu}
                    style={characterStyles.titles}
                >
                    {groupTitle}
                </div>   
            }
            <EditStatModal 
                storedTitle={groupTitle}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    )
}