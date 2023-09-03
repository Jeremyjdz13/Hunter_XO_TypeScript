// import React from 'react'
import { useCharacter } from '../../api/CharacterContext'
import CharacterCard from '../../components/characters/Character'
// import CharacterCardEdit from '../../ProfileContainer/CharacterEdit/CharacterCardEdit'
import CharacterCardButton from '../../components/characters/components/CharacterCardButton'
import { characterStyles } from '../../components/characters/styles/CharacterStyles'
import { CharacterContextProps } from '../../components/characters/CharacterTypes'

export function Characters(){
     
    const { 
        // handleCharacterAdd,  
        characters, 
        showCharacter, 
        // selectedCharacterEdit, 
        loading 
    } = useCharacter() as CharacterContextProps

    return (
        <div>
            <div style={characterStyles.row}>
                <div style={characterStyles.row}> 
                    {
                    !loading 
                    && 
                    characters?.map(character => {
                            return (
                                <CharacterCardButton key={character.id}  character={character}/>    
                            )
                        })
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
            {showCharacter && <CharacterCard character={showCharacter}/>}
            {/* {selectedCharacterEdit && <CharacterCardEdit character={selectedCharacterEdit} />} */}
        </div>
    )
}
