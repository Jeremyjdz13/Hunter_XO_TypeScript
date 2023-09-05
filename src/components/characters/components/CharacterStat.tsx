import React from "react";
import StatLists from "./StatLists";
import Label from "./Label";
import Title from "./Title";
import { CharacterStatProps, IdNameRankData } from "../CharacterTypes";
import { statModalStyles } from "../styles/StatModalStyles";


function CharacterStat({ traits, groupName, character, groupTitle }: CharacterStatProps){

    const isTalismans = character?.merits?.talisman
    
    const statList = traits?.map((trait: IdNameRankData) => (
        <StatLists
            key={trait.id} 
            {...trait} 
            groupName={groupName} 
            character={character}
        />
    ))

    function handleNameRankDescriptionElement() {
        const isDescriptionGroup = ["backgrounds", "merits", "inventory", "flaws"].includes(groupName);
        const isPowersAndTalismansGroup = ["powers", "talismans"].includes(groupName);
        const isSpellbookGroup = ["spellbook"].includes(groupName);

        if (isDescriptionGroup) {
            
            return (
                <div style={statModalStyles.dashboard_3_grid}>
                    <Label storedLabel={'Name'} />
                    <Label storedLabel={'Rank'} />
                    <Label storedLabel={'Description'} />
                </div>
            )
        }
        if (isSpellbookGroup){
            return (
                <div 
                style={statModalStyles.dashboard_7_grid}
                >
                    <Label storedLabel={'Name'} />
                    <Label storedLabel={'Rank'} />
                    <Label storedLabel={'Mastered'} />
                    <Label storedLabel={'Purchased'} />
                    <Label storedLabel={'Casting'} />
                    <Label storedLabel={'Duration'} />
                    <Label storedLabel={'Description'} />
                </div>
            )
        }
        if (isPowersAndTalismansGroup) {
            return (
                <div style={statModalStyles.dashboard_4_grid}>
                    <Label storedLabel={'Name'} />
                    <Label storedLabel={'Rank'} />
                    <Label storedLabel={'Attempts'} />
                    <Label storedLabel={'Description'} />
                </div>
            )
        }
        
    }

    return (
        <div>
            <Title storedTitle={groupTitle} />
            {handleNameRankDescriptionElement()}
            {statList}
        </div>
    )
}

export default CharacterStat