import * as React from 'react';
import  {useContext,useState} from 'react';
import { CartContext} from '../Shared/Cart-Context';
import { Typography,Button } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './CartBuy.css';
import { useEffect } from 'react';
import {CardDataoff} from '../Shared/Cart-Context';
import { Slide } from 'react-slideshow-image';


export default function SlideOffProducts()  {
    const [cartItems,setCartItems]=useContext(CartContext);
    const [dataoff,setDataoff]=useContext(CardDataoff);
   const getData=()=>{
    fetch('https://serverjson-project.onrender.com/Allproducts' )
    .then(res => res.json())
    .then((result)=> {
      setDataoff(result.filter(i=>i.off !== "" ));

    },
    (error) => {
      alert('error');
    }
    )
   }
   const convertToEnglish=(str)=> {
   
    let englishNumber =str
    .replace(/۰/g, '0')
    .replace(/۱/g, '1')
    .replace(/۲/g, '2')
    .replace(/۳/g, '3')
    .replace(/۴/g, '4')
    .replace(/۵/g, '5')
    .replace(/۶/g, '6')
    .replace(/۷/g, '7')
    .replace(/۸/g, '8')
    .replace(/۹/g, '9');

 return(englishNumber);
  }
  const convertToPersian=(str)=> {
   
    let persianNumber =str
    .replace(/0/g, '۰')
    .replace(/1/g, '۱')
    .replace(/2/g, '۲')
    .replace(/3/g, '۳')
    .replace(/4/g, '۴')
    .replace(/5/g, '۵')
    .replace(/6/g, '۶')
    .replace(/7/g, '۷')
    .replace(/8/g, '۸')
    .replace(/9/g, '۹');
return(persianNumber);
  }
   useEffect(()=>{
    getData();
  
console.log(dataoff);
   
  
  },[])
  const addCommas=(nStr)=>{
  
    if(nStr.length === 7){
      return  nStr.substring(0,1) + "," + nStr.substring(1, 4) + "," + nStr.substring(4, 7);
    }
    if(nStr.length === 8){
      return  nStr.substring(0, 2) + "," + nStr.substring(2, 5) + "," + nStr.substring(5, 8);
    }
    if(nStr.length === 9){
      return  nStr.substring(0, 3) + "," + nStr.substring(3, 6) + "," + nStr.substring(6, 9);
  }
  }
   return(
        <>
 
 <div dir='rtl' className=' flex flex-col lg:hidden bg-white my-2 mx-auto w-[97%] rounded-sm '>
        <div    className='bordershadow flex flex-col justify-center w-[200px] text-start m-10 '  >
        <p className='text-2xl text-center text-gray-700 py-3' >
      تخفیفات ویژه
        </p>
        </div>
        <Slide slidesToScroll={1} slidesToShow={2} indicators={false}  sx={{ flexDirection:"row", }}  >
        {dataoff.map((item) => (
      
      <NavLink to={'/cartbuygas'}  className={"linkss"}>

<div
    onClick={()=>{
     setCartItems([item]);
    }}
    key={item.id} className='flex justify-center items-center mx-auto px-0 backdrop-blur-lg rounded-3xl '>
      <div  className='bg-white  w-[400px] h-[620px]  rounded-lg shadow-xl
  mx-3 my-3
      ' >

         
<Box    
          sx={{display:"flex", height:"420px",borderRadius:"10px",justifyContent:'center',
         backgroundImage: `url(${item.img})`,
         backgroundPosition: 'center',
         backgroundSize:'cover',
         backgroundRepeat: 'no-repeat',':hover':{  backgroundImage: `url(${item.imga1})`,
         backgroundPosition: 'center',
         backgroundSize:'cover',scale:"1.1"}}}
        
          
          >     
           </Box>    
           <div dir="rtl" className=' pt-5 px-5 '>
           <div className='flex justify-center h-[50px]'>
<p className='text-sm text-center text-gray-800 font-bold'> {item.title1}</p> 
       </div>


<div className='flex flex-col justify-center  p-1 '>
<div  dir="rtl" className='flex justify-between items-baseline h-[60px] pb-1 border-b-2 border-gray-400'>
<div   className='flex justify-center text-center rounded-md text-yellow-500 bg-gray-900 h-[25px] w-[40px] hover:bg-yellow-500 hover:text-gray-900'>
        <p sx={{fontSize:"1.2em",textAlign:"center"}}>  {convertToPersian(item.off)}%</p>
        
        </div>
        <div className='flex flex-col' >
        <p className='text-xs text-yellow-600 text-center line-through decoration-gray-600 ' >{item.price}</p>
         <p   className='text-gray-600 text-left text-md' >
       
          {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
         </p>
 </div>


</div>
<div className='flex justify-center h-auto mt-2  '>
<NavLink style={{ textDecoration: "none" }} to={"/cartbuygas" }>
                    <button    onClick={()=>{
              setCartItems([item]);
             }} className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
                    rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-1 mx-8 px-10 py-1 text-white text-md font-sans hover:bg-gradient-to-r hover:from-gray-500
                    hover:via-yellow-500 hover:to-gray-500'
                     > 
                    خرید</button></NavLink>
                    </div>
</div>
            </div>
       </div>
     </div>
</NavLink>
      
    ))}
   
        </Slide>
        </div>

       
        <div dir='rtl' className='hidden lg:flex lg:flex-col bg-white my-2 mx-auto w-[97%] rounded-sm '>
        <div    className='bordershadow flex flex-col justify-center w-[200px] text-start m-10 '  >
        <p className='text-2xl text-center text-gray-700 py-3' >
      تخفیفات ویژه
        </p>
        </div>
        <Slide slidesToScroll={1} slidesToShow={4} indicators={false}  sx={{ flexDirection:"row", }}  >
        {dataoff.map((item) => (
      
      <NavLink to={'/cartbuygas'}  className={"linkss"}>

<div
    onClick={()=>{
     setCartItems([item]);
    }}
    key={item.id} className='flex justify-center items-center mx-auto px-0 backdrop-blur-lg rounded-3xl '>
      <div  className='bg-white  w-[320px] h-[500px]  rounded-lg shadow-xl
  mx-3 my-3
      ' >

         
<Box    
          sx={{display:"flex", height:"280px",borderRadius:"10px",justifyContent:'center',
         backgroundImage: `url(${item.img})`,
         backgroundPosition: 'center',
         backgroundSize:'cover',
         backgroundRepeat: 'no-repeat',':hover':{  backgroundImage: `url(${item.imga1})`,
         backgroundPosition: 'center',
         backgroundSize:'cover',scale:"1.1"}}}
        
          
          >     
           </Box>    
           <div dir="rtl" className=' pt-5 px-5 '>
           <div className='flex justify-center h-[50px]'>
<p className='text-sm text-center text-gray-800 font-bold'> {item.title1}</p> 
       </div>


<div className='flex flex-col justify-center  p-1 '>
<div  dir="rtl" className='flex justify-between items-baseline h-[60px] pb-1 border-b-2 border-gray-400'>
<div   className='flex justify-center text-center rounded-md text-yellow-500 bg-gray-900 h-[25px] w-[40px] hover:bg-yellow-500 hover:text-gray-900'>
        <p sx={{fontSize:"1.2em",textAlign:"center"}}>  {convertToPersian(item.off)}%</p>
        
        </div>
        <div className='flex flex-col' >
        <p className='text-xs text-yellow-600 text-center line-through decoration-gray-600 ' >{item.price}</p>
         <p   className='text-gray-600 text-left text-md' >
       
          {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
         </p>
 </div>


</div>
<div className='flex justify-center h-auto mt-2  '>
<NavLink style={{ textDecoration: "none" }} to={"/cartbuygas" }>
                    <button    onClick={()=>{
              setCartItems([item]);
             }} className='bg-gradient-to-r from-yellow-500 via-yellow-900 to-yellow-500 
                    rounded-tr-md rounded-bl-md rounded-tl-2xl rounded-br-2xl my-1 mx-8 px-10 py-1 text-white text-md font-sans hover:bg-gradient-to-r hover:from-gray-500
                    hover:via-yellow-500 hover:to-gray-500'
                     > 
                    خرید</button></NavLink>
                    </div>
</div>
            </div>
       </div>
     </div>
</NavLink>
      
    ))}
   
        </Slide>
        </div>

   
        </>
    )
}