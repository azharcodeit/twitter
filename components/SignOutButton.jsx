'use client'
import { signOut } from 'next-auth/react'

function SignOutButton() {
  return (
    <div onClick={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `/login`,
            })
          }}>Sign Out</div>
  )
}

export default SignOutButton