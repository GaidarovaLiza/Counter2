import s from './Display.module.css'
import {ADD_NAME, RESET_NAME, SET_NAME} from "../constans";
import {SuperButton} from "./SuperButton";
import React from "react";

type DisplayPropsType = {
    count: number
    minValue: number
    maxValue: number
    setCount: (count: number) => void
    handleSetMode: () => void
}

export const Display: React.FC<DisplayPropsType> = (
    {
        count,
        minValue,
        maxValue,
        setCount,
        handleSetMode
    }
) => {

    const incCount = () => {
        let newValue = count <= maxValue ? count + 1 : count
        setCount(newValue)
    }

    const resetCount = () => setCount(minValue)
    const finalStyle = count === maxValue ? s.red : ''

    return (
        <div>
            <div className={s.value}>
                <span className={finalStyle}>{count}</span>
            </div>
            <div className='buttonWrapper'>
                <SuperButton disable={count === maxValue} callback={incCount} name={ADD_NAME}/>
                <SuperButton disable={count === minValue} callback={resetCount} name={RESET_NAME}/>
                <SuperButton disable={false} callback={handleSetMode} name={SET_NAME}/>
            </div>
        </div>
    )
}