import {MaxValueStateType} from "../../App";
import {MAX_COUNT} from "../../constans";

const initialState: MaxValueStateType = {
    maxValue: MAX_COUNT,
    maxValueError: false
}

type ActionsType = setMaxValueACType | setMaxValueErrorAC

export const MaxValueReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-VALUE": {
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        }
        case "SET-ERROR": {
            return {
                ...state,
                maxValueError: action.payload.value
            }
        }
        default : {
            return state
        }
    }
}

type setMaxValueACType = ReturnType<typeof setMaxValueAC>

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: "SET-VALUE",
        payload: {
            maxValue
        }
    } as const
}

type setMaxValueErrorAC = ReturnType<typeof setMaxValueErrorAC>

export const setMaxValueErrorAC = (value: boolean) => {
    return {
        type: "SET-ERROR",
        payload: {
            value
        }
    } as const
}