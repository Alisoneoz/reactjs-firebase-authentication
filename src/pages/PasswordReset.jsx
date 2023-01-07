import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const handleReset = (e)=>{
    e.preventDefault();
    sendPasswordResetEmail(auth,email)
      .then(()=>{
        console.log("success")
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`An error has ocurred: ${errorCode}, ${errorMessage}`)
      })
  }
  return (
    <div>
      <form onSubmit={handleReset}>
        <label>Reset your password</label>
        <input value={email} 
          name="email" 
          placeholder="youremail@company.com"
          onChange={(e)=>{setEmail(e.target.value)}}/>
        <div>
          <button>Send me the instructions to my email!</button>
        </div>
      </form>
    </div>
  )
}

export default PasswordReset