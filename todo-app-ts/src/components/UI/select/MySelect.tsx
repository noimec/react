import React from 'react';

type Option = {
    value: string
    name: string
}[]

interface Select extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    options: Option
    defaultValue: string
}

export const MySelect = ({ options, defaultValue }: Select) => {
    return (
        <select>
            <option disabled value="val1">{defaultValue}</option>
            {options.map(option => {
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            })}
        </select>
    )
}