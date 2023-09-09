import Link from 'next/link'
import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ['latin'],
    weight: '500',

});
export default function NotfoundPage() {
    return (
        
        <div className='flex flex-col items-center text-center mt-12 md:mt-24 gap-8 px-6 md:px-32'>          
            <h1 className='text-5xl sm:text-7xl font-bold'>404</h1>

                <p className='flex flex-col pad-8 pd:pd-4 md:text-xl'></p>
                <span>Oop, essa página não existe. splash! ... </span>
                <span>Clique no botao para voltar a pagina inicial</span>
                <Link href="/" className={`
                ${roboto.className}
                p-4 bg-h-blue-500 rounded-xl text-black mt-5 md:mt-12 md:text-xl w-fit
                `}>Ir para Pagina inicial</Link>
            
        </div>
        
    )
  }