
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { Constructor } from './components/Constructor';
import './App.css';
import { Runtime } from './components/Runtime';
import { NumbersBlock } from './components/NumbersBlock';
import { OptionButtons } from './components/OptionButtons';
import { ButtonNumber } from './components/context/ButtonNumber';
import { mainLogicCulc } from './components/functional/mainLogic';
import { mainLogicNumber } from './components/functional/mainLogic';
import { Display } from './components/Display';



let arrayOfNumbers = [0]
let options;




function App() {
  const [buttonOption, setOption] = useState("")
  const [buttonValue, setValue] = useState("")
  const [display, setDisplay] = useState("0")
  const [isOption, setIsOption] = useState(false)

  useEffect(() => {
    if (buttonValue) {
      arrayOfNumbers = mainLogicNumber(buttonValue, arrayOfNumbers, isOption)
      setDisplay(arrayOfNumbers[arrayOfNumbers.length - 1].replace(/\./g, ','))
      setValue(0)
      setIsOption(false)
    }
  }, [buttonValue]);

  useEffect(() => {

    if (buttonOption) {

      if (!options) {
        options = buttonOption
        setOption(0)
      }

      else {
        arrayOfNumbers = mainLogicCulc(arrayOfNumbers, options, isOption)
        setDisplay(arrayOfNumbers[0].toString().replace(/\./g, ','))
        options = buttonOption
        setOption(0)
      }
      setIsOption(true)
    }
  }, [buttonOption])


  return (
    <div >
      <ButtonNumber.Provider value={{ buttonValue, setValue, buttonOption, setOption, display }}>
        <Routes>
          <Route path='/' element={<Constructor />} />
          <Route path='runtime' element={<Runtime />} />
        </Routes>
        <Display />
        <NumbersBlock />

        <OptionButtons />
      </ButtonNumber.Provider>
    </div>
  );
}

export default App;
