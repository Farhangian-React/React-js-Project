import * as React from 'react';
import { useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import "./Style.css";
import { Box,Typography,Card,CardMedia} from '@mui/material';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';
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
   
    setCartshow(cartimage.filter(q=> q.id1 ===1))
  }
  const handelclick2=()=>{
    
    setCartshow(cartimage.filter(q=> q.id1 ===2))
  }
  const handelclick3=()=>{
   
    setCartshow(cartimage.filter(q=> q.id1 ===3))
  }
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(cartshow.length / itemsPerPage);
  const handlePageClick = (event) => {
    console.log(itemOffset);
    const newOffset = (event.selected * itemsPerPage) % cartshow.length;
    setItemOffset(newOffset);
  };
  return (
    <>
    <Box  sx={{ backgroundImage:"linear-gradient(to bottom ,#f9f0de,#565452)",
   borderTopLeftRadius: "150px",borderTopRightRadius: "30px",height:'120px',my:{xs:6,md:3},mx:3,display:"flex",justifyContent:"start",alignSelf:"end",
}}>
   <Typography variant='h5' sx={{px:4,my:0,pt:2,color:'#4f3b02',textAlign:'right'}} >
  به سبک خودت زندگی کن 
  <Typography  sx={{fontSize:{xs:"14px",md:"18px"},pt:2,pb:0,my:0,color:'black',lineHeight:'0'}} > مطالب به روز و خواندنی در مورد هر آنچه که با آن زندگی می کنید
    </Typography>
   </Typography>
</Box>
<Grid container  sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
  <Grid xs={6} md={4} className='grid' 
   component="a"
   href="/water-temperature"
   sx={{
    position:"relative",
     display:'flex',
     justifyContent:'center',
    backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2024/04/1-600x338.jpg")',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    height:'300px',
    overflow:"hidden",
    borderRadius:"10px",
    m:2
   
  }}
    >
<Box className="gerdalia"><NavLink className='linka'  to={'/ProductOff'} > <Typography className='type1' variant='body1' sx={{textAlign:"start",color:"#201e1c",fontWeight:"400",pr:0}}>   اهمیت دمای آب لباسشویی برای شستشوی لباس های مختلف</Typography>
        </NavLink></Box>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
  </Grid>
  <Grid xs={6} md={3} 
  className='grid' 
  component="a"
  href="allrefriderators"
  sx={{
    position:"relative",
     display:'flex',
     justifyContent:'center',
    backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2024/03/3-1-600x338.jpg")',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    height:'300px',
    overflow:"hidden",
    borderRadius:"10px",
   m:2
  }}
  >
 <Box className="gerdalia"><NavLink className='linka' to={'/ProductOff'} > <Typography className='type1' variant='body1' sx={{textAlign:"start",color:"#201e1c",fontWeight:"400",pr:0}}>   اهمیت دمای آب لباسشویی برای شستشوی لباس های مختلف</Typography>
        </NavLink></Box>

        <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'black',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
</Grid>
  <Grid xs={6} md={3} 
  className='grid' 
  component="a"
  href="allrefriderators"
  sx={{
    position:"relative",
     display:'flex',
     justifyContent:'center',
    backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2024/02/s6-600x338.jpg")',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    height:'300px',
    overflow:"hidden",
    borderRadius:"10px",
   m:2}}>
  <Box className="gerdalia"><NavLink className='linka' to={'/ProductOff'} > <Typography className='type1' variant='body1' sx={{textAlign:"start",color:"#201e1c",fontWeight:"400",pr:0}}>   اهمیت دمای آب لباسشویی برای شستشوی لباس های مختلف</Typography>
        </NavLink></Box>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
  </Grid>
  <Grid xs={6} md={3} 
  className='grid' 
  component="a"
  href="allrefriderators"
  sx={{
    position:"relative",
     display:'flex',
     justifyContent:'center',
    backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/12/%D8%B4%D8%A7%D8%AE%D8%B5-3-600x338.jpg")',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    height:'300px',
    overflow:"hidden",
    borderRadius:"10px",
   m:2}}>
   <Box className="gerdalia"><NavLink className='linka' to={'/ProductOff'} > <Typography className='type1' variant='body1' sx={{textAlign:"start",color:"#201e1c",fontWeight:"400",pr:0}}>   اهمیت دمای آب لباسشویی برای شستشوی لباس های مختلف</Typography>
        </NavLink></Box>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
</Grid>
<Grid 
className='grid' 
component="a"
href="allrefriderators"
xs={6} md={4}
sx={{
  position:"relative",
   display:'flex',
   justifyContent:'center',
  backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/10/6.jpg")',
  backgroundPosition: 'center',
  backgroundSize:'cover',
  backgroundRepeat: 'no-repeat',
  height:'300px',
  overflow:"hidden",
  borderRadius:"10px",
 m:2}}>
  <Box className="gerdalia"><NavLink className='linka' to={'/ProductOff'} > <Typography className='type1' variant='body1' sx={{textAlign:"start",color:"#201e1c",fontWeight:"400",pr:0}}>   اهمیت دمای آب لباسشویی برای شستشوی لباس های مختلف</Typography>
        </NavLink></Box>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'white',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
</Grid>
<Grid className='grid' 
   component="a"
   href="allrefriderators" xs={6} md={3}
   sx={{
    position:"relative",
     display:'flex',
     justifyContent:'center',
    backgroundImage: 'url("https://snowa.ir/wp-content/uploads/2023/12/%D8%B4%D8%A7%D8%AE%D8%B5-600x338.jpg")',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    height:'300px',
    overflow:"hidden",
    borderRadius:"10px",
   m:2}}>
 <Box className="gerdalia"><NavLink className='linka' to={'/ProductOff'} > <Typography className='type1' variant='body1' sx={{textAlign:"start",color:"#201e1c",fontWeight:"400",pr:0}}>   اهمیت دمای آب لباسشویی برای شستشوی لباس های مختلف</Typography>
        </NavLink></Box>

   <Box className='type2' >
  <Typography  fontWeight={400} sx={{color:'black',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
   بیشتر بخوانید...
  </Typography></Box>
</Grid>
  </Grid>
  <Grid xs={10} md={8} sx={{mx:{xs:7,md:12},my:8}}>
    <button onClick={handelclick1} className='home' >ترفند های خانگی</button>
    <button onClick={handelclick2} className='home' > آشپزی خانگی </button>
    <button onClick={handelclick3} className='home' >دکوراسیون خانگی</button>
  </Grid>
  <Grid container sx={{display:'flex',justifyContent:'center',mx:3}}>
    {cartshow.map((item) => (
      


  <Grid xs={6} sm={4} md={3} className='grid'
    
   component="a"
   href={item.href}
   
  >


<Card  sx={{height:"370px",bgcolor:"#f9f9f2",marginTop:'10px',marginBottom: '10px',mx:1,mt:3, p:1 }} key={item.id}>
<CardMedia
sx={{height:"300px"}}
    component="img"
   
   image={item.img}
    alt=""
  />
      
    <Typography className='type1'  fontWeight={400} sx={{color:'#353535',mt:2,mr:2,fontSize:{xs:'14px',md:'16px'}}}>
   {item.text}
  </Typography>
  <Typography className='type2'  fontWeight={400} sx={{mr:{xs:8,sm:12,md:10,lg:14},color:'#353535',fontSize:{xs:'20px',sm:"22px",md:'24px',lg:"26px"}}}>
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
