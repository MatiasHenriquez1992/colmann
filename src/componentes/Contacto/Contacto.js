import React from "react";
import './Contacto.css';
import imagenSillon from '../../imagenes/sillon-portada.jpg';
import { Link } from "react-router-dom";


function Contacto(){
  return(
      <div className="contenedor-principal-contacto">


          <div className='contenedor-boton-inicio'>
            <span class="material-symbols-outlined">home</span>
            <Link to='/' className='texto-boton-inicio'>Inicio</Link>
          </div>

          <div className="contenedor-portada-contactos">
            <h2 className="titulo-contacto">Comunicate con nosotros</h2>
            <h2 className="telefono-contacto">Whatsapp: +54 299 532 721 </h2>
            <h2 className="direccion-contacto">J.J.Lastra 1154 <br></br> Neuquen capital</h2>
            <img className="imagen-sillon" src={imagenSillon}/>
          </div>

         




      </div>
    )
}

export default Contacto;