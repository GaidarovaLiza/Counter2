// import {EditModeStateType} from "../../App";
export {}
// const initialState: EditModeStateType = {
//     isEditMode: false
// }
//
// type ActionsType = changeEditModeACType
//
// export const EditModeReducer = (state = initialState, action: ActionsType) => {
//     switch (action.type) {
//         case 'CHANGE-EDIT-MODE': {
//             return {
//                 ...state,
//                 isEditMode: action.payload.value
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }
//
// type changeEditModeACType = ReturnType<typeof changeEditModeAC>
//
// export const changeEditModeAC = (value: boolean) => {
//     return {
//         type: "CHANGE-EDIT-MODE",
//         payload: {
//             value
//         }
//     } as const
// }