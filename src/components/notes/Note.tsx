import { useNote } from "./NoteLayout"
import { Note } from "../../pages/playerPages/Notes"
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"

type NoteProps = {
    onDelete: (id: string) => void
}

export default function Note({ onDelete }: NoteProps) {
    const note = useNote()
   

   return (
    <div>
        <h1>{note.title}</h1>
        <Link to={`/player/notes/${note.id}/edit`}>
            <button>Edit</button>
        </Link>
        <Link to="/player/notes">
            <button
                onClick={() => onDelete(note.id)} 
            >Delete</button>
        </Link>
        <Link to="/player/notes">
            <button>Back</button>
        </Link>

        <div>
            {note.tags?.map(tag => {
                return <span>{tag.label}</span>
                }
            )}
        </div>
        <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </div>
   )
}

