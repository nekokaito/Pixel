import { FaFacebook,  FaYoutube,  FaInstagram} from "react-icons/fa";



const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#3c1c33db]  text-white">
  <aside>
<img className="w-32" src="Pixel_Logo_Footer.png" alt="" />
<div>

<p className="font-bold  font-pixel">
      Art For Every Soul <br/> <small>Shop 10, The Grand Plaza Shopping Mall <br/> Moghbazar, Dhaka -1217, Bangladesh</small>
    </p> 

</div>
    
    <p className="font-jersey mt-5">01992-636297 | pixelsultra@gmail.com</p>
    <p className="mt-5 font-jersey ">Copyright © 2024 - All right reserved by <a className="font-bold" href="https://github.com/nekokaito">Siddiq Sazzad</a></p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-5">
     <a target="_blank" href="https://www.facebook.com/pixelsultra"><FaFacebook size={30}/></a>
     <a target="_blank" href="https://www.instagram.com/pixels.ultra/"><FaInstagram size={30}/></a>
     <a target="_blank" href="https://www.youtube.com/watch?v=8LrNUSvWRUA"><FaYoutube size={30}/></a>
    </div>
  </nav>
</footer>
    );
};

export default Footer;