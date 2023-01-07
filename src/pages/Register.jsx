import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
//import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = getAuth();
  const handleRegistration = (() => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log(`Registered user: ${user}`)
        setEmail("");
        setPassword("");
        //navigate("/home") 
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ocurred: ${errorCode}, ${errorMessage}`)
        setError(error);
      })
  })
  return (
    <div>
      <form onSubmit={handleRegistration}>
        {error && <p>this error ocurred: {error}</p>}
        <div className="">
          <label>Email</label>
          <input 
            type="email"
            placeholder="email"
            value={email}
            name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
           />

          <label></label>
          <input 
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={(e)=>{setPassword(e.target.value)}}
           />
        </div>
        <div className="">
          <button className="bg-slate-900 text-slate-300 p-2 rounded-lg">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register