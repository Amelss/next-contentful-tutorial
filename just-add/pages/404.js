import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
      <div className='not-found'>
          <h1>404</h1>
          <h2>Opppsssss! That page cannot be found!</h2>
          <h4>Go back to <Link href={'/'}>Homepage</Link> </h4>
    </div>
  )
}
