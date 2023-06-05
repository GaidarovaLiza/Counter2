import React from 'react';
import './App.css';
import {StartValue} from "./components/StartValue";
import {Display} from "./components/Display";
import {AppRootStateType} from "./store/state";
import {useDispatch, useSelector} from "react-redux";
import {changeEditModeAC, setCountAC} from "./store/Reducers/CountReducer";
// import {changeEditModeAC} from "./store/Reducers/EditModeReducer";


export type CountStateType = {
    count: number
    minValue: number
    maxValue: number
    minError: boolean
    maxError: boolean
    isEditableMode: boolean
}

export type MinValueStateType = {
    minValue: number
    minValueError: boolean
}

export type MaxValueStateType = {
    maxValue: number
    maxValueError: boolean
}

// export type EditModeStateType = {
//     isEditMode: boolean
// }

function App() {
    let count = useSelector<AppRootStateType, CountStateType>(state => state.count)
    let minValue = useSelector<AppRootStateType, MinValueStateType>(state => state.minValue)
    let maxValue = useSelector<AppRootStateType, MaxValueStateType>(state => state.maxValue)
    //let isEditMode = useSelector<AppRootStateType, EditModeStateType>(state => state.isEditMode)

    const dispatch = useDispatch()

    const onEditModeChange = () => {
        debugger
        dispatch(setCountAC(minValue.minValue, false))
    }

    const handleSetMode = () => dispatch(changeEditModeAC(true))

    return (
        <div className='wrapper'>
            {count.isEditableMode ? (
                    <div>
                        <StartValue minValue={minValue}
                                    maxValue={maxValue}
                                    dispatch={dispatch}
                                    onEditModeChange={onEditModeChange}
                        />
                    </div>)
                : (
                    <div className="counter">
                        <Display minValue={minValue}
                                 maxValue={maxValue}
                                 count={count}
                                 dispatch={dispatch}
                                 handleSetMode={handleSetMode}/>
                    </div>
                )
            }

        </div>
    );
}

export default App;
