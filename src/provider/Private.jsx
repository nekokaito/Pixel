
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/joy";

const Private = ({children}) => {
   
    const {user, loading, theme} = useContext(AuthContext);
      const location = useLocation();
      
     if(loading) {
               return (
                  <div className="flex justify-center items-center my-40">
                   
                    <CircularProgress color={theme === 'light'?  'danger' : 'neutral'} sx={{ '--CircularProgress-size': '80px' }}>
                    {
                        theme === 'light'? (<img className="w-10" src="/Pixel_Logo_fav.png"></img>) : (<img className="w-10" src="/Pixel_Logo_dark_fav.png"></img>)
                    }
</CircularProgress>
                    </div>
               )
     }

     if (user) {
        return children;
     }
    
     return <Navigate state={location.pathname} to="/login"></Navigate>
    
};

export default Private;