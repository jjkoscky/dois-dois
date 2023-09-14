import Header from './components/header'
import Sobre from './components/sobre'
import { Projetos } from './components/projetos'
 
function IndexPage() {
  const projetos = [
    {
      slug: 'marteattack',
      name: 'Marte Attack',
      image:{
        url: 'https://i.imgur.com/zR05d69.png',
        alt: 'Pagina inicial do projeto',
      },
    },
    {
      slug: 'lovemagikarp',
      name: 'LoveMagikarp',
      image:{
        url: 'https://i.imgur.com/gafuXYt.png',
        alt: 'Pagina inicial do projeto',
      },
    },
    {
      slug: 'afterformat',
      name: 'AfterFormat',
      image:{
        url: 'https://i.imgur.com/TSRZwv8.png',
        alt: 'Pagina inicial do projeto',
      },
    },
  ];

  return (
    <main>
    <Header />
      <div className='px-6 md:px-32 space-y-10 md:space-y-16'>
          <Sobre />
          <Projetos projetos={projetos}/>
      </div>   
    </main>
  )
}
 
export default IndexPage

