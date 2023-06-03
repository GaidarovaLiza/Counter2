import s from './Display.module.css'
import {ADD_NAME, RESET_NAME, SET_NAME} from "../constans";
import {SuperButton} from "./SuperButton";
import React, {Dispatch} from "react";
import {CountStateType} from "../App";
import {incCountAC, resetCountAC} from "../store/Reducers/CountReducer";

type DisplayPropsType = {
    count: CountStateType
    minValue: number
    maxValue: number
    dispatch: Dispatch<any>
    handleSetMode: () => void
}

export const Display: React.FC<DisplayPropsType> = (
    {
        count,
        minValue,
        maxValue,
        dispatch,
        handleSetMode
    }
) => {

    const incCount = () => dispatch(incCountAC(count.count, maxValue))

    const resetCount = () => dispatch(resetCountAC(minValue))

    const finalStyle = count.count === maxValue ? s.red : ''

    return (
        <div>
            <div className={s.value}>
                <span className={finalStyle}>{count.count}</span>
            </div>
            <div className='buttonWrapper'>
                <SuperButton disable={count.count === maxValue} callback={incCount} name={ADD_NAME}/>
                <SuperButton disable={count.count === minValue} callback={resetCount} name={RESET_NAME}/>
                <SuperButton disable={false} callback={handleSetMode} name={SET_NAME}/>
            </div>
        </div>
    )
}