interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
  }
  
  const Button: React.FC<ButtonProps> = ({ 
    label, 
    secondary, 
    fullWidth, 
    onClick, 
    large, 
    disabled, 
    outline 
  }) => {
    return ( 
      <button
        disabled={disabled}
        onClick={onClick}
        className={`
          disabled:opacity-70
          disabled:cursor-not-allowed
          font-semibold
          hover:opacity-20
          transition
          border-2
          ${fullWidth ? 'w-full' : 'w-fit'}
          ${secondary ? 'bg-white' : 'bg-red-500'}
          ${secondary ? 'text-black' : 'text-white'}
          ${secondary ? 'border-black' : 'border-red-500'}
          ${large ? 'text-xl' : 'text-md'}
          ${large ? 'px-2' : 'px-4'}
          ${large ? 'py-2' : 'py-2'}
          ${outline ? 'bg-transparent' : ''}
          ${outline ? 'border-white' : ''}
          ${outline ? 'text-white' : ''}
        `}
      >
        {label}
      </button>
     );
  }
   
  export default Button;