import * as React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import Grid from "@mui/material/Grid";
import TopNav from '../dashbord/TopNav';
import Footer from '../Footer/Footer';
import { PageTitle } from '../Title/PageTitle';
import logimage from "../img/loge1.png";
import logimage1 from "../img/loge2.png";
const SignIn = () => {
  const [id,setId]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState({});
  const navigate=useNavigate();
  const isvalidate = ()=>{
    let isvalid =true;
    let errmesage={};
    if(id === null || id === ""){  
      isvalid = false;
errmesage.id="لطفا نام کاربری را وارد کنید";
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
if(isvalidate()){
//console.log("result");
fetch("http://localhost:3000/users/"+id).then((res)=>{
  return res.json();
}).then((resp)=>{
  if(Object.keys(resp).length===0){
    toast.error("لطفا نام کاربری  را صحیح وارد کنید");
  }
  else{
    if(resp.password === password){
      toast.success("ورود با موفقیت");
      sessionStorage.setItem("id",id);
    navigate("/")
    }
    else{
      toast.error("  لطفا ابتدا عضو شوید ");
    }
  }
}).catch((err)=>{
toast.error("ورود ناموفق");
});
  }
}


  return (
    <>
       <PageTitle  title=' ورود به حساب کاربری   '  description=' ورود /  ورود در سهیل  '/>
   <TopNav/> {/*<CssBaseline />*/}
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
        <Typography  variant="h5" sx={{textAlign:"center",mt:{xs:10,md:1},color:"#fff"}}>
       ورود به حساب کاربری
        </Typography>
       
        <form  noValidate onSubmit={handlesubmit}>
          <Grid container spacing={2} sx={{mt:1}}>
            <Grid  item xs={12}   >
            <FormLabel sx={{mb:1,color:"#fff"}}>نام کاربری یا ایمیل</FormLabel>
              <Input
            color="warning"
            placeholder=' نام کاربری'
                autoComplete="id"
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="id"
                label=" نام کاربری"
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
            <FormLabel sx={{mb:1,color:"#fff"}}> رمز  </FormLabel>
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
            <Grid item xs={12} sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <FormControlLabel
             
             control={<Checkbox color="info" value="allowExtraEmails" sx={{color:"#E0AA3E"}} />}
             label="مرا بخاطر بسپار"
             sx={{color:"#eee"}}
           />
              <NavLink className="nav">یاد آوری رمز عبور</NavLink>
            </Grid>
       
  </Grid>
          <Button
           sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
           color:'white'},fontSize:{xs:"14px",md:"18px"},color:'#eeeeee',my:5,px:1,py:0.3,
           backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}
            type="submit"
           fullWidth
          >
           ورود
          </Button>
          <NavLink to={"/signup"}>
          <Button
           sx={{':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",
           color:'white'},fontSize:{xs:"14px",md:"18px"},color:'#eeeeee',my:0,px:1,py:0.3,
           backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}
           
          fullWidth
          >
           عضویت
          </Button></NavLink>
          
        
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
};

export default SignIn;
