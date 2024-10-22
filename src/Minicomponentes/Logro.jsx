import React from 'react';
import CountUp from 'react-countup';


export const Logro = (props) => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-[120px]'>
        <p className="text-azulfuerte uppercase text-xs font-extrabold tracking-widest">{props.titulo}</p>
        <h6 className="text-verdeclaro text-5xl font-bold"><CountUp start={0} end={props.numeros} duration={1}/></h6>
    </div>
  )
}
