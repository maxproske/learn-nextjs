import React from 'react'
import Link from 'next/link'

export default ({ content }) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <h2>{content.subtitle}</h2>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'Look at my note app tho',
        subtitle: `It's stupid fast`,
      },
    },
  }
}
