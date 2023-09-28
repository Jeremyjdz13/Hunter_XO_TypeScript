import React, { useState, useEffect, useContext, ReactNode, useMemo } from 'react'
import { useAuth } from './AuthContext'
import { collection, doc, getDocs, getFirestore, onSnapshot, setDoc, updateDoc } from 'firebase/firestore'
import { app } from '../config/firebase'
import { RawNote, RawNoteData, Tag } from '../pages/playerPages/Notes'
import { v4 as uuidv4 } from "uuid";
import { query } from 'firebase/database'


type NoteContextProps = {
    notes: RawNote[]
    tags: Tag[]
    selectedNote: RawNote | undefined
    createNote: (note: RawNoteData) => void
    updateNote: (id: string, note: RawNoteData) => void
    selectNote: (id: string) => void
    deleteNote: (id: string) => void
}

const NoteContext = React.createContext<NoteContextProps | undefined>(undefined)

export function useNote(): NoteContextProps | undefined {
    return useContext(NoteContext)
}

export function NoteProvider({ children }: { children: ReactNode}) {
    const db = getFirestore(app)
    const { currentUser, loading: loadingUser } = useAuth()
    const [notes, setNotes] = useState<RawNote[]>([])
    const [tags, setTags] = useState<Tag[]>([])
    const [loading, setLoading] = useState(true)
    const notesRef = collection(db, 'users', currentUser.uid, 'notes');
    const tagsRef = collection(db, 'users', currentUser.uid, 'tags');
    const noteObject =  { id: uuidv4(), markdown: "Write here", tagIds: [], title: "Title Here" }
   
    // const noteCollectionRef = useMemo(() => collection(db, 'users', currentUser?.uid, 'notes'), [db, currentUser?.uid]);
    // const noteRef 
   async function getNotes() {
        const querySnapshot = await getDocs(notesRef);
        if(querySnapshot.empty) {
            console.log("No matching documents")
            setDoc(doc(notesRef, noteObject.id), noteObject)
                .then(() => {   
                    console.log("Document successfully written!");  
                })
                .catch((error) => { 
                    console.error("Error writing document: ", error);
                });
        }

        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            const data = doc.data()
        }
        );
        // console.log(querySnapshot, "Query Snapshot")
    }


    useEffect(() => {
        if(loadingUser) {
            return;
        }

        if(!currentUser) {
            setNotes([])
            setTags([])
            setLoading(false)
            return
        }

        getNotes()
        console.log(getNotes(),"Get Notes")

        return
    },[currentUser, loadingUser])


    // querySnapshot.forEach((doc) => {
    //     console.log(doc.id, " => ", doc.data());
    // });
    // useEffect(() => {


    //     const unsubscribe = onSnapshot(noteCollectionRef, (querySnapshot) => {
    //       const updatedNotes = [];
    //       querySnapshot.forEach((doc) => {
    //         if (doc.exists()) {
    //           const data = doc.data();
    //           updatedNotes.push(data);
    //           console.log(data, "Data");
    //         } else {
    //           console.log("Document deleted");
    //         }
    //       });
      
    //       // Merge the updatedNotes with the existing notes
    //       setNotes((prevNotes) => [...prevNotes, ...updatedNotes]);
    //     });
      
    //     return () => unsubscribe();
    //   }, []);
      
      

    // useEffect(() => {
    //     if (loadingUser) {
    //         return; // still initializing, do nothing.
    //     }
    
    //     if (!currentUser) {
    //         // no user signed in!
    //         setNotes([]);
    //         setTags([]);
    //         setLoading(false);
    //         return;
    //     }
    
    //     // user is logged in
    
    //     // Helper function to initialize default notes or tags
    //     const initializeDefaultData = (
    //         ref: string,
    //         setData: string[],
    //         defaultData: string[]
    //     ) => {
    //         getDocs(ref as any)
    //             .then((querySnapshot) => {
    //                 const data = querySnapshot.docs.map((doc) => doc.data());
    //                 if (data.length === 0) {
    //                     // Create a new document with default data
    //                     setDoc(doc(ref, uuidv4()), defaultData)
    //                         .then(() => {
    //                             console.log("Document successfully written!");
    //                         })
    //                         .catch((error) => {
    //                             console.log('Failed to initialize data', error);
    //                         });
    //                 } else {
    //                 }
    //                 setLoading(false);
    //             })
    //             .catch((error) => {
    //                 console.error('Error retrieving data:', error);
    //                 setLoading(false);
    //             });
    //     };
    
    //     initializeDefaultData(notesRef, setNotes, 
    //         { id: uuidv4(), markdown: "Write here", tagIds: [], title: "Title Here" }
    //     );
    
    //     initializeDefaultData(tagsRef, setTags, 
    //         { id: uuidv4(), label: "NiceTag" }
    //     );
    
    // }, [currentUser,loadingUser]);
    
    const notesWithTags = useMemo(() => {
        return notes?.map(note => {
            const noteTags = note.tagIds || []
            return {
                ...note,
                tags: tags.filter(tag => noteTags.includes(tag.id))
            }
        }
        )
    }
    , [notes, tags])


    async function onUpdateNote(id: string, { tags, ...data }: NoteData) {
    

        // Create a reference to the specific document in Firestore
        const collectionRef = collection(db, 'users', currentUser.uid, 'notes')
        const querySnapshot = await getDocs(collectionRef)
        
        let noteCollectionDocId = ''
        querySnapshot.forEach((doc) => {
            if(doc.data().id === id){
                noteCollectionDocId = doc.id
            }
        })

        console.log(noteCollectionDocId, "Collection Doc ID")

        const docRef = doc(db, 'users', currentUser.uid, 'notes', noteCollectionDocId );

        
        // Use updateDoc to update the Firestore document with the new note data
       await setDoc(docRef, {
            // Update the 'tags' field with the new 'tags' array
            tags: tags.map((tag) => tag.id),
            // Update other fields from the 'data' object
            ...data,
        })
            .then(() => {
                console.log('Document successfully updated!');
            })
            .catch((error) => {
                console.error('Error updating document:', error);
            });
    
        // Update the local state with the newNotes array
    }

    function onCreateNote ({ tags, ...data }: NoteData) {
        setNotes(prevNotes => {
            return [
                ...prevNotes, 
                { ...data, id: uuidv4(), tagIds: tags.map(tag => tag.id)}
            ]
        })
    }

    function addTag(tag: Tag) {
        setTags(prevTags => [...prevTags, tag])
    }

    function onDeleteNote (id: string) {
        setNotes(prevNotes => {
            return prevNotes.filter(note => note.id !== id)
        })
    }

    function onUpdateTag(id: string, label: string) {
        setTags(prevTags => {
            return prevTags.map(tag => {
                if(tag.id === id) {
                    return { ...tag, label }
                } else {
                    return tag
                }
               
            })
        })
    }

    function onDeleteTag(id: string) {
        setTags(prevTags => {
            return prevTags.filter(tag => tag.id !== id)
        }
        )
    }
    const noteContextValue: NoteContextProps = {
        notes,
        tags,
        onUpdateNote,
        onCreateNote,
        onDeleteNote,
        onUpdateTag,
        onDeleteTag,
        addTag,
        notesWithTags
    }

    return (
        <NoteContext.Provider value={noteContextValue}>
            {children}
        </NoteContext.Provider>
    )
}


 