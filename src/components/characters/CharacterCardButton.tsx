import React from 'react'
import { useCharacter } from '../../api/CharacterContext'
import { characterStyles } from './styles/CharacterStyles'
import { characterButtonStyles } from './styles/CharacterButtonStyles'
import { CharacterButtonProps, CharacterContextProps } from '../../api/types/CharacterTypes'

export default function CharacterCardButton({ character }: CharacterButtonProps){
    const id = character.id
    const name = character.name
    const alias = character.alias
    const image = character.imageUrl
    const { 
        handleCharacterSelect 
     } = useCharacter() as CharacterContextProps

    function handleClick(){
        handleCharacterSelect(id)
        console.log(id, "Selected character")
    }
    return(
        <div 
            onClick={() => handleClick()}
            style={characterButtonStyles.CharacterButtonContainer}
        >
            <div style={characterStyles.row}>
                <div>
                    <img src={image} style={characterButtonStyles.characterButtonImage}/>
                </div>
                <div className='character_name_alias_nature_button-container'>
                    <div className="character_card_title-button">{name}</div>
                    <div className="cRow">
                        <div className="character-card-title_nature">Alias: </div>
                        <div className="character-card-nature">{alias}</div>
                    </div>
                </div>
            </div> 
        </div>
    )
} 