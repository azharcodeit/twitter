"use client";
import { useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RiCloseFill } from "react-icons/ri";

export default function Modal({ children }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const closeIcon = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, ]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className='fixed flex justify-center z-30 left-0 right-0 top-0 bottom-0 bg-black/60 p-[5%] '
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className='absolute w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[40%] p-6 bg-white rounded-2xl mx-auto'
      >
        <button onClick={() => router.back()}>
          <RiCloseFill size={30} />
        </button>
        {children}
      </div>
    </div>
  );
}
