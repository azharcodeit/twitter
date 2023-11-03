"use client";
import { useEffect } from "react";
import usePostModal from "@/hooks/usePostModal";
import Modal from "@components/Modal";
import { useSession } from "next-auth/react";
import NewPost from "@components/NewPost";


const PostModal = () => {
  const { data: session, status } = useSession();
  const postModal = usePostModal();

  useEffect(() => {
  }, [
    session, status
  ]);


  const bodyContent = (
    <NewPost/>
  );

  return (
    <Modal
      isOpen={postModal.isOpen}
      onClose={postModal.onClose}
      body={bodyContent}
    />
  );
};

export default PostModal;
