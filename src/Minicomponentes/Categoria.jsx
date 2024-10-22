import React from "react";
import '../Estilos/nosotros.css'

export const Categoria = (props) => {
  return (
    <div className="flex flex-col gap-4 text-left">
      <h2 className="text-2xl font-bold capitalize">{props.titulo}</h2>
      <ul>
        {props.array !== undefined &&
          props.array.map((element, index) => <li className='list-style pl-2 text-lg leading-loose mx-2'>{element}</li>)}
      </ul>
    </div>
  );
};
