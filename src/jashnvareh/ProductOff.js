import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../Shared/Cart-Context';
import {CardData} from '../Shared/Cart-Context';
import {CardDataShow} from '../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FilteringProductOff from "../jashnvareh/FilteringProductOff";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import './jashnvareh.css';
import { PageTitle } from '../Title/PageTitle';
export default function ProductOff() {
  const [cartItems,setCartItems]=useContext(CartContext);
  const[datacomment,setDatacomment]=useState([]);
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

const getData=()=>{
fetch("http://localhost:3000/Allcomments")
.then((res)=>
   res.json())
   .then((data)=>{
  setDatacomment(data);
  console.log(datacomment);
  console.log(cartItems);
  }
   )
.catch(err=>console.log(err));
}
 const [data,setData]=useContext(CardData);
 const [datashow,setDatashow]=useContext(CardDataShow);

const getData1=()=>{
 fetch('http://localhost:3000/Allproducts' )
 .then(res => res.json())
 .then((result)=> {

  setData(result.filter(i=>i.off !== "" ));
  setDatashow(result.filter(i=>i.off !== "" ));
 console.log(data);
 },
 (error) => {
   alert('error');
 }
 )
}


useEffect(()=>{
  getData();
  getData1(); 
},[])

    return(
<>


<PageTitle title='کالاهای تخفیف دار' description='  جشنواره'/>
   <TopNav/> 
   <Box sx={{width:"90%",display:"flex",alignSelf:"center",justifyContent:"start",py:1.5,mx:"auto",mt:{xs:15,lg:5},mb:5,boxShadow:"10px 10px 10px #585858 "}}>

    <Typography variant='h5' sx={{color:"#585858",textAlign:"start",px:5}}>کالاهای تخفیف دار </Typography>
   </Box>
    <Box  sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},
    justifyContent:"start",width:"100vw",p:4,bgcolor:"#eeeeee"}} >  
<Box sx={{display:"flex",alignSelf:{xs:"center",lg:"start"},mx:"auto",width:{xs:"95%",lg:"30%"},
height:{lg:"60vh"},
position:{xs:"static",lg:"sticky"},
mt:3,
top: "80px"}} >
<FilteringProductOff/>   
</Box>
<Box  sx={{bgcolor:"#ececec", display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',alignItems:"start",mx:1.5,pb:3,px:0}}>
{
    datashow.map((item) => (      
      <NavLink to={'/cartbuygas'}  className={"linkss"}>
<Card  sx={{width:"260px",height:"360px",mx:"auto",my:3,p:1 }} key={item.id}>
<CardMedia
sx={{width:"90px",height:"120px",m:"auto"}}
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
  />
      <CardContent sx={{height:'55px',direction:"rtl"}}>
    <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
      {item.title1}
    </Typography>
  </CardContent>
  <Divider/>
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
  
      <Box   sx={{width:"30px",height:"30px",bgcolor:"#414141",color:"#E0AA3E",borderRadius:"20%",p:0,m:0,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{fontSize:"14px",textAlign:"center"}}>  {convertToPersian(item.off)}%</Typography>
        
        </Box> 
        <Box sx={{display:"flex",flexDirection:"column"}}>
        <Typography  variant="h6" color="#ea9e08" sx={{textAlign:'center',textDecorationLine: "line-through",textDecorationColor: "#414141"}}>{item.price}</Typography>
         <Typography  variant="h6" color="#414141" sx={{textAlign:'center'}}>
       
          {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
         </Typography>
 </Box> </Box>
 
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/cartbuygas'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{ borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"20px",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
      onClick={()=>{
        setCartItems([item]);
       }}>خرید </Button></NavLink>
  </CardActions>
</Card>
</NavLink>
    ))}
</Box>
</Box> 
 <Footer/>
</>
   );
    }