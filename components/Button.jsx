'use client';

const Button = ({ 
  label, 
  onClick, 
  disabled, 
  outline,
  small,
  icon: Icon,
  follow,
  edit,
  secondary
}) => {
  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-80
        disabled:cursor-not-allowed
        transition
        font-twitter-chirp-bold
        rounded-3xl
        ${outline ? 'bg-white' : 'bg-main-primary'}
        ${outline ? 'border-black' : ''}
        ${outline ? 'border-[1px]' : ''}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'w-fit min-w-[50px]' : 'w-full'}
        ${small ? 'py-2' : 'py-3'}
        ${small ? 'border-bg-gray' : ''}
        ${small ? 'px-4 hover:brightness-80' : ''}
        ${small ? 'text-[15px]' : 'text-md'}
        ${follow ? 'bg-main-secondary hover:opacity-80' : ''}
        ${edit ?  'hover:bg-black/10' : ''}
        ${secondary ? 'bg-main-secondary' : ''}
        ${secondary ? 'py-1' : ''}
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