import React from "react";
import StatLists from "./StatLists";
import Label from "./Label";
import Title from "./Title";
import { CharacterStatProps, IdNameRankData } from "../CharacterTypes";
import { characterStyles } from "../styles/CharacterStyles";
import { statModalStyles } from "../styles/StatModalStyles";


function CharacterStat({ traits, groupName, character, groupTitle }: CharacterStatProps){

    const statList = traits?.map((trait: IdNameRankData) => (
        <StatLists
            key={trait.id} 
            {...trait} 
            groupName={groupName} 
            character={character}
        />
    ))

    function handleNameRankDescriptionElement() {
        const isSpecialGroup = ["backgrounds", "talismans", "inventory", "powerStunts"].includes(groupName);
        const isSpellbookGroup = groupName === "spellbook";
    
        if (isSpecialGroup) {
            
            return (
                <div style={statModalStyles.dashboard_3_grid}>
                    <Label storedLabel={'Name'} />
                    <Label storedLabel={'Rank'} />
                    <Label storedLabel={'Description'} />
                </div>
            )

        } else if (isSpellbookGroup) {
            return (
                <div style={statModalStyles.dashboard_4_grid}>
                    <Label storedLabel={'Name'} />
                    <Label storedLabel={'Attempts'} />
                    <Label storedLabel={'Purchased'} />
                    <Label storedLabel={'Description'} />
                </div>
            );

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