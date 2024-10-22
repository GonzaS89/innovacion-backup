import React from 'react';
import { IoWarningOutline } from "react-icons/io5";
import { PiPencilLineBold } from "react-icons/pi";
import { LuSearchCode } from "react-icons/lu";
import { LiaPuzzlePieceSolid } from "react-icons/lia";
import { IoRocketOutline } from "react-icons/io5";
import { SiMaterialdesignicons } from "react-icons/si";

export const Propuesta = (props) => {

    const retornarImg = element => {
        if(element === 'problema'){return <IoWarningOutline className='text-white text-5xl'/>}
        if(element === 'framework'){return <PiPencilLineBold className='text-white text-5xl'/>}
        if(element === 'buscar'){return <LuSearchCode className='text-white text-5xl'/>}
        if(element === 'producto'){return <LiaPuzzlePieceSolid className ='text-white text-5xl'/>}
        if(element === 'recaudar'){return <IoRocketOutline className='text-white text-5xl'/>}
        if(element === 'diseño'){return <SiMaterialdesignicons className='text-white text-5xl'/>}
    }

  return (
    <div className="flex flex-col gap-3 mt-10">
        <span className="bg-verdeclaro w-[60px] h-[60px] flex justify-center items-center rounded-lg">
            {retornarImg(props.imgref)}
        </span>
        <h2 className="font-bold text-azulfuerte text-left text-xl">{props.titulo}</h2>
    </div>
  )
}
