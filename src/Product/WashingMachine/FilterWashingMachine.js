import React, {useContext,useState} from 'react';
import {CardData} from '../../Shared/Cart-Context';
import {CardDataShow} from '../../Shared/Cart-Context';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import AccordionSummary from '@mui/material/AccordionSummary';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { styled,useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid } from '@mui/material';

export default  function FilterWashingMachine() {
  const [data,setData]=useContext(CardData);
  const [datashow,setDatashow]=useContext(CardDataShow);
  const [checked1, setChecked1] = useState(false); 
  const [checked2, setChecked2] = useState(false); 
  const [checkedB1, setCheckedB1] = useState(false); 
  const [checkedB2, setCheckedB2] = useState(false);
  const [checkedB3, setCheckedB3] = useState(false);
  const [checkedB4, setCheckedB4] = useState(false);
  const [checkedC1, setCheckedC1] = useState(false);
  const [checkedC2, setCheckedC2] = useState(false);
  const [checkedC3, setCheckedC3] = useState(false);
  const [checkedD1, setCheckedD1] = useState(false);
  const [checkedD2, setCheckedD2] = useState(false);
  const [checkedE1, setCheckedE1] = useState(false);
  const [checkedE2, setCheckedE2] = useState(false);
  const [checkedY1, setCheckedY1] = useState(false);
  const [checkedY2, setCheckedY2] = useState(false);
  const [checkedX1, setCheckedX1] = useState(false);
  const [checkedX2, setCheckedX2] = useState(false);
  const [checkedP1, setCheckedP1] = useState(false);
  const [checkedP2, setCheckedP2] = useState(false);
  const [checkedP3, setCheckedP3] = useState(false);
  const [checkedP4, setCheckedP4] = useState(false);
  const [checkedW1, setCheckedW1] = useState(false);
  const [checkedW2, setCheckedW2] = useState(false);
  const [checkedH1, setCheckedH1] = useState(false);
  const [checkedH2, setCheckedH2] = useState(false);
  const [checkedH3, setCheckedH3] = useState(false);
  const [disabledD1,setDisabledD1]=useState(false);
  const [disabledD2,setDisabledD2]=useState(false);
  const [disabledE1,setDisabledE1]=useState(false);
  const [disabledE2,setDisabledE2]=useState(false);
  const [disabledY1,setDisabledY1]=useState(false);
  const [disabledY2,setDisabledY2]=useState(false);
  const [disabledX1,setDisabledX1]=useState(false);
  const [disabledX2,setDisabledX2]=useState(false);
  const [disabledP1,setDisabledP1]=useState(false);
  const [disabledP2,setDisabledP2]=useState(false);
  const [disabledP3,setDisabledP3]=useState(false);
  const [disabledP4,setDisabledP4]=useState(false);
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

    const handleChangeB1 = (e) => {
   
      setCheckedB1(e.target.checked); 
       setCheckedB1(!checkedB1);
      setDatashow([...data.filter(i=>i.brands === e.target.value )]);
      if(checkedB2){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB3){
        setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB4){
        setDatashow([...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB2 && checkedB3){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB2 && checkedB4){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB3 && checkedB4){
        setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB2 && checkedB3 && checkedB4){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
      }
      if(checkedB1){
        if(checkedB4 && checkedB3 && checkedB2){
          setDatashow([...data.filter(i=>i.brands !== e.target.value )]);
          }
        if(!checkedB4 && checkedB3 && checkedB2){
            setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "bush" )]);
            }
        if(checkedB4 && checkedB3 && !checkedB2){
              setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" )]);
              }
        if(checkedB4 && !checkedB3 && checkedB2){
                setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" )]);
                }
        if(!checkedB4 && !checkedB3 && !checkedB2)  {
                  setDatashow([...data]);
                }
        if(!checkedB4 && !checkedB3 && checkedB2){
                  setDatashow([...data.filter(i=>i.brands === "bush" )]);
                  }
        if(!checkedB4 && checkedB3 && !checkedB2){
                    setDatashow([...data.filter(i=>i.brands === "LG" )]);
                    }
        if(checkedB4 && !checkedB3 && !checkedB2){
                      setDatashow([...data.filter(i=>i.brands === "samsung" )]);
                      }
        }
  
    };
  const handleChangeB2 = (e) => {
  setCheckedB2(e.target.checked);
   setCheckedB2(!checkedB2);
    setDatashow([...data.filter(i=>i.brands === e.target.value)]);
  if(checkedB1){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB3){
    setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB4){
    setDatashow([...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB1 && checkedB3){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB1 && checkedB4){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB3 && checkedB4){
    setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
  }
  if(checkedB1 && checkedB3 && checkedB4){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
  }
 
  if(checkedB2){
    if(checkedB4 && checkedB1 && checkedB3){
      setDatashow([...data.filter(i=>i.brands !== e.target.value )]);
      }
      if(!checkedB4 && checkedB1 && checkedB3){
        setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" )]);
        }
        if(checkedB4 && checkedB1 && !checkedB3){
          setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "samsung" )]);
          }
          if(checkedB4 && !checkedB1 && checkedB3){
            setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "samsung" )]);
            }
            if(!checkedB4 && !checkedB3 && !checkedB1)  {
              setDatashow([...data]);
            }
    if(!checkedB4 && !checkedB3 && checkedB1){
              setDatashow([...data.filter(i=>i.brands === "Whirlpool" )]);
              }
    if(!checkedB4 && checkedB3 && !checkedB1){
                setDatashow([...data.filter(i=>i.brands === "LG" )]);
                }
    if(checkedB4 && !checkedB3 && !checkedB1){
                  setDatashow([...data.filter(i=>i.brands === "samsung" )]);
                  }
    }
    };
 

  
  const handleChangeB3 = (e) => {
    setCheckedB3(e.target.checked);
    setCheckedB3(!checkedB3);
    setDatashow([...data.filter(i=>i.brands === e.target.value )]);
    if(checkedB2){
      setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB4){
      setDatashow([...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB2){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB4){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB2 && checkedB4){
      setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB2 && checkedB4){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB3){
if(checkedB4 && checkedB1 && checkedB2){
  setDatashow([...data.filter(i=>i.brands !== e.target.value )]);
  }
  if(!checkedB4 && checkedB1 && checkedB2){
    setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" )]);
    }
    if(checkedB4 && checkedB1 && !checkedB2){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "samsung" )]);
      }
      if(checkedB4 && !checkedB1 && checkedB2){
        setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "samsung" )]);
        }
        if(!checkedB4 && !checkedB2 && !checkedB1)  {
          setDatashow([...data]);
        }
