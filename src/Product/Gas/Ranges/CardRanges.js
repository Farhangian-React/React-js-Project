import React, {useContext,useState,useEffect} from 'react';
import 'react-slideshow-image/dist/styles.css';
import ReactPaginate from 'react-paginate';
import {CartContext} from '../../../Shared/Cart-Context';
import {CardDataShow} from '../../../Shared/Cart-Context';
import {CardData} from '../../../Shared/Cart-Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CartBuyGas from '../../CartBuyGas';
import FilterRages from "./FilterRages";
  
   function Tems({ currentItems }) {
    const [cartItems,setCartItems]=useContext(CartContext);
     return (
      <> 

<Box sx={{mt:2,mb:4}}>
      <ul className='headers'>
        <li>محصولات / </li>
        <li>  پخت و پز / </li>
        <li>   اجاق گاز ایستاده  </li>
      </ul>
    </Box>

    <Box component="div" sx={{ display:'flex',flexDirection:{xs:'column',lg:'row'}}} >
 <FilterRages/>
 <Box sx={{display:'flex',flexDirection:'column',justifyContent:'start'}}>
<Box sx={{my:{lg:3},mt:{xs:3},ml:1,mr:3,display:'flex',justifyContent:'start', height:'40px',bgcolor:{lg:"#E0E1E3"}}}>
<Typography sx={{pb:1,px:2,fontSize:{xs:"20px",lg:'24px'},direction:'rtl'}}>
   اجاق گاز ایستاده
</Typography>
</Box>
       <Box  sx={{borderTop:'1px solid black',borderBottom:'1px solid black', display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:3,pb:3}}>
        {currentItems &&
          currentItems.map((item) => (
            <NavLink to={'/cartbuygas'}  className={"linkss"}>  
            <Card className='cards' sx={{height:"500px", maxWidth:'250px',marginTop:'10px',marginBottom: '10px',marginX:'22px', p:1 }} key={item.id}>
      <CardMedia
          component="img"
          height="220"
         image={item.img}
          alt=""
          onClick={()=>{
            setCartItems([item]);
           }}
        />
            <CardContent sx={{height:"90px",direction:"rtl"}}>
         
          <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
            {item.title1}
          </Typography>
          <Typography variant="h6" color="black" sx={{textAlign:'center'}}>
           {item.title2}
          </Typography>
        </CardContent>
        <Divider/>
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
     <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
     <Typography  variant="h6" color="gray" sx={{textAlign:'center'}}>{item.price}</Typography>
        </Box>
        <CardActions sx={{display:'flex',justifyContent:'center'}}>
        <NavLink className='buttonbuy' to={'/cartbuygas'}>  <Button size="large"
            fullWidth
            variant="contained"
            
            sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
            onClick={()=>{
              setCartItems([item]);
              <CartBuyGas/>
             }}>خرید </Button></NavLink>
          
        </CardActions>
       
      </Card>
      </NavLink>
          ))}
      
      
          </Box>
          </Box>
          </Box>
         
      </>
    );
  }
  
  export default function CardRanges({ itemsPerPage }) {
    const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
    const getData=()=>{
      fetch('http://localhost:3000/Allproducts' )
      .then(res => res.json())
      .then((result)=> {
      setData(result.filter(i=>i.product === "Gas" && i.type === "ranges"));
       setDatashow(result.filter(i=>i.product === "Gas" && i.type === "ranges" ));
      
      
      },
      (error) => {
        alert('error');
      }
      )
     }
    
      useEffect( ()=>{
        getData();
    
      },[])
      const [itemOffset, setItemOffset] = useState(0);
      const endOffset = itemOffset + itemsPerPage;
      const currentItems = datashow.slice(itemOffset, endOffset);
      const pageCount = Math.ceil(datashow.length / itemsPerPage);
      const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % datashow.length;
        setItemOffset(newOffset);
      };
    return (
      <>
        <Tems currentItems={currentItems}  />
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<<"
          renderOnZeroPageCount={null}
          className='pagination'
          pageClassName='paginationli'
          previousClassName='previousStyle'
          nextClassName='nextStyle'
        />
      </>
    );}