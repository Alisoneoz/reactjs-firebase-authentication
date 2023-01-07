import Navigation from "./navigation/Navigation";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";

function App() {
  initializeApp(firebaseConfig);
  return (
      <div className="App bg-stone-400 h-screen w-screen">
      <Navigation />
    </div>
  );
}

export default App;
