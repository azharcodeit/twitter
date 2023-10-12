'use client';

const Input = ({
  id,
  label,
  type = "text", 
  onChange,
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        placeholder=" "
        type={type}
        onChange={onChange}
        className={`
          peer
          w-full
          p-4
          pt-5 
          font-light 
          bg-white 
          border
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          border-neutral-300}
          focus:border-black}
        `}
      />
      <label 
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-4
          z-10 
          origin-[0] 
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          left-4
          text-zinc-400}
        `}
      >
        {label}
      </label>
    </div>
   );
}
 
export default Input;