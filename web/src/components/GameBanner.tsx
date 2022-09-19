
import "keen-slider/keen-slider.min.css"

<<<<<<< HEAD
interface GameBannerProps{
=======
export interface GameBannerProps{
>>>>>>> 2043744 (Atualização do projeto)
    bannerUrl: string;
    title: string;
    adsCount: number;
}
export function GameBanner(props: GameBannerProps){
 
<<<<<<< HEAD
    return(
    <a href="" className='keen-slider__slide relative rounded-lg overflow-hidden' >
=======
  return(
    <a href=""  className='keen-slider__slide relative rounded-lg overflow-hidden'>
>>>>>>> 2043744 (Atualização do projeto)
      <img src={props.bannerUrl} alt="imagem-game" />
      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block'>{props.adsCount} anúncio(s)</span>
      </div>
    </a>
    )
}