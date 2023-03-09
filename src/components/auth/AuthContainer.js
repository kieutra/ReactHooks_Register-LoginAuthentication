import { useState } from "react"
import Login from "./Login"
import "./AuthContainer.scss"
import Register from "./Register"
import Reset from "./Reset"

function AuthContainer(props) {

  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false
  })

  const [showPassword, setShowPassword] = useState(false);
  const handdleTogglePassword = () => {
    setShowPassword(!showPassword);
  }


  const handleLogin = () => {
    setAuth({ login: true, register: false, reset: false })
  }
  const handleRegister = () => {
    setAuth({ login: false, register: true, reset: false })
  }
  const handleReset = () => {
    setAuth({ login: false, register: false, reset: true })
  }

  return (
    <section className="--flex-center --100vh ">
      <div className="container box">
        {auth.login && <Login onRegister={handleRegister} onReset={handleReset} onShowPassword={showPassword} onTogglePassword={handdleTogglePassword} />}
        {auth.register && <Register onLogin={handleLogin} onShowPassword={showPassword} onTogglePassword={handdleTogglePassword} />}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>

    </section>
  )
}



export default AuthContainer
