import { FormEvent, useRef, useState } from "react"
import { NoteData, Tag } from "../../pages/playerPages/Notes"
import { v4 as uuidv4 } from "uuid";
import CreateReactSelect from "react-select/creatable"
import { Link, useNavigate } from "react-router-dom";


type NoteFormProps = {
    onSubmit: (note: NoteData) => void
    onAddTag: (tag: Tag) => void
    availableTags: Tag[]
} & Partial<NoteData>

export default function NoteForm({ 
    onSubmit, 
    onAddTag, 
    availableTags, 
    title = "",
    markdown = "",
    tags = []
}: NoteFormProps) {
    const navigate = useNavigate()
    const titleRef = useRef<HTMLInputElement>(null)
    const markdownRef = useRef<HTMLTextAreaElement>(null)
    const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)


    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: selectedTags
        })

        navigate("/player/notes")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input required type="text" name="title" id="title" ref={titleRef}  defaultValue={title}/>
                    </div>
                    <div>
                        <label htmlFor="title">Tags</label>
                        <CreateReactSelect 
                            isMulti 
                            id="tags" 
                            name="tags" 
                            onCreateOption={label=> {
                                const newTag: Tag = { id: uuidv4(), label }
                                onAddTag(newTag)
                                setSelectedTags(prevTags => [...prevTags, newTag])
                                }
                            }
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
                    </div>
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea 
                        required 
                        as="textarea" 
                        name="body" 
                        id="body" 
                        ref={markdownRef} 
                        rows={"20"} 
                        cols={"100"}
                        defaultValue={markdown} 
                        />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <Link to="/player/notes"><button>Cancel</button></Link>
                </div>
            </form>
        </>
    )
}