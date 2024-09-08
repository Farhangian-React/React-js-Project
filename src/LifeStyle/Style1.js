import * as React from 'react';
import { useRef,useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import "./Style.css";
import { Box,Button,Typography,Card,CardContent,CardMedia} from '@mui/material';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
export default function Style1({itemsPerPage}) {





const [cartimage,setCartimage]=useState([]);
const [cartshow,setCartshow]=useState([]);
  const getCartimage=()=>{
    fetch('http://localhost:3000/Cartimage')
    .then(res => res.json())
    .then((result)=> {
      setCartimage(result);
      setCartshow(result);
    },
    (error) => {
      alert('error');
    }
    )
   }
  
    useEffect( ()=>{
      getCartimage();
  
    
    },[])

  const handelclick1=()=>{
   
    setCartshow(cartimage.filter(q=> q.id1 ==1))
  }
  const handelclick2=()=>{
    
    setCartshow(cartimage.filter(q=> q.id1 ==2))
  }
  const handelclick3=()=>{
   
    setCartshow(cartimage.filter(q=> q.id1 ==3))
  }
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = cartimage.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cartshow.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cartshow.length;
    setItemOffset(newOffset);
  };
  return (
    <>
    <Box  sx={{height:'120px',bgcolor:'#f9f9f2',my:{xs:6,md:3},mx:3,borderRadius:5
}}>
   <Typography variant='h5' sx={{px:4,my:0,pt:1,color:'#C8A951',textAlign:'right'}} >
  به سبک خودت زندگی کن 
  <Typography  sx={{fontSize:{xs:"16px",md:"20px"},py:3,my:0,color:'black',textAlign:'right',lineHeight:'0'}} > مطالب به روز و خواندنی در مورد هر آنچه که با آن زندگی می کنید
    </Typography>
   </Typography>
</Box>
<Grid container  sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
  <Grid xs={6} md={4} className='grid' 
   component="a"
   href="/water-temperature"
     sx={{
      borderRadius:3,
       m:2,
       backgroundImage: 'linear-gradient(to right bottom, rgba(0,0,0,0), #282828),url("https://snowa.ir/wp-content/uploads/2024/04/1-600x338.jpg")',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       height:'300px',
       }} >
    <Typography className='type1'  fontWeight={400} sx={{color:'white',mt:{xs:27,md:28},mr:2,fontSize:{xs:'14px',md:'18px'}}}>
    اهمیت دمای آب لباسشویی برای شستشوی لباس های مختلف
  </Typography>
  <Typography className='type2'  fontWeight={400} sx={{mt:{xs:25,sm:17,md:17,lg:20},mr:{xs:8,sm:12,md:10,lg:14},color:'white',fontSize:{xs:'22px',sm:"24px",md:'26px',lg:"28px"}}}>
   بیشتر بخوانید...
  </Typography>
  </Grid>
  <Grid xs={6} md={3} 
  className='grid' 
  component="a"
  href="allrefriderators"
  sx={{
  borderRadius:3,
   backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), #282828),url("https://snowa.ir/wp-content/uploads/2024/03/3-1-600x338.jpg")',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
   height:'300px',
   m:2,
   }} >
    <Typography className='type1' fontWeight={400} sx={{color:'white',mt:{xs:27,md:28},mr:2,fontSize:{xs:'14px',md:'18px'}}}>
    ویژگی های لوازم خانگی دوست دار محیط زیست
  </Typography>
  <Typography className='type2'  fontWeight={400} sx={{mt:{xs:25,sm:17,md:17,lg:20},mr:{xs:8,sm:12,md:10,lg:14},color:'white',fontSize:{xs:'22px',sm:"24px",md:'26px',lg:"28px"}}}>
   بیشتر بخوانید...
  </Typography>
</Grid>
  <Grid xs={6} md={3} 
  className='grid' 
  component="a"
  href="allrefriderators"
  sx={{
       borderRadius:3,
       backgroundImage: 'linear-gradient(to right bottom, rgba(0,0,0,0), #282828),url("https://snowa.ir/wp-content/uploads/2024/02/s6-600x338.jpg")',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       height:'300px',
       m:2,
       }}>
    <Typography fontWeight={400} className='type1' sx={{color:'white',mt:{xs:27,md:28},mr:2,fontSize:{xs:'14px',md:'18px'}}}>
  نور نمایشگرهای دیجیتال و اثرات مخرب آن
  </Typography>
  <Typography className='type2'  fontWeight={400} sx={{mt:{xs:25,sm:17,md:17,lg:20},mr:{xs:8,sm:12,md:10,lg:14},color:'white',fontSize:{xs:'22px',sm:"24px",md:'26px',lg:"28px"}}}>
   بیشتر بخوانید...
  </Typography>
  </Grid>
  <Grid xs={6} md={3} 
  className='grid' 
  component="a"
  href="allrefriderators"
  sx={{
     borderRadius:3,
     backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0),  #282828),url("https://snowa.ir/wp-content/uploads/2023/12/%D8%B4%D8%A7%D8%AE%D8%B5-3-600x338.jpg")',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
     height:'300px',
     m:2,
     }} >
   <Typography fontWeight={400} className='type1' sx={{color:'white',mt:{xs:27,md:28},mr:2,fontSize:{xs:'14px',md:'18px'}}}>
