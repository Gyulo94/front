import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductModal } from "./components";
import { Layouts } from "./layouts/Container";
import { Cart, Home, Listing, ProductDetails, SignIn, SignUp } from "./pages";

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, [])

  const getCountry = async(url) => {
    const responsive = await axios.get(url).then(res => {
      setCountryList(res.data.data);
      // console.log(res.data.data);
      
    });
  }
  
  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    isOpenProductModal,
    setIsOpenProductModal,
    isLogin,
    setIsLogin
  }

  return (
    <div className="App">
    <MyContext.Provider value={values}>
      <Routes>
        <Route element={<Layouts />}>
          <Route exact={true} path="/" element={<Home />} />
          <Route exact={true} path="/cat/:id" element={<Listing />} />
          <Route exact={true} path="/product/:id" element={<ProductDetails />} />
          <Route exact={true} path="/cart" element={<Cart />} />
        </Route>
          <Route exact={true} path="/sign-in" element={<SignIn />} />
          <Route exact={true} path="/sign-up" element={<SignUp />} />
      </Routes>

        {isOpenProductModal && <ProductModal />}
      </MyContext.Provider>
    </div>
  );
}

export default App;

export { MyContext };
