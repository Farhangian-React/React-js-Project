import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
import logimage from "../img/log2.png";
import logimage1 from "../img/log11.png";

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
   <CssBaseline />
      <div>
     <ToastContainer/>  
    </div>
   <Box 
      sx={{

        display:'flex',
        justifyContent:'center',
        flexDirection:"row",
       backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcDOnBx2I4GMh9q1Z37yKX3mF9YEdMC9i2GQ&s")`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       height:'100vh',
       width:'100%'
       }} >
      <Box maxWidth="xs"  sx={{ display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"start",mx:10,mt:{xs:20,lg:6},
      height:{xs:"300px",md:"600px"},border:"2px solid white",backdropFilter:"blur(25px)",px:4,py:2}} >
        <Typography  variant="h5" sx={{textAlign:"center",mt:1.5,color:"#eee"}}>
       عضویت در سایت سهیل
        </Typography>
        <Grid sx={{mb:0,borderBottom:"1px solid white",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Typography variant ="body2" sx={{color:"#cecece",mb:0,pb:0}}>
     قبلا عضو شده اید؟
        </Typography>
        <NavLink to={"/signin"}><Button  sx={{p:0,width:"30px",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
       color:'white'},fontSize:{xs:"12px",md:"14px"},color:'#cecece',mb:1,
       backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>ورود</Button></NavLink>
        </Grid>
        <form  noValidate onSubmit={handlesubmit}>
          <Grid container spacing={2} sx={{mt:1}}>
         
            <Grid  item xs={12} sm={6}  >
            <FormLabel sx={{mb:1,color:"#cecece"}}>نام</FormLabel>
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
            <FormLabel sx={{mb:1,color:"#cecece"}}>نام خانوادگی</FormLabel>
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
            <Grid  item xs={12} sm={6}  >
            <FormLabel sx={{mb:1,color:"#cecece"}}>نام کاربری</FormLabel>
              <Input
            color="warning"
            placeholder='نام کاربری'
                autoComplete="fname"
                name=" نام کاربری"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="نام "
                defaultValue={""}
                value={id}
                onChange={(e)=> setId(e.target.value)}
              
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.fname}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormLabel sx={{mb:1,color:"#cecece"}}> رمز  </FormLabel>
              <Input
              color="warning"
              placeholder="رمز" 
              autoComplete="current-password"
              name="password"
              variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                defaultValue={""}
                value={password}
                type="password"
                
               
               
                onChange={(e)=> setPassword(e.target.value)}
              />
               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.password}
             </Typography>
            </Grid>
            <Grid item xs={12}>
            <FormLabel sx={{mb:1,color:"#cecece"}}>آدرس ایمیل  </FormLabel>
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
              <FormControlLabel
             
                control={<Checkbox color="info" value="allowExtraEmails" sx={{color:"#E0AA3E"}} />}
                label="ثبت نام و استفاده از سهیل به معنی پذیرش قوانین و مقررات آن است."
                sx={{color:"#eee"}}
              />
            </Grid>
          </Grid>
          <Button
           sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
           color:'white'},fontSize:{xs:"14px",md:"18px"},color:'#eeeeee',mt:1.5,py:0.3,
           backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}
            type="submit"
            fullWidth
          >
           عضویت
          </Button>
        </form>
     
    </Box>
    <Box sx={{width:"100%",display:"flex",justifyContent:"center",alignSelf:"start",mx:1,mt:1}}> 
   <Box sx={{alignSelf:"center",
       display:"flex",
       borderRadius:1,
       backgroundImage:{xs:`url(${logimage1})`,lg:`url(${logimage})`},
       backgroundPosition: 'center',
       backgroundSize:"contained",
       backgroundRepeat: 'no-repeat',
       width:"100%",
       height:{xs:"300px",md:"600px"},
       mt:{xs:10,md:1},
     
      }}>
        </Box>
    </Box>
    </Box>
    <Footer/>
    </>
  );
}
