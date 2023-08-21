import React from "react";
import classes from './MyInput.module.css';

interface Props extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string
}

export const MyInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
    return (
        <label>{props.label} <input ref={ref} {...props} className={classes.myInput} /></label>
    )
})