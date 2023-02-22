import React  from "react";
import './Articulos.css';

function Articulos({imagen,titulo,caracteristicas, precio}){
  return(
    <div className="contenedor-articulos">
      <div className="articulo">
        <img className="imagen-articulo" src={require(`../../imagenes/sillon-${imagen}.jpg`)} alt='articulo-silla-gerencial'/>
        <h2 className="titulo-articulo">{titulo}</h2>
        <br></br>
        <p className="caracteristicas-articulo">{caracteristicas}</p>
        <h2 className="precio-articulo">{precio}</h2>
      </div>
    </div>
  )
}

export default Articulos;