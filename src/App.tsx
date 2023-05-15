import React, {useState} from 'react';
import './App.css';
import {INITIAL_COUNT, MAX_COUNT} from "./constans";
import {StartValue} from "./components/StartValue";
import {Display} from "./components/Display";

function App() {
    const [count, setCount] = useState<number>(INITIAL_COUNT)
    const [minValue, setMinValue] = useState<number>(INITIAL_COUNT)
    const [maxValue, setMaxValue] = useState<number>(MAX_COUNT)
    const [isEditMode, setIsEditMode] = useState<boolean>(false)

    const onEditModeChange = () => {
        setIsEditMode(false)
        setCount(Math.max(minValue, Math.min(maxValue, count)))
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
                                    setCount={setCount}
                                    onEditModeChange={onEditModeChange}
                        />
                    </div>)
                : (
                    <div className="counter">
                        <Display minValue={minValue}
                                 maxValue={maxValue}
                                 count={count}
                                 setCount={setCount}
                                 handleSetMode={handleSetMode}/>
                    </div>
                )
            }

        </div>
    );
}

export default App;
