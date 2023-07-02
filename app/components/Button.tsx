import React from 'react';

type ButtonProps = {
	onClick: () => void;
	label: string;
	disabled?: boolean;
	// className?: string;
};

const Button: React.FC<ButtonProps> = ({
	onClick,
	label,
	disabled = false,
	// className = '',
}) => {
	return (
		<button
			className={`hover:bg-blue-700 rounded-full bg-blue px-1 py-2 font-bold text-black`}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default Button;
