"use client";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { PiDetectiveLight } from "react-icons/pi";
import Button from "@components/Button";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const SignInPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  useEffect(() => {}, [status,]);
  
  const handleRefresh = () => {
    window.location.replace("/home");
  };

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signIn("google");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      router.replace("/home");
    }
  };

  return (
    <div className='fixed z-2 left-0 right-0 top-0 bottom-0'>
      <div className='absolute flex min-h-full overflow-hidden w-screen'>
        <div className='mx-auto flex flex-col w-full px-4 sm:px-6 sm:flex-row p-5'>
          <div className='sm:grow-0 w-full flex flex-col justify-center sm:items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 30 30'
              width={"50px"}
              height={"50px"}
              className='sm:w-[55%] sm:h-[55%]'
            >
              <path d='M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z' />
            </svg>
          </div>
          <div className='sm:grow-0 sm:w-[70%] w-full flex flex-col sm:justify-center'>
            <div className='relative font-twitter-chirp-extended-heavy font-black'>
              <h1 className='sm:text-6xl sm:my-15 my-12 text-6xl tracking-tight text-gray-900'>
                Happening now
              </h1>
              <h1 className='sm:text-4xl sm:mb-8 mb-5 text-3xl tracking-tight text-gray-900'>
                Join today.
              </h1>
            </div>
            <div className='sm:rounded-5xl flex-auto bg-white shadow-gray-900/10 sm:mx-0 sm:flex-none sm:w-[300px] max-w-[380px]'>
              <Button
                outline
                disabled
                label='Continue with Google'
                className='mt-4 w-full'
                icon={FcGoogle}
                onClick={loginWithGoogle}
              />

              <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
                or
              </div>
              {/* this is temporary guest login solution, there will be roles in future */}
              <Button
                outline
                label='Continue as a guest' 
                icon={PiDetectiveLight}
                onClick={async () => {
                  const res = await signIn("credentials", {
                    email: "guest@email.com",
                    password: "pass",
                    redirect: false,
                  });
                  if (res.error) {
                    toast.error("Error occured, please try again");
                    return;
                  } else {
                    handleRefresh();
                    toast.success("Successfully logged in!");
                  }
                }}
              />
              <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
                or
              </div>
              <Button
                type='submit'
                variant='outline'
                color='gray'
                className='mt-4 w-full'
                label='Create account'
                onClick={() => router.push("/register")}
              />

              <div
                className='
          text-main-secondary 
          mt-4 
          twitter-chirp-regular
        '
              >
                <p>
                  Already have an account?
                  <Link
                    href={"/login"}
                    className='
              text-main-primary
              cursor-pointer 
              hover:underline
            '
                  >
                    {" "}
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
