import React from 'react'
import { characterStyles } from '../styles/CharacterStyles'
import { StatListProps } from '../CharacterTypes'
import { statModalStyles } from '../styles/StatModalStyles'
import ClickableTitle from './ClickableLabel'
// import { useEdit } from '../../../../contexts/EditContext'

export default function StatLists(props: StatListProps) {
    const {
        id,
        name,
        rank,
        description,
        character,
        groupName
    } = props
    
    // const { handleSetSelectedStat, handleSetCharacterStatGroupName } = useEdit()


function handleDescriptionElement() {
    const isSpecialGroup = ["backgrounds", "inventory"].includes(groupName);
   

    if (isSpecialGroup) {

        return (
            <div style={statModalStyles.dashboard_3_grid}>
                <ClickableTitle 
                    id={id} 
                    name={name} 
                    groupName={groupName} 
                    character={character}
                />
                <div style={characterStyles.rank}>
                   {rank}
                </div>
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

return <div className="cRow">{handleDescriptionElement()}</div>;
}