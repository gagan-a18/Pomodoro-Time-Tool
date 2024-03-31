import { motion } from "framer-motion";
import messages from "./messages";

//THIS COMPONENT DISPLAYS INSTRUCTIONS.

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