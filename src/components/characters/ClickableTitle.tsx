import { useEffect, useState } from "react"
import { Character, CharacterContextProps, IdNameRankData } from "../../api/types/CharacterTypes"
import { characterStyles } from "./styles/CharacterStyles"
import { useCharacter } from "../../api/CharacterContext"
import EditStatModal from "./modals/EditStatModal"

type ClickableTitleProps = {
    name: string
    id: string
    groupName: string
    character: Character
}
export default function ClickableTitle({ name, id, groupName, character } : ClickableTitleProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { handleSelectedStat } = useCharacter() as CharacterContextProps

    function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>){
        e.preventDefault() 
        // handleSetCharacterStatGroupName(groupName)
        if(character[groupName]) {

        const selectedStat = character[groupName].find((data: IdNameRankData ) => data.id === e.currentTarget.id)
        console.log(id, "Left Click")
        
            if (selectedStat) {
                handleSelectedStat(selectedStat)
            }
        
        }


        // console.log(groupName, "Left Click")
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
            <div
                id={id}
                onClick={handleClick}
                onContextMenu={handleContextMenu}
                style={characterStyles.clickableTitles}
            >
                {name}
            </div>
            <EditStatModal 
                storedTitle={name}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    )
}