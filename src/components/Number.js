import React, { useContext } from "react";
import { ButtonNumber } from "./context/ButtonNumber";



export const Number = (value) => {
    const { setValue } = useContext(ButtonNumber)
    const clickButton = (element) => {
        setValue(element)
    }
    return (
        <div className={"button " + value.className}>
            <button value={value.value} className={"button " + value.className} onClick={(event) => clickButton(event.target.value)}>{value.value}</button>
        </div>
    )
}