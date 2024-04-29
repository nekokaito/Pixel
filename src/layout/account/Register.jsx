import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub  } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import { updateProfile } from "firebase/auth";

const Register = () => {

    const {createUser, googleLogin, githubLogin, theme} = useContext(AuthContext)
   const location = useLocation();
   const navigation = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   const [errorReg, setErrorReg] = useState('');
     useEffect(() => {
    document.title = "Register | Pixel";
  }, []);

  
   useEffect(() => {
    document.title = "Register | Realm Rover";
  }, []);
   const handleReg = (e) => {

    e.preventDefault();

    const form = new FormData(e.currentTarget);
    
    const name =  form.get('name');
    const email =  form.get('email');

    const photoUrl =  form.get('photo-url');
    const password =  form.get('password');


    setErrorReg('');

    if (!/.{6,}/.test(password)) {
      setErrorReg(
        "Length must be at least 6 character"
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorReg(
        "Must have an Uppercase letter in the password"
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setErrorReg(
        "Must have a Lowercase letter in the password"
      );
      return;
    }

    createUser(email, password)
    .then((result) => {
       updateProfile(result.user, {
        displayName: name,
        photoURL: photoUrl,
      })
      .then (() => {
        toast.success('Registration Completed');
        navigation(location?.state ? location.state : '/');
   })
        .catch();

  
    })
    .catch((error) => {
      console.error(error);
      setErrorReg(error.message);
    });

   }
   
      const handleGoogleLogIn = (e) => {
        e.preventDefault();
        googleLogin()
        .then (() => {
          navigation(location?.state ? location.state : '/');
          toast.success('Successfully Login!');
     })
         .catch (error => console.log(error))
      }

      const handleGithubLogIn = (e) => {
        e.preventDefault();
        githubLogin()
        .then (() => {
          navigation(location?.state ? location.state : '/');
          toast.success('Successfully Login!');
     })
         .catch (error => console.log(error))
      }
    

    return (
        <div className="my-48">
        <Toaster />
         {/* <h1 className="text-4xl text-center my-10 font-bold">Login Now!</h1> */}
         <h1 className={theme === 'dark'? 'text-white text-4xl text-center my-10 font-bold font-pixel' : 'text-black text-4xl text-center my-10 font-bold font-pixel'}>
       Create and {' '}
        <span className="text-[#3c1c33db]">
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Join with Us', 'Connect with Us', 'Stay with Us']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           />
        </span>
      </h1>
        <div className="flex my-14 justify-center p-10">
            <div className="bg-[#3c1c33db] w-full md:w-1/2 xl:w-3/12 rounded-3xl">
            <form onSubmit={handleReg} className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-pixel">Name</span>
              </label>
              <input  type="text" name="name" placeholder="name" className="input input-bordered font-pixel" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-pixel">Email</span>
              </label>
              <input  type="email" name="email" placeholder="email" className="input input-bordered font-pixel" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-pixel">Photo Url</span>
              </label>
              <input  type="text" name="photo-url" placeholder="url" className="input input-bordered font-pixel" required />
            </div>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white font-pixel">Password</span>
              </label>
              <div className="relative border rounded-4xl input input-bordered">
                        <input
                            className="w-full py-2 font-pixel"
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
              <button className="btn bg-[#ca678c] border-none text-white font-jersey">Create Account</button>
            </div>
            <div>
          <p className=" text-red-500 text-sm"> {errorReg}</p>
        </div>
            <div className="my-5">
                <p className="text-sm font-extralight text-white font-pixel"> Already Have An Account? <Link className="italic text-[#ca678c]" to="/login">Login Now!</Link></p>
             </div>

             <hr />

             <div className="flex justify-center gap-2">
              <div onClick={handleGoogleLogIn} className="btn btn-circle w-24"><FaGoogle /></div>
              <div onClick={handleGithubLogIn} className="btn btn-circle w-24"><FaGithub /></div>
              
             </div>
          </form>
            </div>
             
        </div>
        
        </div>
    );
};

export default Register;