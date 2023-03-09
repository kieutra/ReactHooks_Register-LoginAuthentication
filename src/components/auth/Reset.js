import restImg from "../../assets/forgot.svg"
import { AiOutlineClose } from "react-icons/ai"

function Reset({ onLogin }) {
  return (
    <div className="main-container --flex-center">

      <div className="form-container reset">
        <form className="--form-control">
          <h2 className="--color-danger --text-center">Reset Password</h2>
          <input type="email" className="--width-100" placeholder="Email" />
          <button className="--btn --btn-primary --btn-block">Reset Password</button>
          <span className="--text-sm --block --text-center">We will send you a reset link!
          </span>
          <div className="close" onClick={onLogin}>
            <AiOutlineClose color="red" />
          </div>
        </form>
      </div>

      <div className="img-container">
        <img src={restImg} alt="forgot" />
      </div>
    </div>
  )
}


export default Reset
