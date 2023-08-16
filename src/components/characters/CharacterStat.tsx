import React from "react";
import StatLists from "./StatLists";
import { CharacterStatProps, IdNameRankData } from "../../api/types/CharacterTypes";
import { characterStyles } from "./styles/CharacterStyles";
import { statModalStyles } from "./styles/StatModalStyles";


function CharacterStat({ traits, groupName, character, groupTitle }: CharacterStatProps){

    const statList = traits.map((trait: IdNameRankData) => (
        <StatLists
            key={trait.id} 
            {...trait} 
            groupName={groupName} 
            character={character}
        />
    ))

    function handleClick(e: { preventDefault: () => void }){
        e.preventDefault() 
       
        // handleSetCharacterStatGroupName(groupName)
        // const selectedStat = character?.[groupName].find(data => data.id === e.target.id)
        // handleSetSelectedStat(selectedStat)
        console.log("This was clicked")
    }

    function handleNameRankDescriptionElement() {
        const isSpecialGroup = ["backgrounds", "talismans", "equipmentItems", "powerStunts"].includes(groupName);
        const isSpellbookGroup = groupName === "spellbook";
    
        if (isSpecialGroup) {
            
            return (
                <div style={statModalStyles.dashboard_3_grid}>
                    <div onClick={handleClick} style={statModalStyles.label}>
                        Name
                    </div>
                    <div style={statModalStyles.label}>
                        Rank
                    </div>
                    <div style={statModalStyles.label}>
                       Description
                    </div>
                </div>
            )

        } else if (isSpellbookGroup) {
            return (
                <div style={statModalStyles.dashboard_4_grid}>
                    <div onClick={handleClick} style={statModalStyles.label}>
                        Name
                    </div>
                    <div style={statModalStyles.label}>
                        Attempts
                    </div>
                    <div style={statModalStyles.label}>
                        Purchased
                    </div>
                    <div style={statModalStyles.label}>
                       Description
                    </div>
                </div>
            );

        }
    
        
    }

    return (
        <div style={characterStyles.blackBorder}>
            <div>
                <div style={characterStyles.titles}>{groupTitle}</div>
            </div>
            {handleNameRankDescriptionElement()}
            {statList}
        </div>
    )
}

export default CharacterStat