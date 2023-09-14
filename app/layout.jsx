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
        <main className='app grid-flow-col'>
          <SideBar/>
          <div className='col-span-3'> {children}</div>
          
        </main>
      </body>
    </html>
  )
}

export default RootLayout