import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { addCellar, updateCellar } from "../services/axiosCellers";

const AddCellar = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name_product, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [exit_date, setExitDate] = useState("");
  const [entry_date, setEntryDate] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
    if (localStorage.getItem("cellar")) {
      _updateCellar();
    }
  }, []);

  const handleId = (e) => {
    setId(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleExitDate = (e) => {
    setExitDate(e.target.value);
  };
  const handleEntryDate = (e) => {
    setEntryDate(e.target.value);
  };

  const cleanForm = () => {
    setId("");
    setName("");
    setQuantity("");
    setExitDate("");
    setEntryDate("");
    localStorage.removeItem("cellar");
  };

  const handleRemove = (e) => {
    localStorage.removeItem("cellar");
    navigate("/cellars/list");
  };

  const _updateCellar = () => {
    const cellar = JSON.parse(localStorage.getItem("cellar"));
    setId(cellar.id);
    setName(cellar.name_product);
    setQuantity(cellar.quantity);
    setExitDate(cellar.exit_date);
    setEntryDate(cellar.entry_date);
  };

  const _addCellar = async (e) => {
    e.preventDefault();

    console.log(exit_date, entry_date);
    const cellar = {
      id,
      name_product,
      quantity,
      exit_date,
      entry_date,
    };

    if (localStorage.getItem("cellar")) {
      updateCellar(cellar);
      localStorage.removeItem("cellar");
      alert("Inventario actualizado correctamente");
    } else {
      addCellar(cellar);
      alert("Inventario agregado correctamente");
    }

    cleanForm();
  };

  return (
    <>
      <div className="main__container">
        <div className="container p-2 ">
          <h1 className="col-12 text-center mb-4">Registrar Inventario</h1>
          <div className="row d-flex justify-content-between">
            <form
              onSubmit={_addCellar}
              className="col-12 col-lg-6 form__container"
            >
              <div className="mt-4">
                <div className="">
                  <label>ID </label>
                  <input
                    type="number"
                    name_product="id"
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
                    name_product="name_product"
                    className="form-control"
                    required
                    onChange={handleName}
                    value={name_product}
                  />
                </div>
                <div className="">
                  <label>Cantidad </label>
                  <input
                    type="number"
                    name_product="quantity"
                    className="form-control"
                    required
                    onChange={handleQuantity}
                    value={quantity}
                  />
                </div>

                <div class="">
                  <label>Fecha de entrada </label>
                  <input
                    type="date"
                    entry_date="entry_date"
                    className="form-control"
                    required
                    onChange={handleEntryDate}
                    value={entry_date}
                  />
                </div>
                <div class="">
                  <label> Dia de salida</label>
                  <input
                    type="date"
                    exit_date="exit_date"
                    className="form-control"
                    required
                    onChange={handleExitDate}
                    value={exit_date}
                  />
                </div>
                <div className="mt-4">
                  <div className="">
                    <button
                      type="submit"
                      value="Agregar"
                      name_product="accion"
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
                      name_product="accion"
                      className="btn btn-danger"
                      onClick={handleRemove}
                    >
                      Listar Inventario
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

export default AddCellar;
