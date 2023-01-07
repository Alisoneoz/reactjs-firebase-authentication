import { getAuth, signOut } from "firebase/auth"

const Logout = () => {
  const auth = getAuth();

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out")
      })
      .catch((error) => {
        console.log("error", error)
      })
  }
  return (
    <div><button onClick={handleClick}>Logout</button></div>
  )
}

export default Logout