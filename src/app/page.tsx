import Header from './components/header'
import Sobre from './components/sobre'

import { Projetos } from './components/projetos'
 
function IndexPage() {
  const projetos = [
    {
      slug: 'marte-attack',
      name: 'Marte Attack',
      image:{
        url: 'https://i.imgur.com/zR05d69.png',
        alt: 'Pagina inicial do projeto',
      },
    },
    {
      slug: 'love-margikarp',
      name: 'LoveMagikarp',
      image:{
        url: 'https://i.imgur.com/gafuXYt.png',
        alt: 'Pagina inicial do projeto',
      },
    },
    {
      slug: 'after-format',
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
      <div className='py-12 px-6 md:px-32 space-y-10 md:space-y-28'>
          <Sobre />
          <Projetos projetos={projetos}/>
      </div>   
    </main>
  )
}
 
export default IndexPage

