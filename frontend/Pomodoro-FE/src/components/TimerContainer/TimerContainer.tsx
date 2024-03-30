import { motion } from "framer-motion"
import TimeCard from "./TimeCard/TimeCard"
import ProgressCards from "./ProgressCard/ProgressCards"

const TimerContainer = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="flex flex-row justify-around items-center w-9/12 mx-auto mt-4 rounded-full p-2">
                <ProgressCards />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="flex flex-row justify-around items-center w-9/12 mx-auto rounded-full">
                <TimeCard />
            </motion.div>
        </>
    )
}

export default TimerContainer