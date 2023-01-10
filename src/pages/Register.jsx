import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 

  const auth = getAuth();
  const handleRegistration = ((e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      return (
        toast.error("❌Passwords don't match❗", {
          position: "top-center",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
      )
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered user: ", user)
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ocurred: ${errorCode}, ${errorMessage}`)
       
      })
  })
  return (
    <div>
      <form onSubmit={handleRegistration}>
        
        <div className="">
          <label>Email</label>
          <input 
            type="email"
            placeholder="email"
            value={email}
            name="email"
            onChange={(e)=>{setEmail(e.target.value); console.log(e.target.value)}}
           />

          <label>Password</label>
          <input 
            type="password"
            placeholder="password"
            value={password}
            name="password"
            onChange={(e)=>setPassword(e.target.value)}
           />
          
          <label>Confirm Password</label>
          <input 
            type="password"
            placeholder="Enter your password again, please"
            value={confirmPassword}
            name="confirm password"
            onChange={(e)=>setConfirmPassword(e.target.value)}
           />
        </div>
        <div className="">
          <button className="bg-slate-900 text-slate-300 p-2 rounded-lg">Register</button>
        </div>
        <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/login"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Already have an account? Login
              </Link>
            </div>
          </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Register