if(!checkedB4 && !checkedB2 && checkedB1){
          setDatashow([...data.filter(i=>i.brands === "Whirlpool" )]);
          }
if(!checkedB4 && checkedB2 && !checkedB1){
            setDatashow([...data.filter(i=>i.brands === "bush" )]);
            }
if(checkedB4 && !checkedB2 && !checkedB1){
              setDatashow([...data.filter(i=>i.brands === "samsung" )]);
              }
}


  };
  const handleChangeB4 = (e) => {
    setCheckedB4(e.target.checked);
    setCheckedB4(!checkedB4);
    setDatashow([...data.filter(i=>i.brands === e.target.value )]);
    if(checkedB1){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB2){
      setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB3){
      setDatashow([...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB2){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB3){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB2 && checkedB3){
      setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === e.target.value )]);
    }
    if(checkedB1 && checkedB3 && checkedB2){
      setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" ),...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === e.target.value )]);
    }

    if(checkedB4){
      if(checkedB3 && checkedB1 && checkedB2){
        setDatashow([...data.filter(i=>i.brands !== e.target.value )]);
        }
        if(!checkedB3 && checkedB1 && checkedB2){
          setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "bush" )]);
          }
          if(checkedB3 && checkedB1 && !checkedB2){
            setDatashow([...data.filter(i=>i.brands === "Whirlpool" ),...data.filter(i=>i.brands === "LG" )]);
            }
            if(checkedB3 && !checkedB1 && checkedB2){
              setDatashow([...data.filter(i=>i.brands === "bush" ),...data.filter(i=>i.brands === "LG" )]);
              }
              if(!checkedB2 && !checkedB3 && !checkedB1)  {
                setDatashow([...data]);
              }
      if(!checkedB2 && !checkedB3 && checkedB1){
                setDatashow([...data.filter(i=>i.brands === "Whirlpool" )]);
                }
      if(!checkedB2 && checkedB3 && !checkedB1){
                  setDatashow([...data.filter(i=>i.brands === "LG" )]);
                  }
      if(checkedB2 && !checkedB3 && !checkedB1){
                    setDatashow([...data.filter(i=>i.brands === "bush" )]);
                    }
      }

  };
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
const handleChangeD1=(e)=>{
  setCheckedD1(e.target.checked); 
  setCheckedD1(!checkedD1);
  if(e.target.value === "دارد")
  {
    setDatashow([...data.filter(i=>i.IWH === "دارد" )]);
  setDisabledD2(!disabledD2);
  }
  if(checkedD1){
    setDatashow([...data]);
    setDisabledD2(!disabledD2);
  }
}
const handleChangeD2=(e)=>{
  setCheckedD2(e.target.checked); 
  setCheckedD2(!checkedD2);
  if(e.target.value === "ندارد")
  {
    setDatashow([...data.filter(i=>i.IWH === "ندارد" )]);
    setDisabledD1(!disabledD1);
  }
  if(checkedD2){
    setDatashow([...data]);
    setDisabledD1(!disabledD1);
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
    const handleChangeY1=(e)=>{
      setCheckedY1(e.target.checked); 
      setCheckedY1(!checkedY1);
      if(e.target.value === "دارد")
      {
        setDatashow([...data.filter(i=>i.SO === "دارد" )]);
        setDisabledY2(!disabledY2);
      }
      if(checkedY1){
        setDatashow([...data]);
        setDisabledY2(!disabledY2);
      }
      }
      const handleChangeY2=(e)=>{
        setCheckedY2(e.target.checked); 
        setCheckedY2(!checkedY2);
        if(e.target.value === "ندارد")
        {
          setDatashow([...data.filter(i=>i.SO === "ندارد" )]);
          setDisabledY1(!disabledY1);
        }
        if(checkedY2){
          setDatashow([...data]);
          setDisabledY1(!disabledY1);
        }
        }
        const handleChangeX1=(e)=>{
          setCheckedX1(e.target.checked); 
          setCheckedX1(!checkedX1);
          if(e.target.value === "بازدهی بالا")
          {
            setDatashow([...data.filter(i=>i.WM === "بازدهی بالا" )]);
            setDisabledX2(!disabledX2);
          }
          if(checkedX1){
            setDatashow([...data]);
            setDisabledX2(!disabledX2);
          }
          }
          const handleChangeX2=(e)=>{
            setCheckedX2(e.target.checked); 
            setCheckedX2(!checkedX2);
            if(e.target.value === "هم زن")
            {
              setDatashow([...data.filter(i=>i.WM === "هم زن" )]);
              setDisabledX1(!disabledX1);
            }
            if(checkedX2){
              setDatashow([...data]);
              setDisabledX1(!disabledX1);
            }
            }

        const handleChangeP1=(e)=>{
          setCheckedP1(e.target.checked); 
          setCheckedP1(!checkedP1);
          if(e.target.value === "۲۹ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۲۹ اینچ" )]);
        
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          }
          if(checkedP1){
            setDatashow([...data]);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
          }
        }
        const handleChangeP2=(e)=>{
          setCheckedP2(e.target.checked); 
          setCheckedP2(!checkedP2);
          if(e.target.value === "۳۰ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۳۰ اینچ" )]);
        
          setDisabledP1(!disabledP1);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          }
          if(checkedP2){
            setDatashow([...data]);
            setDisabledP1(!disabledP1);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
          }
        }
        const handleChangeP3=(e)=>{
          setCheckedP3(e.target.checked); 
          setCheckedP3(!checkedP3);
          if(e.target.value === "۳۳ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۳۳ اینچ" )]);
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP4(!disabledP4);
          }
          if(checkedP3){
            setDatashow([...data]);
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP4(!disabledP4);
          }
        }
        const handleChangeP4=(e)=>{
          setCheckedP4(e.target.checked); 
          setCheckedP4(!checkedP4);
          if(e.target.value === "۳۶ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۳۶ اینچ" )]);
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          }
          if(checkedP4){
            setDatashow([...data]);
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
          }
        }
        const handleChangeW1=(e)=>{
          setCheckedW1(e.target.checked); 
          setCheckedW1(!checkedW1);
          if(e.target.value === "۲۷ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۲۷ اینچ" )]);
        
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
          if(e.target.value === "۳۰ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۳۰ اینچ" )]);
        
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
          if(e.target.value === "۳۸ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۳۸ اینچ" )]);
        
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
          if(e.target.value === "۳۹ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۳۹ اینچ" )]);
        
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
          if(e.target.value === "۴۵ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۴۵ اینچ" )]);
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
        <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}> مکانیسم شستشو</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel  control={<Checkbox  checked={checkedX1}   onChange={handleChangeX1} value={"بازدهی بالا"}  />} label="بازدهی بالا" />
