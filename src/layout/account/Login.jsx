import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Login = () => {
  const { logIn, googleLogin, githubLogin, theme } = useContext(AuthContext);
  const location = useLocation();
  const navigation = useNavigate();
  const [errorLogin, setErrorLogin] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Login | Pixel";
  }, []);

  const handleLogIn = async (e) => {
    e.preventDefault();
    setErrorLogin("");

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await logIn(email, password);
      navigation(location?.state || "/");
      toast.success("Successfully Login!");
    } catch (error) {
      setErrorLogin(error?.toString() || "Login failed");
    }
  };

  const handleGoogleLogIn = async (e) => {
    e.preventDefault();
    setErrorLogin("");

    try {
      await googleLogin();
      navigation(location?.state || "/");
      toast.success("Successfully Login!");
    } catch (error) {
      setErrorLogin(error?.toString() || "Google login failed");
    }
  };

  const handleGithubLogIn = async (e) => {
    e.preventDefault();
    setErrorLogin("");

    try {
      await githubLogin();
      navigation(location?.state || "/");
      toast.success("Successfully Login!");
    } catch (error) {
      setErrorLogin(error?.toString() || "GitHub login failed");
    }
  };

  return (
    <div className="my-48">
      <h1
        className={
          theme === "dark"
            ? "text-white text-4xl text-center my-10 font-bold font-pixel"
            : "text-black text-4xl text-center my-10 font-bold font-pixel"
        }
      >
        Login and{" "}
        <span className="text-[#3c1c33db]">
          <Typewriter
            words={["Join with Us", "Connect with Us", "Stay with Us"]}
            loop={10}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>

      <div className="flex my-14 justify-center p-10">
        <div className="bg-[#3c1c33db] w-full md:w-1/2 xl:w-3/12 rounded-3xl">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text text-white font-pixel">Email</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered font-pixel"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text text-white font-pixel">Password</span>
              </label>

              <div className="relative border rounded-4xl input input-bordered">
                <input
                  id="password"
                  className="w-full py-2 font-pixel"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="absolute top-3 right-2 cursor-pointer"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#ca678c] border-none text-white font-jersey"
              >
                Login
              </button>
            </div>

            {errorLogin && <p className="text-red-500 text-sm">{errorLogin}</p>}

            <div className="my-5">
              <p className="text-sm font-extralight text-white font-pixel">
                Don't You Have An Account?{" "}
                <Link className="italic text-[#ca678c]" to="/register">
                  Register Now!
                </Link>
              </p>
            </div>

            <hr />

            <div className="flex justify-center gap-2">
              <button
                type="button"
                onClick={handleGoogleLogIn}
                className="btn btn-circle w-24"
                aria-label="Login with Google"
              >
                <FaGoogle />
              </button>
              <button
                type="button"
                onClick={handleGithubLogIn}
                className="btn btn-circle w-24"
                aria-label="Login with GitHub"
              >
                <FaGithub />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
