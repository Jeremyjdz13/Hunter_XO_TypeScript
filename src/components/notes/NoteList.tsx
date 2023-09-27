import { Link, useNavigate } from "react-router-dom";
import { Note, Tag } from "../../pages/playerPages/Notes";
import ReactSelect from "react-select";
import { useMemo, useState } from "react";
import { noteStyles } from "./styles/noteStyles";
import styles from "./styles/notes.module.css"
import EditTagsModal from "./modal/EditTagsModal";

type SimplifiedNote = {
    id: string
    title: string
    tags: Tag[]
}

type NoteListProps = {
  availableTags: Tag[];
  notes: Note[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
}

export default function NoteList({ 
    notes, 
    availableTags,
    onDeleteTag,
    onUpdateTag
}: NoteListProps) {
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])
    const [title, setTitle] = useState<string>("")
    const filteredNotes = useMemo(() => {
        return notes.filter(note => {
            return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) &&
            (selectedTags.length === 0 || 
                selectedTags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id)
            ))
        })
    }, [title, selectedTags, notes]) 

    return (
        <div>
            <h1>Notes</h1>
            <Link to="/player/notes/new"><button>Create</button></Link>
            <EditTagsModal 
                availableTags={availableTags}
                onUpdateTag={onUpdateTag}
                onDeleteTag={onDeleteTag}
            />
            <div>
                <form>
                    <label>Title</label>
                    <input 
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label>Tags</label>
                    <ReactSelect 
                            isMulti 
                            id="tags" 
                            name="tags" 
                            value={
                                selectedTags.map(tag => {
                                    return {label: tag.label, value: tag.id}
                                })
                            }
                            onChange={tags => {
                                setSelectedTags(tags.map(tag => {
                                    return { label: tag.label, id: tag.value }
                                }))
                            }}
                            options={
                                availableTags.map(tag => {
                                    return { label: tag.label, value: tag.id }
                                })
                            }
                        />
                </form>
            </div>
            <div style={noteStyles.noteCardContainer}>
                {filteredNotes.map(note => (
                            <div key={note.id}>
                                <NoteCard
                                    id={note.id}
                                    title={note.title}
                                    tags={note.tags}
                                 />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

function NoteCard({ id, title, tags }: SimplifiedNote) {



    return (
        <Link 
            to={`/player/notes/${id}`} 
        >
            <div 
                style={noteStyles.noteCard}
                // onClick={handleShowNote}
                className={`${styles.card}`}
            >
                <h2>{title}</h2>
                {tags.map(tag => (
                    <span key={tag.id}>{tag.label}</span>
                ))}
            </div>
        </Link> 
    )
}