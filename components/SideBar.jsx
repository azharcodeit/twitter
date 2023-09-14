import Link from 'next/link'
import Image from 'next/image'
import Post from './Post'

function SideBar() {
  return (
    <nav className='col-span-1 h-screen flex flex-col justify-between pl-2 pr-2'>
        <div>
            <Link href={'/home'} >
            <Image src={'/assets/images/logo.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            </Link>
             <Link href={'/home'} className='flex items-center' >
            <Image src={'/assets/icons/home.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>Home</p>
            </Link>
            <Link href={'/explore'} className='flex items-center' >
            <Image src={'/assets/icons/search.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>Explore</p>
            </Link>
            <Link href={'/notifications'} className='flex items-center' >
            <Image src={'/assets/icons/notifications.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>Notifications</p>
            </Link>
            <Link href={'/messages'} className='flex items-center' >
            <Image src={'/assets/icons/messages.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>Messages</p>
            </Link>
            <Link href={'/lists'} className='flex items-center' >
            <Image src={'/assets/icons/lists.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>Lists</p>
            </Link>
            <Link href={'/bookmarks'} className='flex items-center' >
            <Image src={'/assets/icons/bookmarks.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>Bookmarks</p>
            </Link>
            <Link href={'/communities'} className='flex items-center' >
            <Image src={'/assets/icons/lists.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>Communities</p>
            </Link>
            <Link href={'/verified'} className='flex items-center' >
            <Image src={'/assets/images/logo.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>Verified</p>
            </Link>
            <Link href={'/profile'} className='flex items-center' >
            <Image src={'/assets/icons/profile.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>Profile</p>
            </Link>
            <Link href={'/more'} className='flex items-center' >
            <Image src={'/assets/icons/more.svg'}
            alt="twitter"
            width={30}
            height={30}
            className='m-3'/>
            <p className='logo_text text-xl'>More</p>
            </Link>
            <Post/>
        </div>
        <div className='flex items-center mt-4 mb-4'>
             <Link href={'/'} >
            <Image src={'/assets/icons/profile.svg'}
            alt="twitter"
            width={40}
            height={40}
            className='m-3'/>
            </Link>
            <div className='flex flex-col justify-between'>
                <div className='text-sm'>Jane Doe</div>
                <div className='text-xs'>@janedoe</div>
            </div>

        </div>
    </nav>
  )
}

export default SideBar