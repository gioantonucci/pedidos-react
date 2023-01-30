import React from "react";
import { BiPaintRoll } from "react-icons/bi";
import { FaList } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import "../styles/Home.scss";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <BiPaintRoll color="#fff"  />
          <a href="/products">Productos</a>
        </li>
        <li>
          <FaList className="icon" color="#fff" />
          <a href="/orders">Pedidos</a>
        </li>
        <li>
          <BsPeopleFill  color="#fff"/>
          <a href="/customers">Clientes</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
