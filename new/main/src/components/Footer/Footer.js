import React from 'react';
import './Footer.css';
const Footer = ()=>{
    const now = new Date();
    const year = now.getFullYear();
    
    return (
        <div className = "footer">
            <h2>All Rights Reserved,{year}</h2>
            
        </div>
    );
};

export default Footer;