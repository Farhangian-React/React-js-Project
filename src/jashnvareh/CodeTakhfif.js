import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/joy';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import { NavLink } from 'react-router-dom';
import Paper from "@mui/material/Paper";

import { PageTitle } from "../Title/PageTitle";

import './Code.css';

export default function CodeTakhfif() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

       

  return (
    <>
      <PageTitle title='  ورود' description=' سهیل/جشنواره/کد تخفیف   '/>
         <Grid 
         xs={12} md={12}
      sx={{
        display:'flex',
        justifyContent:'space-around',
        flexDirection:"row",
       position: "absolute",
       backgroundImage: `url("https://graphic-bank.com/wp-content/uploads/edd/2020/07/GRAPHIC-BANK01315162601673.jpg")`,
       backgroundPosition: 'center',
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',
       height:'100vh',
       width:'100%'
       }} >
         



       <Grid  xs={6} md={6} sx={{width:"500px",mx:1,display:{xs:"none",md:"flex"}}}>
       <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:'#282828' , ml:1,mt:30,width:"160px",
         height:'160px',opacity:{xs:0.9,lg:0.8},position:'relative'}}>
        <Typography  level='h2' sx={{textAlign:'center',color:'white' ,my:3}}>فروش  </Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:'#E0AA3E' ,mt:45 ,mr:4,width:"180px",
         height:'189px',opacity:{xs:0.9,lg:0.8},position:'absolute'}}>
        <Typography  level='h2' sx={{textAlign:'center',color:'white' ,my:3}}>جشنواره </Typography>
      </Box>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",bgcolor:'#E0AA3E' ,mt:23 ,mr:15,width:"180px",
         height:'180px',opacity:{xs:0.9,lg:0.8},position:'absolute'}}>
        <Typography  level='h2' sx={{textAlign:'center',color:'white' ,my:3}}>محصولات  </Typography>
      </Box>
      <Box sx={{

        borderRadius:"50%" ,mt:29 ,mr:2,width:"200px",
         height:'200px',position:'absolute'}}>
        <img className='imgsohil' width={300}  src='https://png.pngtree.com/png-clipart/20230817/original/pngtree-mountains-logo-design-sky-high-vector-picture-image_10974603.png'/>
      </Box>
 
       </Grid>

       <Grid  xs={12} md={6} sx={{width:"500px",mx:1,my:5,display:"flex"}}>
      

  
       
        <Grid
            
            component={Paper}
            elevation={6}
            square
            sx={{bgcolor:'#eeeeee'}}
          >
            <Box
              sx={{
                my: 1,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography fontWeight={400}   sx={{py:4,textAlign:"center",color:"#E0AA3E",fontSize:"18px"}}>
                مشتری گرامی ضمن تشکر از خرید شما جهت فعال سازی جشنواره سهیل اطلاعات زیر را با دقت تکمیل نمایید
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <label>  کد جشنواره</label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  name="code"
                  autoComplete="code"
                  autoFocus
                  variant="standard"
                />
                <label> شماره ی پذیرش </label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
       
                  variant="standard"
                />
                <label>   شماره ی همراه</label>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  name="code"
                  autoComplete="code"
                  autoFocus
                  variant="standard"
                />
             
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{bgcolor:"#E0AA3E", mt: 1, mb: 1 }}
                >
                  مرحله ی بعد 
                </Button> 
                <NavLink to={'/'} >
                <Button
                  
                  fullWidth
                  variant="contained"
                  sx={{bgcolor:"#E0AA3E", mt: 1, mb: 1 }}
                >
                   
              < HomeOutlinedIcon sx={{mr:1,ml:1,color:'white',fontSize:'22px'}}/>
           
                 صفحه اصلی
                </Button>
                 </NavLink>
               
           
                
              </Box>
                   <Box sx={{display:"flex",alignItems:"center",mt:0,
                justifyContent:'center',borderRadius:2  ,width:"130px",height:'130px'}}>
             
                  <img className='imgsohil' width={200}  src='https://png.pngtree.com/png-clipart/20230817/original/pngtree-mountains-logo-design-sky-high-vector-picture-image_10974603.png'/>
                 
                  </Box>
            </Box>
          </Grid>
         

       </Grid>

      </Grid>

     
    

    </>
  );
      }