import React, { useContext, useEffect, useState } from "react";
import { ButtonNumber } from "./context/ButtonNumber";

 export const Display = () => {
    const {display} = useContext(ButtonNumber)
    const [number, setNumber]= useState("0")
     useEffect (()=> {
        setNumber(display)
     },[display])

    return (
        <div className="display">
            <h2> {number}</h2>
        </div>
    )
 }