
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null)
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
     );
     useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
      }, [theme]);
   
      useEffect(() => {
        localStorage.setItem("theme", theme);
        document.querySelector("html").setAttribute("data-theme", theme);
    
        // Set background image based on the theme
        
        const body = document.querySelector("body");
        body.style.transition = "background-image 0.5s, opacity 0.5s";
        body.style.backgroundImage =
          theme === "dark"
            ? "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3955b514-aadc-4d7d-8248-71fc5b9c30ce/dg39dc3-55810788-e69f-48db-bf61-a92401dd34d2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5NTViNTE0LWFhZGMtNGQ3ZC04MjQ4LTcxZmM1YjljMzBjZVwvZGczOWRjMy01NTgxMDc4OC1lNjlmLTQ4ZGItYmY2MS1hOTI0MDFkZDM0ZDIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sEqfj98mUXPDJNx009a8nG6r4k45Kumg8c9H0cYO2wc')" // Change to your dark background image path
            : "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/089d21ad-7782-4104-89c2-a65435feaa61/d99amhi-7bdd97ff-1540-4882-9f06-4d845e750b1e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4OWQyMWFkLTc3ODItNDEwNC04OWMyLWE2NTQzNWZlYWE2MVwvZDk5YW1oaS03YmRkOTdmZi0xNTQwLTQ4ODItOWYwNi00ZDg0NWU3NTBiMWUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vHmbGUBcVtAAhF8JzETh1iq_HoBH9GAQe3G202atTso')"; // Change to your light background image path
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        body.style.opacity = theme === "dark" ? "0.8" : "1";
      }, [theme]);


      const changeTheme = (e) => {
        setTheme(e.target.checked ? "dark" : "light");
      };

    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
             return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const logIn =( email, password) => {
        setLoading(true);
           return signInWithEmailAndPassword (auth, email, password);
    }
    
    const googleLogin =  () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider)
    }
    const githubLogin =  () => {
        setLoading(true);
        return signInWithPopup(auth, GithubProvider)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
      };
    useEffect(()=> {
       const unSubscribe = onAuthStateChanged (auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {user, createUser, logOut, logIn, loading, googleLogin, githubLogin, updateUserProfile, theme, changeTheme}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;