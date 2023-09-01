import React, { useRef } from 'react'
import { CharacterCardProps, IdNameRankData, Character } from '../../api/types/CharacterTypes'
import { useCharacter } from '../../api/CharacterContext'
import CharacterStat from './CharacterStat'
import StatLists from './StatLists'
import StatModal from './modals/StatModal'
import { characterStyles } from './styles/CharacterStyles'
import { NPCDisplay } from '../npc/NPCDisplay'
import Initiative from './initiative/Initiative'
import Title from './Title'
import ClickableTitle from './ClickableTitle'
import Counters from './Counters'
import { Chat } from '../chat/Chat'
import { Villains } from '../villian/Villains'
import { initiativeStyles } from './styles/InitiativeStyles'


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
    const spellbook = character.spellbook
    const bashingCounter = character.bashingCounter
    const lethalCounter = character.lethalCounter
    const equipmentItems = character.equipmentItems
   

    return (
        <div style={characterStyles.container}>
            <div key={id} style={characterStyles.box1}>
                <div> 
                    <Title storedTitle='Name'/>
                    <ClickableTitle
                        id={id} 
                        name={name}
                        groupName='characterName'
                        character={character}
                    />
                    <Title storedTitle='Alias'/>
                    <ClickableTitle
                        id={id} 
                        name={alias}
                        groupName='characterAlias'
                        character={character}
                        />
        
                    <Title storedTitle='Nature'/>
                    <ClickableTitle
                        id={id} 
                        name={nature}
                        groupName='characterNature'
                        character={character}
                    />
                </div>
                <Chat />
                <NPCDisplay />
                <Villains />
            </div>
            <div style={characterStyles.box3}>
                <Initiative 
                    intuition={primaryAttributes[4]}
                    mentalSkills={mentalSkills} 
                />
                <div style={initiativeStyles.container}>
                    <Counters
                        traits={bashingCounter}
                        groupName='bashingCounter'
                        groupTitle='Bashing'
                        character={character}
                    />
                </div>
                <div style={initiativeStyles.container}>
                    <Counters
                        traits={lethalCounter}
                        groupName='lethalCounter'
                        groupTitle='Lethal'
                        character={character}
                    />
                </div>
                <div style={initiativeStyles.container}>
                    
                   <h2>Experience</h2>

                </div>
            </div>
            <div style={{...characterStyles.box2, ...characterStyles.orangeBottomBorder}}>
                <CharacterStat 
                    groupTitle='Primary'
                    groupName='primaryAttributes'
                    traits={primaryAttributes}
                    character={character}
                />
                <CharacterStat 
                    groupTitle='Secondary'
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
            <div style={characterStyles.box3}>
                <StatModal 
                    groupTitle={"Backgrounds"} 
                    groupName={"backgrounds"}
                    traits={backgrounds}
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