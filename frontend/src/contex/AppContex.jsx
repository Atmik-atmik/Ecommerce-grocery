import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories, products } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const fetchCategories = async () => {
    setCategoriesData(categories);
  };

  const fetchProducts = async () => {
    setProductsData(products);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const value = { navigate, user, setUser, categoriesData, productsData };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
