/* Author: Marlon Cevallos*/

const ProductItem = ({ product, getProducts }) => {

  return (
    <tr>
      <td className="text-center">{product.name}</td>
      <td className="text-center">{product.description}</td>
      <td className="text-center">{product.price}</td>
      <td className="text-center">{product.quantity}</td>
      <td className="text-center">{product.profit}</td>
      <td className="text-center">{product.total}</td>
    </tr>
  );
};

export default ProductItem;
