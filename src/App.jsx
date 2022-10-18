import "./reset.css";
import { useState, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import TotalPrice from "./components/TotalPrice/TotalPrice";

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function handleClick(productId) {
    const filtro = currentSale.filter((product) => product.id === productId);

    if (filtro.length > 0) {
      alert("Esse produto já está no carrinho");
    } else {
      const productAdd = products.find((product) => product.id === productId);
      setCurrentSale([...currentSale, productAdd]);
    }
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header
        products={products}
        setProducts={setProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductsList
        products={filteredProducts.length === 0 ? products : filteredProducts}
        handleClick={handleClick}
      />
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      <TotalPrice currentSale={currentSale} setCurrentSale={setCurrentSale} />
    </div>
  );
};

export default App;
