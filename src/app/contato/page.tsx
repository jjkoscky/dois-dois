import Link from "next/link";
import Header from "../components/header";
import { Mail, Linkedin,Github } from 'lucide-react';

import { CopyButton } from "../components/comum/copybutton";


export default function ContatoPage() {
    return (
        <div>
        <Header />
        <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-5 md:dx-32">
        
           <h1 className="text-5xl md:text-7xl font-bold text-center">Contato</h1>
           <ul className="table mx-auto space-y-6 md:space-y-8">
            <li className="md:text-xl">
                <span  className="font-bold flex"><Mail className="mr-2"/> E-mail</span >
                
                <div className="flex gap-1 md:gap-3 items-center">
                    <a href='mailto:jjunior.koscky@gmail.com' className="text-sm md:text-lg text-slate-300 underline truncate">jjunior.koscky@gmail.com</a>
                    <CopyButton textToCopy="jjunior.koscky@gmail.com"/>
                </div>
                <div>
                    <Link href="/" className="text-sm md:text-lg text-slate-300 underline truncate">Voltar para Home</Link>
                </div>
            </li>
            <li className="md:text-xl">
                <span  className="font-bold flex"><Linkedin className="mr-2"/>Linkedin</span >
                <div className="flex gap-1 md:gap-3 items-center">
                    <a target="_blank" href='https://www.linkedin.com/in/jefferson-koscky-jr/' className="text-sm md:text-lg text-slate-300 underline truncate">link do linkedin</a>
                </div>
            </li>
            <li className="md:text-xl">
                <span  className="font-bold flex"><Github className="mr-2"/>Github</span >
                <div className="flex gap-1 md:gap-3 items-center">
                    <a target="_blank" href='https://github.com/jjkoscky' className="text-sm md:text-lg text-slate-300 underline truncate">link do Github</a>
                </div>
            </li>
            </ul>
        </div>
        </div>
        
    )
  }
