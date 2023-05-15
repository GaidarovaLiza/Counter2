import s from './StartValue.module.css'
import {ChangeEvent, useState} from "react";
import {SuperButton} from "./SuperButton";
import {SET_NAME} from "../constans";


type PropsType = {
    minValue: number
    maxValue: number
    setMinValue: (minValue: number) => void
    setMaxValue: (maxValue: number) => void
    setCount: (count: number) => void
    onEditModeChange: () => void
}

export const StartValue = (props: PropsType) => {
    const [minValueError, setMinValueError] = useState(false);
    const [maxValueError, setMaxValueError] = useState(false);


    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const minValue = +e.currentTarget.value
        if (isNaN(minValue)) {
            setMinValueError(true);
        } else {
            setMinValueError(false);
            props.setMinValue(minValue);
        }

    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        if (isNaN(maxValue)) {
            setMaxValueError(true);
        } else {
            setMaxValueError(false);
            props.setMaxValue(maxValue);
        }
    }


    return (
        <div className={s.counter}>
            <div className={s.value}>
                <div className={s.textAndInput}>
                    <p>MAX VALUE:</p>
                    <input value={props.maxValue} onChange={maxValueHandler}
                           className={maxValueError ? ` ${s.input} ${s.inputError}` : s.input} type="number"/>
                    {maxValueError && <p className={s.errorMessage}>Введите число!</p>}
                </div>
                <div className={s.textAndInput}>
                    <p>START VALUE:</p>
                    <input value={props.minValue} onChange={minValueHandler}
                           className={minValueError ? `${s.input} ${s.inputError}` : s.input} type="number"/>
                    {minValueError && <p className={s.errorMessage}>Введите число!</p>}
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <SuperButton name={SET_NAME} callback={props.onEditModeChange} disable={false}/>
            </div>
        </div>
    )
}