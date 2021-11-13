import React from 'react';
import { FaFacebook, FaInstagram, FaMailBulk, FaMapMarkerAlt, FaPhoneAlt, FaTwitter, FaWhatsapp } from "react-icons/fa";
import './Footer.css';
const Footer = () => {
    return (
        <div className="mb-0 bg-gray-700 text-white font-sans text-center 
        p-3 flex flex-col justify-center sm:mb-0 footer-div">
            <div className="mx-auto grid lg:grid-cols-3 sm:grid-cols-1 w-10/12 pt-5 pb-4 items-center justify-items-center text-center">
                <div className="mx-auto w-full h-full">
                    <h2 className="text-xl font-medium p-2 text-red-500 font-caveat">Nakshi Craft LTD</h2>
                    <hr />
                    <p className="text-sm font-medium p-1 mx-auto w-12/12 font-concertone ">
                        Nakshi Crafts is one stop online information center on BD's handicraft legacy and tradition. We offer complete and comprehensive information on BD's traditional crafts ranging from stone craft, woodcrafts, metal crafts, textiles, paintings, jewelry to crafts village and exclusive handicraft traditions of different Districts of Bangladesh.
                    </p>
                    <p className="text-sm font-semibold italic p-2 mt-4">@all rights reserved to shudipto 2021</p>
                </div>
                <div className="mx-auto w-full flex flex-col justify-evenly items-center mb-8">
                    <div className="my-4 w-6/12 mx-auto flex justify-evenly items-center ">
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaWhatsapp></FaWhatsapp>
                        <FaTwitter></FaTwitter>
                    </div>
                    <div className="mx-auto w-full flex flex-col items-center">
                        <h2 className="text-xl font-medium p-2">Nakshi Crafts Limited</h2>
                        <h2 className="text-sm font-medium p-1">House-1, Road-5,Section-12</h2>
                        <h2 className="text-sm font-medium p-1">Banani, Dhaka-1514, Bangladesh</h2>
                    </div>
                </div>
                <div className="mx-auto w-full h-full">
                    <h2 className="text-xl font-medium p-2 text-white font-concertone">Important Links</h2>
                    <hr />
                    <div className="mt-9 grid grid-cols-2 justify-around items-center">
                        <h2>About Us</h2>
                        <h2>Blogs</h2>
                        <h2>Gazzets</h2>
                        <h2>New Initiavies</h2>
                        <h2>Career</h2>
                        <h2>Volunteer</h2>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;