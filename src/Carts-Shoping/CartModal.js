import  React,{useContext,useState} from 'react';
import {CartBuyContext} from '../Shared/Cart-Context';
import Table from '@mui/joy/Table';
import Typography from '@mui/joy/Typography';
import Box from '@mui/material/Box';
import Buttons from './Buttons'; 
import { Grid,} from '@mui/material';
import './Carts.css';
import Button from '@mui/material/Button';
export default function CartModal() {
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);

  return (
    <>
<Box sx={{bgcolor:"#f1f1f1",display:"flex",flexDirection:"column",justifyContent:"center",mb:30}}>  
{cartItemsBuy.map((item) => (
    <Grid xs={12} sx={{bgcolor:"white",display:"flex",flexDirection:"row",justifyContent:"space-around",m:1,p:1}} >
    <Grid xs={4} sx={{alignSelf:"center"}} >
    <img src={item.img} width={120}/>
    </Grid>
        <Grid xs={4} sx={{alignSelf:"center"}}>
            <Typography  sx={{fontSize:"14px"}}>
            {item.title1}
            </Typography>
        </Grid>
        <Grid xs={4} sx={{direction:"rtl",direction:"flex",flexDirection:"column",alignSelf:"center",mr:1}}>
           <Buttons i={item}  />
            <Typography  sx={{mt:1,fontSize:"12px",textAlign:"center",alignSelf:"center",color:"#E0AA3E"}}>{item.pricenum} تومان</Typography>
        </Grid>
    </Grid>
))}
  </Box>
      <Box sx={{width:"400px",position:"fixed",top: 'auto', bottom: 0 ,alignSelf:"center",display:'flex',flexDirection:"column",justifyContent:'center',direction:'ltr',mb:5,mx:0}} >
       <Button size='medium'  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",color:'white',borderRadius:'5px',mx:3,px:1,mb:2}}> ثبت سفارش</Button>
       <Button size='medium'  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'},backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",color:'white',borderRadius:'5px',mx:3,px:1,mb:2}}> بازگشت به صفحه اصلی </Button>
      </Box>
    </>
  )
        }