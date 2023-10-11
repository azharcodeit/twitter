import SideBar from "@components/SideBar";
import NextAuthProvider from "./Providers";
import "@styles/globals.css";

export const metadata = {
  title: `X. It's what's happening`,
  description:
    "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
};
const RootLayout = (props) => (
  <html lang='en'>
    <body>
      <NextAuthProvider>
      <div className='main'></div>
      {props.modal}
        <main className='app'>
          <SideBar />
          {props.children}
        </main>
        
      </NextAuthProvider>
    </body>
  </html>
);

export default RootLayout;
