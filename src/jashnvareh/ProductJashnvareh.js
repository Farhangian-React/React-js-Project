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
import FilteringProductJashnvareh from "../jashnvareh/FilteringProductJashnvareh";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import './jashnvareh.css';
import { PageTitle } from '../Title/PageTitle';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export default function ProductJashnvareh() {
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
fetch("https://serverjson-project.onrender.com/Allcomments")
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
 const[isLoading,setIsLoading]=useState(true);

const getData1=()=>{
 fetch('https://serverjson-project.onrender.com/Allproducts' )
 .then(res => res.json())
 .then((result)=> {

  setData(result.filter(i=>i.jashnvareh !== "no" ));
  setDatashow(result.filter(i=>i.jashnvareh !== "no" ));
  setIsLoading(false);
console.log(data); 
 },
 (error) => {
   alert('error');
   setIsLoading(false);
 }
 )
}


useEffect(()=>{
  getData();
  getData1();

  
},[])

    return(
<>


<PageTitle title='  جشنواره / محصولات جشنواره ' description='  جشنواره'/>
   <TopNav/> 
   <Box sx={{  width:"250px",display:"flex",alignSelf:"start",justifyContent:"start",py:1.5,mx:6,mt:{xs:15,lg:5},mb:5,boxShadow:"10px 10px 10px #64b3f4 "}}>

    <Typography variant='h5' sx={{color:"#585858",textAlign:"start",px:5}}>محصولات جشنواره   </Typography>
   </Box>
    <Box  sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},
    justifyContent:"start",width:"100vw",p:4,bgcolor:"#eeeeee"}} >  
<Box sx={{display:"flex",alignSelf:{xs:"center",lg:"start"},mx:"auto",width:{xs:"95%",lg:"30%"},
height:{lg:"60vh"},
position:{xs:"static",lg:"sticky"},
mt:3,
top: "80px"}} >
<FilteringProductJashnvareh/>   
</Box>
<Box  sx={{bgcolor:"#ececec", display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',alignItems:"start",mr:5,ml:10,pb:3,px:0}}>
{
    isLoading ? 
    <Backdrop
    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
    open
  >
  <CircularProgress color="inherit" />
  </Backdrop>
  :
    datashow.map((item) => (      
      <NavLink to={'/CartBuyJashnvareh'}  className={"linkss"}>
    <Card className='cards' sx={{width:{xs:"270px",sm:'270px',md:"250px",lg:'250px'},height:{xs:"400px",sm:'400px',md:"450px",lg:'450px'},marginTop:'10px',marginBottom: '10px',mx:{xs:3,lg:1.5},mt:3, px:1.5,pb:1,pt:2 }} key={item.id}>
<Box sx={{width:"35px",height:"20px",bgcolor:"#f5cd00",color:"#414141",borderRadius:"20%",px:0,py:0,mt:0.2,display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Typography sx={{fontSize:"12px",textAlign:"center"}}>  {convertToPersian(item.off)}%</Typography>
    </Box>
<CardMedia
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
sx={{width:{xs:"150px",sm:"150px",md:"200px",lg:"200px"},m:"auto"}}
  />
    <CardContent sx={{border:"none",height:'30px',direction:"rtl"}}>
          <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
            {item.title1}
          </Typography>
        </CardContent>
        <Divider/>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
        
            <Box   sx={{width:"30px",height:"30px", backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)",color:"#303730",borderRadius:"20%",p:0,m:0,display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{fontSize:"14px",textAlign:"center"}}>  {convertToPersian(item.offj)}%</Typography>
              
              </Box> 
              <Box sx={{display:"flex",flexDirection:"column"}}>
              <Typography  variant="h6" color="#ea9e08" sx={{textAlign:'center',textDecorationLine: "line-through",textDecorationColor: "#414141"}}>{item.price}</Typography>
               <Typography  variant="h6" color="#414141" sx={{textAlign:'center'}}>
             
                {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.offj / 100))+''))} تومان 
               </Typography>
       </Box> </Box>
       
        <CardActions sx={{display:'flex',justifyContent:'center'}}>
        <NavLink to={'/CartBuyJashnvareh'}>  <Button size="large"
            fullWidth
            variant="contained"
            sx={{ borderTopRightRadius:"20px",borderTopLeftRadius: "30px",
            borderBottomRightRadius:"30px",borderBottomLeftRadius:"20px",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'},
             color:'#414141',fontSize:"18px",  backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)", my:1,py:0,px:8}}
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