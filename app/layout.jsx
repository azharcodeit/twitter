import SideBar from '@components/SideBar';
import '@styles/globals.css';

export const metadata = {
  title: `X. It's what's happening`,
  description: 'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
}
 
const RootLayout = ({ children }) =>{
 return (
    <html lang="en">
      <body>
        <div className='main'>
        </div>
        <main className='app'>
          <SideBar/>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout