"use client"

import React, { useEffect, useState } from "react"
import NumberFlow from "@number-flow/react"
import { motion } from "framer-motion"

const MotionNumberFlow = motion.create(NumberFlow)

interface CountdownProps {
  endDate: Date
  startDate?: Date
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function AnimatedNumberCountdown({
  endDate,
  startDate,
  className,
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const start = startDate ? new Date(startDate) : new Date()
      const end = new Date(endDate)
      const difference = end.getTime() - start.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [endDate, startDate])

  return (
    <div
      className={`flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-14 w-full ${className}`}
    >
      {[{
        value: timeLeft.days,
        label: 'DAYS'
      }, {
        value: timeLeft.hours,
        label: 'HOURS'
      }, {
        value: timeLeft.minutes,
        label: 'MINUTES'
      }, {
        value: timeLeft.seconds,
        label: 'SECONDS'
      }].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center bg-black rounded-2xl shadow-[0_0_16px_4px_rgba(225,29,72,0.5)] px-8 py-4 min-w-[100px] aspect-[5/6] max-w-[130px] sm:px-12 sm:py-6 sm:min-w-[140px] sm:aspect-[5/6] sm:max-w-[180px] md:px-8 md:py-4 md:min-w-[110px] md:aspect-[5/6] md:max-w-[130px] w-full"
        >
          <MotionNumberFlow
            value={item.value}
            className="text-5xl xs:text-6xl sm:text-5xl md:text-4xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
            format={{ minimumIntegerDigits: 2 }}
          />
          <span className="mt-2 text-sm xs:text-base md:text-lg font-bold tracking-widest text-white uppercase opacity-90">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
