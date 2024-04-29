import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AuthContext } from "../../provider/AuthProvider";


const MiniBanner = () => {
    const {theme} = useContext(AuthContext)
    return (
        <div className=" my-36 p-5 md:p-0">
            <div className="rounded-2xl bg-[#000000ca] p-4">
        <div className='flex justify-center items-center flex-col gap-5'>
        <h1 className='text-2xl  md:text-5xl lg:text-7xl text-white font-bold font-jersey'>We are Serving {''}<span className={theme === 'dark'? 'text-[#ff5cb8]': 'text-[#d20723]'}><Typewriter
            words={['50K', '100K', '150K', '200K', '250K', '300K']}
            loop={10}
            cursor
            cursorStyle='+'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           /></span><br></br></h1>
<p className='text-2xl md:text-5xl text-white font-bold font-jersey'>Clients All Over</p>
        <h2 className=' text-2xl md:text-6xl lg:text-8xl text-white font-bold font-jersey'>Bangladesh</h2>
        

        </div>
        
       
      
      </div> 
        </div>
    );
};

export default MiniBanner;