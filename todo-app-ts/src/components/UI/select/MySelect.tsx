import { FC } from 'react';

interface Option {
    value: string;
    name: string;
}

interface Select {
    options: Option[];
    defaultValue: string;
    value: string;
    onChange: (e: string) => void;
}

export const MySelect: FC<Select> = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled value="val1">{defaultValue}</option>
            {options.map(option => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )
            })}
        </select>
    )
}