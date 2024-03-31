import { motion } from "framer-motion"
import TimeCard from "./TimeCard/TimeCard"

const TimerContainer = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="flex flex-row justify-around items-center xl:w-9/12 w-11/12 mx-auto mt-4 rounded-full">
                <TimeCard />
            </motion.div>
        </>
    )
}

export default TimerContainer