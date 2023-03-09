import React, { useContext } from "react";
import { ButtonNumber } from "./context/ButtonNumber";

export const OptionButton = (value) => {
    const { setOption } = useContext(ButtonNumber)
    const clickButton = (element) => setOption(element);

    return (

        <button
            className="optionButton"
            value={value.value}
            onClick={(event => clickButton(event.target.value))}
        >
            {value.children}
        </button>

    )
}