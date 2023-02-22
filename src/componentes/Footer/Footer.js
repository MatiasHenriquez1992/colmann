import React from 'react';
import './Footer.css';
import logoFacebook from '../../imagenes/logo-facebook.png';
import logoInstagram from '../../imagenes/logo-instagram.png';
import imagenFooter from '../../imagenes/imagen-footer.png';


function Footer(){
  return(
  <div className='contenedor-principal-footer'> 
    <div className='contenedor-redes-sociales'>
       <img className='logo-red-social' src={logoFacebook} alt='logo-facebook'/>
       <img className='logo-red-social' src={logoInstagram} alt='logo-facebook'/>

      <div className='contenedor-formulario'>
       <form>
          <h2 className='titulo-contactanos'>Contactanos</h2>
          <input type='text' placeholder='Nombre'/>
          <input type='text' placeholder='Apellido'/>
          <input type='number' placeholder='Teléfono'/>
          <button className='boton-enviar' type='Submit'>Enviar</button>
       </form>
      </div>

    </div>

    <div className='contenedor-direccion'>
      <h1 className='texto-titulo-direccion'>DIRECCION</h1>
      <p className='textos'>J.J.Lastra 1154</p>
      <p className='textos'>Neuquen capital</p>
      <p className='textos'>Codigo postal: 8300</p>
      <p className='textos'>Estacionamiento propio</p>
    </div>

    <div className='contenedor-contacto'>
      <h1 className='texto-titulo-direccion'>CONTACTO</h1>
      <p className='textos'>Whatsapp: +54 299 532 721</p>
      <p className='textos'>E-mail: ventas@colmann.com.ar</p>
      <h1 className='texto-titulo-direccion'>HORARIO</h1>
      <p className='textos'>LUN-VIE: 9 a 19hs</p>
    </div>


  </div>
    )
}

export default Footer