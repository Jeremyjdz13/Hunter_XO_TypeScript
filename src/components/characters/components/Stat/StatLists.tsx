import React from 'react'
import { characterStyles } from '../../styles/CharacterStyles'
import { statModalStyles } from '../../styles/StatModalStyles'
import ClickableLabel from './ClickableLabel'
import { StatData } from '../../../../api/types/CharacterTypes'
import Label from './Label'
import { statStyles } from './StatStyles'
// import { useEdit } from '../../../../contexts/EditContext'

export type StatListProps = {
    stat: StatData
    groupName: string
}

export default function StatLists(props: StatListProps) {
    const {
        stat,
        groupName,
    } = props
    const isSpellComponents= [ 
        "spellComponents",
    ].includes(groupName);

    const isStunt = [
        "stunt"
    ].includes(groupName);

    // const { handleSetSelectedStat, handleSetCharacterStatGroupName } = useEdit()

    function handleStuntsElement() {
        return (
            <div key={stat.id}>
                <div style={statStyles.grid_6}>
                    <Label storedLabel="Name" />
                    <Label storedLabel="Attempts" />
                    <Label storedLabel="Description" />
                    <Label storedLabel="Mastered" />
                    <Label storedLabel="Armor" />
                    <Label storedLabel="Duration" />
                </div>
                <div style={statStyles.grid_6}>
                    <ClickableLabel id={stat.id} name={stat.name} groupName={groupName} />
                    <div>{stat.attempts}</div>
                    <div>{stat.description}</div>
                    <div>{stat.mastered ? "Aye": "Nay"}</div>
                    <div>{stat.armor ? "Aye" : "Nay"}</div>
                    <div>{stat.duration}</div>
                </div>
            </div>
        )
    }

    function handleSpellComponentsElement() {
        return (
            <div key={stat.id} style={statStyles.grid_5}>
                <div>
                    <Label storedLabel="Name" />
                    <Label storedLabel="Rank" />
                    <Label storedLabel="Description" />
                    <Label storedLabel="Armor" />
                    <Label storedLabel="Component" />
                </div>
                <div style={statStyles.grid_5}>
                    <ClickableLabel id={stat.id} name={stat.name} groupName={groupName} />
                    <div>{stat.rank}</div>
                    <div>{stat.description}</div>
                    <div>{stat.armor ? "Aye" : "Nay"}</div>
                    <div>{stat.component ? "Aye" : "Nay"}</div>
                </div>
            </div>
        )
    }
    function handleStatListElement(){
       
        if(isSpellComponents){
           return handleSpellComponentsElement()
        }

        if(isStunt) {
            return handleStuntsElement()
        }
    }
return (
        <div>
            {handleStatListElement()}
        </div>
    )
}