طرز تهیه ی آجیل بوداده برای شب یلدا
  </Typography>
  <Typography className='type2'  fontWeight={400} sx={{mt:{xs:25,sm:17,md:17,lg:20},mr:{xs:8,sm:12,md:10,lg:14},color:'white',fontSize:{xs:'22px',sm:"24px",md:'26px',lg:"28px"}}}>
   بیشتر بخوانید...
  </Typography>
</Grid>
<Grid 
className='grid' 
component="a"
href="allrefriderators"
xs={6} md={4} sx={{
 borderRadius:3,
 backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,0),  #282828),url("https://snowa.ir/wp-content/uploads/2023/10/6.jpg")',
 backgroundPosition: 'center',
 backgroundRepeat: 'no-repeat',
 height:'300px',
 m:2,
 }} >
   <Typography fontWeight={400} className='type1' sx={{color:'white',mt:{xs:27,md:28},mr:2,fontSize:{xs:'14px',md:'18px'}}}>
    محافظت از لوازم برقی در هنگام رعد و برق
  </Typography>
  <Typography className='type2'  fontWeight={400} sx={{mt:{xs:25,sm:17,md:17,lg:20},mr:{xs:8,sm:12,md:10,lg:14},color:'white',fontSize:{xs:'22px',sm:"24px",md:'26px',lg:"28px"}}}>
   بیشتر بخوانید...
  </Typography>
</Grid>
<Grid className='grid' 
   component="a"
   href="allrefriderators" xs={6} md={3} sx={{
     borderRadius:3,
     backgroundPosition: 'center',
     backgroundImage:'linear-gradient(to bottom, rgba(0,0,0,0),  #282828),url("https://snowa.ir/wp-content/uploads/2023/12/%D8%B4%D8%A7%D8%AE%D8%B5-600x338.jpg")',
     backgroundRepeat: 'no-repeat',
     height:'300px',
     m:2,
     }}>
   <Typography fontWeight={400} className='type1' sx={{color:'white',mt:{xs:27,md:28},mr:2,fontSize:{xs:'14px',md:'18px'}}}>
    ساده ترین راه ها برای داشتن منزلی با دکوراسیون پاییزی
  </Typography>
  <Typography className='type2'  fontWeight={400} sx={{mt:{xs:25,sm:17,md:17,lg:20},mr:{xs:8,sm:12,md:10,lg:14},color:'white',fontSize:{xs:'22px',sm:"24px",md:'26px',lg:"28px"}}}>
   بیشتر بخوانید...
  </Typography>
</Grid>
  </Grid>
  <Grid xs={10} md={8} sx={{mx:{xs:5,md:9},my:5}}>
    <Button onClick={handelclick1}  sx={{boxShadow:'1px 10px 40px 5px #afafaf',borderRadius:24,fontSize:{xs:"16px",md:'20px'},color:'#4d4d4d',px:{xs:1,sm:2},py:1,mx:1}}>ترفند های خانگی</Button>
    <Button onClick={handelclick2} sx={{boxShadow:'1px 10px 40px 5px #afafaf',borderRadius:24,fontSize:{xs:"16px",md:'20px'},color:'#4d4d4d',px:{xs:1,sm:2},py:1,mx:1}}> آشپزی خانگی </Button>
    <Button onClick={handelclick3}  sx={{boxShadow:'1px 10px 40px 5px #afafaf',borderRadius:24,fontSize:{xs:"16px",md:'20px'},color:'#4d4d4d',px:{xs:1,sm:2},py:1,mx:1}}>دکوراسیون خانگی</Button>
  </Grid>
  <Grid container sx={{display:'flex',justifyContent:'center',mx:3}}>
    {cartshow.map((item) => (
      


  <Grid xs={6} sm={4} md={3} className='grid'
    
   component="a"
   href={item.href}
   
  >

<Card className='cards' sx={{height:"370px",bgcolor:"#f9f9f2",marginTop:'10px',marginBottom: '10px',mx:1,mt:3, p:1 }} key={item.id}>
<CardMedia
sx={{height:"300px"}}
    component="img"
   
   image={item.img}
    alt=""
  />
      
    <Typography className='type1'  fontWeight={400} sx={{color:'#353535',mt:2,mr:2,fontSize:{xs:'14px',md:'18px'}}}>
   {item.text}
  </Typography>
  <Typography className='type2'  fontWeight={400} sx={{mr:{xs:8,sm:12,md:10,lg:14},color:'#353535',fontSize:{xs:'18px',sm:"18px",md:'22px',lg:"28px"}}}>
   بیشتر بخوانید...
  </Typography>



 
</Card>
   
  </Grid>

    ))}
  </Grid>
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
