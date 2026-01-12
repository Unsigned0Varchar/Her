import { motion } from "framer-motion"
import Button from "../ui/Button"
import { coverScreenHeading, coverScreenParagraph } from "@/data"

export default function CoverScreen({ onStart }) {
    return (
        <motion.div
            className="bg-rose-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm w-full text-center place-items-center relative overflow-hidden"
            style={{ boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" }}
        >
            <div className="absolute bg-white/90 bottom-0 w-116 h-[55%] rounded-t-[50%] -z-1" />

            {/* Image */}
            <motion.img
                src="/images/cover.webp"
                alt="cover"
                className="mx-auto h-32 md:h-36 mb-4 md:mb-6 object-cover rounded-full drop-shadow-md border-4 border-rose-300/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
            />

            {/* Heading */}
            <motion.h1
                className="text-[26px] md:text-3xl font-semibold text-rose-500 leading-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {coverScreenHeading}
            </motion.h1>

            {/* Paragraph */}
            <motion.p
                className="mt-3 text-sm md:text-base text-gray-700 max-h-20 overflow-y-auto"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                {coverScreenParagraph}
            </motion.p>

            {/* Button */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
            >
                <Button onClick={onStart} className="mt-6 bg-rose-500 hover:bg-rose-500/80">
                    Open
                </Button>
            </motion.div>
        </motion.div>
    )
}
