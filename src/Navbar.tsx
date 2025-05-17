import { IoMdHome } from "react-icons/io";
import { MdChevronRight, MdGames } from "react-icons/md";
import { MdBeachAccess } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import avatarImg from './assets/img/avatar.jpg';
import logo from './assets/img/logo.png'
import React, { useState } from "react";
import  LogoFull  from './assets/img/logo-full.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen) ;
    }
    return (
        <>
        <button onClick ={toggleMenu} className={`fixed bottom-4 left-10 z-50 rounded-md bg-red-50 text-black ${isOpen ? 'hidden' : 'block'}`}>
            <MdChevronRight />
        </button>
            <nav className={`bg-[#FFDDD2] w-[50px] absolute h-full transition-all duration-300 ease-in-out ${isOpen ? 'w-[180px]' : 'w-[50px]'}`}>

                <div className="">
                    <img src={logo} className={`absolute top-15 ${isOpen ? 'hidden' : 'block'}`}  alt="logo"></img>
                    {isOpen && <img src={LogoFull} className="absolute top-15 "></img>}
                </div>
                
                <ul className={`absolute top-60 space-y-8 ${isOpen ? 'left-5' : 'left-2'}`}>
                        <li>
                            <a href="#"  className="flex items-center gap-3">
                                <i><IoMdHome size={30} /></i>
                                {isOpen && <span className="font-semibold">home</span>}
                            </a>
                        </li>
                    <li>
                        <a href="#" className="flex items-center gap-3">
                            <i> <MdGames size={30} /></i>
                            {isOpen && <span className="font-semibold">jogos</span>}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3">
                            <i> <MdBeachAccess size={30}/></i>
                            {isOpen && <span className="font-semibold">rolês</span>}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3">
                            <i> <IoMdChatboxes size={30}/></i>
                            {isOpen && <span className="font-semibold">feed</span>}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3">
                            <i> <MdContactSupport size={30}/></i>
                            {isOpen && <span className="font-semibold">suporte</span>}
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center gap-3">
                            <i> <IoMdSettings size={30}/></i>
                            {isOpen && <span className="font-semibold">ajustesz</span>}
                        </a>
                    </li>
                </ul>
            <img src="" alt="" />
            
            <div className={` rounded-full absolute bottom-10 ${isOpen ? 'left-4' : 'left-1'} flex items-center`}>
                <a className="flex items-center gap-3">
                    <img src={avatarImg} alt="" className="rounded-full h-[40px] w-[40px]" />
                    {isOpen && <span className="text-sm font-medium">Guismoke22</span>}
                    {/* {isOpen && <span className="text-sm font-medium">editar perfil</span>} */}
                </a>
            </div>
            </nav>
            {isOpen && (
                <div className="fixed inset-0 z-10 left-[180px]" onClick={toggleMenu} />
            )}
        </>
    )
    
}

export default Navbar