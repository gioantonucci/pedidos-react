import React from "react";
import "../styles/Product.scss";

const Product = ({ product }) => {
  return (
    <div className="product-card" key={product.id_producto}>
      <p className="type">{product.categoria}</p>
      <h2>{product.producto}</h2>
      <p className="detail">{product.descripcion}</p>
      <p className="price">${product.precio_minorista}</p>
      <button>Editar</button>
    </div>
  );
};

export default Product;
