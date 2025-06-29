const Note = ({ note }) => {
    // console.log('Note component rendered with note:', note.id)
    return <li>{note.content}</li>
}

export default Note