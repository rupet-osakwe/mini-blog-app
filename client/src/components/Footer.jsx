import React from 'react'
import { FcBusinessman } from "react-icons/fc";
import { FaHeart } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer'>
            <footer>  <FcBusinessman className='footer-img' /></footer>
            <span>Made with <FaHeart className='hearth-logo' /> by Rupet</span>
        </div>
    )
}

export default Footer