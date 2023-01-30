import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };
    loadProducts();
  }, []);

  return products;
};

export default useGetProducts;