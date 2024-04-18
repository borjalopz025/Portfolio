import React from 'react'

export const Contacto = () => {
  return (
    <div className='contact-form' id='contacto'>
        <h1>Contacto</h1>
        <form action='mailto:borjaswim1995@gamil.com'>
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellido' />
            <input type="email" placeholder='Email' />
            <textarea placeholder='Motivo de contacto' />
            <input type="submit" value='Enviar' />
        </form>
    </div>
  )
}


