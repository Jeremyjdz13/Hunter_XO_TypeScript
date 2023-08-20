import React from 'react'
import { characterStyles } from './styles/CharacterStyles'
import { StatListProps } from '../../api/types/CharacterTypes'
import { statModalStyles } from './styles/StatModalStyles'
import ClickableTitle from './ClickableTitle'
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
            <div style={characterStyles.clickableTitles}>
                {handlePurchased()}
            </div>
        ) : (
            <></>
        );

        return (
            <div style={statModalStyles[`dashboard_${isSpellbookGroup ? "4" : "3"}_grid`]}>
                <ClickableTitle 
                    id={id} 
                    name={name} 
                    groupName={groupName} 
                    character={character}
                />
                <div style={characterStyles.rank}>
                    {handleRank()}
                </div>
                
                {extraElements}
                <div style={characterStyles.clickableTitles}>
                    {description}
                </div>
            </div>
        );
    }

    return (
        <div style={characterStyles.grid2}>
            <ClickableTitle 
                id={id} 
                name={name} 
                groupName={groupName} 
                character={character}
            />
            <div style={characterStyles.rank}>{rank}</div>
        </div>
    );
}

return <div className="cRow">{handleNameRankDescriptionElement()}</div>;
}