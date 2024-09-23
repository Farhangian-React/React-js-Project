import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../../../Shared/Cart-Context';
import {CardData} from '../../../Shared/Cart-Context';
import {CardDataShow} from '../../../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FilteringSpecializedFreezer from './FilteringSpecializedFreezer';
function Tems({ currentItems }) {
    const [cartItems,setCartItems]=useContext(CartContext);
   return (
    <> 
    <Box sx={{mt:2,mb:4}}>
      <ul className='headers'>
        <li>محصولات / </li>
        <li> یخچال و فریزر / </li>
        <li> یخچال های فریزر تخصصی </li>
      </ul>
    </Box> 

    <Box>
      <Typography sx={{fontSize:{xs:'14px',lg:'18px'}, px:5,pb:2}}>راحتی را با یخچال فریزر پایین از سهیل کشف کنید. این پیکربندی ها یخچال را در بالای کشوی فریزر نشان می دهد که یخچال را در سطح چشم قرار می دهد.
      </Typography>
      <Typography  sx={{fontSize:{xs:'14px',lg:'18px'},px:5,pb:2}}>ما مفتخریم که یخچال‌ها را با هر قیمتی ارائه می‌کنیم تا بتوانید آنچه را که نیاز دارید را بدون شکستن بانک پیدا کنید. با انتخاب محدوده بودجه خود شروع کنید، سپس ظرفیت متناسب با نیازهای خانوار خود را با ابعاد متناسب با فضای اختصاص داده شده در آشپزخانه خود انتخاب کنید. سپس سبک مورد علاقه خود را برای تکمیل و بیشتر انتخاب کنید! هنگامی که یکی را که دوست دارید پیدا کردید، آن را برای خرید به سبد خرید خود اضافه کنید و ضمانت های خود را اضافه کنید یا با مدل های دیگر مقایسه کنید تا انتخاب کاملی داشته باشید.
      </Typography>
    </Box>
    <Box component="div" sx={{ display:'flex',flexDirection:{xs:'column',lg:'row'}}} >
 <FilteringSpecializedFreezer/>
 <Box sx={{display:'flex',flexDirection:'column',justifyContent:'start'}}>
<Box sx={{my:{lg:3},mt:{xs:3},ml:1,mr:3,display:'flex',justifyContent:'start', height:'40px',bgcolor:{lg:"#E0E1E3"}}}>
<Typography sx={{pb:1,px:2,fontSize:{xs:"20px",lg:'24px'},direction:'rtl'}}>
   یخچال و فریزر تخصصی

</Typography>
</Box>
 <Box  sx={{borderTop:'1px solid black',borderBottom:'1px solid black', display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:3,pb:3}}>


  {currentItems &&
    currentItems.map((item) => (
      
      <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}>  
<Card className='cards' sx={{width:{xs:'350px',lg:'250px'},height:{xs:'600px',lg:'500px'},marginTop:'10px',marginBottom: '10px',mx:3,mt:3, p:1 }} key={item.id}>
<CardMedia
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
  />
      <CardContent sx={{height:'75px',direction:"rtl"}}>
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
  <NavLink to={'/cartbuyrefrigerator'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
      onClick={()=>{
        setCartItems([item]);
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

export default function CardRefrideratorSpecializedFreezer({ itemsPerPage }) {
 
  
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);

 const getData=()=>{
  fetch('http://localhost:3000/Allproducts' )
  .then(res => res.json())
  .then((result)=> {
  setData(result.filter(i=>i.product === "Ref" && i.type === "Special"));
   setDatashow(result.filter(i=>i.product === "Ref" && i.type === "Special" ));
  
  
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
        pageRangeDisplayed={7}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        className='pagination'
        pageClassName='paginationli'
        previousClassName='previousStyle'
        nextClassName='nextStyle'
      />
    </>
  );
}
 
