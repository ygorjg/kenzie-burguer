import Product from "../Product/Product";
import "./styles.css";

const ProductsList = ({ products, handleClick }) => {
  return (
    <ul className="productsList">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            products={products}
            handleClick={handleClick}
          />
        );
      })}
    </ul>
  );
};

export default ProductsList;
