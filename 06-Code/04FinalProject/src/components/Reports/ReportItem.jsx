/* Author: Marlon Cevallos*/

import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../services/axiosProducts";

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
     
    </tr>
  );
};

export default ProductItem;
