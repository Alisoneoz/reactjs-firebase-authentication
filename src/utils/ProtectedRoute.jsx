import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProtectedRoute = ({children}) => {
    const user = useSelector((state) => state.auth.value);
    let location = useLocation();

    if(!user) {
      const notify= ()=> {toast.error("❌You must authenticate first to have access❗", {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })}
        return (
          
          <div>
            <Navigate to="/login" state={{ from: location}} replace />
            <ToastContainer />
          </div>
        )
        
    }
 return children

};

export default ProtectedRoute;