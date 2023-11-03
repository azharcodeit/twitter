"use client";
import React from "react";

const MIN_TEXTAREA_HEIGHT = 30;

export default function Textarea({
  value,
  placeholder = "What's happening?!",
  onChange,
}) {
  const textareaRef = React.useRef(null);

  React.useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    textareaRef.current.style.height = "inherit";
    // Set height
    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  return (
    <textarea
      placeholder={placeholder}
      onChange={onChange}
      ref={textareaRef}
      className={`textarea w-full min-w-0 min-h-[${MIN_TEXTAREA_HEIGHT}px] bg-transparent resize-none text-lg outline-none`}
      value={value}
    />
  );
}
