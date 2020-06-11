import React from "react";
import "./custom-button.styles.scss"

const CustomButton=({children,isGoogle,...otherProps})=>
{
    return(
    <button className={`${isGoogle? 'google':''} customButton`} {...otherProps}>
    {children}
    </button>)
}

export default CustomButton;