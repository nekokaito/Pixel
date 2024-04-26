
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext(null);


const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null)
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


    const authInfo = {user, createUser, logOut, logIn, loading, googleLogin, githubLogin, updateUserProfile}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;