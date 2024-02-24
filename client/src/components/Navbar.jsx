import React from 'react';
import { Link } from 'react-router-dom'
import { BiLogoPostgresql } from "react-icons/bi";
import Footer from './Footer';




const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container' >
                <div  ><BiLogoPostgresql className='logo' /></div>
                <div className='home' >Home</div>
                {/* <div ><Footer /></div> */}
                <div className='links-container'>
                    <div className='links' ><Link to='home/?cat=art' className='link' >Art</Link></div>
                    <div className='links' ><Link to='home/?cat=design' className='link' >Design</Link></div>
                    <div className='links' ><Link to='home/?cat=science' className='link' >Science</Link></div>
                    <div className='links' ><Link to='home/?cat=cinema' className='link' >Cinema</Link></div>
                    <div className='links' ><Link to='home/?cat=food' className='link' >Food</Link></div>
                </div>
                <span>Rupet</span>
                <span>Logout</span>
                <button className='create-post-button'><Link className='link link-button' to='/create-post'>Create Post</Link></button>
            </div>

        </div>
    )
}

export default Navbar