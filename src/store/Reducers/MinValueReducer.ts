import {MinValueStateType} from "../../App";
import {INITIAL_COUNT} from "../../constans";

const initialState: MinValueStateType = {
    minValue: INITIAL_COUNT,
    minValueError: false
}

type ActionsType = setMinValueACType | setMinValueErrorACType

export const MinValueReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-VALUE": {
            return {
                ...state,
                minValue: action.payload.minValue
            }
        }
        case "SET-ERROR": {
            return {
                ...state,
                minValueError: action.payload.value
            }
        }
        default: {
            return state
        }
    }
}

type setMinValueACType = ReturnType<typeof setMinValueAC>

export const setMinValueAC = (minValue: number) => {
    return {
        type: "SET-VALUE",
        payload: {
            minValue
        }
    } as const
}

type setMinValueErrorACType = ReturnType<typeof setMinValueErrorAC>

export const setMinValueErrorAC = (value: boolean) => {
    return {
        type: "SET-ERROR",
        payload: {
            value
        }
    } as const
}