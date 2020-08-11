import React from 'react'
import { useRouter } from 'next/router'

const Page = () => {
    const router = useRouter()

    const { id } = router.query
    const [a,b,c] = id

    console.log(router.query)

    return (
    <h1>Note {b}</h1>
    )
}

export default Page