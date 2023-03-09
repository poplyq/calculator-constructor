import React from "react";
import { OptionButton } from "./OptionButton";

export const OptionButtons = () => {
    return (
        <div className="optionButtons">
            <OptionButton value="add" >+</OptionButton>
            <OptionButton value="sub" >-</OptionButton>
            <OptionButton value="mult" >*</OptionButton>
            <OptionButton value="div" >/</OptionButton>
        </div>
    )
}