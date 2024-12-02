import React,{useState,useContext} from "react";
import { Button,ButtonGroup } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import {CartBuyContext} from '../Shared/Cart-Context';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
export default  function Buttons({i}) {
  const [cartItemsBuy,setCartItemsBuy]=useContext(CartBuyContext);
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
      setCartItemsBuy([...cartItemsBuy.filter(q=>q.id !=e.id)])
    }
  const handleIncrement=(i)=>{
    setCount(count + 1);
    const carts=[...cartItemsBuy];
    const index=carts.findIndex(q=>q.id===i.id);
   cartItemsBuy[index].pricenum=convertToPersian((Number(convertToEnglish((cartItemsBuy[index].pricenum)))+ Number(convertToEnglish(cartItemsBuy[index].pricenum))/count)+'');
    setCartItemsBuy([...cartItemsBuy]);   
  }
  const handleDecrement=(i)=>{
     if(count===1){
      deletList(i);
    }
    else{setCount(Math.max(count - 1, 0));
    const carts=[...cartItemsBuy];
    const index=carts.findIndex(q=>q.id==i.id);
    cartItemsBuy[index].pricenum=convertToPersian((Number(convertToEnglish((cartItemsBuy[index].pricenum)))- Number(convertToEnglish(cartItemsBuy[index].pricenum))/count)+'');
    setCartItemsBuy([...cartItemsBuy]);
    }
  }
  return(
 <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
  <ButtonGroup size="small" aria-label="Small button group"  >
        <AddIcon  sx={{py:0.4,border:"1px solid #bbb",alignSelf:"center"}} onClick={() =>
   handleIncrement(i)} fontSize="inherit"  />
     
        <Button sx={{':hover':{border:"none"},border:"none",color:"black",border:"1px solid #bbb",alignSelf:"center",p:0,m:0,borderRadius:"none"}}  >
          {count}
        </Button>
        <HorizontalRuleOutlinedIcon onClick={() =>
   handleDecrement(i) } fontSize="inherit" sx={{py:0.4,border:"1px solid #bbb",alignSelf:"center"}} />
    
    </ButtonGroup>
     </Box>
  )
}