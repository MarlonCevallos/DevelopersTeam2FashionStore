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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum,
            eum, dignissimos, aperiam vel quam saepe repellendus recusandae
            consectetur hic ut sapiente iste! Facilis eveniet omnis aspernatur
            fugiat? Veritatis, doloremque. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Id exercitationem modi corporis animi
            numquam odit, at neque recusandae doloribus, odio illum perspiciatis
            eum nam qui quas quaerat! Ducimus, architecto hic!
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
