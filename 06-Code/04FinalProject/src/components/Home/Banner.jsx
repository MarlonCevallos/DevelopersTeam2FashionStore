/* Author: Steven Jaramillo*/

import logo from "../../assets/logo.jpg";
import "../../css/home.banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container d-flex align-items-center justify-content-center banner__container">
        <div className="row banner__content">
          <h1 className="col-12 text-center mt-4 mb-4 banner__content-title">
            BIENVENIDO A FASHION STORE
          </h1>
          <p className="col-12 col-md-6 text-center d-flex align-items-center banner__content-text">
            Bienvenidos a nuestra tienda de moda. Somos una tienda fisica y en línea que ofrece una amplia variedad de ropa 
            y accesorios para hombres y mujeres de todas las edades y estilos. Ofrecemos una selección de las últimas 
            tendencias de la moda a precios razonables, así como un servicio al cliente excepcional para ayudar a encontrar 
            lo que busca. ¡Haga una visita a nuestra tienda hoy y descubra cómo podemos ayudar a lucir y sentirse increíble!
          </p>
          <img
            src={logo}
            alt="logo"
            className="col-12 col-md-6 img-fluid banner__content-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
