"use client"

import { useEffect, useState } from "react"
import CoverScreen from "../components/screens/CoverScreen"
import { AnimatePresence, motion } from "framer-motion"
import BackgroundMusic from "@/components/BackgroundMusic"
import HowItAllStarted from "@/components/screens/HowItAllStarted"
import HowItsGoing from "@/components/screens/HowItsGoing"
import PromiseScreen from "@/components/screens/PromiseScreen"
import PhotoScreen from "@/components/screens/PhotoScreen"
import MessageScreen from "@/components/screens/MessageScreen"
import Navigation from "@/components/ui/Navigation"
import FinalScreen from "@/components/screens/FinalScreen"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [musicOn, setMusicOn] = useState(false)
  const [showNavigation, setShowNavigation] = useState(false)

  const screens = [
    <CoverScreen key="cover" onStart={startFromCover} />,
    <HowItAllStarted key="started" />,
    <HowItsGoing key="present" />,
    <PromiseScreen key="present" />,
    <PhotoScreen key="photos" />,
    <MessageScreen key="message" />,
    <FinalScreen key="final" onRestart={() => setCurrentScreen(0)} />,
  ]

  const lastScreen = screens.length - 1

  function goNext() {
    if (currentScreen < lastScreen) setCurrentScreen(currentScreen + 1)
  }
  function goPrev() {
    if (currentScreen > 0) setCurrentScreen(currentScreen - 1)
  }

  function startFromCover() {
    setMusicOn(true)
    setCurrentScreen(1)
    setTimeout(() => {
      setShowNavigation(true)
    }, 600);
  }

  useEffect(() => {
    if (currentScreen === lastScreen) {
      setShowNavigation(false)
    }
  }, [currentScreen])

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-b from-orange-100 to-rose-100 relative overflow-hidden">

      {/* Grid lines */}
      <div className="circuit-background pointer-events-none" />

      <BackgroundMusic shouldPlay={musicOn} />

      <div className="flex flex-col items-center justify-center px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            exit={{ opacity: 0, x: -80 }}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {showNavigation && (
            <Navigation
              key="navigation"
              onPrev={goPrev}
              onNext={goNext}
              disabledPrev={currentScreen === 1}
              disableNext={currentScreen === lastScreen}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Watermark */}
      {/* <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
        className="fixed bottom-4 right-4 text-sm text-black/40 pointer-events-none z-50 font-light">
        @anujbuilds
      </motion.div> */}
    </main>
  )
}
