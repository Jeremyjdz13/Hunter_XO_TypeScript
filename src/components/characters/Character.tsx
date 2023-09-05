import React, { useRef } from 'react'
import { CharacterCardProps, IdNameRankData, Character } from './CharacterTypes'
import { useCharacter } from '../../api/CharacterContext'
import CharacterStat from './components/CharacterStat'
import StatModal from './modals/StatModal'
import { characterStyles } from './styles/CharacterStyles'
import { NPCDisplay } from '../npc/NPCDisplay'
import Initiative from './initiative/Initiative'
import Title from './components/Title'
import ClickableTitle from './components/ClickableLabel'
import { Chat } from '../chat/Chat'
import { Villains } from '../villian/Villains'
import { initiativeStyles } from './styles/InitiativeStyles'
import Health from './counters/Health'
import Label from './components/Label'


export default function Character({ character } : CharacterCardProps){
  
    const id = character.id
    const name = character.name
    const alias = character.alias
    const nature = character.nature
    const coreAbilities = character.coreAbilities
    const combat = character.combat
    const physical = character.physical
    const professional = character.professional
    const mental = character.mental
    const backgrounds = character.backgrounds
    const merits = character.merits
    const flaws = character.flaws
    const powers = character.powers
    const spellbook = character.spellbook
    const bashing = character.bashing
    const lethal = character.lethal
    const inventory = character.inventory
    const experience = character.experience
    const karma = character.karma
   

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
                    intuition={coreAbilities[4]}
                    mental={mental} 
                />
                <div style={initiativeStyles.container}>
                    <Health
                        traits={bashing}
                        groupName='bashingCounter'
                        groupTitle='Bashing'
                        character={character}
                    />
                </div>
                <div style={initiativeStyles.container}>
                    <Health
                        traits={lethal}
                        groupName='lethalCounter'
                        groupTitle='Lethal'
                        character={character}
                    />
                </div>
                <div style={initiativeStyles.container}> 
                    <Title storedTitle='Fate Ledger'/>
                    <CharacterStat 
                        groupTitle=''
                        groupName='experience'
                        traits={experience}
                        character={character}
                    />
                    <CharacterStat 
                        groupTitle=''
                        groupName='karma'
                        traits={karma}
                        character={character}
                    />
                </div>
            </div>
            <div style={{...characterStyles.box2, ...characterStyles.orangeBottomBorder}}>
                <CharacterStat 
                    groupTitle='Core Abilities'
                    groupName='coreAbilities'
                    traits={coreAbilities}
                    character={character}
                />
                <div>
                    <Title storedTitle='Rolls' />
                </div>
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
                
            </div>
            <div style={characterStyles.box3}>
                <CharacterStat
                    groupTitle='Combat'
                    groupName='combat'
                    traits={combat}
                    character={character} 
                />
                <CharacterStat
                    groupTitle='Physical'
                    groupName='physical'
                    traits={physical}
                    character={character} 
                />
                <CharacterStat
                    groupTitle='Professional'
                    groupName='professional'
                    traits={professional}
                    character={character} 
                />
                <CharacterStat
                    groupTitle='Mental'
                    groupName='mental'
                    traits={mental}
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
                    groupTitle={"Inventory"} 
                    groupName={"inventory"}
                    traits={inventory}
                    character={character}
                />
                <StatModal 
                    groupTitle='Merits'
                    groupName='merits'
                    traits={merits}
                    character={character}
                />
                <StatModal
                    groupTitle='Flaws'
                    groupName='flaws'
                    traits={flaws}
                    character={character} 
                />
            </div>           
        </div>
    )
}