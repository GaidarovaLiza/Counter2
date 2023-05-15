import s from './Display.module.css'
import {ADD_NAME, RESET_NAME, SET_NAME} from "../constans";
import {SuperButton} from "./SuperButton";

type PropsType = {
    count: number
    minValue: number
    maxValue: number
    setCount: (count: number) => void
    handleSetMode: () => void
}

export const Display = (props: PropsType) => {


    const incCount = () => {
        let newValue = props.count <= props.maxValue ? props.count + 1 : props.count
        props.setCount(newValue)
    }

    const resetCount = () => props.setCount(props.minValue)
    const finalStyle = props.count === props.maxValue ? s.red : ''

    return (
        <div>
            <div className={s.value}>
                <span className={finalStyle}>{props.count}</span>
            </div>
            <div className='buttonWrapper'>
                <SuperButton disable={props.count === props.maxValue} callback={incCount} name={ADD_NAME}/>
                <SuperButton disable={props.count === props.minValue} callback={resetCount} name={RESET_NAME}/>
                <SuperButton disable={false} callback={props.handleSetMode}
                             name={SET_NAME}/>
            </div>
        </div>
    )
}