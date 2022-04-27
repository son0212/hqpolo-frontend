import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import MainPage from "./component/homePage/index.js";
import Blog from "./component/blog/Blog.js";
import CollectProduct from "./component/collect-product/CollectProduct.js";
import DetailProduct from "./component/detail-product/DetailProduct.js";
import UploadProduct from './component/upload-product/UploadProduct';
import PrivacyPolicy from "./component/policy/PrivacyPolicy.js";
import ExchangeOrReturnPolicy from "./component/policy/ExchangeOrReturnPolicy.js";
import TryalPolicy from "./component/policy/TryalPolicy.js";
// import Descript from "./component/detail-product/Descript.js";
import AdditionalInformation from "./component/detail-product/AdditionalInformation.js";
import TutorialProtect from "./component/detail-product/TutorialProtect.js";
import Login from "./component/login-or-registration/Login.js";
import Registration from "./component/login-or-registration/Registration.js";
import PageDad from "./component/login-or-registration/index.js";

import MenuHeaderTop from "./component/MenuHeaderTop.js";
import CustomScrollbars from "./component/CustomScrollbars.js";
import InforEndPage from "./component/InforEndPage.js";


const App = () =>{
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
            <Route default path="/upload-product" element={<UploadProduct />}  />
            <Route dafault path="/collect-product/" element={<CollectProduct />} />
            <Route dafault path="/detail-product/:IdProduct" element={<DetailProduct />} />
            {/* <Route dafault path="/detail-product/:IdProduct/descript/" element={<DetailProduct element={<Descript />} /> } /> */}
            <Route dafault path="/detail-product/:IdProduct/tutorial-protect/"   element={<DetailProduct element={<TutorialProtect /> } />} /> 
            <Route dafault path="/detail-product/:IdProduct/additional-information/"element={<DetailProduct element={<AdditionalInformation /> } /> } /> 
            <Route path="/login" element={<PageDad element={<Login />} />} />
            <Route path="/registration" element={<PageDad element={<Registration />} />} />
            
          </Routes>
          <InforEndPage />
        </CustomScrollbars>
      </div> 
    </Router>
  )
}


export default App;
