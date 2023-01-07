import { useState } from "react"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event)=>{

  }

  const handleUserRegistration = (e)=>{
    e.preventDefault();
    console.log(e)
  }

  return (
    <div>
      <form onSubmit={handleUserRegistration} className="flex flex-col align-center
      justify-center w-2/3 sm:1/2 xl:w-1/3">
        <div className="flex flex-col bg-slate-500 p-5 align-center
      justify-center ">
          <label>Email</label>
          <input
            name="email" 
            value={user.email}
            type="email"
            placeholder="youremail@company.com"
            onChange={handleChange}
            className="mx-0  p-1 border rounded-md focus:border-slate-500 text-sm sm:text-base w-ful"
          />

          <label>Password</label>
          <input
            name="password" 
            value={user.password}
            type="password"
            placeholder="Insert your password here"
            onChange={handleChange}
            className="mx-0  p-2 border rounded-md focus:border-slate-500 text-sm sm:text-base w-ful"
          />
        </div>
        
      </form>
    </div>
  )
}

export default Login