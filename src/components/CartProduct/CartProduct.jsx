import "./styles.css";

const CartProduct = ({ product, currentSale, setCurrentSale }) => {
  function removeCartProduct(remProduct) {
    const newCurrentSale = currentSale.filter(
      (product) => product !== remProduct
    );
    setCurrentSale(newCurrentSale);
  }

  return (
    <li className="cartProduct">
      <figure className="boxImgCartProduct">
        <img className="imgCartProduct" src={product.img} alt={product.name} />
      </figure>
      <div className="productCartDescription">
        <p className="nameCartProduct">{product.name}</p>
        <p className="categoryCartProduct">{product.category}</p>
      </div>
      <div>
        <button
          className="btnRemoverCartProduct"
          onClick={() => removeCartProduct(product)}
        >
          Remover
        </button>
      </div>
    </li>
  );
};

export default CartProduct;
