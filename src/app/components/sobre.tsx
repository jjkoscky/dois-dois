import Link from "next/link";
import Image from 'next/image'
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',

});

export default function Sobre() {
    return (
        <div className={`
        flex flex-wrap-reverse justify-center items-center gap-10 
        md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between
        `}>
        <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[80px] bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text">Olá! Sou&nbsp;
            <strong className="font-bold">Jefferson</strong>
        </h1>
        
        
            <div className="mb-12 ">
                <h2 className={`
                ${roboto.className} 
                mb-12
                `}>
                    Sou um desenvolvedor Front-end em estudo. Gosto de conhecer novas linguagens e frameworks. 
                    Também gosto de desenvovler para Games!
                    </h2>
                <Link href="/contato" className="p-3 bg-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse Comigo</Link>
            </div>
            <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
                <li style={{backgroundColor: '#2F74C0', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Typescrit</li>
                <li style={{backgroundColor: '#6BDDFA', color: '#000000'}} className="w-fit p-2 rounded-md">React</li>
                <li style={{backgroundColor: '#EFD81D', color: '#000000'}} className="w-fit p-2 rounded-md">Javascript</li>
                <li style={{backgroundColor: '#040821', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Next.js</li>
                <li style={{backgroundColor: '#080808 ', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">GML</li>
            </ul>
            </div>
            <div className="relative">
                <Image src="/me.jpg"
                alt="JJ"
                unoptimized
                width={500}
                height={500}
                priority
                className="rounded-full"
                />
                <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[12px] sm:bottom-3">
                    <span className="text-4xl">2+</span>
                    <br />
                    Anos de experiencia
                </p>
            </div>
        
        </div>
        
        
    )
  }

