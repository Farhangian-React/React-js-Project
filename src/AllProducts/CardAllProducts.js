
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
import FilterBrands from './FilterBrands';
import { NavLink } from 'react-router-dom';
import Rating from '@mui/material/Rating';
function Tems({ currentItems }) {
  const [cartItems,setCartItems]=useContext(CartContext);
  const[datacomment,setDatacomment]=useState([]);
  const getData=()=>{
    fetch("http://localhost:3000/Allcomments")
    .then((res)=>
       res.json())
       .then((data)=>{
      setDatacomment(data);
      }
       )
    .catch(err=>console.log(err));
  }
  useEffect(()=>{
    getData();
    
  },[])
      const sumscore=(item)=>{
        let total=0;
        let aver=0;
     datacomment.map(i=>{
      if(i.idcomment === item.id){
        aver ++;
        total += i.score; 
      }
      return total;
      });
       return total /aver;
     }
 return (
  <> 


<Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>
<Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},
    justifyContent:"start",width:"100vw",p:4,bgcolor:"#eeeeee"}} >
      <Box sx={{width:{xs:"90%",lg:"30%"},display:"flex",alignSelf:{xs:"center",lg:"start"},
height:{lg:"65vh"},
position:"sticky",
top: "80px",

}}>
<FilterBrands/></Box>
<Box sx={{width:{xs:"90%",lg:"75%"},display:'flex',flexDirection:'column',justifyContent:'start',mx:1,mt:{xs:3,lg:0}}}>
<Box sx={{mx:3,display:'flex',justifyContent:'start',borderRadius:{xs:"none",lg:'10px'},direction:'rtl',borderBottom:{xs:"1px solid #414141",lg:"none"}, height:'6vh',color:{xs:"#282828",lg:"#585858"},bgcolor:{lg:"white"}}}>
<Typography sx={{px:3,pt:0.5,fontSize:{xs:"22px"},direction:'rtl'}}>
 محصولات سهیل  
</Typography>
</Box>
<Box  sx={{bgcolor:"#ececec", display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:1.5,pb:3,px:0}}>

  {currentItems &&
    currentItems.map((item) => (
    
      <NavLink to={'/cartsearch'}  className={"linkss"}> 
     
<Card className='cards' sx={{width:{xs:"270px",sm:'270px',md:"250px",lg:'250px'},height:{xs:"370px",sm:'370px',md:"420px",lg:'420px'},marginTop:'10px',marginBottom: '10px',mx:0.8,mt:3, px:1.5,pb:1,pt:2 }} key={item.id}>
<CardMedia
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
sx={{width:{xs:"150px",sm:"150px",md:"200px",lg:"200px"},m:"auto"}}
  />
      <CardContent sx={{border:"none",height:'70px',direction:"rtl"}}>
    <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
      {item.title1}
    </Typography>
    <Typography  sx={{fontSize:{xs:"14px",md:"16px",lg:"18px"},color:"#8a8a8a",textAlign:'center'}}>
      {item.title2}
      <Rating
         sx={{fontSize:"14px",px:5,alignItems:"center"}}
        name="simple-controlled"
        value={sumscore(item)}
      />
    </Typography>
  </CardContent>
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',px:2,py:1,borderBottom:'1px solid #d4d4d4',borderTop:'1px solid #d4d4d4'}}>
     <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
     <Typography  variant="h6" color="#ea9e08" sx={{textAlign:'center'}}>{item.price}</Typography>
  </Box>
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/cartsearch'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:{xs:"16px",lg:"18px"},
      backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", mt:2,mb:{xs:0,md:2},py:0,px:{xs:5,lg:8},
      borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px"}}
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
</Box>
  </>
);
    }

export default function CardAllProducts({ itemsPerPage }) {
const [data,setData]=useContext(CardData);
const [datashow,setDatashow]=useContext(CardDataShow);

const getData=()=>{
fetch('http://localhost:3000/Allproducts' )
.then(res => res.json())
.then((result)=> {
  setData(result);
 setDatashow([...data]);
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

