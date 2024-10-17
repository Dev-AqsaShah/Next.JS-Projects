'use client'

import React, { useState, useEffect } from 'react'

const Timer: React.FC = () => {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            setMinutes(prevMinutes => {
              if (prevMinutes === 59) {
                setHours(prevHours => {
                  if (prevHours === 23) {
                    setDays(prevDays => prevDays + 1)
                    return 0
                  }
                  return prevHours + 1
                })
                return 0
              }
              return prevMinutes + 1
            })
            return 0
          }
          return prevSeconds + 1
        })
      }, 1000)
    } else if (!isActive && interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isActive])

  const handleStart = () => {
    setIsActive(true)
  }

  const handleStop = () => {
    setIsActive(false)
  }

  const handleRestart = () => {
    setDays(0)
    setHours(0)
    setMinutes(0)
    setSeconds(0)
    setIsActive(true)
  }

  return (
    <div className="flex flex-col items-center space-y-6 min-h-screen justify-center bg-cover bg-center"
         style={{ backgroundImage: `url('/assets/bg.jpg')` }}>
      
      <h1 className="text-5xl font-bold text-white mb-8">Stopwatch</h1>
      
      <div className="flex space-x-4">
        <div className="text-center">
          <span className="block text-4xl font-bold text-white">{String(days).padStart(2, '0')}</span>
          <span className="block text-lg text-gray-200">Days</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-bold text-white">{String(hours).padStart(2, '0')}</span>
          <span className="block text-lg text-gray-200">Hours</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-bold text-white">{String(minutes).padStart(2, '0')}</span>
          <span className="block text-lg text-gray-200">Minutes</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-bold text-white">{String(seconds).padStart(2, '0')}</span>
          <span className="block text-lg text-gray-200">Seconds</span>
        </div>
      </div>

      <div className="space-x-4 mt-8">
        <button
          onClick={handleStart}
          className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
        >
          Stop
        </button>
        <button
          onClick={handleRestart}
          className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800"
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default Timer
