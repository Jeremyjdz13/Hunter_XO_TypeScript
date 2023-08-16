import React from 'react'
import { characterStyles } from './styles/CharacterStyles'
import { StatListProps } from '../../api/types/CharacterTypes'
import { statModalStyles } from './styles/StatModalStyles'
// import { useEdit } from '../../../../contexts/EditContext'

export default function StatLists(props: StatListProps) {
    const {
        id,
        name,
        rank,
        purchased,
        description,
        character,
        groupName
    } = props
    
    // const { handleSetSelectedStat, handleSetCharacterStatGroupName } = useEdit()


    function handleClick(e: { preventDefault: () => void }){
        e.preventDefault() 
       
        // handleSetCharacterStatGroupName(groupName)
        // const selectedStat = character?.[groupName].find(data => data.id === e.target.id)
        // handleSetSelectedStat(selectedStat)
        console.log("This was clicked")
    }

    function handleRank(){
        if((rank === 10 && groupName === "powerStunts") || (rank === 5 && groupName === "spellbook")){
            return "M"
        }
        return rank
    }

    function handlePurchased(){
        console.log(purchased, "Purchased")
        return purchased ? "Aye" : "Nay"
    }


function handleNameRankDescriptionElement() {
    const isSpecialGroup = ["backgrounds", "talismans", "equipmentItems", "powerStunts"].includes(groupName);
    const isSpellbookGroup = groupName === "spellbook";

    if (isSpecialGroup || isSpellbookGroup) {
        const extraElements = isSpellbookGroup ? (
            <div>
                {handlePurchased()}
            </div>
        ) : (
            <></>
        );

        return (
            <div style={statModalStyles[`dashboard_${isSpellbookGroup ? "4" : "3"}_grid`]}>
                <div id={id} onClick={handleClick} style={characterStyles.clickableTitles}>
                    {name}
                </div>
                <div>
                    {handleRank()}
                </div>
                
                {extraElements}
                <div>
                    {description}
                </div>
            </div>
        );
    }

    return (
        <div style={characterStyles.grid2}>
            <div id={id} onClick={handleClick} style={characterStyles.clickableTitles}>
                {name}
            </div>
            <div>{rank}</div>
        </div>
    );
}

return <div className="cRow">{handleNameRankDescriptionElement()}</div>;
}