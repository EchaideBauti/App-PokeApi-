import React from 'react';
import styleFooter from '../Footer/Footer.module.css';
import github from '../imagenes/redes/github.png';
import discord from '../imagenes/redes/discord.png';
import linkedin from '../imagenes/redes/linkedin.png';
import mail from '../imagenes/redes/mail.png';
import whatsapp from '../imagenes/redes/whatsapp.png';

const Footer = () => {
    return(
        <div>
            <div className={styleFooter.conainerFooter}>
                <div >
                    <h3>©Bautista Echaide </h3>
                </div>
                
                <div className={styleFooter.containerRedes}>
                    <a href="https://github.com/EchaideBauti"><img src={github} alt="github"  /></a>
                    <a href="# "><img src={discord} alt="discord"  /></a>
                    <a href="mailto:tecladin98@gmail.com"><img src={mail} alt="mail"  /></a>
                    <a href="https://www.linkedin.com/in/bautista-echaide-fullstack/"><img src={linkedin} alt="linkedin"  /></a>
                    <a href="https://wa.me/543416361954"><img src={whatsapp} alt="whatsapp"  /></a>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;