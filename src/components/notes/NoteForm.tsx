export default function NoteForm() {
    return (
        <>
            <form>
                <h1>Form</h1>
                <div>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" />
                    </div>
                    <div>
                        <label htmlFor="title">Tags</label>
                        <select isMulti id="tags" name="tags">
                            <option value="none">None</option>
                            <option value="character">Character</option>
                            <option value="location">Location</option>
                            <option value="item">Item</option>
                            <option value="story">Story</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="body">Body</label>
                    <textarea name="body" id="body" />
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button">Cancel</button>
                </div>
            </form>
        </>
    )
}