/* Author: Carla Iza*/

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { addCustomer, updateCustomer } from "../services/axiosCustomers";

const AddCustomer = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
    if (localStorage.getItem("customer")) {
      _updateCustomer();
    }
  }, []);

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleLastname = (e) => {
    setLastname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const cleanForm = () => {
    setId("");
    setName("");
    setLastname("");
    setEmail("");
    setPhone("");
    localStorage.removeItem("customer");
  };

  const _updateCustomer = () => {
    const customer = JSON.parse(localStorage.getItem("customer"));
    setId(customer.id);
    setName(customer.name);
    setLastname(customer.lastname);
    setEmail(customer.email);
    setPhone(customer.phone);
  };

  const handleRemove = (e) => {
    localStorage.removeItem("customer");
    navigate("/customers/list");
  };

  const _addCustomer = async (e) => {
    e.preventDefault();
    const customer = {
      id,
      name,
      lastname,
      email,
      phone,
    };

    if (localStorage.getItem("customer")) {
      updateCustomer(customer);
      localStorage.removeItem("customer");
      alert("Cliente actualizado correctamente");
    } else {
      addCustomer(customer);
      alert("Cliente agregado correctamente");
    }

    cleanForm();
  };

  return (
    <div className="main__container">
      <div className="container p-2">
        <h1 className="col-12 text-center mb-4">Registrar Cliente</h1>
        <div className="row d-flex justify-content-between">
          <form
            onSubmit={_addCustomer}
            className="col-12 col-lg-6 form__container"
          >
            <div className="mt-4">
              <div class="">
                <label>ID </label>
                <input
                  type="number"
                  name="id"
                  className="form-control"
                  required
                  onChange={handleId}
                  value={id}
                />
              </div>
              <div className="">
                <label>Nombre</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  onChange={handleName}
                  value={name}
                />
              </div>
              <div className="">
                <label>Apellido </label>
                <input
                  type="text"
                  name="lastname"
                  className="form-control"
                  required
                  onChange={handleLastname}
                  value={lastname}
                />
              </div>
              <div className="">
                <label>Email </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleEmail}
                  value={email}
                />
              </div>
              <div class="">
                <label>Teléfono </label>
                <input
                  type="number"
                  name="phone"
                  className="form-control"
                  required
                  onChange={handlePhone}
                  value={phone}
                />
              </div>
              <div className="mt-4">
                <div className="">
                  <button
                    type="submit"
                    value="Agregar"
                    name="accion"
                    className="btn btn-success me-2"
                  >
                    Agregar
                  </button>
                  <button className="btn btn-warning me-2" onClick={cleanForm}>
                    Limpiar
                  </button>
                  <button className="btn btn-danger" onClick={handleRemove}>
                    Listar Clientes
                  </button>
                </div>
              </div>
            </div>
          </form>
          <img src={logo} className="col-12 col-lg-6 img-fluid main__img" />
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
