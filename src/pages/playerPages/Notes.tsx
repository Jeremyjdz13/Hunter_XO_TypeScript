import { useNote } from "../../api/NoteContext";
import NewNote from "../../components/notes/NewNotes";
import useLocalStorage from "../../components/notes/useLocalStorage";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import NoteList from "../../components/notes/NoteList";
import NoteLayout from "../../components/notes/NoteLayout";
import Note from "../../components/notes/Note";
import EditNote from "../../components/notes/EditNote";

export type Note = {
    id: string
} & NoteData

export type RawNote = {
    id: string
} & RawNoteData

export type RawNoteData = {
    title: string
    markdown: string
    tagIds: string[]
}
export type NoteData = {
    title: string
    markdown: string
    tags: Tag[]
}

export type Tag = {
    id: string
    label: string
}

export function Notes() {
    const { 
        tags, 
        onUpdateNote, 
        onCreateNote, 
        onDeleteNote, 
        onUpdateTag, 
        addTag, 
        onDeleteTag,
        notesWithTags 
    } = useNote()
    // const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
    // const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])

   
    return (
        <>
            <Routes>
                <Route index element={<NoteList
                            notes={notesWithTags} 
                            availableTags={tags}
                            onUpdateTag={onUpdateTag}
                            onDeleteTag={onDeleteTag}
                        />
                    } 
                />
                <Route path="new" element={
                        <NewNote 
                            onSubmit={onCreateNote} 
                            onAddTag={addTag}
                            availableTags={tags}
                        />} 
                    />
                <Route path=":id" element={<NoteLayout notes={
                        notesWithTags
                    }/>
                }>
                    <Route index element={<Note  onDelete={onDeleteNote}/>} />
                    <Route path="edit" element={
                            <EditNote
                                onSubmit={onUpdateNote}
                                onAddTag={addTag}
                                availableTags={tags}
                            />
                        }/>
                   
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            
        </>
    )
}


