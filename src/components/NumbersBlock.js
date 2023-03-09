import React from "react";
import { Number } from "./Number";

export function NumbersBlock() {

  return (
    <div className="numbersBlock">
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