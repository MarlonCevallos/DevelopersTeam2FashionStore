/* Author: Steven Jaramillo*/

import { NavLink } from "react-router-dom";
import NavBarItem from "./NavBarItem";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            fS
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="collapsibleNavId">
            <ul className="navbar-nav m-md-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" aria-current="page">
                  INICIO <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <NavBarItem
                title="PRODUCTOS"
                option1="Listar Productos"
                option2="Añadir Productos"
                option3="Reporte de Ventas"
                href="products"
              />
              <NavBarItem
                title="PROVEEDORES"
                option1="Listar Proveedores"
                option2="Añadir Proveedores"
                href="providers"
              />
              <NavBarItem
                title="CLIENTES"
                option1="Listar Clientes"
                option2="Añadir Clientes"
                href="customers"
              />
              <NavBarItem
                title="INVENTARIO"
                option1="Listar Inventario"
                option2="Añadir Producto al Inventario"
                href="cellars"
              />
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/publicapi"
                  aria-current="page"
                >
                  API PUBLICA
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="avatar">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-alert text-light dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user ? user.imageUrl : "https://picsum.photos/30"}
                  alt=""
                  className="img-fluid  me-2"
                  style={{ width: "30px", borderRadius: "50%" }}
                />
                {user ? user.name : "Usuario"}
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item" href="#">
                    Mi perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ayuda
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Configuraciones
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

/**
 * 
 * <NavBarItem
                id={"item2"}
                title={"PROVEEDORES"}
                option1={{ title: "Listar Proveedores", to: "/list-providers" }}
                option2={{ title: "Añadir Proveedores", to: "/add-provider" }}
              />
              <NavBarItem
                id={"item3"}
                title={"CLIENTES"}
                option1={{ title: "Listar Clientes", to: "/list-customers" }}
                option2={{ title: "Añadir Clientes", to: "/add-customer" }}
              />
 */
export default NavBar;
