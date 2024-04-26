/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub  } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const Login = () => {
   
   const {logIn, googleLogin, githubLogin} = useContext(AuthContext)
   const location = useLocation();
   const navigation = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
     useEffect(() => {
    document.title = "Login | Realm Rover";
  }, []);
   const handleLogIn = (e) => {

        e.preventDefault();
    
        const form = new FormData(e.currentTarget);
        
       
        const email =  form.get('email');
        const password =  form.get('password');
        logIn (email, password)
        .then (() => {
             toast.success('Successfully Login!');
             navigation(location?.state ? location.state : '/');
        })
        .catch (error => console.log(error))
      }
      const handleGoogleLogIn = (e) => {
        e.preventDefault();
        googleLogin()
        .then (() => {
          navigation(location?.state ? location.state : '/');
     })
         .catch (error => console.log(error))
      }

      const handleGithubLogIn = (e) => {
        e.preventDefault();
        githubLogin()
        .then (() => {
          navigation(location?.state ? location.state : '/');
     })
         .catch (error => console.log(error))
      }
    
    
      return (
        <>
        <Toaster />
         <h1 className="text-4xl text-center my-10 font-bold">Login Now!</h1>
        <div className="flex my-14 justify-center p-10">
            <div className="glass w-full md:w-1/2 xl:w-3/12 rounded-3xl">
            <form onSubmit={handleLogIn} className="card-body ">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative border rounded-4xl input input-bordered">
                        <input
                            className="w-full py-2"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            id="" required />
                        <span className="absolute top-3 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }

                        </span>
                    </div>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-cyan-400 border-none text-white">Login</button>
            </div>
            <div className="my-5">
                <p className="text-sm font-extralight"> Don't You Have An Account? <Link className="italic text-blue-400" to="/register">Register Now!</Link></p>
             </div>

             <hr />

             <div className="flex justify-center gap-2">
              <div onClick={handleGoogleLogIn} className="btn w-24"><FaGoogle /></div>
              <div onClick={handleGithubLogIn} className="btn w-24"><FaGithub /></div>
              
             </div>
          </form>
            </div>
             
        </div>
        
        </>
    );
};

export default Login;