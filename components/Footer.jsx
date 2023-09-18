import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className='text-slate-500 text-sm flex flex-wrap px-4 gap-2'>
        <Link href={"/more"}>Terms of Service</Link>
        <Link href={"/more"}>Privacy Policy</Link>
        <Link href={"/more"}>Cookie Policy</Link>
        <Link href={"/more"}>Accessibility</Link>
        <Link href={"/more"}>Ads info</Link>
        <Link href={"/more"}>More</Link>
        <Link href={"/more"}>© 2023 X Corp.</Link>
    </div>
  )
}

export default Footer