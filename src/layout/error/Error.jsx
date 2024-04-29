import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

export default function Error() {
  
    const {theme} =  useContext(AuthContext);

  return (
    <div>
      <div className="mockup-window h-screen w-screen border bg-[#fafafc]">
        <div className="flex justify-center items-center flex-col gap-4">
            <div><img src="/error.gif" alt="" /></div>
            <div className=""><h1 className="text-4xl text-center font-extrabold">Error</h1>
            <p className="text-2xl text-center">Page Not Found</p>
            
            </div>
            <Link to="/"><button className="btn">Back to Home</button></Link>
        </div>
</div>
    </div>
  )
}
