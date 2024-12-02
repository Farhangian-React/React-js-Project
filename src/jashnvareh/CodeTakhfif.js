import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/joy';
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { PageTitle } from "../Title/PageTitle";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import "react-toastify/dist/ReactToastify.css";
import './jashnvareh.css';

export default function CodeTakhfif() {
  const [id,setId]=useState("");
  const [code,setCode]=useState("");
  const [numcall,setNumcall]=useState("");
  const [error,setError]=useState({});
  const navigate=useNavigate();
  const isvalidate = ()=>{
    let isvalid =true;
    let errmesage={};
    if(code === null || code === ""){  
      isvalid = false;
errmesage.code="لطفا کد جشنواره را وارد کنید";
    }
    if(numcall === null || numcall === ""){
      
      isvalid = false;
errmesage.numcall="لطفا  شماره همراه خود را وارد کنید";
    }
    if(id === null || id === ""){
      
      isvalid = false;
errmesage.id="لطفا  شماره پذیرش خود را وارد کنید";
    }
    if(!isvalid){
      toast.warning(errmesage);
    }
    setError(errmesage);
    return isvalid;
  }

  const handlesubmit=(e)=>{
  
e.preventDefault();
let result={id,code,numcall};
if(isvalidate()){
//console.log(result);
fetch("http://localhost:3000/users",{
  method:"POST",
  headers:{"content-type":"aplication/jopes"},
  body:JSON.stringify(result)

}).then((res)=>{
  toast.success("عضویت با موفقیت صورت گرفت");
  navigate("/signin");    
}).catch((err)=>{
  toast.error("");
})
  }
}

       

  return (
    <>
      <PageTitle title=' سهیل/جشنواره/کد تخفیف   ' description='جشنواره  '/>
 
   
   <CssBaseline />
      <div>
     <ToastContainer/>  
    </div>
         <Box 
      sx={{
        display:'flex',
        justifyContent:'start',
        flexDirection:"row",
       position: "absolute",
       backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/014/724/816/non_2x/abstract-black-triangular-background-with-gold-lines-free-vector.jpg")`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       height:'100vh',
       width:'100%'
       }} >
       <Box  sx={{width:"100%",mx:1,display:{xs:"none",md:"flex"},justifyContent:"center",mt:3,mr:20}}>
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:'#282828' , ml:22,mt:30,width:"200px",
         height:'200px',opacity:{xs:0.9,lg:0.8},position:'relative'}}>
        <Typography  level='h2' sx={{textAlign:'center',color:'white' ,my:3}}>فروش  </Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:'#E0AA3E' ,mt:45 ,mr:4,width:"220px",
         height:'220px',opacity:{xs:0.9,lg:0.8},position:'absolute'}}>
        <Typography  level='h2' sx={{textAlign:'center',color:'white' ,my:3}}>جشنواره </Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:'#E0AA3E' ,mt:23 ,mr:15,width:"220px",
         height:'220px',opacity:{xs:0.9,lg:0.8},position:'absolute'}}>
        <Typography  level='h2' sx={{textAlign:'center',color:'white' ,my:3}}>محصولات  </Typography>
      </Box>
      
 
       </Box>

       <Box maxWidth="sm"  sx={{ display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"start",mr:10,ml:{xs:10,md:35},mt:{xs:20,md:10},
      height:{xs:"300px",md:"600px"},border:"2px solid white",backdropFilter:"blur(25px)",px:4,py:2}} >
        <Typography  variant="h5" sx={{textAlign:"center",my:1,color:"#fff"}}>
        مشتری گرامی ضمن تشکر از خرید شما جهت فعال سازی جشنواره سهیل اطلاعات زیر را با دقت تکمیل نمایید
        </Typography>
       
        <form  noValidate onSubmit={handlesubmit}>
          <Grid container spacing={2} sx={{mt:1}}>
            <Grid  item xs={12}   >
            <FormLabel sx={{mb:1,color:"#fff"}}> شماره پذیرش</FormLabel>
              <Input
            color="warning"
            placeholder=' شماره پذیرش'
                autoComplete="id"
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="id"
                label=" شماره پذیرش"
                autoFocus
                value={id}
                onChange={(e)=> setId(e.target.value)}
               className='input'
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.id}
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <FormLabel sx={{mb:1,color:"#fff"}}> کد جشنواره  </FormLabel>
              <Input
                color="warning"
              placeholder="کد جشنواره"
                variant="outlined"
                required
                fullWidth
                autoFocus
                name="code"
                label="code"
                className='input'
                id="code"
                autoComplete="id"
                value={code}
                onChange={(e)=> setCode(e.target.value)}
              />
               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.code}
             </Typography>
            </Grid>
            <Grid  item xs={12}   >
            <FormLabel sx={{mb:1,color:"#fff"}}>   شماره همراه</FormLabel>
              <Input
            color="warning"
            placeholder=' شماره همراه'
                autoComplete="id"
                name="شماره همراه"
                variant="outlined"
                required
                fullWidth
                id="id"
                label=" شماره همراه"
                autoFocus
                value={numcall}
                onChange={(e)=> setNumcall(e.target.value)}
               className='input'
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.numcall}
              </Typography>
            </Grid>
        
       
  </Grid>
          <Button
           sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
           color:'white'},fontSize:{xs:"14px",md:"18px"},color:'#eeeeee',my:5,px:1,py:0.3,
           backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}
            type="submit"
           fullWidth
          >
            مرحله ی بعد 
          </Button>
          <NavLink to={"/signup"}>
          <Button
           sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
           color:'white'},fontSize:{xs:"14px",md:"18px"},color:'#eeeeee',my:0,px:1,py:0.3,
           backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}
           
          fullWidth
          >
           صفحه اصلی 
          </Button></NavLink>        
         </form>
  
          </Box>

      </Box>
     
    

    </>
  );
      }