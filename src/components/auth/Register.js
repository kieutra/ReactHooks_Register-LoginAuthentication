import registerImg from "../../assets/register.svg"
import { useState, useEffect } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { GoPrimitiveDot } from "react-icons/go"
import { FaCheck } from "react-icons/fa"

function Register({ onLogin, onShowPassword, onTogglePassword }) {

  const [showIndicator, setShowIndicator] = useState(false);
  const [pass, setPass] = useState("");
  const [passLetter, setPassLetter] = useState(false);
  const [passNumber, setPassNumber] = useState(false);
  const [passChar, setPassChar] = useState(false);
  const [passLength, setPassLength] = useState(false);
  const [passComplete, setPassComplete] = useState(false);

  const handleIndicator = () => {
    setShowIndicator(true)
  }

  const handlePasswordChange = (e) => {
    setPass(e.target.value);
  }


  useEffect(() => {
    //check lower and uppercase
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setPassLetter(true);
    } else
      setPassLetter(false);

    if (pass.match(/([0-9])/)) {
      setPassNumber(true);
    } else
      setPassNumber(false);

    if (pass.match(/([#,!,$,%,?,&,*,^,<,>,@,-, _, ~])/)) {
      setPassChar(true);
    } else
      setPassChar(false);

    if (pass.length > 7) {
      setPassLength(true);
    } else
      setPassLength(false);

    if (passLetter && passNumber && passChar && passLength) {
      setPassComplete(true);
    } else
      setPassComplete(false);

  }, [pass, passLetter, passChar, passNumber, passLength])
  return (
    <div className="main-container --flex-center">
      <div className="form-container">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Register</h2>
          <input type="text" className="--width-100" placeholder="Username" />
          <input type="email" className="--width-100" placeholder="Email" />
          <div className="password" >
            {/* Toggle password */}
            <input type={onShowPassword ? "text" : "password"} className="--width-100" placeholder="Password"
              onFocus={handleIndicator}
              value={pass}
              onChange={handlePasswordChange}
            />
            <span className="icon" onClick={onTogglePassword}>
              {onShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <button

            className={passComplete ? "--btn --btn-primary --btn-block" : "--btn --btn-primary --btn-block btn-disabled"}
            disabled={!passComplete}
          >Register</button>
          <span className="--text-sm --block">Have an account?{" "}
            <a href="#" className="--text-sm" onClick={onLogin}>Login</a>
          </span>
          {/* Password Strength indicator */}
          <div className={showIndicator ? "show-indicator" : "hide-indicator"}>
            <ul className="--list-style-none --card --bg-grey --text-sm --p">
              <p className="--text-sm">Password Strength Indicator</p>
              <li className={passLetter ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLetter ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Lowercase & Uppercase
                </span>
              </li>
              <li className={passNumber ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passNumber ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Numbers (0-9)
                </span>
              </li>
              <li className={passChar ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; Special characters (!@#$%^&*)
                </span>
              </li>
              <li className={passLength ? "pass-green" : "pass-red"}>
                <span className="--align-center">
                  {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  &nbsp; At least 8 characters
                </span>
              </li>
            </ul>
          </div>

        </form>
      </div>

      <div className="img-container">
        <img src={registerImg} alt="register" />
      </div>
    </div>
  )
}



export default Register
