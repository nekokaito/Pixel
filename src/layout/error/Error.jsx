
import { Link } from "react-router-dom";


export default function Error() {
  
   

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