<FormControlLabel  control={<Checkbox  checked={checkedX2}   onChange={handleChangeX2} value={"هم زن"}/>} label="هم زن" />

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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}> آب گرمکن داخلی </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedD1} value={"دارد"} disabled={disabledD1}  onChange={handleChangeD1} />} label="دارد" />
<FormControlLabel control={<Checkbox checked={checkedD2} value={"ندارد"} disabled={disabledD2}   onChange={handleChangeD2}/>} label="ندارد" />


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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  برند</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel control={<Checkbox  checked={checkedB1}   onChange={handleChangeB1} value={"Whirlpool"} />} label="Whirlpool" />
<FormControlLabel  control={<Checkbox checked={checkedB2}   onChange={handleChangeB2} value={"bush"} />} label="bush" />          
<FormControlLabel control={<Checkbox  checked={checkedB3}   onChange={handleChangeB3} value={"LG"} />} label="LG" />
<FormControlLabel  control={<Checkbox checked={checkedB4}   onChange={handleChangeB4} value={"samsung"} />} label="samsung" />
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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}> رتبه ی انرژی </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedE1}   onChange={handleChangeE1} disabled={disabledE1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedE2}   onChange={handleChangeE2} disabled={disabledE2} value={"ندارد"} />} label="ندارد" />
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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  گزینه ی بخار </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        <FormControlLabel control={<Checkbox checked={checkedY1}   onChange={handleChangeY1} disabled={disabledY1} value={"دارد"}  />} label="دارد" />
        <FormControlLabel  control={<Checkbox checked={checkedY2}   onChange={handleChangeY2} disabled={disabledY2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={index === 7}
        onChange={(event, expanded) => {
          setIndex(expanded ? 7 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}>  عمق</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedP1}  onChange={handleChangeP1} disabled={disabledP1} value={"۲۹ اینچ"} />} label="۲۹ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP2}   onChange={handleChangeP2} disabled={disabledP2} value={"۳۰ اینچ"} />} label="۳۰ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP3}   onChange={handleChangeP3} disabled={disabledP3} value={"۳۳ اینچ"} />} label="۳۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP4}   onChange={handleChangeP4} disabled={disabledP4} value={"۳۶ اینچ"} />} label="۳۶ اینچ"/>
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 8}
        onChange={(event, expanded) => {
          setIndex(expanded ? 8 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
   
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}} />}>  عرض</AccordionSummary>
        <AccordionDetails >
        <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedW1}  onChange={handleChangeW1} disabled={disabledW1} value={"۲۷ اینچ"} />} label="۲۷ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW2}   onChange={handleChangeW2} disabled={disabledW2} value={"۳۰ اینچ"} />} label="۳۰ اینچ" />

