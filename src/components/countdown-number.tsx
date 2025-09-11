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
    <div className={`flex items-center justify-center gap-8 ${className}`}>
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
      }].map((item, idx) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center bg-black rounded-2xl shadow-[0_0_16px_4px_rgba(225,29,72,0.5)] px-8 py-8 min-w-[100px] aspect-square"
        >
          <MotionNumberFlow
            value={item.value}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
            format={{ minimumIntegerDigits: 2 }}
          />
          <span className="mt-2 text-base md:text-lg font-bold tracking-widest text-white uppercase opacity-90">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
