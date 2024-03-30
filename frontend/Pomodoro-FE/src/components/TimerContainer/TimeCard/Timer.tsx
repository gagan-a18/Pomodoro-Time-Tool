import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { useAppDispatch, useAppSelector } from '../../../redux-toolkit/hooks';
import { changeTimeSwitchValue } from '../../../redux-toolkit/Features/timeSwitch';
import { changeCountState } from '../../../redux-toolkit/Features/count';
import Cookies from 'js-cookie';
import cookieSet from '../../../helpers/cookieSet';
interface TimerProps {
    expiryTimestamp: Date;
    time_value: number;
    value_category: string;
}

const Timer = ({ expiryTimestamp, time_value, value_category }: TimerProps) => {

    const dispatch = useAppDispatch();
    const category = useAppSelector(state => state.category.name);
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

    const Skip = () => {
        dispatch(changeCountState());
        let p = Number(Cookies.get("POMO_VALUE"));
        p = p + 1;
        cookieSet("POMO_VALUE", String(p));
        console.log(p);

    }


    useEffect(() => {
        if (minutes === 0 && seconds === 0) {
            setTimeout(() => {
                handleReset("Reset");
                dispatch(changeCountState());
            }, 1000);
        }
    }, [minutes, seconds]);
    return (
        <div className='text-center'>
            <div className="xl:text-[100px] text-[80px]">
                <span>{minutes}</span>:{`${seconds <= 9 && seconds != 0 ? 0 : ""}`}<span>{seconds}</span>{`${seconds === 0 ? 0 : ""}`}
            </div>
            <div className='flex flex-row justify-around'>
                <Button disabled={category != value_category} className='disabled:cursor-not-allowed shadow-3xl text-xl bg-white text-black rounded-full px-4 py-1' onClick={() => { handleStateChange(`${control ? "Start" : "Pause"}`) }}>{control ? "Start" : "Pause"}</Button>
                <Button disabled={category != value_category} className='disabled:cursor-not-allowed shadow-3xl text-xl bg-white text-black rounded-full px-4 py-1' onClick={() => { handleReset("Reset") }}>Reset</Button>
            </div>
            <div className='mt-1'>
                <Button disabled={category != value_category} onClick={() => Skip()} className='bg-white/20'>SKIP</Button>
            </div>
        </div>
    );
}

export default Timer;
