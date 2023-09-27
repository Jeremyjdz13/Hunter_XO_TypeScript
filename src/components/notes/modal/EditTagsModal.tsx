import { useRef } from "react"
import { Tag } from "../../../pages/playerPages/Notes"

type EditTagsModalProps = {
    availableTags: Tag[]
    onDeleteTag: (id: string) => void;
    onUpdateTag: (id: string, label: string) => void;
}
export default function EditTagsModal({ 
    availableTags,
    onUpdateTag,
    onDeleteTag
} : EditTagsModalProps) {
    const modalRef = useRef(null)

    function handleOpenModal() {
        (modalRef.current! as HTMLDialogElement).showModal()
    }

    function handleCloseModal() {
        (modalRef.current! as HTMLDialogElement).close()
    }
    
    return (
        <div>
             <button
                onClick={handleOpenModal}
                >
                Edit Tags
            </button>
            <dialog ref={modalRef}>
                <button onClick={handleCloseModal}>
                    Close
                </button>
                
                <div>
                    <h2>Edit Tags</h2>
                </div>
                <form>
                    {availableTags.map(tag => { 
                            return (
                                <div key={tag.id}>
                                    <input 
                                        type="text" 
                                        id={tag.id} 
                                        value={tag.label}
                                        onChange={e => onUpdateTag(tag.id, e.target.value)}
                                    />
                                    <button
                                        onClick={() => onDeleteTag(tag.id)}
                                    >&times;</button>
                                </div>
                            )
                        })
                    }
                </form>
            </dialog>
        </div>
    )
}