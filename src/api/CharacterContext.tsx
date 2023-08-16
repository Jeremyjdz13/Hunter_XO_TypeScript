import React, { useState, useEffect, useContext, ReactNode } from 'react'
import { useAuth } from './AuthContext'
import { v4 as uuidv4 } from 'uuid'
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import { app } from '../config/firebase'
import { characterTemplate } from '../components/characters/CharacterTemplate'
import { CharacterContextProps, Character  } from './types/CharacterTypes'

const CharacterContext = React.createContext<CharacterContextProps | undefined>(undefined)

export function useCharacter(): CharacterContextProps | undefined{
    return useContext(CharacterContext)
}

export function CharacterProvider({ children }: { children: ReactNode}) {
    const { currentUser, loading: loadingUser } = useAuth()
    const [characters, setCharacters] = useState<Character[] | undefined>()
    const [selectedCharacterId, setSelectedCharacterId] = useState<string | undefined>()
    const [loading, setLoading] = useState(true)
    const db = getFirestore(app)
    const showCharacter = characters?.find(character => character.id === selectedCharacterId)

   
    useEffect(() => {
        if(loadingUser){
            return; // still initializing, do nothing.
        }

        if(!currentUser){
            //no user signed in!
            setCharacters(undefined);
            setLoading(false)
            return;
        }
        // user is logged in.

        const charactersRef = collection(db, 'users', currentUser.uid, 'characters')
        // const createCharacters = collection(db, 'user', currentUser.uid)

        getDocs(charactersRef)
            .then((querySnapshot) => {
                const charactersData = querySnapshot.docs.map((doc) => doc.data() as Character);
                if(charactersData.length === 0){
                    console.log(charactersData, "not found")
                setDoc(doc(charactersRef), characterTemplate)
                    .catch((error) => 
                        console.log('Failed to initialize default characters', error)
                    )
                } else {
                    setCharacters(charactersData) 
                }
                setLoading(false);        
            })
            .catch((error) => {
                console.error('Error retrieving characters:', error);
                setLoading(false);
            })

        
    }, [currentUser, loadingUser]);

    function handleCharacterSelect(id:string){
        setSelectedCharacterId(id)
        // setSelectedCharacterIdEdit(undefined)
    }

    const characterContextValue: CharacterContextProps = {
        characters,
        loading,
        showCharacter,
        handleCharacterSelect
    }

    return (
        <CharacterContext.Provider value={characterContextValue}>
            {children}             
        </CharacterContext.Provider>
    )
}