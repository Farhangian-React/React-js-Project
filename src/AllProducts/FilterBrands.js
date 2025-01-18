import React, {useContext,useState} from 'react';
import {CardData} from '../Shared/Cart-Context';
import {CardDataShow} from '../Shared/Cart-Context';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccordionSummary from '@mui/material/AccordionSummary';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material'; 
export default  function FilterBrands(){
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
  const [checked1, setChecked1] = useState(false); 
  const [checked2, setChecked2] = useState(false); 
  const [checkedC1, setCheckedC1] = useState(false);
  const [checkedC2, setCheckedC2] = useState(false);
  const [checkedC3, setCheckedC3] = useState(false);
  const [checkedE1, setCheckedE1] = useState(false);
  const [checkedE2, setCheckedE2] = useState(false);
  const [checkedF1, setCheckedF1] = useState(false);
  const [checkedF2, setCheckedF2] = useState(false);
  const [checkedP1, setCheckedP1] = useState(false);
  const [checkedP2, setCheckedP2] = useState(false);
  const [checkedW1, setCheckedW1] = useState(false);
  const [checkedW2, setCheckedW2] = useState(false);
  const [checkedH1, setCheckedH1] = useState(false);
  const [checkedH2, setCheckedH2] = useState(false);
  const [checkedH3, setCheckedH3] = useState(false);
  const [disabledE1,setDisabledE1]=useState(false);
  const [disabledE2,setDisabledE2]=useState(false);
  const [disabledF1,setDisabledF1]=useState(false);
  const [disabledF2,setDisabledF2]=useState(false);
  const [disabledP1,setDisabledP1]=useState(false);
  const [disabledP2,setDisabledP2]=useState(false);
  const [disabledW1,setDisabledW1]=useState(false);
  const [disabledW2,setDisabledW2]=useState(false);
  const [disabledH1,setDisabledH1]=useState(false);
  const [disabledH2,setDisabledH2]=useState(false);
  const [disabledH3,setDisabledH3]=useState(false);
  const [index, setIndex] = React.useState(null);
  const [index1, setIndex1] = React.useState(null);
  
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
  const sortArrayMaxtoMin= (e)=>{
    setChecked1(e.target.checked);
    setChecked1(!checked1);
  setDatashow([...data.sort((a, b) =>
    convertToEnglish(b.pricenum) - convertToEnglish(a.pricenum)
  )]);
 
  } 
  const sortArrayMintoMax= (e)=>{
    setChecked2(e.target.checked);
    setChecked2(!checked2);
    setDatashow([...data.sort((a, b) =>
      convertToEnglish(a.pricenum) - convertToEnglish(b.pricenum)
    )]);
    }
 const handleChangeC1=(e)=>{
  setCheckedC1(e.target.checked); 
       setCheckedC1(!checkedC1);
      setDatashow([...data.filter(i=>i.color === e.target.value )]);
      if(checkedC2){
        setDatashow([...data.filter(i=>i.color === "نقره ای" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC3){
        setDatashow([...data.filter(i=>i.color === "مشکی" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC2 && checkedC3){
        setDatashow([...data.filter(i=>i.color === "نقره ای" ),...data.filter(i=>i.color === "مشکی" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC1){
        if(checkedC3 && checkedC2){
          setDatashow([...data.filter(i=>i.color !== e.target.value )]); 

          }
        if(checkedC3 && !checkedC2){
              setDatashow([...data.filter(i=>i.color === "مشکی" )]);
              }
        if( !checkedC3 && checkedC2){
                setDatashow([...data.filter(i=>i.color === "نقره ای"  )]);
                }
        if( !checkedC3 && !checkedC2)  {
                  setDatashow([...data]);
                }
        }
    
}
const handleChangeC2=(e)=>{
  setCheckedC2(e.target.checked); 
       setCheckedC2(!checkedC2);
      setDatashow([...data.filter(i=>i.color === e.target.value )]);
      if(checkedC1){
        setDatashow([...data.filter(i=>i.color === " سفید" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC3){
        setDatashow([...data.filter(i=>i.color === "مشکی" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC1 && checkedC3){
        setDatashow([...data.filter(i=>i.color === "سفید" ),...data.filter(i=>i.color === "مشکی" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC2){
        if(checkedC3 && checkedC1){
          setDatashow([...data.filter(i=>i.color !== e.target.value )]);
          }
        if(checkedC3 && !checkedC1){
              setDatashow([...data.filter(i=>i.color === "مشکی" )]);
              }
        if( !checkedC3 && checkedC1){
                setDatashow([...data.filter(i=>i.color === "سفید"  )]);
                }
        if( !checkedC3 && !checkedC1)  {
                  setDatashow([...data]);
                }
        }
      
}
const handleChangeC3=(e)=>{
  setCheckedC3(e.target.checked); 
       setCheckedC3(!checkedC3);
      setDatashow([...data.filter(i=>i.color === e.target.value )]);
      if(checkedC2){
        setDatashow([...data.filter(i=>i.color === "نقره ای" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC1){
        setDatashow([...data.filter(i=>i.color === "سفید" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC2 && checkedC1){
        setDatashow([...data.filter(i=>i.color === "نقره ای" ),...data.filter(i=>i.color === "سفید" ),...data.filter(i=>i.color === e.target.value )]);
      }
      if(checkedC3){
        if(checkedC1 && checkedC2){
          setDatashow([...data.filter(i=>i.color !== e.target.value )]);
          }
        if(checkedC1 && !checkedC2){
              setDatashow([...data.filter(i=>i.color === "سفید" )]);
              }
        if( !checkedC1 && checkedC2){
                setDatashow([...data.filter(i=>i.color === "نقره ای"  )]);
                }
        if( !checkedC1 && !checkedC2)  {
                  setDatashow([...data]);
                }
        }
      
}
const handleChangeE1=(e)=>{
  setCheckedE1(e.target.checked); 
  setCheckedE1(!checkedE1);
  if(e.target.value === "دارد")
  {
    setDatashow([...data.filter(i=>i.Fstar === "دارد" )]);
    setDisabledE2(!disabledE2);
  }
  if(checkedE1){
    setDatashow([...data]);
    setDisabledE2(!disabledE2);
  }
  }
  const handleChangeE2=(e)=>{
    setCheckedE2(e.target.checked); 
    setCheckedE2(!checkedE2);
    if(e.target.value === "ندارد")
    {
      setDatashow([...data.filter(i=>i.Fstar === "ندارد" )]);
      setDisabledE1(!disabledE1);
    }
    if(checkedE2){
      setDatashow([...data]);
      setDisabledE1(!disabledE1);
    }
    }
    const handleChangeF1=(e)=>{
      setCheckedF1(e.target.checked); 
      setCheckedF1(!checkedF1);
      if(e.target.value === "دارد")
      {
        setDatashow([...data.filter(i=>i.Fwifi === "دارد" )]);
        setDisabledF2(!disabledF2);
      }
      if(checkedF1){
        setDatashow([...data]);
        setDisabledF2(!disabledF2);
      }
      }
      const handleChangeF2=(e)=>{
        setCheckedF2(e.target.checked); 
        setCheckedF2(!checkedF2);
        if(e.target.value === "ندارد")
        {
          setDatashow([...data.filter(i=>i.Fwifi === "ندارد" )]);
          setDisabledF1(!disabledF1);
        }
        if(checkedF2){
          setDatashow([...data]);
          setDisabledF1(!disabledF1);
        }
        }

        const handleChangeP1=(e)=>{
          setCheckedP1(e.target.checked); 
          setCheckedP1(!checkedP1);
          if(e.target.value === "۲۳ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۲۳ اینچ" )]);
        
          setDisabledP2(!disabledP2);
     
          }
          if(checkedP1){
            setDatashow([...data]);
            setDisabledP2(!disabledP2);
         
          }
        }
        const handleChangeP2=(e)=>{
          setCheckedP2(e.target.checked); 
          setCheckedP2(!checkedP2);
          if(e.target.value === "۲۵ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۲۵ اینچ" )]);
        
          setDisabledP1(!disabledP1);
        
          }
          if(checkedP2){
            setDatashow([...data]);
            setDisabledP1(!disabledP1);
      
          }
        }
        const handleChangeW1=(e)=>{
          setCheckedW1(e.target.checked); 
          setCheckedW1(!checkedW1);
          if(e.target.value === "۲۳ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۲۳ اینچ" )]);
        
          setDisabledW2(!disabledW2);
          
          }
          if(checkedW1){
            setDatashow([...data]);
            setDisabledW2(!disabledW2);
          }
        }
        const handleChangeW2=(e)=>{
          setCheckedW2(e.target.checked); 
          setCheckedW2(!checkedW2);
          if(e.target.value === "۲۴ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۲۴ اینچ" )]);
        
          setDisabledW1(!disabledW1);
          }
          if(checkedW2){
            setDatashow([...data]);
            setDisabledW1(!disabledW1);
          }
        }
        const handleChangeH1=(e)=>{
          setCheckedH1(e.target.checked); 
          setCheckedH1(!checkedH1);
          if(e.target.value === "۳۲ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۳۲ اینچ" )]);
        
          setDisabledH2(!disabledH2);
          setDisabledH3(!disabledH3);
        
          }
          if(checkedH1){
            setDatashow([...data]);
            setDisabledH2(!disabledH2);
            setDisabledH3(!disabledH3);
         
          }
        }
        const handleChangeH2=(e)=>{
          setCheckedH2(e.target.checked); 
          setCheckedH2(!checkedH2);
          if(e.target.value === "۳۴ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۳۴ اینچ" )]);
        
          setDisabledH1(!disabledH1);
          setDisabledH3(!disabledH3);
        
          }
          if(checkedH2){
            setDatashow([...data]);
            setDisabledH1(!disabledH1);
            setDisabledH3(!disabledH3);
        
        }
        }
        const handleChangeH3=(e)=>{
          setCheckedH3(e.target.checked); 
          setCheckedH3(!checkedH3);
          if(e.target.value === "۳۵ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۳۵ اینچ" )]);
          setDisabledH1(!disabledH1);
          setDisabledH2(!disabledH2);
          
          }
          if(checkedH3){
            setDatashow([...data]);
            setDisabledH1(!disabledH1);
            setDisabledH2(!disabledH2);
         
          }
        }
     
   
return (
  <>
  <Box component="div" sx={{width:"400px",display:{xs:"none",lg:'flex'},flexDirection:'column',justifyContent:{xs:'center',lg:'start'}}}>
     <Box sx={{mt:0.3,mr:0.7,display:'flex',justifyContent:'start',borderRadius:{xs:"none",lg:'10px'},direction:'rtl',borderBottom:{xs:"1px solid #414141",lg:"none"},
      height:'50px',color:"#eeeeee",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",}}>
 <Typography sx={{px:2.2,pt:0.5,fontSize:{xs:"22px"},direction:'rtl'}}>  نوع نمایش 
 </Typography>
 </Box>    
<Accordion
      expanded={index === 0}

      onChange={(event, expanded) => {
        setIndex(expanded ? 0 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>قیمت </AccordionSummary>
      <AccordionDetails >
      <FormGroup>
<FormControlLabel control={<Checkbox checked={checked1} value={"گرانترین به ارزانترین"}  onChange={sortArrayMaxtoMin} />} label="گرانترین به ارزانترین" />
<FormControlLabel  control={<Checkbox checked={checked2} value={" ارزانترین به گرانترین"}  onChange={sortArrayMintoMax} />} label=" ارزانترین به گرانترین" />

</FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 1}
      onChange={(event, expanded) => {
        setIndex(expanded ? 1 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}>رنگ بدنه</AccordionSummary>
      <AccordionDetails>
      <FormGroup>
<FormControlLabel  control={<Checkbox  checked={checkedC1}   onChange={handleChangeC1} value={"سفید"}  />} label="سفید" />
<FormControlLabel  control={<Checkbox  checked={checkedC2}   onChange={handleChangeC2} value={"نقره ای"}/>} label="نقره ای" />
<FormControlLabel   control={<Checkbox  checked={checkedC3}   onChange={handleChangeC3} value={"مشکی"} />} label="مشکی" />
</FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 2}
      onChange={(event, expanded) => {
        setIndex(expanded ? 2 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}> ستاره ی انرژی </AccordionSummary>
      <AccordionDetails>
 <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedE1}   onChange={handleChangeE1} disabled={disabledE1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedE2}   onChange={handleChangeE2} disabled={disabledE2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 3}
      onChange={(event, expanded) => {
        setIndex(expanded ? 3 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}>  قابلیت اتصال به اینترنت  </AccordionSummary>
      <AccordionDetails>
 <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedF1}   onChange={handleChangeF1} disabled={disabledF1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedF2}   onChange={handleChangeF2} disabled={disabledF2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

      </AccordionDetails>
    </Accordion>

  
    <Accordion
      expanded={index === 4}
      onChange={(event, expanded) => {
        setIndex(expanded ? 4 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}>  عمق</AccordionSummary>
      <AccordionDetails>
 <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedP1}  onChange={handleChangeP1} disabled={disabledP1} value={"۲۳ اینچ"} />} label="۲۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP2}   onChange={handleChangeP2} disabled={disabledP2} value={"۲۵ اینچ"} />} label="۲۵ اینچ" />

</FormGroup>

      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 5}
      onChange={(event, expanded) => {
        setIndex(expanded ? 5 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
 
    >
      <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}} />}>  عرض</AccordionSummary>
      <AccordionDetails >
      <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedW1}  onChange={handleChangeW1} disabled={disabledW1} value={"۲۳ اینچ"} />} label="۲۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW2}   onChange={handleChangeW2} disabled={disabledW2} value={"۲۴ اینچ"} />} label="۲۴ اینچ" />
</FormGroup>

      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 6}
      onChange={(event, expanded) => {
        setIndex(expanded ? 6 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  ارتفاع</AccordionSummary>
      <AccordionDetails>
 <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedH1}  onChange={handleChangeH1} disabled={disabledH1} value={"۳۲ اینچ"} />} label="۳۲ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH2}   onChange={handleChangeH2} disabled={disabledH2} value={"۳۴ اینچ"} />} label="۳۴ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH3}   onChange={handleChangeH3} disabled={disabledH3} value={"۳۵ اینچ"} />} label="۳۵ اینچ" />

</FormGroup>
      </AccordionDetails>
    </Accordion>
</Box>

<Box component="div" sx={{width:'95%',alignSelf:"center",display:{xs:"flex",lg:'none'},flexDirection:'column',justifyContent:{xs:'center',lg:'start'}}}>     
<Accordion
        expanded={index1 === 0}
        onChange={(event, expanded) => {
          setIndex1(expanded ? 0 : null);
        }}
        sx={{borderBottom:'1px solid black',backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)",mr:1}}
      >
        <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}} 
         aria-controls="panel1-content"
         expandIcon={<ArrowDropDownIcon sx={{':hover':{color:"black"},fontSize:{xs:"18px",md:"22px"}}} />}
         > 
          <Grid item xs={8} sx={{ display:"flex",flexDirection:"row",justifyContent:"start"}}>
            <Grid >
        <IconButton sx={{pt:0}}>
  
      <FilterAltOutlinedIcon sx={{color:"#eeeeee",fontSize:"30px"}}/>
    </IconButton>
    </Grid>
        <Grid >
      <Typography sx={{fontSize:'26px',direction:'rtl',color:"#eeeeee"}}>
   فیلتر بر اساس
</Typography>
</Grid>
        </Grid>
          </AccordionSummary>
        <AccordionDetails >
        <FormGroup>
      
        <Accordion
      expanded={index === 0}
      onChange={(event, expanded) => {
        setIndex(expanded ? 0 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
       <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',pl:1.5}} />}>قیمت </AccordionSummary>
      <AccordionDetails >
      <FormGroup>
<FormControlLabel control={<Checkbox checked={checked1} value={"گرانترین به ارزانترین"}  onChange={sortArrayMaxtoMin} />} label="گرانترین به ارزانترین" />
<FormControlLabel  control={<Checkbox checked={checked2} value={" ارزانترین به گرانترین"}  onChange={sortArrayMintoMax} />} label=" ارزانترین به گرانترین" />

</FormGroup>
      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 1}
      onChange={(event, expanded) => {
        setIndex(expanded ? 1 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
      <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',pl:1.5}} />}>رنگ بدنه</AccordionSummary>
      <AccordionDetails>
      <FormGroup>
<FormControlLabel  control={<Checkbox  checked={checkedC1}   onChange={handleChangeC1} value={"سفید"}  />} label="سفید" />
<FormControlLabel  control={<Checkbox  checked={checkedC2}   onChange={handleChangeC2} value={"نقره ای"}/>} label="نقره ای" />
<FormControlLabel   control={<Checkbox  checked={checkedC3}   onChange={handleChangeC3} value={"مشکی"} />} label="مشکی" />
</FormGroup>
      </AccordionDetails>
    </Accordion>

    <Accordion
      expanded={index === 2}
      onChange={(event, expanded) => {
        setIndex(expanded ? 2 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
       <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',pl:1.5}} />}> ستاره ی انرژی </AccordionSummary>
      <AccordionDetails>
 <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedE1}   onChange={handleChangeE1} disabled={disabledE1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedE2}   onChange={handleChangeE2} disabled={disabledE2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 3}
      onChange={(event, expanded) => {
        setIndex(expanded ? 3 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
       <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',pl:1.5}} />}>  قابلیت اتصال به اینترنت  </AccordionSummary>
      <AccordionDetails>
 <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedF1}   onChange={handleChangeF1} disabled={disabledF1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedF2}   onChange={handleChangeF2} disabled={disabledF2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 4}
      onChange={(event, expanded) => {
        setIndex(expanded ? 4 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
       <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',pl:1.5}} />}>  عمق</AccordionSummary>
      <AccordionDetails>
 <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedP1}  onChange={handleChangeP1} disabled={disabledP1} value={"۲۳ اینچ"} />} label="۲۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP2}   onChange={handleChangeP2} disabled={disabledP2} value={"۲۵ اینچ"} />} label="۲۵ اینچ" />

</FormGroup>

      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 5}
      onChange={(event, expanded) => {
        setIndex(expanded ? 5 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
 
    >
        <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',pl:1.5}} />}>  عرض</AccordionSummary>
      <AccordionDetails >
      <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedW1}  onChange={handleChangeW1} disabled={disabledW1} value={"۲۳ اینچ"} />} label="۲۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW2}   onChange={handleChangeW2} disabled={disabledW2} value={"۲۴ اینچ"} />} label="۲۴ اینچ" />
</FormGroup>

      </AccordionDetails>
    </Accordion>
    <Accordion
      expanded={index === 6}
      onChange={(event, expanded) => {
        setIndex(expanded ? 6 : null);
      }}
      sx={{borderBottom:'1px solid black',mr:1}}
    >
        <AccordionSummary  sx={{fontSize:'20px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'18px',pl:1.5}} />}>  ارتفاع</AccordionSummary>
      <AccordionDetails>
 <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedH1}  onChange={handleChangeH1} disabled={disabledH1} value={"۳۲ اینچ"} />} label="۳۲ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH2}   onChange={handleChangeH2} disabled={disabledH2} value={"۳۴ اینچ"} />} label="۳۴ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH3}   onChange={handleChangeH3} disabled={disabledH3} value={"۳۵ اینچ"} />} label="۳۵ اینچ" />

</FormGroup>
      </AccordionDetails>
    </Accordion> 
    </FormGroup>
    </AccordionDetails>
    </Accordion> 
</Box>
</>

 )}
