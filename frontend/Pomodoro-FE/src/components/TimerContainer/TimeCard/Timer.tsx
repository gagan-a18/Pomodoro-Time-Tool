import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { useAppDispatch, useAppSelector } from '../../../redux-toolkit/hooks';
import { changeTimeSwitchValue } from '../../../redux-toolkit/Features/timeSwitch';
import { changeCountState } from '../../../redux-toolkit/Features/count';
import Cookies from 'js-cookie';
import cookieSet from '../../../helpers/cookieSet';
import Sound from "../../../../mixkit-scanning-sci-fi-alarm-905.wav";
import ModalComponent from '../../Modal/Modal';

interface TimerProps {
    expiryTimestamp: Date;
    time_value: number;
    value_category: string;
}

const Timer = ({ expiryTimestamp, time_value, value_category }: TimerProps) => {
    const Alarm = new Audio(Sound);
    const [modalIsOpen, setIsOpen] = useState(false);
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
        handleReset("Reset");
        dispatch(changeCountState());
        let p = Number(Cookies.get("POMO_VALUE"));
        p = p + 1;
        cookieSet("POMO_VALUE", String(p));
    }


    useEffect(() => {
        if (minutes === 0 && seconds === 0) {
            Alarm.play();
            handleReset("Reset");
            setTimeout(() => {
                Alarm.pause();
                dispatch(changeCountState());
            }, 4000);
        }
    }, [minutes, seconds]);
    return (
        <div className='text-center'>
            <div className="2xl:text-[90px] xl:text-[70px] lg:text-[60px] text-[40px]">
                <span>{minutes}</span>:{`${seconds <= 9 && seconds != 0 ? 0 : ""}`}<span>{seconds}</span>{`${seconds === 0 ? 0 : ""}`}
            </div>
            <div className='flex flex-row justify-around'>
                <Button disabled={category != value_category} className='disabled:cursor-not-allowed shadow-3xl lg:text-xl text-sm bg-white text-black rounded-full lg:px-4 px-1 lg:py-1 md:min-w-20 min-w-0' onClick={() => { handleStateChange(`${control ? "Start" : "Pause"}`) }}>{control ? "Start" : "Pause"}</Button>
                <Button disabled={category != value_category} className='disabled:cursor-not-allowed shadow-3xl lg:text-xl text-sm bg-white text-black rounded-full lg:px-4 px-1 lg:py-1 md:min-w-20 min-w-0' onClick={() => { handleReset("Reset") }}>Reset</Button>
            </div>
            <div className='mt-1'>
                <Button disabled={category != value_category} onClick={() => Skip()} className='bg-white/20 lg:text-xl lg:mt-0 mt-2 lg:px-4 px-1 lg:py-1 text-sm'>SKIP</Button>
            </div>
            <div className='mt-1'>
                <Button disabled={category != value_category} onClick={() => setIsOpen(!modalIsOpen)} className='bg-white lg:text-xl lg:mt-2 mt-2 lg:px-4 px-1 lg:py-1 text-sm'>Edit Timer</Button>
            </div>
            <ModalComponent setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
        </div>
    );
}

export default Timer;
