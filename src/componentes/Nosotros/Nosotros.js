import React from 'react';
import './Nosotros.css';
import imagenEdificio from '../../imagenes/COLMANN.jpg';
import imagenFabrica from '../../imagenes/imagen-fabrica.jpg';
import Footer from '../Footer/Footer';
//Animaciones
import Zoom from 'react-reveal/Zoom';

function Nosotros(){
  return (
    <div className='contenedor-principal-nosotros'>
      <div>
      
        <div className='contenedor-boton-inicio'>
          <span class="material-symbols-outlined">home</span>
          <a href='/' className='texto-boton-inicio'>Inicio</a>
        </div>
        <Zoom left cascade>
      <div className='contenedor-portada-nosotros'>
        <h2 className='texto-portada-sillones'>Desde 1952 hasta la actualidad nos especializamos 
            en la comodidad de las personas,
            garantizando calidad y eficiencia en las entregas de nuestros
            productos. Todo comenzo en planta baja del edificio Contanzo
            de la ciudad de Buenos Aires, donde en nuestros comienzos
            reparabamos sillones en el año 1945, gracias a nuestros clientes
            tuvimos la motivacion para seguir adelante cada dia. 
        </h2>
        <img className='imagen-portada-edificio' alt='imagen-edificio' src={imagenEdificio} />  
      </div>     

      <div className='contenedor-fabrica'>
        <img className='imagen-fabrica' alt='imagen-edificio' src={imagenFabrica} /> 
        <h2 className='texto-fabrica'>
          Año 1952 comenzabamos a fabricar nuestros propios sillones de cuero y pana, 
          obteniendo resultados exitosos a la vista de nuestros clientes. Agradecidos
          y motivados comenzamos a fabricar sillas y otros tipos de asientos acorde
          a las necesidades solicitadas.
        </h2>
      </div>
      </Zoom>

      </div>

      <Footer />
    </div>
  )
}

export default Nosotros;