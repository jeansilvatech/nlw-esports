import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';

export function CreateAdBanner(){
    return(
        <div className='pt-1 bg-gradient mt-8 self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#000428] px-8 py-6 flex justify-between items-center'>
        <div>
          <strong className='text-white block text-2xl font-black'>Não encontrou seu duo?</strong>
          <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className='py-3 px-4 bg-[#1fa2ff] hover:bg-[#12d8fa] text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} /> Publicar anúncio
        </Dialog.Trigger>
        </div>
        </div>
    )
}