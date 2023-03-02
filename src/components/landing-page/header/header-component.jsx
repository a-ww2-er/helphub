import Navbar from "../navbar/navbar-component";
import './header-component.css';
import { useState, useEffect } from "react";
import {FaHamburger} from 'react-icons/fa';

export default function HeaderComponent() {
    const [openNav, setOpenNav] = useState(false);

    // this use effect makes the navbar responsive on all kind of device 

    useEffect(() => {
        if(window.innerWidth > 699){
            setOpenNav(true)
        }
    }, [openNav])
    // this function helps open the menu whenever clicking the hamburge is clicked 
    function openMenu(){
        setOpenNav(!openNav)    
    }
    
  return (
    <section className="header">
      <aside>
        <a href="/">
          <h1>LOGO</h1>
        </a>
       {!openNav ? <FaHamburger onClick={openMenu} className="menu-icon" /> : <img src="" alt="close" onClick={openMenu} className="close menu-icon"/>}
      </aside>
      {openNav ? <Navbar /> : ""}
      {window.innerWidth > 699 ? <button>Donate Now</button> : ""}
    </section>
  );
}
