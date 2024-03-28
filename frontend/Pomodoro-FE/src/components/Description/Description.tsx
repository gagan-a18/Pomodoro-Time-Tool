import { motion } from "framer-motion";


const messages = [
    {
        title: "Start a 25-minute timer for focused task work.",
        delay: 0.5
    },
    {
        title: "Short break after each session.",
        delay: 0.65
    },
    {
        title: "Long break after four pomodoros (tasks).",
        delay: 0.75
    }
]

const Description = () => {
    return (
        <>
            <div className="flex justify-center p-2 mx-auto w-fit" >
                <ul className="sm:text-lg text-sm">
                    {messages.map((message, index) => (
                        <motion.li key={index} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: message.delay }}><span className="material-symbols-outlined relative text-sm mr-1">
                            check_circle
                        </span>{message.title}</motion.li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Description