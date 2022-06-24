import { useEffect, useState } from "react";

function Timer(props){
    const [timerActive, setTimerActive] = useState(false);
    const [sessionTime, setSessionLength] = useState(Number(props.sessionTime));
    const [breakTime, setBreakLength] = useState(Number(props.breakTime));
    const [sessionTimeLeft, setSessionTimeLeft] = useState(sessionTime);
    const [breakTimeLeft, setBreakTimeLeft] = useState(breakTime);
    const [showSessionTime, setShowSessionTime] = useState(true);

    useEffect(() => {
        let timer = null;
        if(timerActive && (sessionTimeLeft>=0)){
            timer = setTimeout(() => {
                setSessionTimeLeft(sessionTimeLeft-1);
            }, 1000);
        }

        return () => {
            clearTimeout(timer);
        }

    }, [sessionTimeLeft, timerActive, breakTimeLeft, sessionTime]);

    const activateTimer = () => {
        setTimerActive(!timerActive);
    };

    const resetTimer = () => {
        setTimerActive(false);
        setSessionTimeLeft(sessionTime);
    };

    const incrementSession = () => {
        setSessionLength(sessionTime+1);
        setSessionTimeLeft(sessionTime+1);
    };

    const decrementSession = () => {
        setSessionLength(sessionTime-1);
        setSessionTimeLeft(sessionTime-1);
    };

    const incrementBreak = () => {
        setBreakLength(breakTime+1);
        setBreakTimeLeft(breakTime+1);
    };

    const decrementBreak = () => {
        setBreakLength(breakTime-1);
        setBreakTimeLeft(breakTime-1);
    };

    return (
        <div>
            <div id="breakDiv">
                <h2>Break Length</h2>
                <button onClick={incrementBreak}>+1</button>
                <p>{breakTime}</p>
                <button onClick={decrementBreak}>-1</button>
            </div>
            <div id="sessionDiv">
                <h2>Session Length</h2>
                <button onClick={incrementSession}>+1</button>
                <p>{sessionTime}</p>
                <button onClick={decrementSession}>-1</button>
            </div>
            <div id="timerDiv">
                <h2>{showSessionTime ? 'Session Time' : 'Break Time'}</h2>
                <p>{showSessionTime ? sessionTimeLeft : breakTimeLeft}</p>
                <button onClick={activateTimer}>{timerActive ? 'Pause' : 'Start'}</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
        
    );
}

export default Timer;