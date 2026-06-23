
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [likeCount, setLikeCount] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isBioVisible, setIsBioVisible] = useState(false)

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    if(count > 0) {
      setCount(count - 1)
    }
  }

  function handlePlusFive() {
    setCount(count + 5)
  }

  function handleMinusFive() {
    if(count > 0) {
      setCount(count - 5)
    }
  }


  function handleReset() {
    setCount(0)
  }

  function handleLike() {
    setIsLiked(!isLiked)

    if(isLiked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
  }

  function handlePassword() {
    setIsPasswordVisible(!isPasswordVisible)
  }

  function getCoutMessege() {
    if(count === 0) {
      return "Start Counting"
    }

    if(count <= 5) {
      return "getting started"
    }

    if(count <= 10) {
      return "nice progress"
    }

    return "you clicked a lot"
  }

  function handleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  function handleBioVisible() {
    setIsBioVisible(!isBioVisible)
  }


  return (
    <>
      <main className={isDarkMode ? "dark" : "light"}>
        <h1>Counter: {count}</h1>
        <h2>{getCoutMessege()}</h2>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handlePlusFive}>+5</button>
        <button onClick={handleMinusFive}>-5</button>
        <button onClick={handleReset}>Reset</button>


        <h1>Like button</h1>
        <button onClick={handleLike}>{isLiked ? "Liked ❤️" : "Like 🤍"}</button>
        <p>
          {
            isLiked 
              ? "you liked this post"
              : "you have not liked this post yet"
          }
        </p>
        <p>Likes Count: {likeCount}</p>
        

        <h1>Password</h1>
        <input  type={isPasswordVisible ? "text" : "password"}/>
        <button onClick={handlePassword}>{isPasswordVisible ? "Hide password" : "Show password"}</button>

        <p> <button onClick={handleDarkMode}>{isDarkMode ? "light Mode" : "dark Mode"}</button></p>
        
        <button onClick={handleBioVisible}>{isBioVisible ? "Hide Bio" : "Show Bio"}</button>
        <h1>Profile Card</h1>
        <h2>Name: Alex</h2>
        <p>role: frontend developer</p>
        <div className={isBioVisible ? "visible" : "invisible"}>
          <p>Alex is Learning React and Next.js</p>
        </div>
        
        
      </main>
    </>
  )
}

export default App
