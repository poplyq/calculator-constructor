import {React, useContext} from "react";
import { Number } from "./Number";
import { ButtonNumber } from "./context/ButtonNumber";
import { useSelector } from "react-redux";



export function NumbersBlock({props}) {
  const {  setDragItem,} = useContext(ButtonNumber)
  const isNumbers = useSelector(state=>state.constuctor.isNumbers)
  
  function dragStart(){
    if(!isNumbers){
    setDragItem(2) 
    } 
}
  return (
    <div className="numbersBlock" 
    draggable={props}
    onDragStart={dragStart}
    >
      <Number value='7' />
      <Number value='8' />
      <Number value='9' />
      <Number value='4' />
      <Number value='5' />
      <Number value='6' />
      <Number value='1' />
      <Number value='2' />
      <Number value='3' />
      <Number className="zero" value='0' />
      <Number value='.' />

    </div>
  )
}