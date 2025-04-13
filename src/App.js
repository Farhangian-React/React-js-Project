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
             <Route path="/"  element={<Products/>} />
             <Route path="/signin"  element={<SignIn/>} />
             <Route path="/signup"  element={<SignUp/>} />
             <Route path="/cartbuyrefrigerator"  element={<CartBuyRefrigerator />} />
             <Route path="/cartbuygas"  element={<CartBuyGas />} />
             <Route path="/CartBuyDishwasher"  element={<CartBuyDishwasher />} />
             <Route path="/cartbuywashingmachine"  element={<CartBuyWashingMachine />} />
             <Route path="/buybasket"  element={<Carts/>} />
             <Route path="/buybasketmodal"  element={<CartModal/>} />
             <Route path="/allrefriderators"  element={<Refrigerators/>} />
             <Route path="/allgas"  element={<Gas/>} />
             <Route path="/shop-cooktop"  element={<CookTops/>} />
             <Route path="/shop-microwaves"  element={<Microwaves/>} />
             <Route path="/shop-hood"  element={<Hoods/>} />
             <Route path="/shop-ranges"  element={<Ranges/>} />
             <Route path="/shop-refrigeratorfrenchdoor"  element={<RefrigeratorsFrenchDoor/>} />
             <Route path="/shop-refrigeratorsidbysid"  element={<RefrideratorSideBySide/>} />
             <Route path="/shop-refrideratorbottomfreezer"  element={<RefrideratorBottomFreezer/>} />
             <Route path="/shop-refrideratortopfreezer"  element={<RefrideratorTopFreezer/>} />
             <Route path="/shop-refrideratorspecializedfreezer"  element={<RefrideratorSpecializedFreezer/>} />
             <Route path='/shop-washing-machine'  element={<WashingMachine/>} />
             <Route path='/shop-dishwasher'  element={ <Dishwasher/>} />
             <Route path='/about-snova'  element={<AboutSnova/>} />
             <Route path='/life-style'  element={<LifeStyle/>} />
             <Route path='/karttakhfif'  element={<CodeTakhfif/>} />
             <Route path='/jashnehtabestane'  element={<TabestaneJashnvareh/>} />
             <Route path='/water-temperature'  element={<WaterTemperature/>} />
             <Route path='/cartsearch'  element={<CartSearch/>} />
             <Route path='/allproducts'  element={<AllProducts/>} />
             <Route path='/samsungbrand'  element={<SamsungBrands/>} />
             <Route path='/lgbrand'  element={<LgBrands/>} />
             <Route path='/whirlpoolbrand'  element={<WhirlpoolBrands/>} />
             <Route path='/bushbrands'  element={<BushBrands/>} />
             <Route path='/PopularQuestions'  element={<PopularQuestions/>} /> 
             <Route path='/AfterSalesService'  element={<AfterSalesService/>} />
             <Route path='/ContactUsForm'  element={<ContactUsForm/>} />
             <Route path='/ProductOff'  element={<ProductOff/>} />
             <Route path='/ProductJashnvareh'  element={<ProductJashnvareh/>} />
             <Route path='/CartBuyJashnvareh'  element={<CartBuyJashnvareh/>} />
             <Route path='/Stores'  element={<Stores/>} />
             <Route path="*" element={<PageNotFount/>} />
             </Routes>
          </div>
    </CartProvider>
      </>
  );
}
export default App;
