import { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "@components/Button";

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className='
          justify-center 
          items-start 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800
          bg-opacity-70
          p-[5%]
        '
      >
        <div className='relative w-full sm:max-w-[90%] md:max-w-[70%] lg:max-w-[40%] bg-white rounded-2xl mx-auto'>
          {/*content*/}
          <div>
            {/*header*/}

            <div
              className='
              flex 
              justify-between 
              p-4
              items-center
              '
            >
              <div className='flex'>
                <button
                  className='
                  ml-auto
                  border-0 
                  text-black 
                  hover:opacity-70
                  transition
                  w-[56px]
                  h-[30px]
                '
                  onClick={handleClose}
                >
                  <AiOutlineClose size={20} />
                </button>
                {title && (
                  <h3 className='text-xl font-twitter-chirp-bold text-black'>
                    {title}
                  </h3>
                )}
              </div>

              {onSubmit && (
                <Button
                  disabled={disabled}
                  label={actionLabel}
                  secondary
                  small
                  onClick={handleSubmit}
                />
              )}
            </div>

            {/*body*/}
            <div className='relative p-4 pt-0 flex-auto'>{body}</div>
            {/*footer*/}
            {footer && <div className='flex flex-col gap-2 p-4'>{footer}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
