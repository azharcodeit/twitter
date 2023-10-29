"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SignInPage from "./(auth)/login/page";
import { useEffect } from "react";

export default function page() {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/home");
  } else {
    router.push("/login");
  }
  useEffect(() => {}, [status]);
  return <div>{status !== "authenticated" && <SignInPage />}</div>;
}
