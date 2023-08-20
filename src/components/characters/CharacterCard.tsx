import React, { useRef } from 'react'
import { CharacterCardProps, IdNameRankData, Character } from '../../api/types/CharacterTypes'
import { useCharacter } from '../../api/CharacterContext'
import CharacterStat from './CharacterStat'
import StatLists from './StatLists'
import StatModal from './modals/StatModal'
import { characterStyles } from './styles/CharacterStyles'
import { NPCDisplay } from './NPCDisplay'
import Initiative from './initiative/Initiative'
import Title from './Title'
import ClickableTitle from './ClickableTitle'
import Counters from './Counters'


export default function CharacterCard({ character } : CharacterCardProps){
  
    const id = character.id
    const name = character.name
    const alias = character.alias
    const nature = character.nature
    const primaryAttributes = character.primaryAttributes
    const secondaryAttributes = character.secondaryAttributes
    const combatSkills = character.combatSkills
    const physicalSkills = character.physicalSkills
    const professionalSkills = character.professionalSkills
    const mentalSkills = character.mentalSkills
    const backgrounds = character.backgrounds
    const merits = character.merits
    const flaws = character.flaws
    const powers = character.powers
    const talismans = character.talismans
    const spellbook = character.spellbook
    const powerStunts = character.powerStunts
    const bashingCounter = character.bashingCounter
    const lethalCounter = character.lethalCounter
    const protoniumCounter = character.protoniumCounter
    const equipmentItems = character.equipmentItems
    
    const spentProtonium = protoniumCounter[0]
    const protoniumAttribute = character.secondaryAttributes[5]
    const searchProtoniumGenerator = merits.filter(item => (
            item.name.includes('Protonium Generator') || 
            item.name.includes(' protonium generator') || 
            item.name.includes('P G') || 
            item.name.includes('p gen') || 
            item.name.includes(' P Generator') || 
            item.name.includes('p g') || 
            item.name.includes('P Gen')
        )
    )

    let protoniumGeneratorRank: number = 0

    if (!searchProtoniumGenerator) {
        console.log("No Protonium generator found")
    } else{
        protoniumGeneratorRank = searchProtoniumGenerator[0]?.rank
    }

    function handleSpentProtonium(){

            if (!protoniumGeneratorRank) {
                protoniumGeneratorRank = 0
            }
    
            let totalPool = protoniumAttribute.rank + protoniumGeneratorRank
            let protoniumCount = totalPool - spentProtonium.rank 
    
            return protoniumCount
        }   
        
    
    function handleProtoniumGeneratorElement(): JSX.Element {
        if(protoniumGeneratorRank){
            return (
                <div>
                    <div style={characterStyles.titles}>Generator</div>
                    <div>{protoniumGeneratorRank}</div>
                </div>
            )
        }
        return <></>
    }
    

    return (
        <div style={characterStyles.container}>
            <div key={id} style={characterStyles.box1}>
                <div>
                    <div style={characterStyles.blackBorder}>
                        <Title storedTitle='Name'/>
                        <ClickableTitle
                            id={id} 
                            name={name}
                            groupName='characterName'
                            character={character}
                        />
                    </div>
                    <div style={characterStyles.blackBorder}>
                        <Title storedTitle='Alias'/>
                        <ClickableTitle
                            id={id} 
                            name={alias}
                            groupName='characterAlias'
                            character={character}
                         />
                    </div>
                    <div style={characterStyles.blackBorder}>
                        <Title storedTitle='Nature'/>
                        <ClickableTitle
                            id={id} 
                            name={nature}
                            groupName='characterNature'
                            character={character}
                         />
                    </div>
                </div>
                <div style={characterStyles.blackBorder}>
                    <Initiative 
                        intuition={primaryAttributes[4]}
                        mentalSkills={mentalSkills} 
                    />
                </div>
                <div style={characterStyles.blackBorder}>
                    <Counters
                         traits={bashingCounter}
                         groupName='bashingCounter'
                         groupTitle='Bashing'
                         character={character}
                    />
                </div>
                <div style={characterStyles.blackBorder}>
                    <Counters
                         traits={lethalCounter}
                         groupName='lethalCounter'
                         groupTitle='Lethal'
                         character={character}
                    />
                </div>
                <div style={characterStyles.blackBorder}>
                    <Counters
                         traits={protoniumCounter}
                         groupName='protoniumCounter'
                         groupTitle='Protonium'
                         character={character}
                    />
                    <div>
                        <StatLists
                            key={protoniumAttribute.id}
                            {...protoniumAttribute}
                            groupName="secondaryAttributes"
                            character={character}
                        />
                    </div>
                    <div>
                        {handleProtoniumGeneratorElement()}
                    </div>
                    <div>
                        Total: {handleSpentProtonium()}
                    </div>
                </div>
            </div>
            <div style={characterStyles.box2}>
                <CharacterStat 
                    groupTitle='Primary Attr'
                    groupName='primaryAttributes'
                    traits={primaryAttributes}
                    character={character}
                />
                <CharacterStat 
                    groupTitle='Secondary Attr'
                    groupName='secondaryAttributes'
                    traits={secondaryAttributes}
                    character={character}
                />
                <CharacterStat 
                    groupTitle='Merits'
                    groupName='merits'
                    traits={merits}
                    character={character}
                />
                <CharacterStat
                    groupTitle='Flaws'
                    groupName='flaws'
                    traits={flaws}
                    character={character} 
                />
                <NPCDisplay />
            </div>
            <div style={characterStyles.box3}>
                <CharacterStat
                    groupTitle='Combat'
                    groupName='combatSkills'
                    traits={combatSkills}
                    character={character} 
                />
                <CharacterStat
                    groupTitle='Physical'
                    groupName='physicalSkills'
                    traits={physicalSkills}
                    character={character} 
                />
                <CharacterStat
                    groupTitle='Professional'
                    groupName='professionalSkills'
                    traits={professionalSkills}
                    character={character} 
                />
                <CharacterStat
                    groupTitle='Mental'
                    groupName='mentalSkills'
                    traits={mentalSkills}
                    character={character} 
                />   
            </div>
            <div>
                <StatModal 
                    groupTitle={"Backgrounds"} 
                    groupName={"backgrounds"}
                    traits={backgrounds}
                    character={character}
                />
                <StatModal 
                    groupTitle={"Talismans"} 
                    groupName={"talismans"}
                    traits={talismans}
                    character={character}
                />
                <StatModal 
                    groupTitle={"Spell Book"} 
                    groupName={"spellbook"}
                    traits={spellbook}
                    character={character}
                />
                <StatModal 
                    groupTitle={"Powers"} 
                    groupName={"powers"}
                    traits={powers}
                    character={character}
                />
                <StatModal 
                    groupTitle={"Inventory"} 
                    groupName={"equipmentItems"}
                    traits={equipmentItems}
                    character={character}
                />
            </div>           
        </div>
    )
}