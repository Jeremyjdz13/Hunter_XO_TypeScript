import { useState } from "react"
import { Character, StatData } from "../../../api/types/CharacterTypes"
import Stat from "../components/Stat/Stat"
import { characterStyles } from "../styles/CharacterStyles"
import React from "react"

type HealthProps = {
    stat: StatData
    groupName: string
    groupTitle: string
} 

export default function Health(
    {
        stat, 
        groupName,
        groupTitle, 
    } : HealthProps) {


    function handleBashingCount(stat: StatData): JSX.Element {
        const counts: number | undefined = stat.rank

        let count = 0

        if(counts) {
           count = Math.min(Math.max(counts), 10)  
        }
        
        if(count >= 4 && count <= 5){
            return <span style={characterStyles.text}>Slap fighting! -1</span>
        } else if(count >= 6 && count <= 8){
            return <span style={characterStyles.text}>No BITING! -3</span>
        } else if(count === 9){
            return <span style={characterStyles.text}>A chil les Heel! -5 </span>
        }else if(count === 10){
            return <span style={characterStyles.text}>Hello Darkness my old friend!</span>
        }
        else {
            return <span style={characterStyles.text}>No Penalty</span>
        }
    }

    function handleLethalCount(stat: StatData): JSX.Element {
        const counts: number | undefined = stat.rank
        let count = 0
        
        if(counts) {
        const count = Math.min(Math.max(counts), 10)
        }

        if(count >= 3 && count <=4){
            return <span style={characterStyles.text}>That really hurt! -1</span>
        } else if(count >= 5 && count <= 6){
            return <span style={characterStyles.text}>Is that blood?! -2</span>
        } else if(count >= 7 && count <=8){
            return <span style={characterStyles.text}>I ain't got time to bleed! -4</span>
        }else if(count === 9){
            return <span style={characterStyles.text}>To die or not to die? -6</span>
        }else if(count === 10){
            return <span style={characterStyles.text}>Let's weigh your sins!</span>
        }else {
            return <span style={characterStyles.text}>No Penalty</span>
        }
    }

    function handleBashingLethalElement() {
        if(groupTitle === 'Bashing'){
            return handleBashingCount(stat)
        } else if (groupTitle === "Lethal") {
            return handleLethalCount(stat)
        }
    }

    return (
        <React.Fragment>
            {groupTitle === 'Bashing' || groupTitle === 'Lethal' ? (
                <div>
                    <Stat 
                        stat={stat}
                        groupName={groupName}
                        groupTitle={groupTitle}
                    />
                {handleBashingLethalElement()}
                </div>
                ) : null}
        </React.Fragment>
    )
}