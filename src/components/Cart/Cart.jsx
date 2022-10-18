import CartProduct from "../CartProduct/CartProduct";
import "./styles.css";

const Cart = ({ product, currentSale, setCurrentSale }) => {
  if (currentSale.length === 0) {
    return (
      <div className="cart">
        <div className="boxTitleCart">
          <h4 className="titleCart">Carrinho de compras</h4>
        </div>
        <div className="boxVoidCart">
          <h5 className="titleVoidCart">Sua sacola está vazia</h5>
          <p className="addProductVoidCart">Adicione itens</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart">
        <div className="boxTitleCart">
          <h4 className="titleCart">Carrinho de compras</h4>
        </div>
        <div>
          <ul className="listCartProducts">
            {currentSale.map((product) => {
              return (
                <CartProduct
                  key={product.id}
                  product={product}
                  currentSale={currentSale}
                  setCurrentSale={setCurrentSale}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
};

export default Cart;
