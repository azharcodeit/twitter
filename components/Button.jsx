'use client';

const Button = ({ 
  label, 
  onClick, 
  disabled, 
  outline,
  small,
  icon: Icon,
}) => {
  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        hover:opacity-80
        transition
        font-semibold
        rounded-3xl
        ${outline ? 'bg-white' : 'bg-main-primary'}
        ${outline ? 'border-black' : 'border-main-primary'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'w-fit' : 'w-full'}
        ${small ? 'py-2' : 'py-3'}
        ${small ? 'border-[1px]' : 'border'}
        ${small ? 'border-bg-gray' : 'border-black'}
        ${small ? 'px-4' : ''}
        ${small ? 'text-[15px]' : 'text-md'}
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
   );
}
 
export default Button;