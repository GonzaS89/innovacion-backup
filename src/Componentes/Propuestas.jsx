import React from 'react'
import { Propuesta } from '../Minicomponentes/Propuesta'

export const Virtudes = () => {

  const arrayPropuestas = [
    {
      "nombre" : "Explorar el problema",
      "imgref" : "problema"
    },
    {
      "nombre" : "Construir un ux framework",
      "imgref" : "framework"
    },
    {
      "nombre" : "Buscar y preparar",
      "imgref" : "buscar"
    },
    {
      "nombre" : "Vender una nuevo producto",
      "imgref" : "producto"
    },
    {
      "nombre" : "Recaudación de fondos para una nueva startup",
      "imgref" : "recaudar"
    },
    {
      "nombre" : "Antes de un rediseño completo del product",
      "imgref" : "diseño"
    }

  ]

  return (
    <section className='bg-white py-12 px-10'>
        <h1 className='text-4xl text-left'>Prototipo de una idea de producto digital</h1>
        <div className='flex flex-col gap-15'>
          {arrayPropuestas.map( (propuesta, index) => (
            <Propuesta key = {index} titulo = {propuesta.nombre} imgref = {propuesta.imgref}/>
          ))}
        </div>
    </section>
  )
}
