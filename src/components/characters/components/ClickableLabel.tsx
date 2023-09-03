import { useEffect, useState } from "react"
import { Character, CharacterContextProps, IdNameRankData, IdNameRankDataArray } from "../CharacterTypes"
import { characterStyles } from "../styles/CharacterStyles"
import { useCharacter } from "../../../api/CharacterContext"
import EditStatModal from "../modals/EditStatModal"
import DiceModal from "../modals/DiceModal"

type ClickableTitleProps = {
    name: string
    id: string
    groupName: string
    character: Character
}
export default function ClickableLabel({ name, id, groupName, character } : ClickableTitleProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const statArray: IdNameRankData = character?.[groupName]

    function handleDiceClickableTitles() {
       
        const stat = statArray.find(item => item.id === id)
        if (stat) {
            return <DiceModal 
                    key={id}
                    stat={stat}
                    character={character}
                />
        }
    }

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
                (
                    groupName === 'coreAbilities' ||
                    groupName === 'powers' ||
                    groupName === 'talismans'
                ) ? handleDiceClickableTitles() : 
                (
                    <div
                        id={id}
                        onContextMenu={handleContextMenu}
                        style={characterStyles.clickableTitles}
                    >
                        {name}
                    </div>
                )
            }
            <EditStatModal 
                storedTitle={name}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    )
}