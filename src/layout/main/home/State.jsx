import { useContext, useEffect } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Aos from "aos";
import "aos/dist/aos.css";

const State = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    

    const {theme, user} = useContext(AuthContext);
    return (
        <div  className="flex flex-col md:flex-row justify-center items-center gap-10 my-52 px-10">
            <div data-aos="zoom-in-up" className={`grid md:grid-cols-3 rounded-2xl ${theme === 'light'? ' bg-white' : 'bg-black'}  shadow h-[500px] md:h-[200px]`}>
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title font-pixel">Total Client</div>
    <div className="stat-value text-primary font-roboto">300K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title font-pixel">Page Views</div>
    <div className="stat-value text-secondary font-roboto">2.6M</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        {
            user? (<div className="w-16 rounded-full">
            <img src={user?.photoURL} />
          </div>) : (<div className="hidden"></div>)
        }
        
      </div>
    </div>
    <div className="stat-value font-roboto">86%</div>
    <div className="stat-title font-pixel font-roboto">Tasks done</div>
    <div className="stat-desc text-secondary">31 tasks remaining</div>
  </div>
  
</div>
<div data-aos="zoom-in-up" className={`stats h-[200px] ${theme === 'light'? ' bg-white text-black' : 'bg-black text-white'} text-primary-content`}>
  
  <div className="stat">
    <div className="stat-title  font-pixel">Total Sell</div>
    <div className={`stat-value ${theme === 'light'? '  text-black' : 'text-white'} font-roboto`}>1590789 ৳</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-title  font-pixel">Funds</div>
    <div className={`stat-value ${theme === 'light'? '  text-black' : 'text-white'} font-roboto`}>5780 ৳</div>
    
  </div>
  
</div>
        </div>
    );
};

export default State;