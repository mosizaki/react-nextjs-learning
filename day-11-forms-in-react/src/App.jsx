import { useState } from "react"

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState("")

  const isFormIncomplete =
    name.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    confirmPassword.trim() === ""

  function validateName(value) {
    if (value.trim() === "") {
      return "Name is required"
    } else if (value.trim().length < 3) {
      return "Name must be at least 3 characters"
    }

    return ""
  }

  function validateEmail(value) {
    if (value.trim() === "") {
      return "Email is required"
    } else if (!value.includes("@")) {
      return "Email must include @"
    }

    return ""
  }

  function validatePassword(value) {
    if (value.trim() === "") {
      return "Password is required"
    } else if (value.length < 6) {
      return "Password must be at least 6 characters"
    }

    return ""
  }

  function validateConfirmPassword(value) {
    if (value.trim() === "") {
      return "Please confirm your password"
    } else if (value !== password) {
      return "Password and confirm password do not match"
    }

    return ""
  }

  function validateForm() {
    const newErrors = {}

    const nameError = validateName(name)
    const emailError = validateEmail(email)
    const passwordError = validatePassword(password)
    const confirmPasswordError = validateConfirmPassword(confirmPassword)

    if (nameError) {
      newErrors.name = nameError
    }

    if (emailError) {
      newErrors.email = emailError
    }

    if (passwordError) {
      newErrors.password = passwordError
    }

    if (confirmPasswordError) {
      newErrors.confirmPassword = confirmPasswordError
    }

    return newErrors
  }

  function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSuccessMessage("")
      return
    }

    setErrors({})
    setSuccessMessage("Signup successful!")

    console.log({ name, email, password })

    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
  }

  function handleVisibleButton() {
    setIsPasswordVisible((prevValue) => !prevValue)
  }

  return (
    <>
      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => {
            const value = event.target.value
            setName(value)

            setErrors({
              ...errors,
              name: validateName(value),
            })

            setSuccessMessage("")
          }}
        />
        {errors.name && <p>{errors.name}</p>}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => {
            const value = event.target.value
            setEmail(value)

            setErrors({
              ...errors,
              email: validateEmail(value),
            })

            setSuccessMessage("")
          }}
        />
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(event) => {
            const value = event.target.value
            setPassword(value)

            setErrors({
              ...errors,
              password: validatePassword(value),
              confirmPassword:
                confirmPassword === ""
                  ? errors.confirmPassword
                  : value === confirmPassword
                  ? ""
                  : "Password and confirm password do not match",
            })

            setSuccessMessage("")
          }}
        />
        {errors.password && <p>{errors.password}</p>}

        <label htmlFor="confirm-password">Confirm password</label>
        <input
          id="confirm-password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(event) => {
            const value = event.target.value
            setConfirmPassword(value)

            setErrors({
              ...errors,
              confirmPassword:
                value.trim() === ""
                  ? "Please confirm your password"
                  : value !== password
                  ? "Password and confirm password do not match"
                  : "",
            })

            setSuccessMessage("")
          }}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button type="button" onClick={handleVisibleButton}>
          {isPasswordVisible ? "Hide Password" : "Show Password"}
        </button>

        <button type="submit" disabled={isFormIncomplete}>
          Sign Up
        </button>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </>
  )
}

export default App