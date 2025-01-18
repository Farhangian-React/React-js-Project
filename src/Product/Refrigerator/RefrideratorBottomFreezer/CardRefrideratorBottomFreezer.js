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
import FilteringBottomFreezer from './FilteringBottomFreezer';
import "../Refrigerator.css";
import Rating from '@mui/material/Rating';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
function Tems({ currentItems,load }) {
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
        });
         return total /aver;
       }
   return (
    <> 
      <Box sx={{display:"flex",flexDirection:"column",bgcolor:"#ececec"}}>
       <Box>
    <Typography variant="h6" sx={{color:"#282828",py:4, px:5,pb:1,fontWeight: 550,textAlign:"justify"}}  >
    یخچال های فریزر پایین
         </Typography>
         <Typography sx={{color:"#414141",fontSize:"16px", px:5,pb:1,textAlign:"justify"}}>راحتی را با یخچال فریزر پایین از سهیل کشف کنید. این پیکربندی ها یخچال را در بالای کشوی فریزر نشان می دهد که یخچال را در سطح چشم قرار می دهد.
      </Typography>
      <Typography  sx={{color:"#414141",fontSize:"16px",px:5,pb:2,mb:3,textAlign:"justify"}}>ما مفتخریم که یخچال‌ها را با هر قیمتی ارائه می‌کنیم تا بتوانید آنچه را که نیاز دارید را بدون شکستن بانک پیدا کنید. با انتخاب محدوده بودجه خود شروع کنید، سپس ظرفیت متناسب با نیازهای خانوار خود را با ابعاد متناسب با فضای اختصاص داده شده در آشپزخانه خود انتخاب کنید. سپس سبک مورد علاقه خود را برای تکمیل و بیشتر انتخاب کنید! هنگامی که یکی را که دوست دارید پیدا کردید، آن را برای خرید به سبد خرید خود اضافه کنید و ضمانت های خود را اضافه کنید یا با مدل های دیگر مقایسه کنید تا انتخاب کاملی داشته باشید.
      </Typography>
    </Box>
    <Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},
    justifyContent:"start",width:"100vw",p:4,bgcolor:"#eeeeee"}} >
      <Box sx={{width:{xs:"90%",lg:"30%"},display:"flex",alignSelf:{xs:"center",lg:"start"},
height:{lg:"70vh"},
position:{xs:"static",lg:"sticky"},
top: "80px",


}}>
 <FilteringBottomFreezer/></Box>
 <Box sx={{width:{xs:"90%",lg:"75%"},display:'flex',flexDirection:'column',justifyContent:'center',alignSelf:"center",mx:0,mt:{xs:3,lg:0}}}>
<Box sx={{mx:3,display:'flex',justifyContent:'start',borderRadius:{xs:"none",lg:'10px'},direction:'rtl',borderBottom:{xs:"1px solid #414141",lg:"none"},
 height:'auto',color:{xs:"#282828",lg:"#585858"},bgcolor:{lg:"white"},pb:0.8}}>
<Typography sx={{px:3,pt:0.5,fontSize:{xs:"24px",lg:"22px"},direction:'rtl'}}>  یخچال های فریزر پایین
</Typography>
</Box>
<Box  sx={{bgcolor:"#ececec", display:'flex' ,flexWrap:'wrap' ,justifyContent:'center',mx:0,pb:3,px:0}}>
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
     
     <Card className='cards' sx={{width:{xs:"350px",lg:'250px'},
height:{xs:"500px",lg:'500px'},marginTop:'10px',marginBottom: '10px',mx:{xs:1,lg:1.5},mt:3, px:{xs:0.8,lg:1.5},pb:1,pt:2 }} key={item.id}>
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
sx={{width:{xs:"220px",lg:"200px"},m:"auto"}}
  />
    <CardContent sx={{border:"none",height:'60px',direction:"rtl"}}>
    <Typography component="div" sx={{fontSize:{xs:"18px",lg:"14px"},textAlign:'center'}}>
      {item.title1}
    </Typography>
    </CardContent>
    <CardContent sx={{display:"flex",flexDirection:"column",justifyContent:"center",
    alignSelf:"center",alignItems:"center",
    border:"none",height:'25px',direction:"rtl",py:0.8,my:0}}>
    <Typography  sx={{fontSize:{xs:"14px",lg:"14px"},color:"#8a8a8a",textAlign:'center'}}>
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
     <Typography   color="black" sx={{textAlign:'center',fontSize:"16px"}}>خرید نقدی</Typography>
     <Typography  variant="h5" color="#926f34" sx={{textAlign:'center',fontSize:{xs:"18px",lg:"16px"}}}>{item.price}</Typography>
    </Box>
   
  </CardContent>
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/CartBuyDishwasher'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:{xs:"16px",lg:"18px"},
      backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", mt:2,mb:{xs:0,md:2},py:0,px:{xs:8,lg:5},
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

export default function CardRefrideratorBottomFreezer({ itemsPerPage }) {
 
  
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
  const[isLoading,setIsLoading]=useState(true);
 const getData=()=>{
  fetch('https://serverjson-project.onrender.com/Allproducts' )
  .then(res => res.json())
  .then((result)=> {
  setData(result.filter(i=>i.product === "Ref" && i.type === "BottomFreezer"));
   setDatashow(result.filter(i=>i.product === "Ref" && i.type === "BottomFreezer" ));
  setIsLoading(false);
  
  },
  (error) => {
    alert('error');
    setIsLoading(false);
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
      <Tems currentItems={currentItems} load={isLoading}  />
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
 
