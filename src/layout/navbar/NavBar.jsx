import { AiOutlineLogin } from "react-icons/ai";
import { MdAppRegistration } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Theme from "../../components/darkmode/Theme";
import { Tooltip } from 'react-tooltip'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { RiLogoutCircleLine } from "react-icons/ri";
import toast, { Toaster } from 'react-hot-toast';
const NavBar = () => {

  const {user, logOut, theme} = useContext(AuthContext);

   const handleLogOut = () => {
    logOut()
    .then(
      toast.success('Logged Out Successfully')
    )
    .catch()
   }
   
    const links = <div className="md:flex gap-3 font-pixel">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all_items">All Art & craft Items</NavLink></li>
        <li><NavLink to="/add_items">Add Craft Item</NavLink></li>
        <li><NavLink to="/my_items">My Art&Craft List</NavLink></li>
        

    </div>

    return (
        <nav>
           
           <div className="navbar bg-[#3c1c33db]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className={theme === 'light'? 'text-black menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52' : 'text-white menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52' }>
       {links}
      </ul>
    </div>
    {theme === 'light'? (<img className=" w-28" src="Pixel_Logo.png" alt="" />) : (<img className=" w-28" src="Pixel_Logo_dark.png" alt="" />)}
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    {
      user? (<>
  


<div tabIndex={0} role="button" className=" rounded-full btn btn-ghost btn-circle avatar tooltip tooltip-bottom hover:bg-transparent " data-tip={user?.displayName}>
    
    <div className="rounded-full ">
      <img alt={user?.displayName} src={user?.photoURL} />
      
    </div>
  </div>

  <Link to="/login"><button onClick={handleLogOut} className="btn btn-circle logout"><RiLogoutCircleLine /></button></Link> 
  <Tooltip anchorSelect=".logout" place="bottom">
Logout
</Tooltip>

      </> ) :  ( <>

      <Link to="/login" className="btn btn-circle login"><AiOutlineLogin />
      </Link>
      <Link to="/register" className="btn btn-circle reg"><MdAppRegistration />
      </Link>
      <Tooltip anchorSelect=".login" place="bottom">
  Login
</Tooltip>
<Tooltip anchorSelect=".reg" place="bottom">
Registration
</Tooltip>
      </>)
    }
    
    <button className="btn btn-circle"><Theme></Theme></button> 
  </div>
</div>
 </nav>
    );
};

export default NavBar;