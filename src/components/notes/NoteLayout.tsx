import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";
import { Note } from "../../pages/playerPages/Notes";

type NoteLayoutProps = {
    notes: Note[]
}

export default function NoteLayout({ notes }: NoteLayoutProps) {
    const { id } = useParams()

    const note = notes.find(note => note.id === id)

    if( note == null) return <Navigate to="/player/notes" replace />

    return <Outlet context={ note } />
}

export function useNote() {
    return useOutletContext<Note>()
}