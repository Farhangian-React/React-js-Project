
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
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Rating from '@mui/material/Rating';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Tems({ currentItems,load }) {
  const [data,setData]=useContext(CardData);
const [datashow,setDatashow]=useContext(CardDataShow);
  const [cartItems,setCartItems]=useContext(CartContext);
  const[datacomment,setDatacomment]=useState([]);
  
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
  const getData=()=>{
    fetch("https://serverjson-project.onrender.com/Allcomments")
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

  const FilteringDish=()=>{
    
 setDatashow(data.filter(i=> i.product === "Dish"));

  }
  const FilteringWash=()=>{
  
    setDatashow(data.filter(i=> i.product === "Wash"));
    
     }
     const FilteringGas=()=>{
     
      setDatashow(data.filter(i=> i.product === "Gas"));
     
       }
       const FilteringRef=()=>{
     
        setDatashow(data.filter(i=> i.product === "Ref"));
       
         }
 return (
  <> 

<Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>
<Box sx={{display:"flex",justifyContent:"end",mb:3 ,mt:{xs:10,lg:0.7} ,mx:1 }} >
      <List
            role="menu"
            aria-label="Products"
            variant="outlined"
            orientation="horizontal"
            sx={{
              mt: 1,
              boxShadow: 'md',
              borderRadius: 'sm',
              '--List-radius': '8px',
              '--List-padding': '2px',
              '--ListDivider-gap': '2px',
              '--ListItemDecorator-size': '24px',
              width:'100%',
              backgroundColor:'#E0E1E3',
              alignItems:'center',
              
             
            }}
          >
              <ListItem role="none" sx={{ml:0}}>
                <Button onClick={FilteringDish} sx={{':hover':{backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",
                 borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
       color:'white'}, fontSize:{xs:"14px",md:"17px"},color:'#282828',ml:0}}> ماشین ظرفشویی</Button>   
            </ListItem>
            <ListItem  role="none" sx={{mx:0}}>
            <Button onClick={FilteringWash}  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",
       borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
      color:'white'}, fontSize:{xs:"14px",md:"17px"},color:'#282828',mx:0}}> ماشین لباسشویی</Button>
            </ListItem>
            <ListItem role="none" sx={{mx:0}}>
            <Button onClick={FilteringRef} sx={{':hover':{backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",
       borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
      color:'white'}, fontSize:{xs:"14px",md:"17px"},color:'#282828',mx:0}}>   یخچال و فریزر </Button>   
            </ListItem>
            <ListItem  role="none" sx={{mr:0}}>
            <Button onClick={FilteringGas}  sx={{':hover':{backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",
       borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
      color:'white'}, fontSize:{xs:"14px",md:"17px"},color:'#282828',mr:0}}>  پخت و پز</Button>
            </ListItem>
          </List>
        </Box>
        <Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},
    justifyContent:"start",width:"100vw",p:4,bgcolor:"#eeeeee"}} >
      <Box sx={{width:{xs:"90%",lg:"30%"},display:"flex",alignSelf:{xs:"center",lg:"start"},
height:{lg:"65vh"},
position:{xs:"static",lg:"sticky"},
top: "80px",

}}>
<FilterBrands/></Box>
<Box sx={{width:{xs:"90%",lg:"75%"},display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:"center",mx:0,mt:{xs:3,lg:0}}}>
<Box sx={{mx:3,display:'flex',justifyContent:'start',borderRadius:{xs:"none",lg:'10px'},direction:'rtl',borderBottom:{xs:"1px solid #414141",lg:"none"},
 height:'auto',color:{xs:"#282828",lg:"#585858"},bgcolor:{lg:"white"},pb:0.8}}>
<Typography sx={{px:3,pt:0.5,fontSize:{xs:"22px"},direction:'rtl'}}> 
 محصولات LG 
</Typography>
</Box>
<Box  sx={{bgcolor:"#ececec", display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:1.5,pb:3,px:0}}>

  {
   load ? 
   <Backdrop
   sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
   open
 >
 <CircularProgress color="inherit" />
 </Backdrop>
 :
  currentItems &&
    currentItems.map((item) => (
    
      <NavLink to={'/cartsearch'}  className={"linkss"}> 
     
   
     <Card className='cards' sx={{width:{xs:"270px",sm:'270px',md:"250px",lg:'250px'},
height:{xs:"400px",sm:'400px',md:"450px",lg:'450px'},marginTop:'10px',marginBottom: '10px',mx:{xs:3,lg:1.5},mt:3, px:1.5,pb:1,pt:2 }} key={item.id}>
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
    <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"center",
    alignSelf:"center",alignItems:"center",
    border:"none",height:'25px',direction:"rtl",py:0.8,my:0}}>
    <Typography  sx={{fontSize:{xs:"12px",lg:"14px"},color:"#8a8a8a",textAlign:'center'}}>
      {item.title2}
      </Typography>
      <Rating
         sx={{color:"#f5cd00",fontSize:"12px",px:5,alignItems:"center"}}
        name="simple-controlled"
        value={sumscore(item)}
      
      />
    
  </CardContent>

  <CardContent sx={{height:'20px',direction:"rtl",display:"flex",justifyContent:"center",flexDirection:"column",borderBottom:'1px solid #d4d4d4',borderTop:'1px solid #d4d4d4'}} >
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',px:0.7,py:0.3}}>
     <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
     <Typography  variant="h6" color="#926f34" sx={{textAlign:'center'}}>{item.price}</Typography>
    </Box>
   
  </CardContent>
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


export default function CardLg({ itemsPerPage }) {

const [data,setData]=useContext(CardData);
const [datashow,setDatashow]=useContext(CardDataShow);
const[isLoading,setIsLoading]=useState(true);
const getData=()=>{
fetch('https://serverjson-project.onrender.com/Allproducts' )
.then(res => res.json())
.then((result)=> {
setData(result.filter(i=>i.brands === "LG"));
 setDatashow(result.filter(i=>i.brands === "LG"));
setIsLoading(false);

},
(error) => {
  alert('error');
  setIsLoading(false);
}
);

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
    <Tems currentItems={currentItems} load={isLoading} />
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

