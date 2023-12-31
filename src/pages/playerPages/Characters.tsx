// import React from 'react'
import { useCharacter } from '../../api/CharacterContext'
import CharacterCard from '../../components/characters/Character'
// import CharacterCardEdit from '../../ProfileContainer/CharacterEdit/CharacterCardEdit'
import CharacterCardButton from '../../components/characters/components/CharacterCardButton'
import { characterStyles } from '../../components/characters/styles/CharacterStyles'
import { CharacterContextProps } from '../../api/types/CharacterTypes'

export function Characters(){
     
    const { 
        // handleCharacterAdd,  
        characters, 
        selectedCharacter, 
        // selectedCharacterEdit, 
        loading 
    } = useCharacter() as CharacterContextProps
    return (
        <div>
            <div style={characterStyles.row}>
                <div style={characterStyles.row}> 
                    {
                    (!loading && characters) ? 
                        characters?.map(character => {
                            return (
                                <CharacterCardButton key={character.id}  character={character}/>    
                            )
                        }) : 
                        null
                    } 
                    
                </div>
                <div>
                    <button 
                        // onClick={handleCharacterAdd} 
                        className="add_button-main" 
                    >
                        Add Character
                    </button>
                </div>
            </div>
            {selectedCharacter && <CharacterCard character={selectedCharacter}/>}
            {/* {selectedCharacterEdit && <CharacterCardEdit character={selectedCharacterEdit} />} */}
        </div>
    )
}
