import React, {useCallback, useState} from 'react';
import './App.css';
import {INITIAL_COUNT, MAX_COUNT} from "./constans";
import {StartValue} from "./components/StartValue";
import {Display} from "./components/Display";
import {AppRootStateType} from "./store/state";
import {useDispatch, useSelector} from "react-redux";
import {setCountAC} from "./store/Reducers/CountReducer";

export type CountStateType = {
    count: number
    minValue: number
    maxValue: number
    minError: boolean
    maxError: boolean
    isEditableMode: boolean
}

function App() {
    let count = useSelector<AppRootStateType, CountStateType>(state => state.count)

    const dispatch = useDispatch()

    const [minValue, setMinValue] = useState<number>(INITIAL_COUNT)
    const [maxValue, setMaxValue] = useState<number>(MAX_COUNT)
    const [isEditMode, setIsEditMode] = useState<boolean>(false)

    const onEditModeChange = () => {
        setIsEditMode(false)
        dispatch(setCountAC(count.count, minValue, maxValue))
    }

    const handleSetMode = () => {
        setIsEditMode(true);
    };


    return (
        <div className='wrapper'>
            {isEditMode ? (
                    <div>
                        <StartValue minValue={minValue}
                                    maxValue={maxValue}
                                    setMinValue={setMinValue}
                                    setMaxValue={setMaxValue}
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
