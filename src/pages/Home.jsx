import { useEffect, useState } from "react";
import axios from "axios";
import { productsData } from "../json/ProductsData";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

function getProducts() {
 return axios.get("https://dummyjson.com/products?limit=10");
}

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(productsData);
        })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={products} />
  );
};

export default Home;
