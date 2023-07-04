import React, { ChangeEvent } from 'react';

interface SelectComponentProps {
	options: string[];
	onSelect: (option: string) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
	options,
	onSelect,
}) => {
	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const selectedOption = event.target.value;
		onSelect(selectedOption);
		// console.log(selectedOption);
	};

	return (
		<select onChange={handleChange}>
			{options.map((option, index) => (
				<option key={index} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default SelectComponent;
