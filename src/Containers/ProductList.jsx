import "../styles/ProductList.scss";
import Product from "../components/Product";
import useGetProducts from "../hooks/useGetProducts";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";

const ProductList = () => {
  const API =
    "https://productos1234-default-rtdb.firebaseio.com/productos.json";
  const products = useGetProducts(API);

  return (
    <div>
    <SearchForm/>
    <div className="product-list">
      <Link to={'/product/:id'}>
        <div className="product">
          {products.map((product) => (
            <Product product={product} key={product.id_producto} />
          ))}
        </div>
      </Link>
    </div>
    </div>
  );
};

export default ProductList;
