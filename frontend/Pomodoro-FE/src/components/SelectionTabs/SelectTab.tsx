import { Button } from "@nextui-org/react";
import { useAppDispatch, useAppSelector } from "../../redux-toolkit/hooks";
import { changeState } from "../../redux-toolkit/Features/category";
import { motion } from "framer-motion";

const buttons = ["Pomodoro", "Short Break", "Long Break"];

const SelectTab = () => {

    const category = useAppSelector((state) => state.category.name);
    const dispatch = useAppDispatch();

    const handleClick = (text: string) => {
        dispatch(changeState(text));
    }

    return (
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="flex flex-row justify-around items-center w-9/12 mx-auto mt-4 rounded-full p-2 bg-white/20">
            {buttons.map((button, index) => (
                <Button key={index} onClick={() => handleClick(button)} className={` ${button === category ? "bg-[#A0153E]" : "bg-transparent"} rounded-full sm:text-lg text-md w-3/12 text-white`} >{button}</Button>
            ))}
        </motion.div>
    );
}

export default SelectTab;