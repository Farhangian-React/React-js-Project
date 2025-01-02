import React,{useState,useContext} from "react";
import { Button,ButtonGroup } from "@mui/material";
import {CartBuyContext} from '../Shared/Cart-Context';
import AddIcon from '@mui/icons-material/Add';
import {CartContext} from '../Shared/Cart-Context';
import Box from '@mui/material/Box';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
export default  function Buttons({t}) {
 
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);
  
  const [cartItems,setCartItems]=useContext(CartContext);
  const [count,setCount]=useState(1);
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
  const deletList=(e)=>{
    console.log(setCartItems(cartItems));
      setCartItemsBuy([...cartItemsBuy.filter(q=>q.id !==e.id)])
    }
  const handleIncrement=(t)=>{
    setCount(count + 1);
    const carts=[...cartItemsBuy];
   
    const index=carts.findIndex(q=>q.id===t.id);
    carts[index].pricenum1=convertToPersian((Number(convertToEnglish((t.pricenum1)))+ Number(convertToEnglish(t.pricenum1))/count)+'');
    setCartItemsBuy([...carts]);
   
  }
  const handleDecrement=(t)=>{
     if(count===1){
      deletList(t);
    }
    else{
      setCount(Math.max(count - 1, 0));
    const carts=[...cartItemsBuy];
    const index=carts.findIndex(q=>q.id===t.id);
    carts[index].pricenum1=convertToPersian((Number(convertToEnglish((t.pricenum1)))- Number(convertToEnglish(t.pricenum1))/count)+'');
    setCartItemsBuy([...carts]);
    console.log(cartItems);
    console.log(cartItemsBuy);
    }
  }
  return(
 <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
  <ButtonGroup size="small" aria-label="Small button group"  >
        <AddIcon  sx={{py:0.4,border:"1px solid #bbb",alignSelf:"center"}} onClick={() =>
   handleIncrement(t)} fontSize="inherit"  />
     
        <Button sx={{':hover':{border:"none"},color:"black",border:"1px solid #bbb",alignSelf:"center",p:0,m:0,borderRadius:"none"}}  >
          {count}
        </Button>
        <HorizontalRuleOutlinedIcon onClick={() =>
   handleDecrement(t) } fontSize="inherit" sx={{py:0.4,border:"1px solid #bbb",alignSelf:"center"}} />
    
    </ButtonGroup>
     </Box>
  )
}