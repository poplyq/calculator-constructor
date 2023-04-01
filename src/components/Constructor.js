import React, { useContext, useState } from "react";
import { Display } from '../components/Display';
import { Equal } from '../components/Equals';
import { NumbersBlock } from '../components/NumbersBlock';
import { OptionButtons } from '../components/OptionButtons';
import { ButtonNumber } from "./context/ButtonNumber";
import { useDispatch, useSelector } from 'react-redux';

export const Constructor = () => {

    const { dragItem, currentBoard, setBoard, setDragItem } = useContext(ButtonNumber)

    const dispatch = useDispatch()
    const isDisplay = useSelector(state => state.constuctor.isDisplay)
    const isNumbers = useSelector(state => state.constuctor.isNumbers)
    const isOption = useSelector(state => state.constuctor.isOptions)
    const isEquals = useSelector(state => state.constuctor.isEquals)
    const [coverdElement, setCoverd] = useState('')
    const [dragElement, setDraged] = useState('')


    function dragStart(event, element) {

    }
    function dragEnd(e) {
    }
    function dragOver(e) {
        e.preventDefault();
    }
    const changeDisplay = (element) => {
        switch (element) {
            case 1: return dispatch({ type: 'ADD_DISPLAY' })
            case 2: return dispatch({ type: 'ADD_NUMBERS' })
            case 3: return dispatch({ type: 'ADD_OPTIONS' })
            case 4: return dispatch({ type: 'ADD_EQULS' })
            default:
        }
    }
    function dragDrop(e) {
        e.preventDefault();
        if (currentBoard.length < 4 && dragItem) {
            setBoard((prev) => [...prev, dragItem])
            changeDisplay(dragItem)
            setDragItem('')

        }
    }
    function dragEnter(e) {
        e.preventDefault();
    }

    function setCoverdElement(e, index) {
        setCoverd(index)
    }
    const changeElement = (e, index) => {
        setDraged(index)
    }
    const changeOrder = () => {
        if (dragElement > coverdElement) {
            setBoard(prev =>
                [...prev.slice(0, coverdElement),
                prev[dragElement],
                ...prev.slice(coverdElement, dragElement),
                ...prev.slice(dragElement + 1, prev.length)]
            )
        } else if (dragElement < coverdElement) {
            setBoard(prev =>
                [...prev.slice(0, dragElement),
                prev[coverdElement],
                ...prev.slice(dragElement, coverdElement),
                ...prev.slice(coverdElement + 1, prev.length)]
            )
        }
    }


    return (
        <div className="constructorContainer">
            <div
                onDragStart={(e) => dragStart(e)}
                onDragLeave={(e) => dragEnd(e)}

            >
                {
                    !isDisplay
                        ?
                        <Display props={true} />
                        :
                        <div className="grey">
                            <Display props={false} />
                        </div>
                }
                {
                    !isNumbers
                        ?
                        <NumbersBlock props={true} />
                        :
                        <div className="grey">
                            <NumbersBlock props={false} />
                        </div>
                }
                {
                    !isOption
                        ?
                        <OptionButtons props={true} />
                        :
                        <div className="grey">
                            <OptionButtons props={false} />
                        </div>
                }
                {
                    !isEquals
                        ?
                        <Equal props={true} />
                        :
                        <div className="grey">
                            <Equal props={false} />
                        </div>
                }
            </div>
            <div className="constuctor"
                onDragEnter={dragEnter}
                onDragOver={(e) => dragOver(e)}
                onDrop={e => dragDrop(e)}
            >
                {currentBoard.map((item, index) =>

                    <div key={index}
                        onDragOver={e => setCoverdElement(e, index)}
                        onDragStart={e => changeElement(e, index)}
                        onDrop={e => changeOrder()}
                    >
                        {item === 1 && <Display props={true} />}
                        {item === 2 && <NumbersBlock props={true} />}
                        {item === 3 && <OptionButtons props={true} />}
                        {item === 4 && <Equal props={true} />}
                    </div>
                )}
            </div>
        </div>
    )

}