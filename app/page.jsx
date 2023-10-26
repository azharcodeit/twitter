"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SignInPage from "./(auth)/login/page";


export default function page() {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/home");
  } else {
    router.push("/login");
  }
  return <div>
    {status === "authenticated" ? <>Home</> : <SignInPage/>}
    
  </div>;
}
