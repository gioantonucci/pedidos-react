import React from "react";
import '../styles/Order.scss'
import useGetProducts from "../hooks/useGetProducts";

const Order = () => {
  const API =
    "https://productos1234-default-rtdb.firebaseio.com/productos.json";
  const products = useGetProducts(API);
  return (
    <div>
      <form className="form-pedidos">
      <label>Fecha
      <input type='date'></input>
      </label>
        <label>Cliente</label>
        <select>
          <option></option>
        </select>
        <label>
          Producto
          <select>
            {products.map((p) => (
              <option value={p.id_producto}>{p.producto}</option>
            ))}
          </select>
        </label>
        <label>
          Color
          <input></input>
        </label>
        <div className="buttons">
        <button>Agregar otro producto</button>
        <button>Cargar pedido</button>
        </div>
      </form>
    </div>
  );
};

export default Order;
