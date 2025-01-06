import React from 'react';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import { PageTitle } from '../Title/PageTitle';
import Box from '@mui/material/Box';
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import  {useState} from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "react-toastify/dist/ReactToastify.css";
import { Textarea } from '@mui/joy';
import {Grid,Typography} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from '@mui/joy/Input';
import FormLabel from '@mui/joy/FormLabel';
import './service.css';
import  contactimg1 from "../img/contact2.png";

function ContactUsForm() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [callnum,setCallnum]=useState("");
    const [massage,setMassage]=useState("");
    const [comment,setComment]=useState("");
    const [error,setError]=useState({});
      const isvalidate = ()=>{
        let isvalid =true;
        let errmesage={};
        if(name === null || name === ""){  
          isvalid = false;
    errmesage.name="لطفا نام و نام خانوادگی خود را وارد کنید";
        }
        if( email === null ||  email === ""){
          isvalid = false;
    errmesage.email="لطفا آدرس ایمیل خود را وارد کنید";
        }
        if( callnum === null || callnum === ""){
          isvalid = false;
    errmesage.callnum="لطفا شماره تماس خود را وارد کنید";
        }
        if(massage === null || massage === ""){
          isvalid = false;
    errmesage.massage="لطفا عنوان پیام خود را وارد کنید";
        }
        if(comment === null || comment === ""){ 
          isvalid = false;
    errmesage.comment="لطفا درخواست خود را وارد کنید";
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
          //console.log(result);
         
      let result={name,email,callnum,massage,comment}
      fetch("https://serverjson-project.onrender.com/Allpopularquestions",{
        method:"POST",
        headers:{"content-type":"aplication/jopes"},
        body:JSON.stringify(result)
    }).then((res)=>{
    toast.success("ثبت درخواست با موفقیت صورت گرفت") ; 
    }).catch((err)=>{
        toast.error("");
    })
              }
          }
    
     
  return (
    <>
    <PageTitle title='سهیل / خدمات / فرم تماس با ما  ' description=' سهیل '/>
    <TopNav />

    <div className='toast'>
     <ToastContainer />  
    </div>

    <Box 
      sx={{
        display:'flex',
        justifyContent:{xs:"start",lg:'center'},
       backgroundColor:"black",
       width:'100vw',
       height:"auto",
       flexDirection:{xs:"column",lg:"row"},
       alignItems:"center",
       alignSelf:"center",
       boxShadow:"0px 8px 15px #fff inset",
       mt:{xs:9,lg:0},
     pt:3
   
       }} >

    <Box sx={{width:{xs:"100vw",lg:"50vw"},display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"start",mx:2}}> 
    <Box sx={{borderBottom:"1px solid white",display:"flex",justifyContent:"center",alignSelf:"center",width:"95%",height:"100px",flexDirection:"column"}}>  
<Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
<Typography variant='h4' sx={{textAlign:"center",color:"white",mt:1,mb:0}}>
فرم تماس با ما
</Typography></Box>
<Typography variant='body2' sx={{textAlign:"center",color:"white",mt:1,mb:1.5}}>
جهت ارسال نظرات و پیشنهادات و انتقادات خود می توانید از طریق فرم زیر اقدام نمایید   
</Typography>
</Box> 
<Box sx={{mx:{xs:15,lg:5},mt:5}}>
<form  noValidate onSubmit={handlesubmit}>
<Grid container spacing={2} sx={{mt:1}}>
          <Grid  item xs={4}   >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}>  نام و نام خانوادگی  <AcUnitIcon  sx={{fontSize:"7px",color:"#615d5d"}}/></FormLabel>
              <Input
            color="warning"
            placeholder=' نام و نام خانوادگی '
               
                name="نام"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label=" نام و نام خانوادگی "
                autoFocus
               className='input'
               value={name}
               onChange={(e)=> setName(e.target.value)}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
                {error.name}
              </Typography>
              </Grid>
              <Grid  item xs={4}   >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}> آدرس ایمیل <AcUnitIcon  sx={{fontSize:"7px",color:"#615d5d"}}/></FormLabel>
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
             <Grid  item xs={4}   >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}> شماره تماس  <AcUnitIcon  sx={{fontSize:"7px",color:"#615d5d"}}/></FormLabel>
              <Input
                color="warning"
              placeholder=' شماره تماس'
                variant="outlined"
                required
                fullWidth
                defaultValue={null}
                value={callnum}
                onChange={(e)=> setCallnum(e.target.value)}
              
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.callnum}
             </Typography>
             </Grid>
             <Grid  item xs={12}   >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}> عنوان پیام</FormLabel>
              <Input
                color="warning"
            type='text'
                variant="outlined"
                required
                placeholder=' عنوان '
                defaultValue={null}
                value={massage}
                onChange={(e)=> setMassage(e.target.value)}
              />
              <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               
               {error.massage}
             </Typography>
             </Grid>

           <Grid item xs={12} >
            <FormLabel sx={{mb:1,color:"#615d5d",fontSize:"14px"}}>  توضیحات <AcUnitIcon  sx={{fontSize:"7px",color:"#615d5d"}}/>  </FormLabel>
            <Textarea
             color="warning"
                 variant="outlined"
                 required
                 placeholder='پیام '
                 defaultValue={null}
                 value={comment}
                 onChange={(e)=> setComment(e.target.value)}
             rows="50" cols="30"
             sx={{width:"100%",height:"200px"}}
             ></Textarea>

               <Typography variant='body2' sx={{color:"#f54141",mt:1}}>
               {error.comment}
              
             </Typography>
           
            </Grid>
