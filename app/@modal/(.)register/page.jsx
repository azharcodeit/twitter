"use client";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import {useForm} from 'react-hook-form'
import { toast } from "react-hot-toast";
import Modal from "@components/ui/Modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import Input from "@components/ui/Input";
import Button from "@components/Button";

export default function Login() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();


  const router = useRouter();

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
      router.replace("home");
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
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
              <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                <Input
                  id='email'
                  label='Email'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  {...register('email')}
                />
                <Input
                  id='name'
                  label='Name'
                  onChange={(e) => setName(e.target.value)}
                  required
                  {...register('name', { minLength: 2 })}
                />
                <Input
                  id='username'
                  label='Username'
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  {...register('username', { minLength: 2 })}
                />
                <Input
                  id='password'
                  label='Password'
                  type='password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  {...register('password', { minLength: 8 })}
                />
                <Button
                  type='submit'
                  disabled={loading}
                  variant='outline'
                  color='gray'
                  className='mt-3 w-full'
                  label={
                    loading ? (
                      <div className='flex w-full justify-center'>
                        <Loader2 className=' animate-spin w-6 h-6' />
                      </div>
                    ) : (
                      "Sign up"
                    )
                  }
                />
              </form>
            </div>

            <div
              className='
          text-main-secondary 
          mt-4 
          twitter-chirp-regular
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
