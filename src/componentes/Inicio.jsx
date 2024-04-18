import React from 'react'
import { Footer } from '../layout/Footer'
import Header from '../layout/Header'
import { Contacto } from './Contacto'
import Portfolio from './Portfolio'

const Inicio = () => {
  return (
    <div className='inicio'>
        <Header/>
        <h1>Sobre mi</h1>
        <div className='tarjeta-des'>
            <div className='descripcion'>
                
                <p>Hola soy Borja, <strong> Programador Full Stack</strong>. Desde que comencé este camino, me di cuenta de que sería un desafío, pero la constancia se ha convertido en mi mejor aliado.
                </p>
                <p>Mi enfoque principal ha sido el desarrollo web y la creación de aplicaciones orientadas al usuario. Si quieres que te ayude con la creación de tu página web .
                <p><strong><a href="#contacto">Contacta conmigo</a></strong></p>
                </p>
                <div className='img'>
                  <div className='logos'>
                    <a href="https://github.com/borjalopz025?tab=repositories" target="_blank" ><img src="./public/imagenes/logo-git.png"/></a>
                  </div>
                  
                  <div className='logos'>
                    <a href="https://www.linkedin.com/in/borja-lopez-calvo-75bb79191/" target="_blank" ><img src="./public/imagenes/lik.png"/></a>
                  </div>

                  <div className='logo2'>
                    <a href="./public/Cv ..docx" download>
                      <button>Descargar Currículum</button>
                    </a>
                  </div>

                </div>
                
            </div>
            <div className='foto'>
                <img src="./public/imagenes/yo.jpg" alt="" />
            </div>
        </div>
        
        <Portfolio/>
        <Contacto/>
        <Footer />
    </div>
  )
}

export default Inicio
