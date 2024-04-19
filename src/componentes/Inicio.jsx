import React from 'react'
import { Footer } from '../layout/Footer'
import Header from '../layout/Header'
import { Contacto } from './Contacto'
import Portfolio from './Portfolio'

const Inicio = () => {
  return (
    <div className='inicio'>
        <Header/>
        <h1 className='sobre'>Sobre mi</h1>
        <div className='tarjeta-des'>
            <div className='descripcion'>
                
                <h2>- Desarrollador Web -</h2>
                <p>Hola, Soy Borja, Desarrollador Web con experiencia en diversas tecnologías y frameworks,Mi trayectoria profesional incluye la creación de aplicaciones web, sitios web y APIs utilizando una variedad de tecnologías en mi github podeis ver un poco más de mi.
                <p><strong><a href="#contacto">Contacta conmigo</a></strong></p>
                </p>
                <div className='img'>
                  <div className='logos'>
                    <a href="https://github.com/borjalopz025?tab=repositories" target="_blank" ><img src="/imagenes/logo-git.png"/></a>
                  </div>
                  
                  <div className='logos'>
                    <a href="https://www.linkedin.com/in/borja-lopez-calvo-75bb79191/" target="_blank" ><img src="/imagenes/lik.png"/></a>
                  </div>

                  <div className='logo2'>
                    <a href="/Cv ..docx" download>
                      <button>Descargar Currículum</button>
                    </a>
                  </div>

                </div>
                
            </div>
            <div className='foto'>
                <img src="/imagenes/yo-sin-fondo.png" alt="" />
            </div>
        </div>
        
        <Portfolio/>
        <Contacto/>
        <Footer />
    </div>
  )
}

export default Inicio
