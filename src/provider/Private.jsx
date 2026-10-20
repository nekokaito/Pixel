
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({children}) => {
   
    const {user, loading, theme} = useContext(AuthContext);
      const location = useLocation();
      
     if (loading) {
        return <LoadingSpinner theme={theme} />;
     }

     if (user) {
        return children;
     }
    
     return <Navigate state={location.pathname} to="/login"></Navigate>
    
};

export default Private;