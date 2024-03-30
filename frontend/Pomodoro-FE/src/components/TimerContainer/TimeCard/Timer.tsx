import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { useAppDispatch } from '../../../redux-toolkit/hooks';
import { changeTimeSwitchValue } from '../../../redux-toolkit/Features/timeSwitch';

interface TimerProps {
    expiryTimestamp: Date;
    time_value: number;
}

const Timer = ({ expiryTimestamp, time_value }: TimerProps) => {

    const dispatch = useAppDispatch();
    const {
        seconds,
        minutes,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, autoStart: false });

    const [control, setcontrol] = useState(true);

    const handleStateChange = (name: string) => {
        { control ? resume() : pause() };
        setcontrol(!control);
        dispatch(changeTimeSwitchValue(name));
    }

    const handleClick = () => {
        setcontrol(!control);
    }
    const handleReset = (name: string) => {
        dispatch(changeTimeSwitchValue(name));
        const time = new Date();
        time.setSeconds(time.getSeconds() + time_value);
        restart(time, false);
        control ? "" : handleClick();
    }
    useEffect(() => {
        if (minutes === 0 && seconds === 0) {
            setTimeout(() => {
                handleReset("Reset");
            }, 1000);

        }
    }, [minutes, seconds]);
    return (
        <div className='text-center'>
            <div className="text-[100px]">
                <span>{minutes}</span>:{`${seconds <= 9 && seconds != 0 ? 0 : ""}`}<span>{seconds}</span>{`${seconds === 0 ? 0 : ""}`}
            </div>
            <div className='flex flex-row justify-around'>
                <Button className='shadow-3xl text-xl bg-white text-black rounded-full px-4 py-1' onClick={() => { handleStateChange(`${control ? "Start" : "Pause"}`) }}>{control ? "Start" : "Pause"}</Button>
                <Button className='shadow-3xl text-xl bg-white text-black rounded-full px-4 py-1' onClick={() => { handleReset("Reset") }}>Reset</Button>
            </div>
        </div>
    );
}

export default Timer;
