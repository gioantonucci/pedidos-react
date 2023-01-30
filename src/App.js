import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Containers/Home";
import Orders from "./Containers/Orders";
import CustomerList from "./Containers/CustomerList";
import ProductList from "./Containers/ProductList";
import NotFound from "./Containers/NotFound";
import EditForm from "./Containers/EditForm";
import Layout from "./components/Layout";
import Order from "./components/Order";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/customers" element={<CustomerList />} />
          <Route exact path="/orders" element={<Orders />} />
          <Route exact path="/orders/new" element={<Order />} />
          <Route exact path="/products" element={<ProductList />} />
          <Route exact path="/products/edit/:id" element={<EditForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
