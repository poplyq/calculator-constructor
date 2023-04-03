import React, { useContext } from "react";
import { ButtonNumber } from "./context/ButtonNumber";



export const Number = (value) => {
    const { setValue, isConstructor } = useContext(ButtonNumber)
    const clickButton = (element) => {
        if (isConstructor){
        setValue(element)}
    }
    return (
       
            <button value={value.value} className={"button " + value.className} onClick={(event) => clickButton(event.target.value)}>{value.value}</button>
      
    )
}