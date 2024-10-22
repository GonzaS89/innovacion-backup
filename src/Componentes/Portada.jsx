import React from 'react';
import '../Estilos/portada.css'

export const Portada = () => {
  return (
    <section className="bg-grisfondo w-full flex justify-center px-[50px] pb-10">
        <div className="w-full h-[800px] flex flex-center justify-center relative">
          <span className="w-full h-full bg-verdeclaro rounded-2xl absolute top-0"></span>
          <div className="flex w-full h-[650px] bg-azulfuerte absolute z-40 bottom-0 rounded-2xl">
            <div className="flex flex-col w-full h-full translate-y-[-90px]">
            <span className="bloqueimg rounded-2xl self-end"></span>
            <div className="w-full flex flex-col items-start px-[20px] mt-[20px] text-white text-left">
              <h2 className="text-4xl">Empresa de innovacion</h2>
              <p className="text-md w-[100%] font-thin py-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nemo fugiat totam molestiae modi tempora? Ullam nesciunt cupiditate quae natus, atque, voluptatum consequatur illo, labore facilis cumque distinctio minima deserunt.</p>
              <button className="border-2 w-[150px] py-2 rounded-xl uppercase mt-2">ver más</button>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}