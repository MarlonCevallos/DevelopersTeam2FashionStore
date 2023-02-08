/* Author: Marlon Cevallos*/

import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../services/axiosReport";

const ProductItem = ({ product, getProducts }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;

    await deleteProduct(product.id);
    getProducts();
  };

  const handleUpdate = () => {
    localStorage.setItem("product", JSON.stringify(product));
    navigate("/products/add");
  };

  return (
    <tr>
      <td className="text-center">{product.name}</td>
      <td className="text-center">{product.description}</td>
      <td className="text-center">{product.price}</td>
      <td className="text-center">{product.quantity}</td>
      <td className="text-center">{product.total}</td>
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

export default ProductItem;
