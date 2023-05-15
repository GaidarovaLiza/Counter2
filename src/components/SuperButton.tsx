import s from './SuperButton.module.css'

type PropsType = {
    name: string
    callback: () => void
    disable: boolean
}

export const SuperButton = (props: PropsType) => {
    return (
        <button className={s.button} disabled={props.disable} onClick={props.callback}>{props.name}</button>
    )
}