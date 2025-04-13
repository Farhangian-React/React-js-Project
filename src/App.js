import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Products from './Product/Products';
import PageNotFount from './Product/PageNotFount';
import Dishwasher from './Product/Dishwasher/Dishwasher';
import Carts from './Carts-Shoping/Carts';
import CartModal from "./Carts-Shoping/CartModal";
import WashingMachine from './Product/WashingMachine/WashingMachine';
import RefrideratorBottomFreezer from './Product/Refrigerator/RefrideratorBottomFreezer/RefrideratorBottomFreezer';
import RefrideratorTopFreezer from './Product/Refrigerator/RefrideratorTopFreezer/RefrideratorTopFreezer';
import RefrigeratorsFrenchDoor from './Product/Refrigerator/RefrideratorTowDoor/RefrigeratorsFrenchDoor';
import RefrideratorSideBySide from './Product/Refrigerator/SideBySideRefriderator/RefrideratorSideBySide';
import RefrideratorSpecializedFreezer from './Product/Refrigerator/RefrideratorSpecializedFreezer/RefrideratorSpecializedFreezer';

import LifeStyle from './LifeStyle/LifeStyle';
import Gas from './Product/Gas/Gas';
import {CartProvider} from './Shared/Cart-Context';
import AboutSnova from './About Us/AboutSvova';
import WaterTemperature from "./LifeStyle/WaterTemperature";
import Refrigerators from "./Product/Refrigerator/Refrigerators";
import CodeTakhfif from "./jashnvareh/CodeTakhfif";
import TabestaneJashnvareh from "./jashnvareh/TabestaneJashnvareh";
import CookTops from "./Product/Gas/CookTop/CookTops";
import Ranges from "./Product/Gas/Ranges/Ranges";
import Hoods from "./Product/Gas/Hoods/Hoods";
import Microwaves from "./Product/Gas/Microwaves/Microwaves";
import CartBuyRefrigerator from "./Product/CartBuyRefrigerator";
import CartBuyDishwasher from './Product/Dishwasher/CartBuyDishwasher';
import CartBuyWashingMachine from './Product/WashingMachine/CartBuyWashingMachine';
import CartBuyGas from "./Product/CartBuyGas";
import CartSearch from "./dashbord/CartSearch";
import AllProducts from './AllProducts/AllProducts';
import SamsungBrands from './AllProducts/SamsungBrands';
import LgBrands from './AllProducts/LgBrands';
import WhirlpoolBrands from './AllProducts/WhirlpoolBrands';
import BushBrands from "./AllProducts/BushBrands";
import SignIn from "./Login/SignIn";
import SignUp from "./Login/SignUp";
import AfterSalesService from './Service/AfterSalesService';
import PopularQuestions from "./Service/PopularQuestions";
import ContactUsForm from './Service/ContactUsForm';
import ProductOff from "./jashnvareh/ProductOff";
import ProductJashnvareh from "./jashnvareh/ProductJashnvareh";
import CartBuyJashnvareh from "./jashnvareh/CartBuyJashnvareh";
import Stores from './Stores/Stores';
import "leaflet/dist/leaflet.css";
import "./App.css";

function App() { 
  return (
    <>
     <CartProvider>
          <div className="content">
            <Routes>
             <Route path="/" exact element={<Products/>} />
             <Route path="/signin" exact element={<SignIn/>} />
             <Route path="/signup" exact element={<SignUp/>} />
             <Route path="/cartbuyrefrigerator" exact element={<CartBuyRefrigerator />} />
             <Route path="/cartbuygas" exact element={<CartBuyGas />} />
             <Route path="/CartBuyDishwasher" exact element={<CartBuyDishwasher />} />
             <Route path="/cartbuywashingmachine" exact element={<CartBuyWashingMachine />} />
             <Route path="/buybasket" exact element={<Carts/>} />
             <Route path="/buybasketmodal" exact element={<CartModal/>} />
             <Route path="/allrefriderators" exact element={<Refrigerators/>} />
             <Route path="/allgas" exact element={<Gas/>} />
             <Route path="/shop-cooktop" exact element={<CookTops/>} />
             <Route path="/shop-microwaves" exact element={<Microwaves/>} />
             <Route path="/shop-hood" exact element={<Hoods/>} />
             <Route path="/shop-ranges" exact element={<Ranges/>} />
             <Route path="/shop-refrigeratorfrenchdoor" exact element={<RefrigeratorsFrenchDoor/>} />
             <Route path="/shop-refrigeratorsidbysid" exact element={<RefrideratorSideBySide/>} />
             <Route path="/shop-refrideratorbottomfreezer" exact element={<RefrideratorBottomFreezer/>} />
             <Route path="/shop-refrideratortopfreezer" exact element={<RefrideratorTopFreezer/>} />
             <Route path="/shop-refrideratorspecializedfreezer" exact element={<RefrideratorSpecializedFreezer/>} />
             <Route path='/shop-washing-machine' exact element={<WashingMachine/>} />
             <Route path='/shop-dishwasher' exact element={ <Dishwasher/>} />
             <Route path='/about-snova' exact element={<AboutSnova/>} />
             <Route path='/life-style' exact element={<LifeStyle/>} />
             <Route path='/karttakhfif' exact element={<CodeTakhfif/>} />
             <Route path='/jashnehtabestane' exact element={<TabestaneJashnvareh/>} />
             <Route path='/water-temperature' exact element={<WaterTemperature/>} />
             <Route path='/cartsearch' exact element={<CartSearch/>} />
             <Route path='/allproducts' exact element={<AllProducts/>} />
             <Route path='/samsungbrand' exact element={<SamsungBrands/>} />
             <Route path='/lgbrand' exact element={<LgBrands/>} />
             <Route path='/whirlpoolbrand' exact element={<WhirlpoolBrands/>} />
             <Route path='/bushbrands' exact element={<BushBrands/>} />
             <Route path='/PopularQuestions' exact element={<PopularQuestions/>} /> 
             <Route path='/AfterSalesService' exact element={<AfterSalesService/>} />
             <Route path='/ContactUsForm' exact element={<ContactUsForm/>} />
             <Route path='/ProductOff' exact element={<ProductOff/>} />
             <Route path='/ProductJashnvareh' exact element={<ProductJashnvareh/>} />
             <Route path='/CartBuyJashnvareh' exact element={<CartBuyJashnvareh/>} />
             <Route path='/Stores' exact element={<Stores/>} />
             <Route path="*" element={<PageNotFount/>} />
             </Routes>
          </div>
    </CartProvider>
      </>
  );
}
export default App;
