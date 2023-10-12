// import React from "react";

function Button({text}) {
  return (
    <button className='bg-main-secondary text-white rounded-3xl px-4 text-sm h-9 w-fit font-semibold hover:opacity-90 transition duration-200'>
      {text}
    </button>
  );
}

export default Button;
