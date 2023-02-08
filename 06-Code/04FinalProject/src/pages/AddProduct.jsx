/* Author: Marlon Cevallos*/

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { addProduct, updateProduct } from "../services/axiosProducts";

const AddProduct = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
    if (localStorage.getItem("product")) {
      _updateProduct();
    }
  }, []);

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const cleanForm = () => {
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
    localStorage.removeItem("product");
  };

  const handleRemove = (e) => {
    localStorage.removeItem("product");
    navigate("/products/list");
  };

  const _updateProduct = () => {
    const product = JSON.parse(localStorage.getItem("product"));
    setId(product.id);
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setQuantity(product.quantity);
  };

  const _addProduct = async (e) => {
    e.preventDefault();
    const product = {
      id,
      name,
      description,
      price,
      quantity,
    };

    if (localStorage.getItem("product")) {
      updateProduct(product);
      localStorage.removeItem("product");
      alert("Producto actualizado correctamente");
    } else {
      addProduct(product);
      alert("Producto agregado correctamente");
    }

    cleanForm();
  };

  return (
    <>
      <div className="main__container">
        <div className="container p-2 ">
          <h1 className="col-12 text-center mb-4">Registrar Producto</h1>
          <div className="row d-flex justify-content-between">
            <form
              onSubmit={_addProduct}
              className="col-12 col-lg-6 form__container"
            >
              <div className="mt-4">
                <div className="">
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
                  <label>Nombre </label>
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
                  <label>Descripción </label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    required
                    onChange={handleDescription}
                    value={description}
                  />
                </div>
                <div class="">
                  <label>Precio </label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    required
                    onChange={handlePrice}
                    value={price}
                  />
                </div>
                <div class="">
                  <label>Cantidad </label>
                  <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    required
                    onChange={handleQuantity}
                    value={quantity}
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
                    <button
                      className="btn btn-warning me-2"
                      onClick={cleanForm}
                    >
                      Limpiar
                    </button>
                    <button
                      value="Agregar"
                      name="accion"
                      className="btn btn-danger"
                      onClick={handleRemove}
                    >
                      Listar Productos
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <img src={logo} className="col-12 col-lg-6 img-fluid main__img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
