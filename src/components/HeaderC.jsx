import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "/favicon.ico"

const HeaderC = () => {
  const [menuToggle,setMenuToggle]=useState(false);
    const [headerFixed,setHeaderFixed]=useState(false);
    
    // addeventListener
    window.addEventListener("scroll",()=>{
        if(window.scrollY>200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4`}>
    <div>
            <div className='container'>
                <div className='header-wrapper'>
                    {/*logo*/}
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to={"/"}>
                                <img src={logo} alt="FAOU" height="90" width="90"/>
                            </Link>
                        </div>
                    </div>
                    {/* menu area */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle?"active":""}`}>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><a href="#inspiration">Inspirations</a></li>
                                <li><a href="#about">About</a></li>
                                {/*<li><Link to={"/"}>Blog</Link></li>*/}
                                <li><a href="#contact">Contact Us</a></li>
                                {/*<li><Link to={"/"}>Contact Us</Link></li>*/}
                            </ul>
                        </div>

                        {/*menu toggler */}
                        <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active":""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </header>
  )
}

export default HeaderC