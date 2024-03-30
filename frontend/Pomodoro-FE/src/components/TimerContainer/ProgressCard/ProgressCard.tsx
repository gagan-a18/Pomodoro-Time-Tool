import { Progress } from "@nextui-org/react"
import { useAppSelector } from "../../../redux-toolkit/hooks"
import { useEffect, useState } from "react";

interface ProgressProps {
    time_value: number;
    value_category: string;
}

const ProgressCard = ({ time_value, value_category }: ProgressProps) => {
    const [value, setValue] = useState(0)
    const timeswitch_value = useAppSelector(state => state.timeSwitchValue.value);
    const category = useAppSelector(state => state.category.name);
    const increment = 100 / time_value;

    useEffect(() => {
        const interval = setInterval(() => {
            timeswitch_value === "Start" && category === value_category && setValue((v) => (v >= time_value ? 0 : v + 1));
            timeswitch_value === "Reset" && setValue(0);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeswitch_value]);


    return (
        <>
            {category === value_category && <Progress className="w-10/12 mx-auto" aria-label="Loader" size="sm" value={(value * increment)} />}
        </>
    )
}

export default ProgressCard