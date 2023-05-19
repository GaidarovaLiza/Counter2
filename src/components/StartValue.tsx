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
    const [error, setError] = useState(false)

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => setMinValue(parseInt(e.currentTarget.value));

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => setMaxValue(parseInt(e.currentTarget.value));

    const onEditModeChangeHandler = () => {
        if (maxValue > minValue) {
            onEditModeChange()
            setError(false)
        } else {
            setError(true)
        }
    }

    const finalInputStyle = error ? ` ${s.input} ${s.inputError}` : s.input


    return (
        <div className={s.counter}>
            <div className={s.value}>
                <div className={s.textAndInput}>
                    <p>MAX VALUE:</p>
                    <input value={maxValue} onChange={maxValueHandler}
                           className={finalInputStyle} type="number"/>
                </div>
                {error && <div className={s.errorMessage}>Max Value should be more then Min Value!</div>}
                <div className={s.textAndInput}>
                    <p>START VALUE:</p>
                    <input value={minValue} onChange={minValueHandler}
                           className={s.input} type="number"/>
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={SET_NAME} callback={onEditModeChangeHandler} disable={false}/>
            </div>
        </div>
    )
}