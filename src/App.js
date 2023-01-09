import Navigation from "./navigation/Navigation";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "./redux/slices/authSlice"
import { useEffect } from "react";


function App() {
  initializeApp(firebaseConfig);
  const auth= getAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value);
  console.log("user from state", user)

  useEffect(() =>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined))
      }
    })
  })
  return (
      <div className="App bg-stone-400 h-screen w-screen">
        <Navigation />
      </div>
  );
}

export default App;
