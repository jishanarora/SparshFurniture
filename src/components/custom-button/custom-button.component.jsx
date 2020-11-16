import React from "react";
import "./custom-button.styles.scss"

const CustomButton=({children,isGoogle,inverted,...otherProps})=>
{
    return(
    <button className={`${inverted? 'inverted':''} ${isGoogle? 'google':''} customButton`} {...otherProps}>
    {children}
    </button>)
}

export default CustomButton;