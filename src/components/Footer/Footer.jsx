import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam iure inventore vitae error ea, reiciendis maxime quidem dolore fugiat et doloremque asperiores fugit quo repellendus!</div>
            </div>
            <div className="col"><div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow /> 
                <div className="text">Dhori staff quarter, phusro, Bokaro. 825102</div>
            </div>
            <div className="c-item">
                <FaMobileAlt /> 
                <div className="text">Phone: 0471 272 6446</div>
            </div>
            <div className="c-item">
                <FaEnvelope /> 
                <div className="text">Email: wavestore@gmial.com</div>
            </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Copyright © 2023 Wave Store Inc., All Rights Reserved.
                </div>
                <img src={Payment} alt="payment"/>
            </div>
        </div>
    </footer>;
};

export default Footer;
