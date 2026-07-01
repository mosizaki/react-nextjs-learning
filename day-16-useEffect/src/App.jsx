import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("count")

    if(savedCount === null) {
      return 0
    }

    return Number(savedCount)
  })
  const [name, setName] = useState("")

  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((currentSeconds) => currentSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    if (count === 0) {
      document.title = `no Click yet ${name}`
    } else if ( count > 0) {
      document.title = `${name} Clicked ${count} times`
    } else if (count < 0) {
      document.title = `${name} Negative Count: ${count}`
    }
    localStorage.setItem("count", count)
  }, [name, count])

  function handleIncrease() {
    setCount((currentCount) => currentCount + 1)
  }

  function handleDecrease() {
    setCount((currentCount) => currentCount - 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <main>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <p>Seconds: {seconds}</p>

      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

      <button onClick={handleIncrease}>
        Increase
      </button>

      <button onClick={handleDecrease}>
        Decrease
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </main>
  )
}

export default App
