import React from 'react';

type ButtonProps = {
  onClick: () => {};
  label: string;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;