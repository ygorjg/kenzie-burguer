import "./styles.css";

const TotalPrice = ({ currentSale, setCurrentSale }) => {
  function removeAll() {
    setCurrentSale([]);
  }

  if (currentSale.length > 0) {
    const totalPrice = currentSale.reduce((valorAnterior, valorAtual) => {
      return valorAtual.price + valorAnterior;
    }, 0);

    return (
      <div className="container">
        <div className="cartTotalPrice">
          <div className="cartTotalPriceContent">
            <span className="totalCartText">Total</span>
            <span className="totalCartValor">R$ {totalPrice}</span>
          </div>
          <div className="totalPriceFooter">
            <button className="btnRemoverCartProducts" onClick={removeAll}>
              Remover todos
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default TotalPrice;
