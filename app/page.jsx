"use client";
import { useSession } from "next-auth/react";
import Home from "./home/page";
import NewUser from "./(auth)/new-user/page";

export default function page() {
  const { status } = useSession();
  return <div>{status === "authenticated" ? <Home /> : <NewUser />}</div>;
}
