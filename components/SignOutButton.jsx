'use client'
import { signOut } from 'next-auth/react'
import {PiSignOut} from 'react-icons/pi'

function SignOutButton() {
  return (
    <div onClick={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `/login`,
            })
          }}><PiSignOut size={20}/></div>
  )
}

export default SignOutButton