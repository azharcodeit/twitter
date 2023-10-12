"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Modal from "@components/ui/Modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Input from "@components/ui/Input";
import Button from "@components/Button";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await signIn('google');
      
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      })
    } finally {
     router.replace("home");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
  return (
    <Modal>
      <div className='mx-auto flex w-fit px-4 sm:px-6 p-5'>
        <div className='w-full flex flex-col sm:justify-center'>
          <div className='relative font-twitter-chirp-extended-heavy font-black'>
            <h1 className='sm:text-3xl sm:mb-8 mb-5 text-xl tracking-tight text-gray-900'>
              Join X today
            </h1>
          </div>
          <div className='sm:rounded-5xl flex-auto bg-white shadow-gray-900/10 sm:mx-0 sm:flex-none sm:w-[300px] max-w-[380px]'>
            <Button
              outline
              label='Continue with Google'
              icon={FcGoogle}
              onClick={loginWithGoogle}
            />
            <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
              or
            </div>
            <div className='flex flex-col gap-4 mt-3'>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Input
                id='email'
                label='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                id='name'
                label='Name'
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                id='password'
                label='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button
                type='submit'
                variant='outline'
                color='gray'
                className='mt-3 w-full'
                label='Sign up'
              />
                </form>
            </div>
          
            
            <div
              className='
          text-main-secondary 
          mt-4 
          font-normal
        '
            >
              <p>
                Have an account already?
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
    </Modal>
  );
}
