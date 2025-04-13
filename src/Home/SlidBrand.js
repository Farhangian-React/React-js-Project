import React from 'react';
import '../Product/Products.css';
import { NavLink } from 'react-router-dom';
function SlidBrand() {
       
  return (
    <>
  



    <div className="logos w-full h-[120px] flex justify-between relative bg-white whitespace-nowrap pt-2 overflow-hidden ">
<div  className='logos-slide' >
<NavLink to={"/samsungbrand" }> <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/samsung_logo_icon_144912.png"    alt='' /></NavLink>
</div>
<div  className='logos-slide' >

<NavLink to={'/whirlpoolbrand'}><img src="https://i.pinimg.com/736x/58/6c/08/586c08b09fff9fc53d34d15844a80e1c.jpg"    alt='' /></NavLink>

</div>
<div  className='logos-slide' >
  <NavLink to={"/lgbrand"}><img src="https://cdn.icon-icons.com/icons2/3912/PNG/512/lg_logo_icon_247849.png" alt='' /></NavLink>
</div>
<div  className='logos-slide' >


<NavLink to={'/bushbrands'}><img src="https://cdn.icon-icons.com/icons2/2845/PNG/512/bosch_logo_icon_181287.png" alt='' /></NavLink>
</div>

</div>
    
      

      </>
  );
}

export default SlidBrand;
