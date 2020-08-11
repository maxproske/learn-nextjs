import React from 'react'
import Link from 'next/link'

const Notes = () => {
    const notes = new Array(15).fill().map((e, i) => ({
        id: i, 
        title: `Note: ${i}`
    }))

    return (
        <div>
        <h1>Notes index path</h1>

        <div>
            {notes.map(note => {
            return (<div><Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
            {note.title}
            </a>
            </Link></div>)
            })}
        </div>

        </div>

    )
}

export default Notes