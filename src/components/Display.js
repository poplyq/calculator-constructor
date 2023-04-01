import React, { useContext, useEffect, useState } from "react";
import { ButtonNumber } from "./context/ButtonNumber";
import { useSelector } from "react-redux";


export const Display = ({ props, value }) => {

    const { display, setDragItem,} = useContext(ButtonNumber)
    const isDisplay = useSelector(state=>state.constuctor.isDisplay)

    const [number, setNumber] = useState("0")
    useEffect(() => {
        setNumber(display)
    }, [display])

    function dragStart(){
        if(!isDisplay){
        setDragItem(1)  }
    }

    return (
        <div className="display" draggable={props}
      onDragStart={dragStart}
        >
            <h2> {number}</h2>
        </div>
    )
}