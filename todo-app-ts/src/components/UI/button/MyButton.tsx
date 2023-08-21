import React from "react";
import classes from "./MyButton.module.css";

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { }

export const MyButton = ({ children, ...props }: Props) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}