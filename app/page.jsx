"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SignInPage from "./(auth)/login/page";
import { Loader } from "lucide-react";

export default function page() {
  const { status } = useSession();
  const router = useRouter();
  if (status === "authenticated") {
    router.push("/home");
  } else {
    router.push("/login");
  }
  return (
    <div>
      {status === "authenticated" ? (
        <div className='flex justify-center items-center h-full w-[990px]'>
          <Loader className='animate-spin w-20 h-20' />
        </div>
      ) : (
        <SignInPage />
      )}
    </div>
  );
}
