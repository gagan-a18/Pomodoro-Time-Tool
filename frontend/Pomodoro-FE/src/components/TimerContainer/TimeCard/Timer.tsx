import { useState } from 'react';
import { useTimer } from 'react-timer-hook';

interface TimerProps {
    expiryTimestamp: Date;
}



const Timer = ({ expiryTimestamp }: TimerProps) => {
    const {
        seconds,
        minutes,
        start,
        pause,
        restart,
    } = useTimer({ expiryTimestamp, autoStart: false });

    const [control, setcontrol] = useState(true);
    const handleClick = () => {
        setcontrol(!control);

    }

    return (
        <div className='text-center'>
            <div className="text-[100px]">
                <span>{minutes}</span>:<span>{seconds}</span>{`${seconds === 0 ? 0 : ""}`}
            </div>

            <div className='border flex flex-row justify-around'>
                {control ? <button onClick={() => { handleClick(); start() }}>Start</button> : <button onClick={() => { handleClick(); pause() }}>Pause</button>}
                <button onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 300);
                    restart(time, false)
                }}>Reset</button>
            </div>

        </div>
    );
}

export default Timer;
