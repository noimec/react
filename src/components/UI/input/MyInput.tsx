import React from "react";
import classes from './MyInput.module.css';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
}

export const MyInput = (props: Props) => {
    return (
        <label>{props.label} <input {...props} className={classes.myInput} /></label>
    )
}