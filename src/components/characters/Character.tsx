import React, { useRef } from 'react'
import { CharacterCardProps, StatData, Character } from './CharacterTypes'
import { useCharacter } from '../../api/CharacterContext'
import Stat from './components/Stat/Stat'
import StatModal from './modals/StatModal'
import { characterStyles } from './styles/CharacterStyles'
import { NPCDisplay } from '../npc/NPCDisplay'
import Initiative from './initiative/Initiative'
import Title from './components/Stat/Title'
import ClickableLabel from './components/Stat/ClickableLabel'
import { Chat } from '../chat/Chat'
import { Villains } from '../villian/Villains'
import { initiativeStyles } from './styles/InitiativeStyles'
import Health from './counters/Health'
import Label from './components/Stat/Label'


export default function Character({ character } : CharacterCardProps){
  
    const characterId = character.id
    const name = character.name
    const alias = character.alias
    const nature = character.nature
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
    const intuition = character.intuition
    const strength = character.strength
    const endurance = character.endurance
    const agility = character.agility
    const psyche = character.psyche
    const reason = character.reason
    const fight = character.fight
    const talismans = character.talismans
   

    return (
        <div key={characterId} style={characterStyles.container}>
            <div style={characterStyles.box1}>
                <div> 
                    <Title storedTitle='Name'/>
                    <ClickableLabel
                        id={characterId} 
                        name={name}
                        groupName='characterName'
                    />
                    <Title storedTitle='Alias'/>
                    <ClickableLabel
                        id={characterId} 
                        name={alias}
                        groupName='characterAlias'
                        />
        
                    <Title storedTitle='Nature'/>
                    <ClickableLabel
                        id={characterId} 
                        name={nature}
                        groupName='characterNature'
                    />
                </div>
                <Chat />
                <NPCDisplay />
                <Villains />
            </div>
            <div style={characterStyles.box3}>
                <Initiative 
                    intuition={intuition}
                    mental={mental}
                />
                <div style={initiativeStyles.container}>
                    <Health
                        stat={bashing}
                        groupName='bashingCounter'
                        groupTitle='Bashing'
                    />
                </div>
                <div style={initiativeStyles.container}>
                    <Health
                        stat={lethal}
                        groupName='lethalCounter'
                        groupTitle='Lethal'
                    />
                </div>
                <div style={initiativeStyles.container}> 
                    <Title storedTitle='Fate Ledger'/>
                    <Stat 
                        groupTitle=''
                        groupName='experience'
                        stat={experience}
                    />
                    <Stat 
                        groupTitle=''
                        groupName='karma'
                        stat={karma}
                    />
                </div>
            </div>
            <div style={characterStyles.row}>
                <Stat 
                    groupTitle=''
                    groupName='fight'
                    stat={fight}
                />
                <Stat 
                    groupTitle=''
                    groupName='strength'
                    stat={strength}
                /> 
                <Stat 
                    groupTitle=''
                    groupName='agility'
                    stat={agility}
                />
                <Stat 
                    groupTitle=''
                    groupName='endurance'
                    stat={endurance}
                />

                <Stat 
                    groupTitle=''
                    groupName='reason'
                    stat={reason}
                />
                <Stat 
                    groupTitle=''
                    groupName='intuition'
                    stat={intuition}
                />
                <Stat 
                    groupTitle=''
                    groupName='psyche'
                    stat={psyche}
                />
                
            </div>
            <div style={{...characterStyles.box2, ...characterStyles.orangeBottomBorder}}>
                <StatModal 
                    groupTitle={"Spell Book"} 
                    groupName={"spellbook"}
                    stat={spellbook}
                />
                <StatModal 
                    groupTitle={"Powers"} 
                    groupName={"powers"}
                    stat={powers}
                />
                 <StatModal 
                    groupTitle={"Backgrounds"} 
                    groupName={"backgrounds"}
                    stat={backgrounds}
                />
                <StatModal 
                    groupTitle={"Inventory"} 
                    groupName={"inventory"}
                    stat={inventory}
                />
                <StatModal 
                    groupTitle='Merits'
                    groupName='merits'
                    stat={merits}
                />
                <StatModal
                    groupTitle='Flaws'
                    groupName='flaws'
                    stat={flaws}
                />
                <StatModal
                    groupTitle='Talismans'
                    groupName='talismans'
                    stat={talismans}
                />
                
            </div>
            <div style={characterStyles.box3}>
                <Stat
                    groupTitle='Combat'
                    groupName='combat'
                    stat={combat}
                />
                <Stat
                    groupTitle='Physical'
                    groupName='physical'
                    stat={physical}
                />
                <Stat
                    groupTitle='Professional'
                    groupName='professional'
                    stat={professional}
                />
                <Stat
                    groupTitle='Mental'
                    groupName='mental'
                    stat={mental}
                />   
            </div>      
        </div>
    )
}