
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);


const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
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
        //#59b6d8
        //#4b4c86

        const body = document.querySelector("body");
        body.style.transition = "background-image 0.5s, opacity 0.5s";
        body.style.backgroundColor =
          theme === "dark"
            ? "#4b4c86" // Change to your dark background image path
            : "#59b6d8"; // Change to your light background image path
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        body.style.opacity = theme === "dark" ? "0.8" : "1";
        
      }, [theme]);

      useEffect(() => {
       
        const lightFaviconPath = "Pixel_Logo_fav.png";
        const darkFaviconPath = "Pixel_Logo_dark_fav.png";
    
      
        const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
        favicon.type = 'image/x-icon';
        favicon.rel = 'icon';
    
        
        favicon.href = theme === "dark" ? darkFaviconPath : lightFaviconPath;
    
        
        document.head.appendChild(favicon);
    
        
        return () => {
            document.head.removeChild(favicon);
        };
    }, [theme]);
    


      const changeTheme = (e) => {
        const sound = new Audio ('change.mp3')
        setTheme(e.target.checked ? "dark" : "light");
        sound.play();

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