'use client'
import { useState, useEffect } from "react";
import {getUsers} from "@app/actions/getUsers";
import ProfileInfo from "@components/ui/ProfileInfo";
import Button from "@components/ui/Button";
import Link from "next/link";


const WhoToFollow = () => {
  const [usersList, setUsersList] = useState([]); // Initialize a state variable to hold the user list
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    try {
      const res = await fetch("api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
        }),
      });

      if (res.ok) {
        setUsersList(users);
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    } finally {
      setLoading(false)
    }
  };
  // Use useEffect to fetch the data when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className='flex flex-col bg-gray-bg rounded-2xl overflow-hidden mb-4'>
      <h1 className='text-main-secondary font-bold text-xl pb-3 px-4 mt-3'>
        Who to follow
      </h1>
      {/* {users?.map((user) => (
        <div
          key={user?.id}
          className='flex py-3 items-center justify-between px-4 hover:bg-black/5 transition duration-200 cursor-pointer'
        >
          <ProfileInfo
            username={user?.name || ""}
            nickname={user?.username || ""}
            image={user?.profileImage || "/assets/images/avatar.jpeg"}
          />
          <Button text={"Follow"} />
        </div>
      ))} */}
      <div className='flex py-3 items-center justify-between px-4 hover:bg-black/5 transition duration-200 cursor-pointer'>
        <ProfileInfo
          name={"Nurbek Ismagulov"}
          username={"nismagulov"}
          image={"/assets/images/avatar.jpeg"}
        />
        <Button text={"Follow"} />
      </div>
      <Link
        href={"explore/tabs/for-you"}
        className='py-3 text-main-primary px-4 hover:bg-black/5 transition duration-200 cursor-pointer'
      >
        Show more
      </Link>
    </div>
  );
};

export default WhoToFollow;