</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 9}
        onChange={(event, expanded) => {
          setIndex(expanded ? 9 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  ارتفاع</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedH1}  onChange={handleChangeH1} disabled={disabledH1} value={"۳۸ اینچ"} />} label="۳۸ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH2}   onChange={handleChangeH2} disabled={disabledH2} value={"۳۹ اینچ"} />} label="۳۹ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH3}   onChange={handleChangeH3} disabled={disabledH3} value={"۴۵ اینچ"} />} label="۴۵ اینچ" />
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
        <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>

        <Grid container spacing={1} columns={16} sx={{ my:0, display:'flex' ,justifyItems:"center",flexDirection:"row",alignSelf:"center"}} >
        <Grid item xs={8} sx={{ display:"flex",flexDirection:"row",justifyContent:"start"}}>
            <Grid >
        <IconButton sx={{pt:0}}>
  
      <FilterAltOutlinedIcon sx={{color:"#eeeeee"}}/>
    </IconButton>
    </Grid>
        <Grid >
      <Typography sx={{fontSize:'18px',direction:'rtl',color:"#eeeeee"}}>
   فیلتر بر اساس
</Typography>
</Grid>
        </Grid>
        <Grid item xs={8} sx={{ display:"flex",flexDirection:"row",justifyContent:"end"}}> 
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
        <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}> مکانیسم شستشو</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel  control={<Checkbox  checked={checkedX1}   onChange={handleChangeX1} value={"بازدهی بالا"}  />} label="بازدهی بالا" />
