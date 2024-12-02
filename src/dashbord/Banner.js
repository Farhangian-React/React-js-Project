import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect,useState } from 'react';
import { Typography } from '@mui/joy';
import './Banner.css';
import { NavLink } from 'react-router-dom';
export default function Banner() {
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
            case 4: return 'اعتبار شیرین 100 میلیون تومانی';
            default: return null;
          }
       
        };
        const returnType2=()=>{
          switch(type){
            case 1: return "هدیه ی خرید برای همه تا سقف 10 میلیون تومان در جشنواره های پاییزه ی اسنوا";
            case 2: return 'اجاق گاز 4 شعله ی اسنوا با فضای کمتر و پخت بهتر';
            case 3: return "به جای ظرف شستن  برای هنر وقت بزارید";
            case 4: return 'در سه دقیقه وام خرید بگیر و در سه سال پرداخت کن';
            default: return null;
          }
       
        };
        const returnType3=()=>{
          switch(type){
            case 1: return 'جشنواره های تابستانه' ;
            case 2: return 'اطلاعات بیشتر';
            case 3: return 'ماشین ظرفشویی سری Moment';
            case 4: return 'کلیک کنید';
            default: return null;
          }
       
        };
  return (
    <>
      
         <Box 
      sx={{
        display:'flex',
        justifyContent:'center',
       position: "absolute",
       backgroundImage: `url(${returnPhotoURL()})`,
       backgroundPosition: 'center',
       backgroundSize:'cover',
       backgroundRepeat: 'no-repeat',
       width:'100%',
       height:"auto"
       }} >
         

       
         <Box  sx={{mt:{xs:50,lg:22} ,mb:20, mx:5,width:{md:'1000px',lg:'1000px'},
         height:'400px',bgcolor:'black',opacity:{xs:0.8,lg:0.6}}}>
          <Typography  sx={{display:'flex', flexDirection:'column',justifyContent:'space-between',
          borderRight:'10px solid white',mt:6,mr:8,pr:4,color:'white' ,textAlign:'right'}}>
             <Typography  level='h2' sx={{color:'white' ,my:3,px:2}}> {returnType1()}</Typography>

            <Typography   sx={{color:'white' ,my:1,px:2,fontSize:{xs:"16px",md:"18px",lg:"22px"}}}> {returnType2()}</Typography>
             <NavLink className='navbanner'  to={'/jashnehtabestane'}> <Typography  sx={{fontSize:"18px",color:"#E0AA3E",mt:5,px:2}} >
           {returnType3()}
          </Typography></NavLink>
          </Typography>
        
         </Box>
      </Box>
     
    

    </>
  );
      }