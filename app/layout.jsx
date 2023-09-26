import SideBar from '@components/SideBar';
import Provider from '@components/Provider';
import SignInPage from './sign-in/page';
import '@styles/globals.css';

export const metadata = {
  title: `X. It's what's happening`,
  description: 'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'
}
 
const RootLayout = ({ children }) =>(
  <Provider>
  <html lang="en">
    <body>
      <div className='main'>
      </div>
      {/* <SignInPage /> */}
      <main className='app'>
        <SideBar/>
        {children}
      </main>
    </body>
  </html>
  </Provider>
)

export default RootLayout