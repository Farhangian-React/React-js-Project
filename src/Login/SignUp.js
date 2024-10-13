import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import { PageTitle } from '../Title/PageTitle';
import img from "../img/signup1.jpg";
export default function SignUp() {
  const [id,setId]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState({});
    const navigate=useNavigate();
    const isvalidate = ()=>{
      let isvalid =true;
      let errmesage={};
      if(fname === null || fname === ""){  
        isvalid = false;
errmesage.fname="لطفا نام را وارد کنید";
      }
      if(lname === null || lname === ""){
        
        isvalid = false;
errmesage.lname="لطفا نام خانوادگی را وارد کنید";
      }
      if(email === null || email === ""){
        
        isvalid = false;
errmesage.email="لطفا آدرس ایمیل را وارد کنید";
      }
      if(password === null || password === ""){
        
        isvalid = false;
errmesage.password="لطفا رمز را وارد کنید";
      }else
      if(password.length<6){
        isvalid = false;
        errmesage.password="رمز باید حداقل ۶ کاراکتر باشد";

      }
      if(!isvalid){
        toast.warning(errmesage);
      }
      setError(errmesage);
      return isvalid;
    }
 
    const handlesubmit=(e)=>{
    
e.preventDefault();
let result={id,fname,lname,email,password};
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
   <PageTitle  title=' عضویت در سهیل '  description=' عضویت /  عضویت در سهیل  '/>
   <TopNav/>
   <Box 
         xs={12} md={12}
      sx={{
        display:'flex',
        justifyContent:'space-around',
        flexDirection:"row",
       backgroundImage: `url(${img})`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       height:"50 vh",
       width:'100%'
       }} >
         
    <Container  maxWidth="xs" sx={{display:"flex"}}>
      <CssBaseline />
      <div>
     <ToastContainer/>  
    </div>
      <Box sx={{height:"100vh",border:"2px solid white",backdropFilter:"blur(10px)",my:{xs:10,md:2},px:4,py:1}} >
        <Typography  variant="h5" sx={{textAlign:"center",my:1}}>
       عضویت در سایت سهیل
        </Typography>
        <Grid sx={{mb:0,borderBottom:"1px solid black",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Typography variant ="body2" sx={{color:"#282828",mb:0,pb:0}}>
     قبلا عضو شده اید؟
        </Typography>
        <NavLink to={"/signin"}><Button  sx={{p:0,width:"30px",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
       color:'white'},fontSize:{xs:"12px",md:"14px"},color:'#eeeeee',mb:1,
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>ورود</Button></NavLink>
        </Grid>
        <form  noValidate onSubmit={handlesubmit}>
          <Grid container spacing={2} sx={{mt:1}}>
         
            <Grid  item xs={12} sm={6}  >
            <FormLabel sx={{mb:1,color:"#615d5d"}}>نام</FormLabel>
              <Input
            color="warning"
            placeholder='نام'
                autoComplete="fname"
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="نام"
                autoFocus
                value={fname}
                onChange={(e)=> setFname(e.target.value)}
               className='input'
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.fname}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormLabel sx={{mb:1,color:"#615d5d"}}>نام خانوادگی</FormLabel>
              <Input
              color="warning"
              placeholder='نام خانوادگی'
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lname}
                onChange={(e)=> setLname(e.target.value)}
              />
               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.lname}
             </Typography>
            </Grid>
            <Grid  item xs={12}  >
            <FormLabel sx={{mb:1,color:"#615d5d"}}>نام کاربری</FormLabel>
              <Input
            color="warning"
            placeholder='نام کاربری'
                autoComplete="fname"
                name=" نام کاربری"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="نام ;hvfvd"
                autoFocus
                value={id}
                onChange={(e)=> setId(e.target.value)}
               className='input'
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.fname}
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <FormLabel sx={{mb:1,color:"#615d5d"}}>آدرس ایمیل  </FormLabel>
              <Input
                color="warning"
              placeholder='آدرس ایمیل'
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
              
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.email}
             </Typography>
            </Grid>
            <Grid item xs={12}>
            <FormLabel sx={{mb:1,color:"#615d5d"}}> رمز  </FormLabel>
              <Input
                color="warning"
              placeholder="رمز"
                variant="outlined"
                required
                fullWidth
                defaultValue={""}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.password}
             </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
             
                control={<Checkbox color="info" value="allowExtraEmails" sx={{color:"#E0AA3E"}} />}
                label="ثبت نام و استفاده از سهیل به معنی پذیرش قوانین و مقررات آن است."
                sx={{color:"#b7b7b7"}}
              />
            </Grid>
          </Grid>
          <Button
           sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
           color:'white'},fontSize:{xs:"14px",md:"18px"},color:'#eeeeee',mt:2,py:0.3,
           backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}
            type="submit"
            fullWidth
          >
           عضویت
          </Button>
        </form>
      </Box>
    </Container>
    </Box>
    <Footer/>
    </>
  );
}
