
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { Constructor } from './components/Constructor';
import './App.css';
import { Runtime } from './components/Runtime';
import { ButtonNumber } from './components/context/ButtonNumber';
import { mainLogicCulc } from './components/functional/mainLogic';
import { mainLogicNumber } from './components/functional/mainLogic';

let arrayOfNumbers = [0]
let options;

function App() {
  const [buttonOption, setOption] = useState("")
  const [buttonValue, setValue] = useState("")
  const [display, setDisplay] = useState("0")
  const [isOption, setIsOption] = useState(false)
  const [dragItem, setDragItem] = useState("")
  const [currentBoard, setBoard] = useState([])
  const [isConstructor, setIsConstructor] = useState(false)

  useEffect(() => {
    if (buttonValue) {
      arrayOfNumbers = mainLogicNumber(buttonValue, arrayOfNumbers, isOption)
      setDisplay(arrayOfNumbers[arrayOfNumbers.length - 1].replace(/\./g, ','))
      setValue(0)
      setIsOption(false)
    }
    // eslint-disable-next-line
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
        if (buttonOption === 'equal') {
          options = 0;
          setOption(0)
        } else {
          options = buttonOption
          setOption(0)
        }
      }
      setIsOption(true)
    }
    // eslint-disable-next-line
  }, [buttonOption])

  return (
    <div >
      <ButtonNumber.Provider value={{
        buttonValue,
        setValue,
        buttonOption,
        setOption,
        display,
        dragItem,
        setDragItem,
        currentBoard,
        setBoard,
        isConstructor,
        setIsConstructor
      }}>
        <div className='buttonsContaner'>
          <Link to={'/'}>
            <button className='routingButtons'> Constructor</button>
          </Link>
          <Link to={'/runtime'}>
            <button className='routingButtons'> Runtime</button>
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<Constructor />} />
          <Route path='/runtime' element={<Runtime />} />
        </Routes>

      </ButtonNumber.Provider>


    </div>
  );
}

export default App;