<Grid item xs={12} sx={{display:"flex",justifyContent:"center",alignSelf:"center",my:1.5}} >
<button className='button1' type='submit' >  <span className='formbutton'>   ثبت و ارسال </span>   </button>
        </Grid>
          </Grid>
        </form>
        
</Box>




   </Box> 
 <Box sx={{width:{xs:"100vw",lg:"50vw"},display:"flex",justifyContent:"center",flexDirection:"column-reverse",alignSelf:"start",mx:1}}> 
   <Box sx={{alignSelf:"center",
       display:"flex",
       borderRadius:1,
       backgroundImage:`url(${contactimg1})`,
       backgroundPosition: 'center',
       backgroundSize:"contained",
       backgroundRepeat: 'no-repeat',
       width:{xs:"100vw",lg:"50vw"},
       height:"400px",
       mt:1,
     
      }}>
        </Box>
        <Box sx={{width:{xs:"100vw",lg:"50vw"},display:"flex",justifyContent:"center",flexDirection:"column",alignSelf:"start",mx:2,mt:{xs:5,lg:0}}}> 
   <Box sx={{borderBottom:"1px solid white",display:"flex",justifyContent:"center",alignSelf:"start",width:"95%",height:"100px",flexDirection:"column"}}>  
<Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
<Typography variant='h4' sx={{textAlign:"center",color:"white",mt:1,mb:0}}>
 تماس با ما
</Typography></Box>
<Typography variant='body2' sx={{textAlign:"center",color:"white",mt:1,mb:1.5}}>
راه های برقراری ارتباط با شرکت سهیل
</Typography>
</Box> 
<Box sx={{display:"flex",flexDirection:"column",justifyContent:"start",mx:5,mt:5}}>
<Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <PlaceOutlinedIcon sx={{pr:0,pt:{xs:2,lg:1},color:"#E0AA3E",fontSize:"35px"}}/> 
      <Typography  sx={{px:2,py:1,color:"#8a8a8a",fontSize:"16px"}}> دفتر مرکزی: تهران، سعادت آباد، میدان کتاب، بلوار کوهستان، نبش گل‌گشت، پلاک 2/1</Typography>
    </Box>
    <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <PhoneEnabledOutlinedIcon sx={{pr:0,pt:1,color:"#E0AA3E",fontSize:"35px"}}/> 
      <Typography  sx={{px:2,py:1,color:"#8a8a8a",fontSize:"16px"}}>90008929 (روزهای کاری ساعت 8:30 الی 17)</Typography>
    </Box>
    <Box  sx={{display:'flex',flexDirection:"row",alignSelf:"start"}}>
     <EmailOutlinedIcon sx={{pr:0,pt:1,color:"#E0AA3E",fontSize:"35px"}}/> 
      <Typography  sx={{px:2,py:1,color:"#8a8a8a",fontSize:"16px"}}> info@sohil.com</Typography>
    </Box>
</Box>
   </Box>
   </Box>
     </Box>
    <Box sx={{width:'100%' }}>
      <Footer/>
    </Box>
      </>
  );
}

export default ContactUsForm;
