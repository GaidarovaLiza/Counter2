import {CountStateType} from "../../App";
import {INITIAL_COUNT, MAX_COUNT} from "../../constans";

const initialState: CountStateType = {
    count: INITIAL_COUNT,
    minValue: INITIAL_COUNT,
    maxValue: MAX_COUNT,
    minError: false,
    maxError: false,
    isEditableMode: false
}

type ActionsType = ResetCountACType | IncCountACType | SetCountACType

export const CountReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "INC-COUNT": {
            return {
                ...state,
                count: action.payload.count <= action.payload.maxValue
                    ? action.payload.count + 1
                    : action.payload.count
            }
        }
        case "RESET-COUNT": {
            return {
                ...state,
                count: action.payload.minValue
            }
        }
        case "SET-COUNT": {
            let newCount = Math.max(action.payload.minValue, Math.min(action.payload.maxValue, action.payload.count))
            return {
                ...state,
                count: newCount,
                isEditableMode: false
            }
        }
        default: {
            return state
        }
    }
}

type IncCountACType = ReturnType<typeof incCountAC>

export const incCountAC = (count: number, maxValue: number) => {
    return {
        type: "INC-COUNT",
        payload: {
            count,
            maxValue
        }
    } as const
}

type ResetCountACType = ReturnType<typeof resetCountAC>

export const resetCountAC = (minValue: number) => {
    return {
        type: "RESET-COUNT",
        payload: {
            minValue
        }
    } as const
}

type SetCountACType = ReturnType<typeof setCountAC>

export const setCountAC = (count: number, minValue: number, maxValue: number) => {
    return {
        type: "SET-COUNT",
        payload: {
            count,
            minValue,
            maxValue
        }
    } as const
}