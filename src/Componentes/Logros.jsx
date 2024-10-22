import React from 'react'
import { Logro } from '../Minicomponentes/Logro'

export const Logros = () => {
  return (
    <div className="pb-10 px-10 grid grid-cols-2 col-gap-4">
        <Logro titulo = {'premios ganados'} numeros = {17}/>
        <Logro titulo = {'años de exp.'} numeros = {16}/>
        <Logro titulo = {'clientes'} numeros = {508}/>
        <Logro titulo = {'proyectos'} numeros = {950}/>
    </div>
  )
}
