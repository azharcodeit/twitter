'use client';

const Button = ({ 
  label, 
  onClick, 
  disabled, 
  outline,
  small,
  icon: Icon,
  follow
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
        ${outline ? 'border-black' : ''}
        ${outline ? 'border-[1px]' : ''}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'w-fit min-w-[50px]' : 'w-full'}
        ${small ? 'py-2' : 'py-3'}
        ${small ? 'border-bg-gray' : ''}
        ${small ? 'px-4' : ''}
        ${small ? 'text-[15px]' : 'text-md'}
        ${follow ? 'bg-main-secondary' : ''}
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