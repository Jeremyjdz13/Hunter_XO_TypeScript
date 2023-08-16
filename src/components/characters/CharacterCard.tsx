import React, { useRef } from 'react'
import { CharacterCardProps, IdNameRankData, Character } from '../../api/types/CharacterTypes'
import { useCharacter } from '../../api/CharacterContext'
import CharacterStat from './CharacterStat'
// import EditModal from '../Modal/EditModal'
// import { useEdit } from '../../../contexts/EditContext'
import StatLists from './StatLists'
import StatModal from './modals/StatModal'
import { characterStyles } from './styles/CharacterStyles'
import { NPCDisplay } from './NPCDisplay'
import Initiative from './initiative/Initiative'


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
    const protoniumAttribute = character.secondaryAttributes[5]
    const spentProtonium = protoniumCounter[0]
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


     // const {handleCharacterSelectIdEdit, showDice, handleSetShowDice} = useCharacter()
    // const { showModal } = useEdit()

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
    
    function handleProtoniumGeneratorElement(searchProtoniumGenerator: IdNameRankData[]): JSX.Element {
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

    function createStatListsElements(
        traits: IdNameRankData[], 
        groupName: string, 
        character: Character
        ) {
        return traits.map(trait => (
            <StatLists key={trait.id} {...trait} groupName={groupName} character={character} />
        ))
    }

    const bashingElement = createStatListsElements(bashingCounter, 'bashingCounter', character);
    const lethalElement = createStatListsElements(lethalCounter, 'lethalCounter', character);
    const protoniumElement = createStatListsElements(protoniumCounter, 'protoniumCounter', character);
   
    
    function handleBashingCount(bashingCounter: IdNameRankData[]): JSX.Element {
        const counts: number[] = bashingCounter.map(b => b.rank)
        const count = Math.min(Math.max(...counts), 10)
        if(count >= 4 && count <= 5){
            return <span>Slap fighting! -1</span>
        } else if(count >= 6 && count <= 8){
            return <span>No BITING! -3</span>
        } else if(count === 9){
            return <span>A.chil.les Heel! -5 </span>
        }else if(count === 10){
            return <span>Hello Darkness my old friend!</span>
        }
        else {
            return <span>No Penalty</span>
        }
    }

    function handleLethalCount(lethalCounter: IdNameRankData[]): JSX.Element {
        const counts: number[] = lethalCounter.map(l => l.rank)
        const count = Math.min(Math.max(...counts), 10)
        if(count >= 3 && count <=4){
            return <span>That really hurt! -1</span>
        } else if(count >= 5 && count <= 6){
            return <span>Is that blood?! -2</span>
        } else if(count >= 7 && count <=8){
            return <span>I ain't got time to bleed! -4</span>
        }else if(count === 9){
            return <span>To die or not to die? -6</span>
        }else if(count === 10){
            return <span>Let's weigh your sins!</span>
        }else {
            return <span>No Penalty</span>
        }
    }

    return (
        <div style={characterStyles.container}>
            <div key={id} style={characterStyles.box1}>
                <div>
                    <div style={characterStyles.blackBorder}>
                        <div style={characterStyles.titles}>Name</div>
                        {name}
                    </div>
                    <div style={characterStyles.blackBorder}>
                        <div style={characterStyles.titles}>Alias</div>
                        {alias}
                    </div>
                    <div style={characterStyles.blackBorder}>
                        <div style={characterStyles.titles}>Nature</div>
                        {nature}
                    </div>
                </div>
                <div style={characterStyles.blackBorder}>
                    <Initiative 
                        intuition={primaryAttributes[4]}
                        mentalSkills={mentalSkills} 
                    />
                </div>
                <div style={characterStyles.blackBorder}>
                    {bashingElement}
                    {handleBashingCount(bashingCounter)}
                </div>
                <div style={characterStyles.blackBorder}>
                    {lethalElement}
                    {handleLethalCount(lethalCounter)}
                </div>
                <div style={characterStyles.blackBorder}>
                    <div>
                        <div>
                            <div style={characterStyles.titles}>Max Protonium</div>
                            <div>{protoniumAttribute.rank}</div>
                        </div>
                        {protoniumElement}
                        {handleProtoniumGeneratorElement(searchProtoniumGenerator)}
                    </div>
                    <div>
                        <div style={characterStyles.titles}>Unused</div>
                        {handleSpentProtonium()}
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
            // {showModal && <EditModal character={character} />}
            // <div className='success_roller_mWeb-container'>
            //      {showDice && <SuccessRoller 
            //                 primaryAttributes={primaryAttributes} 
            //                 mentalSkills={mentalSkills}
            //                 powers={powers}
            //                 talismans={talismans}

            //             />
            //     }
            // </div> 
           
    )
}