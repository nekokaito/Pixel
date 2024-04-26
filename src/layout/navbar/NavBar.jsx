import { AiOutlineLogin } from "react-icons/ai";
import { MdAppRegistration } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Theme from "../../components/darkmode/Theme";
import { Tooltip } from 'react-tooltip'

const NavBar = () => {
   
    const links = <div className="md:flex gap-3">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allitems">All Art & craft Items</NavLink></li>
        <li><NavLink to="/additems">Add Craft Item</NavLink></li>
        <li><NavLink to="/myitems">My Art&Craft List</NavLink></li>
        

    </div>

    return (
        <nav>
           
           <div className="navbar bg-[#3c1c33db]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
       {links}
      </ul>
    </div>
    <img className=" w-28" src="Pixel_Logo.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <Link className="btn btn-circle login"><AiOutlineLogin /></Link>
    <Link className="btn btn-circle reg"><MdAppRegistration /></Link>
    <button className="btn btn-circle"><Theme></Theme></button> 
  </div>
</div>
<Tooltip anchorSelect=".login" place="bottom">
  Login
</Tooltip>
<Tooltip anchorSelect=".reg" place="bottom">
Registration
</Tooltip>


        </nav>
    );
};

export default NavBar;