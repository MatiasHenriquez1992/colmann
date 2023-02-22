import React from 'react';
import '../componentes/IndexPage.css';
import Articulos from './Articulos/Articulos';

//Imagenes
import imagenPortada from '../imagenes/portada-sillon.jpg';
import imagenPresentacion from '../imagenes/imagen-presentacion.jpg';
import imagenAcolchados from '../imagenes/acolchados.png'
import imagenAlmohadas from '../imagenes/almohadones.png'
import imagenToallas from '../imagenes/toallas.png'


//Animaciones
import Slide from 'react-reveal/Slide';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';
import Footer from './Footer/Footer';


function IndexPage(){
  return(
    <div className='contenedor-principal'>
      
      <div className='contenedor-portada'>
        <li className='links'>
          <Flip top>
            <a className='enlace-nosotros' href='nosotros'>Historia</a>
            <a className='enlace-nosotros' href='contacto'>Contacto</a>
          </Flip>
        </li>
        <div className='contenedor-portada-principal'>
          <Slide left><h1 className='titulo-colman'>COLMANN</h1></Slide>
          <Slide left><h1 className='descripcion-colman'>El placer de descansar</h1></Slide>
          <img className='imagen-portada' alt='imagen-portada' src={imagenPortada} />
        </div>
      </div>

      <div className='colman-presentacion'>
        <div className='contenedor-textos'>
          <Flip top><h1 className='titulo-colmann-presentacion'>COLMANN</h1>
            <h1 className='texto-presentacion-colmann'>En Colmann proyectamos, planificamos y vendemos todo el mobiliario para tu hogar. 
              Renovamos integralmente tus espacios y proveemos el 
              mobiliario necesario para cada lugar. Envios a domicilio,
              entrega y estado de producto totalmente garantizado.
            </h1>
          </Flip>
        </div>
        <img className='imagen-presentacion' alt='imagen-portada' src={imagenPresentacion} />
      </div>


      <div className='contenedor-presentacion'>
        <h1 className='texto-presentacion'>Somos COLMANN, distribuidora de comodidades para hogares y oficinas.</h1>
       
        <div className='contenedor-cards'>
          <Zoom left cascade>
            <div className='card'>
              <span class="material-symbols-outlined logo">flight</span>
              <h2 className='texto-envios'>Envios a todo el pais</h2>
              <p className='texto-cards'>Garantizamos su envio, entrega y estado del producto adquirido.
                Costos variables por zona.
              </p>
            </div>

            <div className='card'>
            <span class="material-symbols-outlined logo">speed</span>
              <h2 className='texto-envios'>Entrega agil</h2>
              <p className='texto-cards'>Contamos con una flota de vehículos propios aptos para cumplir con los requerimientos 
                de nuestros clientes, garantizando eficiencia 
                y rapidez en la entrega.
              </p>
            </div>

            <div className='card'>
              <span class="material-symbols-outlined logo">shopping_cart</span>
              <h2 className='texto-envios'>Amplio stock</h2>
              <p className='texto-cards'>Contamos con un amplio stock de todas las marcas 
                líderes en el mercado dando respuesta inmediata a los 
                requerimientos de nuestros clientes.
              </p>
            </div>
          </Zoom>
        </div>
      </div>

    <Zoom left cascade>
      <div className='contenedor-medios-de-pago'>
        <span class="material-symbols-outlined tarjeta-credito-logo">credit_card</span>
          <h2 className='titulo-medios-de-pago'>APROVECHÁ NUESTRAS CUOTAS</h2>
          <div className='contenedor-cuotas'>
            <div className='contenedor-3cuotas'>
              <h3 className='titulo-cuotas'>3 cuotas sin interes</h3>
              <p className='texto-cuotas'>en todas las compras</p>
            </div>
            <div className='contenedor-3cuotas'>
              <h3 className='titulo-cuotas'>6 cuotas sin interes</h3>
              <p className='texto-cuotas'>en compras superiores a $14.999</p>
            </div>
          </div>
      </div>
    </Zoom>

    <Zoom left cascade>
      <div className='contenedor-variedad-productos'>
        <img className='imagen-acolchados' alt='imagen-portada' src={imagenAcolchados} />
        <img className='imagen-almohadas' alt='imagen-portada' src={imagenAlmohadas} />
        <img className='imagen-toallas' alt='imagen-portada' src={imagenToallas} />
      </div>
    </Zoom>

    <div className='contenedor-productos'>
      <div>
        <Flip top><h1 className='titulos-sillones-gerenciales'>Sillones Gerenciales</h1></Flip> 
      </div>
    </div>

  <div className='contenedor-articulos'>
    <Zoom>
    <Articulos
      imagen= 'gerencial1'
      titulo= 'Sillon Gerencial Cushon'
      caracteristicas='Tela: Cuero ecologico, Altura: Regulable, Inclinación: Respaldo y asiento, Color: Negro'
      precio='$65.000'
    />

    <Articulos
      imagen= 'gerencial4'
      titulo= 'Sillon Gerencial Storn'
      caracteristicas='Tela: Simil Pana, Altura: Regulable, Inclinación: solo Respaldo, Color: Verde'
      precio='$57.000'
    />

    <Articulos
      imagen= 'gerencial2'
      titulo= 'Sillon Gerencial Marken'
      caracteristicas='Tela: Cuero ecologico, Altura: Regulable, Inclinación: Respaldo y asiento, Color: Blanco'
      precio='$55.500'
    />

    <Articulos
      imagen= 'gerencial3'
      titulo= 'Sillon Gerencial Botano'
      caracteristicas='Tela: Cuero ecologico, Altura: Regulable, Inclinación: Respaldo y asiento, Color: Marfil'
      precio='$62.000'
      />
    </Zoom>
</div> 

    <div>
      <h1 className='titulos-sillones'>Sillones Hogar / Oficina</h1>
    </div>
    <Zoom>
    <div className='contenedor-articulos'>
      <Articulos
        imagen= 'hogar'
        titulo= 'Sillon dos cuerpos MAURICIO RETRO'
        caracteristicas='Tela: Simil Pana, Almohadones: 2, Tipo: Relleno de goma espuma reforzada, Madera: Pino'
        precio='$87.000' />

      <Articulos
        imagen= 'hogar1'
        titulo= 'Sillon tres cuerpos TITRON SPACE'
        caracteristicas='Tela: Chenille, Almohadones: 2, Tipo: Relleno de goma espuma reforzada, Madera: Pino'
        precio='$120.000' />

      <Articulos
        imagen= 'hogar2'
        titulo= 'Sillon dos cuerpos MORTRAN'
        caracteristicas='Tela: Lino, Almohadones: 4, Tipo: Relleno de goma espuma reforzada, Madera: Algarrobo'
        precio='$140.000' />
    </div>
    </Zoom>
    <Footer />

</div>
    )
}

export default IndexPage;