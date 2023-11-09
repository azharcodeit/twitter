"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast, {Toaster} from "react-hot-toast";
import useEditModal from "@/hooks/useEditModal";
import Input from "@components/ui/Input";
import Modal from "@components/Modal";
import ImageUpload from "@components/ImageUpload";
import { useSession } from "next-auth/react";


const EditModal = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user || null
  const editModal = useEditModal();
  const router = useRouter()
  const [profileImage, setProfileImage] = useState(currentUser?.profileImage);
  const [coverImage, setCoverImage] = useState(currentUser?.coverImage);
  const [name, setName] = useState(currentUser?.name);
  const [username, setUsername] = useState(currentUser?.username);
  const [bio, setBio] = useState(currentUser?.bio);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProfileImage(currentUser?.profileImage);
    setCoverImage(currentUser?.coverImage);
    setName(currentUser?.name);
    setUsername(currentUser?.username);
    setBio(currentUser?.bio);
  }, [
    currentUser?.name,
    currentUser?.username,
    currentUser?.bio,
    currentUser?.profileImage,
    currentUser?.coverImage,
    session, status
  ]);

  const id  = currentUser?.id;

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const res = await axios.put("http://localhost:3000/api/user", {
        id,
        name,
        username,
        bio,
        profileImage,
        coverImage,
      });

      if (res.ok) {
        toast.success("Updated");

        editModal.onClose();
      } else {
        console.log("User edit failed.");
      }
    } catch (error) {
      console.log("Error during edit: ", error);
    } finally {
      setIsLoading(false);
      editModal.onClose();
      router.replace(`http://localhost:3000/users/${currentUser?.username}`)
    }
  }, [editModal, name, username, bio, profileImage, coverImage, router]);

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <ImageUpload
        value={profileImage}
        disabled={isLoading}
        onChange={(image) => setProfileImage(image)}
        label='Upload profile image'
      />
      <ImageUpload
        value={coverImage}
        disabled={isLoading}
        onChange={(image) => setCoverImage(image)}
        label='Upload cover image'
      />
      <Input
        label='Name'
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        label='Username'
        onChange={(e) => {setUsername(e.target.value)}}
        value={username}
        disabled={isLoading}
      />
      <Input
        label='Bio'
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <>
    <Modal
      disabled={isLoading}
      isOpen={editModal.isOpen}
      title='Edit profile'
      actionLabel='Save'
      onClose={editModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
    <Toaster/>
    </>
  );
};

export default EditModal;
