import React, { useState,useEffect } from 'react';
import '../Product/Products.css';
import { NavLink, useNavigate } from 'react-router-dom';
function BannerP() {
  const [photo,setPhoto]=useState(1);
  const [type,setType]=useState(1);
  useEffect(()=> {
  
    const interval = setInterval(()=>{
      change();},4000);
      return()=>{
        clearInterval(interval);};},[photo,type]);

        const change=()=>{
          if(photo === 4 && type === 4){
            setPhoto(1);
            setType(1);
            return;
          }
          setPhoto((prev) => prev+1);
          setType ((p) => p+1);
        };
        const returnPhotoURL=()=>{
          switch(photo){
            case 1: return 'https://www.bleeckerkitchen.com/wp-content/uploads/2022/01/Electric-Tools-you-need-in-your-Kitchen.jpg';
            case 2: return 'https://m.media-amazon.com/images/I/81FQCyxhuKS._AC_UF894,1000_QL80_.jpg';
            case 3: return 'https://assets.telkitchens.co.uk/srcane/uploads/2021/09/07060057/How-do-modern-kitchen-appliances-make-cooking-easier-and-ease-manual-work.jpg';
            case 4: return 'https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/06292022/rs28a5f61sr/RS28A5F61SR_03_Silver_SCOM.jpg?$product-details-jpg$';
            default: return null;
          }
       
        }; 
        const returnType1=()=>{
          switch(type){
            case 1: return "فصل پر جایزه";
            case 2: return "انتخاب به جا";
            case 3: return "فرصت های بر آب رفته";
            case 4: return 'اعتبار شیرین ۱۰۰ میلیون تومانی';
            default: return null;
          }
       
        };
        const returnType2=()=>{
          switch(type){
            case 1: return "هدیه ی خرید برای همه تا سقف ۱۰ میلیون تومان در جشنواره های پاییزه ی سهیل";
            case 2: return 'اجاق گاز ۴ شعله ی سهیل با فضای کمتر و پخت بهتر';
            case 3: return "به جای ظرف شستن  برای هنر وقت بزارید";
            case 4: return 'تخیف های باور نکردنی و ویژه';
            default: return null;
          }
       
        };
        const returnType3=()=>{
          switch(type){
            case 1: return 'جشنواره های زمستانه' ;
            case 2: return 'اطلاعات بیشتر';
            case 3: return 'ماشین ظرفشویی سری Moment';
            case 4: return 'کلیک کنید';
            default: return null;
          }
       
        };
        const returnType4=()=>{
          switch(type){
            case 1: return '/jashnehtabestane' ;
            case 2: return '/shop-ranges';
            case 3: return '/shop-dishwasher';
            case 4: return '/ProductOff';
            default: return null;
          }
       
        };
  return (
    <>
    <div className='w-full h-auto flex justify-center  bg-cover bg-center bg-no-repeat '
    style={{backgroundImage:`url(${returnPhotoURL()})`}}
     >
         <div className=' bg-black bg-opacity-70 lg:bg-opacity-90 w-[80vw] lg:w-[50vw] h-[250px] mt-52 lg:mt-24 mb-20 mx-5 '>
          <p className='flex flex-col justify-between border-r-4 border-white mt-5 mr-8 pr-2 py-6 text-white text-right' >
             <p className='text-2xl text-white my-1.5 px-2'> {returnType1()}</p>
            <p className='text-yellow-200 mt-1 text-lg px-2'  > {returnType2()}</p>
             <NavLink className='navbanner'  to={returnType4()}>
               <p className='text-sm text-yellow-600 mt-1.5 px-2'   >
           {returnType3()}
          </p></NavLink>
          </p>
         </div>
      </div>
      </>
  );
}

export default BannerP

;
