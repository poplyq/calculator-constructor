import React, { useContext } from "react";
import { ButtonNumber } from "./context/ButtonNumber";
import { useSelector } from "react-redux";

export const Equal = ({props}) => {

    const isEquals = useSelector(state=>state.constuctor.isEquals)
    const { setOption,  setDragItem} = useContext(ButtonNumber)
    const clickButton = () => setOption('equal');

    function drag(){
if(!isEquals){
        setDragItem(4)}
       }

    return (

        <button draggable={props}
            className="equalButton"
            onClick={clickButton}
            onDragStart={drag}
        >
          =
        </button>

    )
}