import React, {useContext,useState,useEffect} from 'react';
import {CartContext} from '../../Shared/Cart-Context';
import {CardData} from '../../Shared/Cart-Context';
import {CardDataShow} from '../../Shared/Cart-Context';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FilteringRefrigerators from './FilteringRefrigerators';
import Rating from '@mui/material/Rating';
import Backdrop from '@mui/material/Backdrop';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
function Tems({ currentItems,load }) {
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
      console.log(cartItems);
    
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
    });
     return total /aver;
   }
   return (
    <> 
    <Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec",justifyContent:"center",m:"auto"}}>
  <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",px:"2em",m:"1.5em"}}>
    <Typography sx={{fontSize:"2em",fontWeight:500,textAlign:"start",color:"black",py:"0.5em"}}   >
          یخچال و فریزر
         </Typography>
      <Typography  paragraph sx={{color:"#585858",textAlign:"justify",fontSize:"1.5em"}}>
      یخچال و فریزر دو یار همیشگی و همراه آشپزخونه‌ هستن که اگه یه روز نباشن کارها پیش نمیره حتی نمیشه آشپزی کرد.
      </Typography>
      <Typography   paragraph sx={{color:"#585858",textAlign:"justify",fontSize:"1.5em"}}>
      برای پیدا کردن یخچال و فریزر دلخواهتون فقط کافیه یه سر به سرزمین سهیل بزنین و با مقایسه‌ و بررسی ویژگی‌ها، یخچال و فریزر دلخواهتون رو پیدا کنین.
      </Typography>
</Box>  
    <Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},
    justifyContent:"start",width:"100vw",bgcolor:"#eeeeee",m:"auto"}} >
      <Box sx={{width:{xs:"90%",lg:"30%"},display:"flex",alignSelf:{xs:"center",lg:"start"},
height:{lg:"70vh"},
position:{xs:"static",lg:"sticky"},
top: "80px",

}}>
 <FilteringRefrigerators/></Box>

 <Box sx={{width:"100%",display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:"center",m:"auto"}}>
<Box sx={{mx:3,mt:"1em",display:'flex',justifyContent:'start',borderRadius:{xs:"none",lg:'10px'},direction:'rtl',borderBottom:{xs:"1px solid #414141",lg:"none"},
 height:'auto',color:"#282828",pb:0.8}}>
<Typography sx={{px:3,pt:0.5,fontSize:"1.5em",direction:'rtl'}}>   یخچال و فریزر
</Typography>
</Box>
 <Box  sx={{ display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:"0.2em",pb:3,px:0}}>

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
      <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}> 
<Card className='cards' sx={{width:{xs:"400px",lg:"330px"},height:"600px",marginTop:'10px',marginBottom: '10px',mx:"0.5em",my:"1em",p:"1.5em" }} key={item.id}>

        <CardMedia
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
sx={{width:"250px",m:"auto"}}
  />
    <CardContent sx={{border:"none",height:'70px',direction:"rtl"}}>
    <Typography gutterBottom  component="div" sx={{textAlign:'center',fontSize:"1.5em"}}>
      {item.title1}
    </Typography>
  </CardContent>
    <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"center",
    alignSelf:"center",alignItems:"center",
    border:"none",height:'50px',direction:"rtl",py:0.8,my:0}}>
    <Typography  sx={{fontSize:"1em",color:"#8a8a8a",textAlign:'center'}}>
      {item.title2}
      </Typography>
      <Rating
         sx={{color:"#f5cd00",fontSize:"1em",px:5,alignItems:"center"}}
        name="simple-controlled"
        value={sumscore(item)}
      
      />
    
  </CardContent>

  <CardContent sx={{height:'70px',direction:"rtl",display:"flex",justifyContent:"center",flexDirection:"column",borderBottom:'1px solid #d4d4d4',borderTop:'1px solid #d4d4d4'}} >

    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
    <Box   sx={{width:"45px",height:"30px",bgcolor:"#414141",color:"#E0AA3E",borderRadius:"20%",px:0,mx:0,mt:"1em",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{fontSize:"1.2em",textAlign:"center"}}>  {convertToPersian(item.off)}%</Typography>
        
        </Box> 
         <Box sx={{display:"flex",flexDirection:"column"}}>
          <Typography   color="#ea9e08" sx={{fontSize:"1.2em",textAlign:'center',textDecorationLine: "line-through",textDecorationColor: "#414141"}}>{item.price}</Typography>
         <Typography   color="#414141" sx={{fontSize:"1.2em",textAlign:'center'}}>
       
          {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
         </Typography></Box>
 </Box>
  </CardContent>
  <CardContent sx={{display:'flex',justifyContent:'center',height: "50px"}}>
  <NavLink to={'/cartbuyrefrigerator'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{  borderTopRightRadius:"0.5em",borderTopLeftRadius: "1em",borderBottomRightRadius:"1em",borderBottomLeftRadius:"0.5em",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'},
       color:'#eeeeee',fontSize:"1.5em",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:"0.5em",py:0,px:"3em"}}
      onClick={()=>{
        setCartItems([item]);
       }}>خرید </Button></NavLink>
    
  </CardContent>
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

export default function AllRefrigerators({ itemsPerPage }) {  
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
const[isLoading,setIsLoading]=useState(true);
  useEffect( ()=>{
      fetch('https://serverjson-project.onrender.com/Allproducts' )
      .then(res => res.json())
      .then((result)=> {
      setData(result.filter(i=>i.product === "Ref"));
       setDatashow(result.filter(i=>i.product === "Ref"));
       setIsLoading(false);
       console.log(data);
      },
      (error) => {
        alert('error');
        setIsLoading(false);
      }
      )
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
      <Tems currentItems={currentItems} load={isLoading}  />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
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
 
