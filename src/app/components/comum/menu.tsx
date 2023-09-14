import { MenuClose} from "../icons/MenuCloseIcon";
import Image from "next/image";
import Link from "next/link";
import { ReactIconF } from "../icons/ReactIcon";

interface MenuProps {
    isVisible: boolean;
    onClose: () => void;
}

export default function Menu({isVisible, onClose}: MenuProps) {
    return (
        <div className={`${isVisible ? 'flex': 'hidden'}
        fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden
        `} onClick={ev=>onClose()}>
            <div className="w-full bg-[#121113] h-96 shadow-md py-4 px-5 fixed " onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between mb-5 ">
                    <Link href="/">
                        <ReactIconF />
                        
                    
                    </Link>
                    <button onClick={ev=>onClose()}>
                    <MenuClose className="w-10 h-10"/>
                    </button>
                </div>            
                <nav className="flex flex-col gap-5 text-xl p-5 items-center">
                    <Link href="/">Home</Link>
                    <Link href="/contato">Contato</Link>
                </nav>
            </div>
        </div>
    )
}