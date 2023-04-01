import React, { useContext } from "react";
import { OptionButton } from "./OptionButton";
import { ButtonNumber } from "./context/ButtonNumber";
import { useSelector } from "react-redux";


export const OptionButtons = ({props}) => {
    const isOption = useSelector(state=>state.constuctor.isOptions)

    const {setDragItem} = useContext(ButtonNumber)
    function dragStart(){
        if (!isOption){
            console.log(1234);
        setDragItem(3)  
        }
    }

    return (
        <div className="optionButtons"
         draggable={props}
         onDragStart={dragStart}
         >
            <OptionButton value="add" >+</OptionButton>
            <OptionButton value="sub" >-</OptionButton>
            <OptionButton value="mult" >*</OptionButton>
            <OptionButton value="div" >/</OptionButton>
        </div>
    )
}