import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { addProvider, updateProvider } from "../services/axiosProviders";

const AddProvider = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [direction, setDirection] = useState("");
  const [phone, setPhone] = useState("");
  const [productType, setProductType] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
    if (localStorage.getItem("provider")) {
      _updateProvider();
    }
  }, []);

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDirection = (e) => {
    setDirection(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleProductType = (e) => {
    setProductType(e.target.value);
  };
  const handleTotal = (e) => {
    setTotal(e.target.value);
  };

  const cleanForm = () => {
    setId("");
    setName("");
    setDirection("");
    setPhone("");
    setProductType("");
    setTotal("");
    localStorage.removeItem("provider");
  };

  const handleRemove = (e) => {
    localStorage.removeItem("provider");
    navigate("/providers/list");
  };

  const _updateProvider = () => {
    const provider = JSON.parse(localStorage.getItem("provider"));
    setId(provider.id);
    setName(provider.name);
    setDirection(provider.direction);
    setPhone(provider.phone);
    setProductType(provider.productType);
    setTotal(provider.total);
  };

  const _addProvider = async (e) => {
    e.preventDefault();
    const provider = {
      id,
      name,
      direction,
      phone,
      productType,
      total,
    };

    if (localStorage.getItem("provider")) {
      await updateProvider(provider);
      localStorage.removeItem("provider");
      alert("Proveedor actualizado correctamente");
    } else {
      await addProvider(provider);
      alert("Proveedor agregado correctamente");
    }

    cleanForm();
  };

  return (
    <div className="main__container">
      <div className="container p-2 ">
        <h1 className="col-12 text-center mb-4">Registrar Proveedor</h1>
        <div className="row d-flex justify-content-between">
          <form
            onSubmit={_addProvider}
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
                <label>Dirección </label>
                <input
                  type="text"
                  name="direction"
                  className="form-control"
                  required
                  onChange={handleDirection}
                  value={direction}
                />
              </div>
              <div className="">
                <label>Teléfono </label>
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  required
                  onChange={handlePhone}
                  value={phone}
                />
              </div>
              <div className="">
                <label>Tipo de producto </label>
                <input
                  type="text"
                  name="productType"
                  className="form-control"
                  required
                  onChange={handleProductType}
                  value={productType}
                />
              </div>
              <div className="">
                <label>Total </label>
                <input
                  type="number"
                  name="total"
                  className="form-control"
                  required
                  onChange={handleTotal}
                  value={total}
                />
              </div>

              <div className="mt-4 mb-3">
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
                  <button
                    value="Agregar"
                    name="accion"
                    className="btn btn-danger"
                    onClick={handleRemove}
                  >
                    Listar Proveedores
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

export default AddProvider;