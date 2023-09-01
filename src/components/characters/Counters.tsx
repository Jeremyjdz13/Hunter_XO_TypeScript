import { useState } from "react"
import { Character, IdNameRankData } from "../../api/types/CharacterTypes"
import CharacterStat from "./CharacterStat"
import { characterStyles } from "./styles/CharacterStyles"

type CountersProps = {
    traits: IdNameRankData[]
    groupName: string
    groupTitle: string
    character: Character
} 

export default function Counters(
    {
        traits, 
        groupName,
        groupTitle, 
        character,
    } : CountersProps) {


    function handleBashingCount(traits: IdNameRankData[]): JSX.Element {
        const counts: number[] = traits.map(b => b.rank)
        const count = Math.min(Math.max(...counts), 10)
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

    function handleLethalCount(traits: IdNameRankData[]): JSX.Element {
        const counts: number[] = traits.map(l => l.rank)
        const count = Math.min(Math.max(...counts), 10)
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
            return handleBashingCount(traits)
        } else if (groupTitle === "Lethal") {
            return handleLethalCount(traits)
        }
    }

    return (
        <div>
            {groupTitle === 'Bashing' || groupTitle === 'Lethal' ? (
                <div>
                    <CharacterStat 
                        traits={traits}
                        groupName={groupName}
                        groupTitle={groupTitle}
                        character={character}
                    />
                {handleBashingLethalElement()}
                </div>
                ) : null}
        </div>
    )
}