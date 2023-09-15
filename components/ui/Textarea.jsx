import React from "react";

const MIN_TEXTAREA_HEIGHT = 30;

export default function Textarea() {
  const textareaRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const onChange = (event) => setValue(event.target.value);

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
      placeholder="What's happening?!"
      onChange={onChange}
      ref={textareaRef}
      className={`textarea w-full min-w-0 min-h-[${MIN_TEXTAREA_HEIGHT}px] bg-transparent resize-none text-lg outline-none`}
      value={value}
    />
  );
}
