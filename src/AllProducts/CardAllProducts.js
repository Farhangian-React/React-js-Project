
import 'react-slideshow-image/dist/styles.css';
import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../Shared/Cart-Context';
import {CardData} from '../Shared/Cart-Context';
import {CardDataShow} from '../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FilterDishwasher from "../Product/Dishwasher/FilterDishwasher";
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
function Tems({ currentItems }) {
  const [cartItems,setCartItems]=useContext(CartContext);
 return (
  <> 


  <Box component="div" sx={{ display:'flex',flexDirection:{xs:'column',lg:'row'}}} >
<FilterDishwasher/>

<Box sx={{display:'flex',flexDirection:'column',justifyContent:'start',mx:3}}>
<Box sx={{my:{lg:3},mt:{xs:3},ml:1,mr:3,display:'flex',justifyContent:'start', height:'40px',bgcolor:{lg:"#E0E1E3"}}}>
<Typography sx={{pb:1,px:2,fontSize:{xs:"20px",lg:'24px'},direction:'rtl'}}>
همه ی محصولات سهیل 
</Typography>
</Box>
<Box  sx={{borderTop:'1px solid black',borderBottom:'1px solid black', display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:3,pb:3}}>

{currentItems &&
  currentItems.map((item) => (
    
    <NavLink to={'/CartBuyDishwasher'}  className={"linkss"}>    
<Card className='cards' sx={{width:{xs:'350px',lg:'260px'},height:{xs:'600px',lg:'500px'},marginTop:'10px',marginBottom: '10px',mx:3,mt:3, p:1 }} key={item.id}>
<CardMedia
  component="img"
 
 image={item.img}
  alt=""
  onClick={()=>{
    setCartItems([item]);
   }}
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
<NavLink to={'/CartBuyDishwasher'}>  <Button size="large"
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

export default function CardAllProducts({ itemsPerPage }) {

const [datadish,setDatadish]=useState([]);
const [dataref,setDataref]=useState([]);
const [datagas,setDatagas]=useState([]);
const [datawashing,setDatawashing]=useState([]);
const [data,setData]=useContext(CardData);
const [datashow,setDatashow]=useContext(CardDataShow);

const getData=()=>{
fetch('http://localhost:3000/Dishwasher' )
.then(res => res.json())
.then((result)=> {
  setDatadish(result);

},
(error) => {
  alert('error');
}
)
;

  fetch('http://localhost:3000/Refrigerators' )
  .then(res => res.json())
  .then((result)=> {
    setDataref(result);

  },
  (error) => {
    alert('error');
  }
  );
  fetch('http://localhost:3000/AllGas' )
  .then(res => res.json())
  .then((result)=> {
    setDatagas(result);

  },
  (error) => {
    alert('error');
  }
  );
  fetch('http://localhost:3000/WashingMachine' )
  .then(res => res.json())
  .then((result)=> {
    setDatawashing(result);

  },
  (error) => {
    alert('error');
  }
  )
  }

useEffect( ()=>{
  getData();
setData(datadish.concat(datagas,dataref,datawashing));
 setDatashow([...data]);
 


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