<FormControlLabel  control={<Checkbox  checked={checkedX2}   onChange={handleChangeX2} value={"هم زن"}/>} label="هم زن" />

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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}> آب گرمکن داخلی </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedD1} value={"دارد"} disabled={disabledD1}  onChange={handleChangeD1} />} label="دارد" />
<FormControlLabel control={<Checkbox checked={checkedD2} value={"ندارد"} disabled={disabledD2}   onChange={handleChangeD2}/>} label="ندارد" />


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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  برند</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
<FormControlLabel control={<Checkbox  checked={checkedB1}   onChange={handleChangeB1} value={"Whirlpool"} />} label="Whirlpool" />
<FormControlLabel  control={<Checkbox checked={checkedB2}   onChange={handleChangeB2} value={"bush"} />} label="bush" />          
<FormControlLabel control={<Checkbox  checked={checkedB3}   onChange={handleChangeB3} value={"LG"} />} label="LG" />
<FormControlLabel  control={<Checkbox checked={checkedB4}   onChange={handleChangeB4} value={"samsung"} />} label="samsung" />
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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}> رتبه ی انرژی </AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel control={<Checkbox checked={checkedE1}   onChange={handleChangeE1} disabled={disabledE1} value={"دارد"}  />} label="دارد" />
<FormControlLabel  control={<Checkbox checked={checkedE2}   onChange={handleChangeE2} disabled={disabledE2} value={"ندارد"} />} label="ندارد" />
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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  گزینه ی بخار </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        <FormControlLabel control={<Checkbox checked={checkedY1}   onChange={handleChangeY1} disabled={disabledY1} value={"دارد"}  />} label="دارد" />
        <FormControlLabel  control={<Checkbox checked={checkedY2}   onChange={handleChangeY2} disabled={disabledY2} value={"ندارد"} />} label="ندارد" />
</FormGroup>

        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={index === 7}
        onChange={(event, expanded) => {
          setIndex(expanded ? 7 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}>  عمق</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedP1}  onChange={handleChangeP1} disabled={disabledP1} value={"۲۹ اینچ"} />} label="۲۹ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP2}   onChange={handleChangeP2} disabled={disabledP2} value={"۳۰ اینچ"} />} label="۳۰ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP3}   onChange={handleChangeP3} disabled={disabledP3} value={"۳۳ اینچ"} />} label="۳۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP4}   onChange={handleChangeP4} disabled={disabledP4} value={"۳۶ اینچ"} />} label="۳۶ اینچ"/>
</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 8}
        onChange={(event, expanded) => {
          setIndex(expanded ? 8 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
   
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}} />}>  عرض</AccordionSummary>
        <AccordionDetails >
        <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedW1}  onChange={handleChangeW1} disabled={disabledW1} value={"۲۷ اینچ"} />} label="۲۷ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW2}   onChange={handleChangeW2} disabled={disabledW2} value={"۳۰ اینچ"} />} label="۳۰ اینچ" />

</FormGroup>

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={index === 9}
        onChange={(event, expanded) => {
          setIndex(expanded ? 9 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  ارتفاع</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedH1}  onChange={handleChangeH1} disabled={disabledH1} value={"۳۸ اینچ"} />} label="۳۸ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH2}   onChange={handleChangeH2} disabled={disabledH2} value={"۳۹ اینچ"} />} label="۳۹ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH3}   onChange={handleChangeH3} disabled={disabledH3} value={"۴۵ اینچ"} />} label="۴۵ اینچ" />
</FormGroup>
        </AccordionDetails>
      </Accordion>
        </FormGroup>
        </AccordionDetails>
      </Accordion>  
</Box>
</>
   )}
 
