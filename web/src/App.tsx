<<<<<<< HEAD
import { useState, useEffect } from 'react';
import './styles/main.css';
import logo from'./assets/Logo-1.svg';
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
=======
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { useState, useEffect } from 'react';
import './styles/main.css';
import logo from'./assets/Logo-1.svg';
>>>>>>> 2043744 (Atualização do projeto)
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


export interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count:{
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
 useEffect(()=>{
  axios('http://localhost:3333/games').then(response=>{
    setGames(response.data)
  })
 }, [])
 const [ref] = useKeenSlider<HTMLDivElement>({
  loop: false,
  mode: "free",
  slides: {
    perView: 7,
<<<<<<< HEAD
    origin: 'auto',
  },
})
=======
    origin: 'auto'
  },
})

>>>>>>> 2043744 (Atualização do projeto)
return (
<div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
  <img src={logo} alt="" />
  <h1 className="text-6xl text-white font-black mt-20">Seu <span
      className='bg-gradient text-transparent bg-clip-text'>duo</span> está aqui.</h1>


  <div ref={ref} className='keen-slider grid grid-cols-6 gap-6 mt-16'>
    {games.map(game=>{
      return(
        <GameBanner key={game.id}  bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads}/>
      )
    })}
<<<<<<< HEAD
    
=======
>>>>>>> 2043744 (Atualização do projeto)
  </div>
  <Dialog.Root>
    <CreateAdBanner />
    <CreateAdModal />
  </Dialog.Root>
</div>
)
<<<<<<< HEAD
=======

>>>>>>> 2043744 (Atualização do projeto)
}

export default App