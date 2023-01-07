import { useState } from "react"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e)=>{
    e.preventDefault();
    console.log(e)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`Sihned in use: ${user}`);
    })
    .catch((error) => {
      const errorCode = error.Code;
      const errorMessage = error.message;
      console.log(`An error ocurred: ${errorCode}, ${errorMessage}`)
    })
  }

  return (
    <div>
      <form onSubmit={handleLogin} className="flex flex-col align-center
      justify-center w-2/3 sm:1/2 xl:w-1/3">
        <div className="flex flex-col bg-slate-500 p-5 align-center
      justify-center ">
          <label>Email</label>
          <input
            name="email" 
            value={email}
            type="email"
            placeholder="youremail@company.com"
            onChange={(e)=>{setEmail(e.target.value); console.log(e.target.value)}}
            className="mx-0  p-1 border rounded-md focus:border-slate-500 text-sm sm:text-base w-ful"
          />

          <label>Password</label>
          <input
            name="password" 
            value={password}
            type="password"
            placeholder="Insert your password here"
            onChange={(e)=>{setPassword(e.target.value); console.log(e.target.value)}}
            className="mx-0  p-2 border rounded-md focus:border-slate-500 text-sm sm:text-base w-ful"
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login