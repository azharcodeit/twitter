'use client'
import { useSession } from "next-auth/react";
import Home from "./home/page";
import NewUser from "./(auth)/new-user/page";

export default function page() {
  const { data: session, status, update } = useSession();
  return (

    <div>
      {(session) && <Home/>}
      {(!session) && <NewUser/>}
      </div>
  );
}