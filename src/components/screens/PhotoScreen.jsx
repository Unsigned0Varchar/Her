"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import { motion } from "framer-motion"
import { photos, photoScreenHeading } from "@/data"

export default function PhotoScreen() {
    return (
        <div className="max-w-sm w-full">
            <motion.div
                className="bg-sky-200/70 backdrop-blur-md rounded-[40px] px-8 py-10 max-w-sm w-full text-center place-items-center relative overflow-hidden h-[350px] md:h-[386px]"
                style={{ boxShadow: "0 5px 20px 0 rgba(0, 0, 0, 0.35)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="absolute bg-white bottom-0 w-116 h-[51%] rounded-t-[50%] -z-1" />

                {/* Heading */}
                <motion.h1
                    className="text-[26px] md:text-3xl font-semibold text-sky-500 mb-4 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {photoScreenHeading}
                </motion.h1>

                <Swiper
                    modules={[EffectFade, Autoplay, Pagination]}
                    effect="fade"
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                    }}
                    className="w-full"
                >
                    {photos.map((src, i) => (
                        <SwiperSlide key={i}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="flex justify-center">
                                <div className="bg-white p-2 pb-10 h-60 md:h-66 w-44 md:w-48 rounded-2xl">
                                    <img
                                        src={src}
                                        alt={`Image ${i + 1}`}
                                        className="w-full h-full object-cover rounded-xl"
                                        loading="lazy"
                                    />
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    )
}
