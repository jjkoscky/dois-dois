'use client';
import { useState } from "react";
import { useCallback } from 'react';

import Link from "next/link";
import Image from 'next/image'
import { Roboto } from "next/font/google";
import Menu from "./comum/menu";
import { MenuIcon } from "./icons/Menuicon";



const roboto = Roboto({
    subsets: ['latin'],
    weight: '500',

});

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = useCallback(() => {
        setIsMenuOpen(true);
    },[]);
    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    },[]);
    

    return (
        <div className={`
        ${roboto.className} 
        text-sm border-b-2 border-gray-700 flex py-3 px-5 justify-between items-center sticky top-0 z-20
        `}>
       { /*{isMenuOpen? <strong>batata</strong>:'banana'}*/}
        <Link href="/">
            <Image src="/react.png" alt="Icone React" width={55} height={55} />
        </Link>
        <button onClick={ev=>openMenu()} className="p-1 md:hidden">
            <MenuIcon className="w-10 h-10"/>
        </button>
        <nav className="hidden md:flex items-center gap-10 text-md">
            <Link href="/" >Sobre</Link>
            <Link href="/contato">Contato</Link>
        </nav>
        <Menu isVisible={isMenuOpen} onClose={closeMenu}/>
        </div>     
        
    )
  }

