import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SideBar from "@components/SideBar";
import NextAuthProvider from "@context/client-provider";
import EditModal from "@components/modals/EditModal";
import PostModal from "@components/modals/PostModal";
import "@styles/globals.css";

export const metadata = {
  title: `X. It's what's happening`,
  description:
    "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
};
export default async function (props) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body>
        <NextAuthProvider session={session}>
          <div className='main'></div>
          {props.modal}
          <EditModal />
          <PostModal />
          <main className='app'>
            {!!session?.user && <SideBar />}
            { props.children}
          </main>
        </NextAuthProvider>
      </body>
    </html>
  );
}
