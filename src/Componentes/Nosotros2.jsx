import React from 'react'
import { Categoria } from '../Minicomponentes/Categoria';
import '../Estilos/nosotros.css';

export const Nosotros2 = () => {

    const arrayDeCategorias = [
        { name: 'diseño',
            array : ['Producto Mockup', 'Branding', 'Ilustraciones', 'UX-UI', 'Sitios Webs']
        },
        { name: 'marketing',
            array : ['SEO Marketing', 'Optimizaciones', 'Marketing Certero', 'Keys', 'Redacciones']
        },
        { name: 'desarrollo',
            array : ['Wordpress', 'Aplicaciones', 'Front-End', 'PHP', 'Javascript']
        },
        { name: 'edición de video',
            array : ['Animación', 'Motion Graphics', 'After Effects', 'Cine 4D']
        },

    ]

  return (
    <section className='bg-white py-12 px-10 flex flex-col gap-8'>
        <h1 className="text-4xl text-left">Nosotros construimos productos de calidad</h1>
        <p className='text-2xl text-left'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam reiciendis consequatur veritatis</p>
        <div className="flex flex-col gap-8">
            {arrayDeCategorias.map( (element, index) => (
                <Categoria key={index} titulo={element.name} array={element.array}/>
            )) }
        </div>
        <span className="nosotros2-img rounded-2xl"></span>
    </section>
  )
}
