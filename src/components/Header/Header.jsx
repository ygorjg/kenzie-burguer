import logo from "./logo.svg";
import "./styles.css";
import { useState } from "react";

const Header = ({ products, filteredProducts, setFilteredProducts }) => {

  const [searchInput, setSearchInput] = useState("");

  function ignorarCaracteres(str) {
    str = str.replace(/[ÀÁÂÃ]/, "A");
    str = str.replace(/[àáâã]/, "a");
    str = str.replace(/[ÈÉÊ]/, "E");
    str = str.replace(/[Ç]/, "C");
    str = str.replace(/[ç]/, "c");
    str = str.replace(/[í]/, "i");
    str = str.replace(/[Í]/, "i");
    return str.replace(/[^a-z0-9]/gi, "");
  }

  function showProducts(event) {
    event.preventDefault();
    const filtro = products.filter(
      (product) =>
        ignorarCaracteres(product.name.toLowerCase()).includes(
          ignorarCaracteres(searchInput.toLowerCase())
        ) ||
        ignorarCaracteres(product.category.toLowerCase()).includes(
          ignorarCaracteres(searchInput.toLowerCase())
        )
    );

    setFilteredProducts(filtro);

    /* if (filtro.length > 0) {
      setProducts(filtro);
    } else {
      alert("Produto não encontrado");
    } */
  }

  return (
    <header>
      <figure>
        <img className="logo" src={logo} alt="Logo Burguer Kenzie" />
      </figure>
      <div className="inputSearchContainer">
        <form onSubmit={showProducts}>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            className="inputSearch"
            type="text"
            placeholder="Digitar pesquisa"
          />
          <button className="btnInputSearch" type="submit">
            Pesquisar
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
