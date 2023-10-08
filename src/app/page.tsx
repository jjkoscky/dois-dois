
import Header from './components/header'
import Sobre from './components/sobre'
import { Projetos } from './components/projetos'

 
function IndexPage() {
  const projetos = [
    
    {
      slug: 'anime-roll.vercel.app/',
      name: 'Animeroll',
      image:{
        url: 'https://i.imgur.com/75eaqkM.jpg',
        alt: 'Pagina inicial do projeto',
      },
    },
    {
      slug: 'jj-spotify-clone.vercel.app/',
      name: 'Spotify Clone',
      image:{
        url: 'https://i.imgur.com/VjvXJuc.png',
        alt: 'Pagina inicial do projeto',
      },
    },
    {
      slug: 'marteattack.github.io',
      name: 'Marte Attack',
      image:{
        url: 'https://i.imgur.com/zR05d69.png',
        alt: 'Pagina inicial do projeto',
      },
    },
    {
      slug: 'lovemagikarp.github.io',
      name: 'LoveMagikarp',
      image:{
        url: 'https://i.imgur.com/gafuXYt.png',
        alt: 'Pagina inicial do projeto',
      },
    },
    {
      slug: 'afterformat.github.io',
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


type Repo = {
  name: string
  stargazers_count: number
}

 export default IndexPage

