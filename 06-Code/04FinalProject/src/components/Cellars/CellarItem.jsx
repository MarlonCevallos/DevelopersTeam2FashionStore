import { useNavigate } from "react-router-dom";
import { deleteCellar } from "../../services/axiosCellers";

const CellarItem = ({ cellar, getCellars }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;

    console.log(cellar);
    await deleteCellar(cellar.id);
    getCellars();
  };

  const handleUpdate = () => {
    localStorage.setItem("cellar", JSON.stringify(cellar));
    navigate("/cellars/add");
  };

  return (
    <tr>
      <td className="text-center">{cellar.name_product}</td>
      <td className="text-center">{cellar.quantity}</td>
      <td className="text-center">{cellar.entry_date}</td>
      <td className="text-center">{cellar.exit_date}</td>
      <td className="text-center">{cellar.timeInCellar}</td>
      <td className="text-center">
        <button className="btn btn-primary me-2" onClick={handleUpdate}>
          Editar
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CellarItem;
