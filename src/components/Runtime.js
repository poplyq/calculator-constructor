import {React, useContext} from "react";
import { ButtonNumber } from "./context/ButtonNumber";
import { Display } from '../components/Display';
import { Equal } from '../components/Equals';
import { NumbersBlock } from '../components/NumbersBlock';
import { OptionButtons } from '../components/OptionButtons';



export const Runtime = () => {
    const {  currentBoard,  setIsConstructor } = useContext(ButtonNumber)
    console.log(currentBoard);
  setIsConstructor(true)
   return(
    <div className="constructorContainer">
    <div></div>
    <div className="constuctor">
        {
          currentBoard.map((item, index) =>
                    <div key={index}
                    >
                        {item === 1 && <Display props={false} />}
                        {item === 2 && <NumbersBlock props={false} />}
                        {item === 3 && <OptionButtons props={false} />}
                        {item === 4 && <Equal props={false} />}
                    </div> 
          )
        }
        </div>
    </div>
   ) 
}