"use client";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "@components/ui/Modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { PiDetectiveLight } from "react-icons/pi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "@components/ui/Input";
import Button from "@components/Button";
import {
  name_validation,
  email_validation,
  password_validation,
} from "@utils/inputValidations";

export default function Login() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password) {
      setErrorMsg("All fields must be filled");
      toast(errorMsg);
    }
    console.log("ABOUT TO SEND REQUEST");

    try {
      setLoading(true);
      const res = await fetch("api/user", {
        method: "POST",
        cache: "force-cache",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
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
        toast("Successfully created!");
        form.reset();
        router.push("/login");
      } else if (res.status == 409) {
        setErrorMsg("This email is already taken, try another one");
        toast("This email is already taken, try another one");
      }
    } catch (err) {
      console.log("caught error catch");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Modal>
        <div className='mx-auto flex w-fit px-4 sm:px-6 p-5'>
          <div className='w-full flex flex-col sm:justify-center'>
            <div className='relative font-twitter-chirp-heavy font-black'>
              <h1 className='sm:text-3xl sm:mb-8 mb-5 text-xl tracking-tight text-gray-900'>
                Join X today
              </h1>
            </div>
            <div className='sm:rounded-5xl flex-auto bg-white shadow-gray-900/10 sm:mx-0 sm:flex-none sm:w-[300px] max-w-[380px]'>
              {/* <Button
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => signIn("google")}
              />  */}
              <Button
              outline
              label='Continue as a guest' 
              icon={PiDetectiveLight}
              onClick={async (e) => {
                e.preventDefault();

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
              <div className='flex flex-col gap-4 mt-3'>
                <form
                  onSubmit={onSubmit}
                  novalidate='true'
                  className='flex flex-col gap-4'
                >
                  <Input
                    {...email_validation}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    {...name_validation}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    id='username'
                    label='Username'
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                  <div className='relative'>
                    <Input
                      {...password_validation}
                      minLength="6"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
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
      <Toaster />
    </>
  );
}
