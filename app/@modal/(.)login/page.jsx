"use client";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "@components/ui/Modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Input from "@components/ui/Input";
import Button from "@components/Button";

export default function Login() {
  let router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleRefresh = () => {
    window.location.replace("/home")
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        toast.error("Invalid credentials");
        return;
      } else {
        handleRefresh()
        toast.success("Successfully logged in!");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      <div className='mx-auto flex w-fit px-4 sm:px-6 p-5'>
        <div className='w-full flex flex-col sm:justify-center'>
          <div className='relative font-twitter-chirp-heavy font-black'>
            <h1 className='sm:text-3xl sm:mb-8 mb-5 text-xl tracking-tight text-gray-900'>
              Sign in to X
            </h1>
          </div>
          <div className='sm:rounded-5xl flex-auto bg-white shadow-gray-900/10 sm:mx-0 sm:flex-none sm:w-[300px] max-w-[380px]'>
            <Button
              outline
              label='Continue with Google'
              icon={FcGoogle}
              onClick={()=>signIn("google")}
            />
            <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
              or
            </div>
            <div className='flex flex-col gap-4 mt-3'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <Input
                  id='email'
                  label='Email'
                  type='text'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className='relative'>
                    <Input
                      id='password'
                      label='Password'
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      className='absolute top-6 right-4'
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPassword((prev) => (prev = !prev));
                      }}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>
                <Button
                  type='submit'
                  variant='outline'
                  color='gray'
                  className='mt-3 w-full'
                  label={
                    loading ? (
                      <div className='flex w-full justify-center'>
                        <Loader2 className=' animate-spin w-6 h-6' />
                      </div>
                    ) : (
                      "Log in"
                    )
                  }
                />
              </form>
              <Toaster />
            </div>
            <div
              className='
          text-main-secondary 
          mt-4 
          twitter-chirp-regular
        '
            >
              <p>
                Don’t have an account?
                <Link
                  href={"/register"}
                  className='
              text-main-primary
              cursor-pointer 
              hover:underline
            '
                >
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
