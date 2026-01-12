import { useState } from "react"
import { motion } from "framer-motion"
import { message, messageScreenHeading } from "@/data"

export default function MessageScreen() {
    const [isTapped, setIsTapped] = useState(false)

    return (
        <div className="max-w-sm w-full">
            <motion.div
                className="bg-purple-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm text-center place-items-center relative overflow-hidden h-[350px] md:h-[386px] mx-4 sm:mx-0"
                style={{ boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" }}
            >
                <div className="absolute bg-white bottom-0 w-116 h-[51%] rounded-t-[50%] -z-1" />

                {/* Heading */}
                <motion.h1
                    className="text-[26px] md:text-3xl font-semibold text-purple-500 mb-4 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {messageScreenHeading}
                </motion.h1>

                {/* Card */}
                <motion.div
                    className="mt-3 bg-white rounded-[20px] p-2"
                    onClick={() => setIsTapped(!isTapped)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <div className={`card w-[190px] h-[210px] md:w-[210px] md:h-[230px] ${isTapped ? "tapped" : ""} will-change-auto`}>
                        <p className="text-sm p-3 max-h-[80%] overflow-y-auto text-left">
                            {message}
                        </p>
                        <div className="cover will-change-auto">
                            <img src="/gifs/tap-here.gif" className="w-40" alt="tap here" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
