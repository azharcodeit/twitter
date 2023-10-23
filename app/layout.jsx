import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SideBar from "@components/SideBar";
import NextAuthProvider from "./Providers";
import { getCurrentUser } from '@app/actions/getCurrentUser';
import "@styles/globals.css";

export const metadata = {
  title: `X. It's what's happening`,
  description:
    "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
};
export default async function(props){
  const session = await getServerSession(authOptions);
  const currentUser = await getCurrentUser(session);
  return (
    <html lang='en'>
      <body>
        <NextAuthProvider session={session}>
          <div className='main'></div>
          {props.modal}
          <main className='app'>
            <SideBar currentUser={currentUser} session={session}/>
            {props.children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
};
