import s from './StartValue.module.css'
import React, {ChangeEvent, Dispatch, useState} from "react";
import {SuperButton} from "./SuperButton";
import {SET_NAME} from "../constans";
import {MaxValueStateType, MinValueStateType} from "../App";
import {setMinValueAC, setMinValueErrorAC} from "../store/Reducers/MinValueReducer";
import {setMaxValueAC, setMaxValueErrorAC} from "../store/Reducers/MaxValueReducer";


type StartValuePropsType = {
    minValue: MinValueStateType
    maxValue: MaxValueStateType
    dispatch: Dispatch<any>
    onEditModeChange: () => void
}

export const StartValue: React.FC<StartValuePropsType> = (
    {
        minValue,
        maxValue,
        dispatch,
        onEditModeChange
    }
) => {

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let minValue = parseInt(e.currentTarget.value)
        if (minValue > 0) {
            dispatch(setMinValueAC(minValue))
            dispatch(setMinValueErrorAC(false))
        } else {
            dispatch(setMinValueErrorAC(true))
        }
    }


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = parseInt(e.currentTarget.value)
        if (maxValue > 0) {
            dispatch(setMaxValueAC(maxValue))
            dispatch(setMaxValueErrorAC(false))
        } else {
            dispatch(setMaxValueErrorAC(true))
        }
    }

    const onEditModeChangeHandler = () => {
        debugger
        if (maxValue.maxValue > minValue.minValue) {
            onEditModeChange()

            dispatch(setMinValueErrorAC(false))
            dispatch(setMaxValueErrorAC(false))
        } else {
            dispatch(setMaxValueErrorAC(true))
        }
    }

    const minFinalInputStyle = minValue.minValueError ? ` ${s.input} ${s.inputError}` : s.input
    const maxFinalInputStyle = maxValue.maxValueError ? ` ${s.input} ${s.inputError}` : s.input


    return (
        <div className={s.counter}>
            <div className={s.value}>
                <div className={s.textAndInput}>
                    <p>MAX VALUE:</p>
                    <input value={maxValue.maxValue} onChange={maxValueHandler}
                           className={maxFinalInputStyle} type="number"/>
                </div>
                {maxValue.maxValueError && <span className={s.errorMessage}>Incorrect value!</span>}
                <div className={s.textAndInput}>
                    <p>START VALUE:</p>
                    <input value={minValue.minValue} onChange={minValueHandler}
                           className={minFinalInputStyle} type="number"/>
                </div>
                {minValue.minValueError && <span className={s.errorMessage}>Incorrect value!</span>}
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={SET_NAME} callback={onEditModeChangeHandler} disable={false}/>
            </div>
        </div>
    )
}