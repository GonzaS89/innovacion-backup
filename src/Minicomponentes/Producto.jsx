import React from 'react';
import { FaPaintBrush } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

export const Producto = ({id , imgref, titulo, texto}) => {

    const retorarImg = id => {
       if(id === 'paint'){return <FaPaintBrush className='text-5xl'/>}
       else if(id === 'light'){return <FaRegLightbulb className='text-5xl'/>}
       else if(id === 'design'){return <MdOutlineDesignServices className='text-5xl'/>}
       else if(id === 'product'){return <AiOutlineProduct className='text-5xl'/>}
       else if(id === 'code'){return <FaCode className='text-5xl'/>}
       else {return <IoIosRocket className='text-5xl'/>}
    }

  return (
    <div className={id % 2 === 0 ? 'w-full h-64 text-white bg-azulfuerte rounded-3xl flex flex-col items-start text-left justify-center gap-6 px-5 py-8' : 'w-full h-64 text-white bg-verdeclaro rounded-3xl flex flex-col items-start text-left justify-center gap-6 px-5 py-8'}>
        {retorarImg(imgref)}
        <h3 className='text-lg'>{titulo}</h3>
        <p className='text-sm'>{texto}</p>
    </div>
  )
}
