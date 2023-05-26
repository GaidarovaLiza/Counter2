import s from './StartValue.module.css'
import React, {ChangeEvent, useState} from "react";
import {SuperButton} from "./SuperButton";
import {SET_NAME} from "../constans";


type StartValuePropsType = {
    minValue: number
    maxValue: number
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    onEditModeChange: () => void
}

export const StartValue: React.FC<StartValuePropsType> = (
    {
        minValue,
        maxValue,
        setMinValue,
        setMaxValue,
        onEditModeChange
    }
) => {
    const [minError, setMinError] = useState(false)
    const [maxError, setMaxError] = useState(false)

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let minValue = parseInt(e.currentTarget.value)
        if (minValue > 0) {
            setMinValue(minValue)
            setMinError(false)
        } else {
            setMinError(true)
        }
    }


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let maxValue = parseInt(e.currentTarget.value)
        if (maxValue > 0) {
            setMaxValue(maxValue)
            setMaxError(false)
        } else {
            setMaxError(true)
        }
    }

    const onEditModeChangeHandler = () => {
        if (maxValue > minValue) {
            onEditModeChange()
            setMinError(false)
            setMaxError(false)
        }
    }

    const minFinalInputStyle = minError ? ` ${s.input} ${s.inputError}` : s.input
    const maxFinalInputStyle = maxError ? ` ${s.input} ${s.inputError}` : s.input


    return (
        <div className={s.counter}>
            <div className={s.value}>
                <div className={s.textAndInput}>
                    <p>MAX VALUE:</p>
                    <input value={maxValue} onChange={maxValueHandler}
                           className={maxFinalInputStyle} type="number"/>
                </div>
                {maxError && <span className={s.errorMessage}>Incorrect value!</span>}
                <div className={s.textAndInput}>
                    <p>START VALUE:</p>
                    <input value={minValue} onChange={minValueHandler}
                           className={minFinalInputStyle} type="number"/>
                </div>
                {minError && <span className={s.errorMessage}>Incorrect value!</span>}
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={SET_NAME} callback={onEditModeChangeHandler} disable={false}/>
            </div>
        </div>
    )
}