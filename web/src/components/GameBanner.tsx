
import "keen-slider/keen-slider.min.css"


export interface GameBannerProps{
    bannerUrl: string;
    title: string;
    adsCount: number;
}
export function GameBanner(props: GameBannerProps){
 

  return(
    <a href=""  className='keen-slider__slide relative rounded-lg overflow-hidden'>
      <img src={props.bannerUrl} alt="imagem-game" className="hover:scale-125 duration-300 rounded-lg" />
      <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
        <strong className='font-bold text-white block'>{props.title}</strong>
        <span className='text-zinc-300 text-sm block'>{props.adsCount} anúncio(s)</span>
      </div>
    </a>
    )
}