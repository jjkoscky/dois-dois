'use client';
import Link from "next/link";
import Image from 'next/image'
import { Roboto } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { GithubeIcon } from "./icons/GithubIcon";



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
        <div>
        <TypeAnimation
                sequence={[
                // Same substring at the start will only be typed out once, initially
                'Web Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                // Same substring at the start will only be typed out once, initially
                'Front-end',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                ]}
                wrapper="span"
                speed={50}
                style={{display: 'inline-block'}}
                repeat={Infinity}
                className="text-2xl md:text-4xl"
            />
        </div>
        
            <div className=" ">
                <h2 className={`
                ${roboto.className} 
                mb-10 text-justify
                `}>
                    {/*Formado em Artes Visuais, retorno a area de desenvolvimento Web em 2023. 
                    Sou um desenvolvedor Front-end com expericência de trabalhar em empresas e grupos. 
                    Gosto de conhecer novas linguagens e frameworks, por hobie, gosto de guitarras e surfar.  */}
                    Sou formado em Artes Visuais pela Universidade Federal do ES, trabalhei 3 anos como Desenvolvedor Web. 
                    Tenho experiência profissional em desenvolver para empresas de diversos tamanhos e setores. 
                    Estou sempre em busca de aperfeiçoar meu conhecimento por meio do estudo de novas linguagens e frameworks.
                    Moro em Vila Velha no Espírito Santo e gosto de tecnologia, guitarras e surfe. 
                    </h2>
            </div>
            <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 xl:w-fit gap-3 text-xl mb-10">
            <li style={{backgroundColor: '#ea5d24', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Html 5</li>
            <li style={{backgroundColor: '#6BDDFA', color: '#000000'}} className="w-fit p-2 rounded-md">React</li>
            <li style={{backgroundColor: '#8bbf3d', color: '#000000'}} className="w-fit p-2 rounded-md">Node.Js</li>
            <li style={{backgroundColor: '#202124', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Github</li>
            <li style={{backgroundColor: '#040821', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Next.js</li>
            <li style={{backgroundColor: '#2F74C0', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Typescript</li>
            <li style={{backgroundColor: '#EFD81D', color: '#000000'}} className="w-fit p-2 rounded-md">Javascript</li>
            <li style={{backgroundColor: '#080808 ', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">GML</li>
            <li style={{backgroundColor: '#0ea5e9', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Tailwind</li>
            <li style={{backgroundColor: '#00d1b2 ', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Bulma</li>
            <li style={{backgroundColor: '#bf4080 ', color: '#FFFFFF'}} className="w-fit p-2 rounded-md">Sass</li>
            </ul>
            <div className=" flex grid-cols-3 gap-3">
                <Link href="/contato" className="p-3 bg-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80">Converse Comigo</Link>
                
                <a target="_black" href="https://www.linkedin.com/in/jefferson-koscky-jr/" className="">
                    <LinkedinIcon />
                </a>
                <a target="_blank" href=" http://github.com/jjkoscky">
                    <GithubeIcon />
                </a>
            </div>
            </div>
            <div className="relative">
                <Image src="/me.jpg" 
                alt="JJ"
                unoptimized
                width={500}
                height={500}
                priority
                className="rounded-full border-2 border-gray-700"
                />
                <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[12px] sm:bottom-3">
                    <span className="text-4xl">3+</span>
                    <br />
                    Anos de experiencia
                </p>
            </div>
        
        </div>
        
        
    )
  }

