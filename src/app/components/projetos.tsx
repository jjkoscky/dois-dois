import { Projeto } from "@/types/home";
import Image from "next/image";
import Link from "next/link";

interface ProjetosProps {
    projetos: Projeto[];
}
export function Projetos({projetos} : ProjetosProps)  {
    return(
        <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left pb-12">
          <h2 className="text-2xl md:text-4xl">Projetos Realizados</h2>

          <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
            {projetos.map(({slug, name, image}, index) => (
           /* <Link href={`/projetos/${slug}`} key={name + index }>*/
           <Link target="_blank" href={`https://${slug}`} key={name + index }>
                <li className="text-md relative">
                    <Image src={image.url} alt={image.alt} width={300} height={300} className="object-cover rounded-2xl h-[12.71rem] mb-4"/>
                    <span>{name}</span>
                    <div className="bg-h-blue-500 rounded-xl w-14 h-14 text-center flex justify-center items-center text-3xl absolute bottom-[1.25rem] -right-[1.25rem]">
                        <span>{index + 1 }</span>
                    </div>
                </li>
            </Link>
            ))}
        </ul>
        
    </article>
    );
};

