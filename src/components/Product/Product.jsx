import "./styles.css";

const Product = ({ product, products, handleClick }) => {
  return (
    <li className="product">
      <figure className="containerImg">
        <img className="productImg" src={product.img} alt={product.name} />
      </figure>
      <div className="productDescription">
        <p className="productName">{product.name}</p>
        <p className="productCategory">{product.category}</p>
        <p className="productPrice">R$ {product.price}</p>
        <button
          className="btnAddProduct"
          onClick={() => handleClick(product.id)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};

export default Product;
