"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SignInPage from "@app/(routes)/(auth)/login/page"
import { useEffect } from "react";

export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { session, status } = useSession({ required: true });
  const isUser = !!session?.user
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  if (!isUser) {
    router.push("/home");
  } else {
    router.push("/login");
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {}, [status]);
  return <div>Loading...</div>;
}
