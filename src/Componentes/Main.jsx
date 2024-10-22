import React from 'react'
import { Portada } from './Portada'
import { Virtudes } from './Propuestas'
import { Mastexto } from './Mastexto'
import { Productos } from './Productos'
import { Nuestrosprof } from './Nuestrosprof'
import { Logros } from './Logros'
import { Nosotros2 } from './Nosotros2'
import { Nosotros3 } from './Nosotros3'

export const Main = () => {
  return (
    <div>
        <Portada />
        <Virtudes />
        <Mastexto />
        <Productos />
        <Nuestrosprof />
        <Logros />
        <Nosotros2 />
        <Nosotros3 />
    </div>
  )
}
