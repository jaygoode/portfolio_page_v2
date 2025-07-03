import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
} from "react-icons/rx";

import { FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
        
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo size={24} />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaLinkedin size={24} color="#ccc"/>
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                 
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaEnvelope size={24} color="#ccc"/>
                        <span className="text-[15px] ml-[6px]">johnny_nyl@hotmail.com</span>    
                    </p>
                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Footer