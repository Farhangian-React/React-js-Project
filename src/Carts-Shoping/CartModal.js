import  React from 'react';
import  {useContext} from 'react';
import {CartBuyContext} from '../Shared/Cart-Context';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import { Grid,} from '@mui/material';
import './Carts.css';
import Button from '@mui/material/Button';
export default function CartModal() {
 

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

  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);

  const addCommas=(nStr)=>{
    console.log(setCartItemsBuy(cartItemsBuy));
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

  return (
    <>
<Box sx={{bgcolor:"#f1f1f1",display:"flex",flexDirection:"column",height:"100vh",justifyContent:"start",mb:"auto"}}>  
{cartItemsBuy.map((item) => (
    <Grid xs={12} sx={{bgcolor:"white",display:"flex",flexDirection:"row",justifyContent:"space-around",m:1,p:1}} >
    <Grid xs={4} sx={{alignSelf:"center"}} >
    <img src={item.img} width={120} alt=''/>
    </Grid>
        <Grid xs={4} sx={{alignSelf:"center"}}>
            <Typography  sx={{fontSize:{xs:"22px",lg:"16px"}}}>
            {item.title1}
            </Typography>
        </Grid>
        <Grid xs={4} sx={{direction:"rtl",display:"flex",flexDirection:"column",alignSelf:"center",mr:1}}>
        
          <Typography  sx={{fontSize:{xs:"22px",lg:"16px"},textAlign:"center",alignSelf:"center",color:"#fa003f"}}  >
          {addCommas(convertToPersian((convertToEnglish(item.pricenum1)-(convertToEnglish(item.pricenum1)*item.off / 100))+''))} تومان 
         </Typography>
         
        </Grid>
    </Grid>

))}
  <NavLink to={'/buybasket'}  className="linkss"><Button size='medium'  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'},
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",
      color:'white',borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"20px",mx:6,px:1,mb:2,width:"80%"}}> ثبت سفارش</Button></NavLink>
       <NavLink to={'/'}  className="linkss">  <Button size='medium'  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
       color:'white'},backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",color:'white',
       borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"20px",mx:6,px:1,mb:2,width:"80%"}}> بازگشت به صفحه اصلی </Button></NavLink>
  </Box>
    
    </>
  )
        }