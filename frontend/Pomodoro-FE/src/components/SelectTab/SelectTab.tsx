import { Button } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { changeState } from "../../redux-toolkit/Features/category";
import { motion } from "framer-motion";
import buttons_desc from "./buttonsDesc";
import { useEffect } from "react";



const SelectTab = () => {

    const category = useAppSelector((state) => state.category.name);
    const count_value = useAppSelector(state => state.count.count);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if ((count_value) % 2 == 0 && (count_value) % 8 != 0) {
            dispatch(changeState({ name: "Short Break", color: "blue" }))
        }
        else if ((count_value) % 8 == 0) {
            dispatch(changeState({ name: "Long Break", color: "green" }))
        }
        else {
            dispatch(changeState({ name: "Pomodoro", color: "red" }))
        }
    }, [count_value]);


    return (
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-row justify-around items-center w-9/12 mx-auto mt-4 rounded-full p-2 bg-white/20">
            {buttons_desc.map((button, index) => (
                <Button key={index} disabled className={` ${button.title === category ? "bg-white" : "bg-transparent"} cursor-default rounded-full sm:text-lg text-md w-3/12 text-black`} >{button.title}</Button>
            ))}
        </motion.div>
    );
}

export default SelectTab;