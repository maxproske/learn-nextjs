import React from 'react'
import Link  from 'next/link'

const Page = () => {
    return (
        <div>
        <h1>Hello, world!</h1>
        <Link href="/notes">
            <a>Notes</a>
        </Link>
        </div>
    )
}

export default Page