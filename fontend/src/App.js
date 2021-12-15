import './App.css';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";

import MainPage from "./component/homePage/index.js";
import Blog from "./component/blog/Blog.js";
import CollectProduct from "./component/collect-product/CollectProduct.js";
import DetailProduct from "./component/detail-product/DetailProduct.js";
import PrivacyPolicy from "./component/policy/PrivacyPolicy.js";
import ExchangeOrReturnPolicy from "./component/policy/ExchangeOrReturnPolicy.js";
import TryalPolicy from "./component/policy/TryalPolicy.js";
import Descript from "./component/detail-product/Descript.js";
import AdditionalInformation from "./component/detail-product/AdditionalInformation.js";
import TutorialProtect from "./component/detail-product/TutorialProtect.js";
import Login from "./component/login-or-registration/Login.js";
import Registration from "./component/login-or-registration/Registration.js";
import PageDad from "./component/login-or-registration/index.js";

import MenuHeaderTop from "./component/MenuHeaderTop.js";
import CustomScrollbars from "./component/CustomScrollbars.js";
import InforEndPage from "./component/InforEndPage.js";


const App = () =>{
  var [privacyPolicy, setPrivacyPolicy] = useState(null);
  var [test, setTest] = useState(null);

  useEffect(() => {
    const fetchData = async () =>{
      const getprivacyPolicy = await axios.get("http://localhost:4000/privacy-policy");
      const getTest = await axios.get('http://localhost:4000/test');
      console.log(getTest);
      setTest(getTest.data);
      setPrivacyPolicy(getprivacyPolicy.data);
      console.log(getprivacyPolicy);
    }
    fetchData();
  }, [])

  return(
    <Router>
      <div className="App">
        <CustomScrollbars style={{height:"100vh", width:"100%"}}>
          <MenuHeaderTop />
          

          <Routes>
            <Route dafault path="/" element={
              <MainPage />
            } />
            
            <Route dafault path="/blog/" element={<Blog />} />
            <Route dafault path="/policy/privacy" element={<PrivacyPolicy />}/>
            <Route default path="/policy/exchange-or-return" element={<ExchangeOrReturnPolicy />} />
            <Route default path="/policy/tryal" element={<TryalPolicy />} />
            <Route dafault path="/detail-product/*" element={<DetailProduct />} />
            <Route dafault path="/collect-product/" element={<CollectProduct />} />
            <Route dafault path="/detail-product/descript/" element={<DetailProduct element={<Descript />} /> } />
            <Route dafault path="/detail-product/additional-information/"element={<DetailProduct element={<AdditionalInformation /> } /> } /> 
              <Route path="/login" element={<PageDad element={<Login />} />} />
              <Route path="/registration" element={<PageDad element={<Registration />} />} />
            <Route dafault path="/detail-product/tutorial-protect/"   element={<DetailProduct element={<TutorialProtect /> } />} /> 
            <Route default path="/test" element={<div>{privacyPolicy}</div>} />
          </Routes>
          <InforEndPage />
        </CustomScrollbars>
      </div> 
    </Router>
  )
}


export default App;
