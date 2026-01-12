import { motion } from "framer-motion"
import { howItAllStartedHeading, howItAllStartedParagraph } from "@/data"

export default function HowItAllStarted() {
    return (
        <motion.div
            className="bg-violet-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm w-full text-center place-items-center relative overflow-hidden h-[350px] md:h-[386px]"
            style={{ boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" }}
        >
            <div className="absolute bg-white/90 bottom-0 w-116 h-[51%] rounded-t-[50%] -z-1" />

            {/* GIF */}
            <motion.img
                src="/gifs/second.gif"
                alt="our beginning"
                className="mx-auto h-32 md:h-36 mb-6 drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
            />

            {/* Heading */}
            <motion.h1
                className="text-[26px] md:text-3xl font-semibold text-violet-500 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {howItAllStartedHeading}
            </motion.h1>

            {/* Paragraph */}
            <motion.p
                className="mt-3 text-sm md:text-base max-h-20 md:max-h-24 overflow-y-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                {howItAllStartedParagraph}
            </motion.p>
        </motion.div>
    )
}
