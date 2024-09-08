import React, {useContext,useState} from 'react';
import {CardData} from '../../../Shared/Cart-Context';
import {CardDataShow} from '../../../Shared/Cart-Context';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormLabel from '@mui/joy/FormLabel';
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
const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
export default  function FilteringSideBySide() {


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
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
  const [checkedD3, setCheckedD3] = useState(false);
  const [checkedD4, setCheckedD4] = useState(false);
  const [checkedD5, setCheckedD5] = useState(false);
  const [checkedD6, setCheckedD6] = useState(false);
  const [checkedE1, setCheckedE1] = useState(false);
  const [checkedE2, setCheckedE2] = useState(false);
  const [checkedY1, setCheckedY1] = useState(false);
  const [checkedY2, setCheckedY2] = useState(false);
  const [checkedP1, setCheckedP1] = useState(false);
  const [checkedP2, setCheckedP2] = useState(false);
  const [checkedP3, setCheckedP3] = useState(false);
  const [checkedP4, setCheckedP4] = useState(false);
  const [checkedP5, setCheckedP5] = useState(false);
  const [checkedP6, setCheckedP6] = useState(false);
  const [checkedP7, setCheckedP7] = useState(false);
  const [checkedP8, setCheckedP8] = useState(false);
  const [checkedP9, setCheckedP9] = useState(false);
  const [checkedP10, setCheckedP10] = useState(false);
  const [checkedW1, setCheckedW1] = useState(false);
  const [checkedW2, setCheckedW2] = useState(false);
  const [checkedW3, setCheckedW3] = useState(false);
  const [checkedW4, setCheckedW4] = useState(false);
  const [checkedW5, setCheckedW5] = useState(false);
  const [checkedW6, setCheckedW6] = useState(false);
  const [checkedW7, setCheckedW7] = useState(false);
  const [checkedH1, setCheckedH1] = useState(false);
  const [checkedH2, setCheckedH2] = useState(false);
  const [checkedH3, setCheckedH3] = useState(false);
  const [checkedH4, setCheckedH4] = useState(false);
  const [checkedH5, setCheckedH5] = useState(false);
  const [checkedH6, setCheckedH6] = useState(false);
  const [checkedH7, setCheckedH7] = useState(false);
  const [checkedH8, setCheckedH8] = useState(false);
  const [disabledD1,setDisabledD1]=useState(false);
  const [disabledD2,setDisabledD2]=useState(false);
  const [disabledD3,setDisabledD3]=useState(false);
  const [disabledD4,setDisabledD4]=useState(false);
  const [disabledD5,setDisabledD5]=useState(false);
  const [disabledD6,setDisabledD6]=useState(false);
  const [disabledE1,setDisabledE1]=useState(false);
  const [disabledE2,setDisabledE2]=useState(false);
  const [disabledY1,setDisabledY1]=useState(false);
  const [disabledY2,setDisabledY2]=useState(false);
  const [disabledP1,setDisabledP1]=useState(false);
  const [disabledP2,setDisabledP2]=useState(false);
  const [disabledP3,setDisabledP3]=useState(false);
  const [disabledP4,setDisabledP4]=useState(false);
  const [disabledP5,setDisabledP5]=useState(false);
  const [disabledP6,setDisabledP6]=useState(false);
  const [disabledP7,setDisabledP7]=useState(false);
  const [disabledP8,setDisabledP8]=useState(false);
  const [disabledP9,setDisabledP9]=useState(false);
  const [disabledP10,setDisabledP10]=useState(false);
  const [disabledW1,setDisabledW1]=useState(false);
  const [disabledW2,setDisabledW2]=useState(false);
  const [disabledW3,setDisabledW3]=useState(false);
  const [disabledW4,setDisabledW4]=useState(false);
  const [disabledW5,setDisabledW5]=useState(false);
  const [disabledW6,setDisabledW6]=useState(false);
  const [disabledW7,setDisabledW7]=useState(false);
  const [disabledH1,setDisabledH1]=useState(false);
  const [disabledH2,setDisabledH2]=useState(false);
  const [disabledH3,setDisabledH3]=useState(false);
  const [disabledH4,setDisabledH4]=useState(false);
  const [disabledH5,setDisabledH5]=useState(false);
  const [disabledH6,setDisabledH6]=useState(false);
  const [disabledH7,setDisabledH7]=useState(false);
  const [disabledH8,setDisabledH8]=useState(false);
  const [index, setIndex] = React.useState(0);
  
 

  const sortArrayMaxtoMin= (e)=>{
    setChecked1(e.target.checked);
    setChecked1(!checked1);
  setDatashow([...data.sort((a, b) =>
     b.pricenum - a.pricenum
  )]);
 
  }

  
  const sortArrayMintoMax= (e)=>{
    setChecked2(e.target.checked);
    setChecked2(!checked2);
    setDatashow([...data.sort((a, b) =>
       a.pricenum - b.pricenum
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
  if(e.target.value === "2")
  {
    setDatashow([...data.filter(i=>i.Fshelf === "۲ عدد" )]);

  setDisabledD2(!disabledD2);
  setDisabledD3(!disabledD3);
  setDisabledD4(!disabledD4);
  setDisabledD5(!disabledD5);
  setDisabledD6(!disabledD6);
  }
  if(checkedD1){
    setDatashow([...data]);
    setDisabledD2(!disabledD2);
    setDisabledD3(!disabledD3);
    setDisabledD4(!disabledD4);
    setDisabledD5(!disabledD5);
    setDisabledD6(!disabledD6);
  }
}
const handleChangeD2=(e)=>{
  setCheckedD2(e.target.checked); 
  setCheckedD2(!checkedD2);
  if(e.target.value === "3")
  {
    setDatashow([...data.filter(i=>i.Fshelf === "۳ عدد" )]);
    setDisabledD1(!disabledD1);
    setDisabledD3(!disabledD3);
    setDisabledD4(!disabledD4);
    setDisabledD5(!disabledD5);
    setDisabledD6(!disabledD6);
  }
  if(checkedD2){
    setDatashow([...data]);
    setDisabledD1(!disabledD1);
    setDisabledD3(!disabledD3);
    setDisabledD4(!disabledD4);
    setDisabledD5(!disabledD5);
    setDisabledD6(!disabledD6);
  }
}
const handleChangeD3=(e)=>{
  setCheckedD3(e.target.checked); 
  setCheckedD3(!checkedD3);
  if(e.target.value === "4")
  {
    setDatashow([...data.filter(i=>i.Fshelf === "۴ عدد" )]);
    setDisabledD2(!disabledD2);
    setDisabledD1(!disabledD1);
    setDisabledD4(!disabledD4);
    setDisabledD5(!disabledD5);
    setDisabledD6(!disabledD6);
  }
  if(checkedD3){
    setDatashow([...data]);
    setDisabledD2(!disabledD2);
    setDisabledD1(!disabledD1);
    setDisabledD4(!disabledD4);
    setDisabledD5(!disabledD5);
    setDisabledD6(!disabledD6);
  }
}
const handleChangeD4=(e)=>{
  setCheckedD4(e.target.checked); 
  setCheckedD4(!checkedD4);
  if(e.target.value === "5")
  {
    setDatashow([...data.filter(i=>i.Fshelf === "۵ عدد" )]);
    setDisabledD2(!disabledD2);
    setDisabledD3(!disabledD3);
    setDisabledD1(!disabledD1);
    setDisabledD5(!disabledD5);
    setDisabledD6(!disabledD6);
  }
  if(checkedD4){
    setDatashow([...data]);
    setDisabledD2(!disabledD2);
    setDisabledD3(!disabledD3);
    setDisabledD1(!disabledD1);
    setDisabledD5(!disabledD5);
    setDisabledD6(!disabledD6);
  }
}
const handleChangeD5=(e)=>{
  setCheckedD5(e.target.checked); 
  setCheckedD5(!checkedD5);
  if(e.target.value === "7")
  {
    setDatashow([...data.filter(i=>i.Fshelf === "۷ عدد" )]);
    setDisabledD2(!disabledD2);
    setDisabledD3(!disabledD3);
    setDisabledD4(!disabledD4);
    setDisabledD1(!disabledD1);
    setDisabledD6(!disabledD6);
  }
  if(checkedD5){
    setDatashow([...data]);
    setDisabledD2(!disabledD2);
    setDisabledD3(!disabledD3);
    setDisabledD4(!disabledD4);
    setDisabledD1(!disabledD1);
    setDisabledD6(!disabledD6);
  }
}
const handleChangeD6=(e)=>{
  setCheckedD6(e.target.checked); 
  setCheckedD6(!checkedD6);
  if(e.target.value === "8")
  {
    setDatashow([...data.filter(i=>i.Fshelf === "۸ عدد" )]);
    setDisabledD2(!disabledD2);
    setDisabledD3(!disabledD3);
    setDisabledD4(!disabledD4);
    setDisabledD5(!disabledD5);
    setDisabledD1(!disabledD1);
  }
  if(checkedD6){
    setDatashow([...data]);
    setDisabledD2(!disabledD2);
    setDisabledD3(!disabledD3);
    setDisabledD4(!disabledD4);
    setDisabledD5(!disabledD5);
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
        setDatashow([...data.filter(i=>i.Fice === "دارد" )]);
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
          setDatashow([...data.filter(i=>i.Fice === "ندارد" )]);
          setDisabledY1(!disabledY1);
        }
        if(checkedY2){
          setDatashow([...data]);
          setDisabledY1(!disabledY1);
        }
        }
        const handleChangeP1=(e)=>{
          setCheckedP1(e.target.checked); 
          setCheckedP1(!checkedP1);
          if(e.target.value === "۲۳ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۲۳ اینچ" )]);
        
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          setDisabledP5(!disabledP5);
          setDisabledP6(!disabledP6);
          setDisabledP7(!disabledP7);
          setDisabledP8(!disabledP8);
          setDisabledP9(!disabledP9);
          setDisabledP10(!disabledP10);
          }
          if(checkedP1){
            setDatashow([...data]);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
            setDisabledP5(!disabledP5);
            setDisabledP6(!disabledP6);
            setDisabledP7(!disabledP7);
            setDisabledP8(!disabledP8);
            setDisabledP9(!disabledP9);
            setDisabledP10(!disabledP10);
          }
        }
        const handleChangeP2=(e)=>{
          setCheckedP2(e.target.checked); 
          setCheckedP2(!checkedP2);
          if(e.target.value === "۲۶ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۲۶ اینچ" )]);
        
          setDisabledP1(!disabledP1);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          setDisabledP5(!disabledP5);
          setDisabledP6(!disabledP6);
          setDisabledP7(!disabledP7);
          setDisabledP8(!disabledP8);
          setDisabledP9(!disabledP9);
          setDisabledP10(!disabledP10);
          }
          if(checkedP2){
            setDatashow([...data]);
            setDisabledP1(!disabledP1);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
            setDisabledP5(!disabledP5);
            setDisabledP6(!disabledP6);
            setDisabledP7(!disabledP7);
            setDisabledP8(!disabledP8);
            setDisabledP9(!disabledP9);
            setDisabledP10(!disabledP10);
          }
        }
        const handleChangeP3=(e)=>{
          setCheckedP3(e.target.checked); 
          setCheckedP3(!checkedP3);
          if(e.target.value === "۲۸ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۲۸ اینچ" )]);
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP4(!disabledP4);
          setDisabledP5(!disabledP5);
          setDisabledP6(!disabledP6);
          setDisabledP7(!disabledP7);
          setDisabledP8(!disabledP8);
          setDisabledP9(!disabledP9);
          setDisabledP10(!disabledP10);
          }
          if(checkedP3){
            setDatashow([...data]);
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP4(!disabledP4);
            setDisabledP5(!disabledP5);
            setDisabledP6(!disabledP6);
            setDisabledP7(!disabledP7);
            setDisabledP8(!disabledP8);
            setDisabledP9(!disabledP9);
            setDisabledP10(!disabledP10);
          }
        }
        const handleChangeP4=(e)=>{
          setCheckedP4(e.target.checked); 
          setCheckedP4(!checkedP4);
          if(e.target.value === "۲۹ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۲۹ اینچ" )]);
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          setDisabledP5(!disabledP5);
          setDisabledP6(!disabledP6);
          setDisabledP7(!disabledP7);
          setDisabledP8(!disabledP8);
          setDisabledP9(!disabledP9);
          setDisabledP10(!disabledP10);
          }
          if(checkedP4){
            setDatashow([...data]);
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
            setDisabledP5(!disabledP5);
            setDisabledP6(!disabledP6);
            setDisabledP7(!disabledP7);
            setDisabledP8(!disabledP8);
            setDisabledP9(!disabledP9);
            setDisabledP10(!disabledP10);
          }
        }
        const handleChangeP5=(e)=>{
          setCheckedP5(e.target.checked); 
          setCheckedP5(!checkedP5);
          if(e.target.value === "۳۰ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۳۰ اینچ" )]);
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          setDisabledP6(!disabledP6);
          setDisabledP7(!disabledP7);
          setDisabledP8(!disabledP8);
          setDisabledP9(!disabledP9);
          setDisabledP10(!disabledP10);
          }
          if(checkedP5){
            setDatashow([...data]);
            
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
            setDisabledP6(!disabledP6);
            setDisabledP7(!disabledP7);
            setDisabledP8(!disabledP8);
            setDisabledP9(!disabledP9);
            setDisabledP10(!disabledP10);
          }
        }
        const handleChangeP6=(e)=>{
          setCheckedP6(e.target.checked); 
          setCheckedP6(!checkedP6);
          if(e.target.value === "۳۱ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۳۱ اینچ" )]);
          
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          setDisabledP5(!disabledP5);
          setDisabledP7(!disabledP7);
          setDisabledP8(!disabledP8);
          setDisabledP9(!disabledP9);
          setDisabledP10(!disabledP10);
          }
          if(checkedP6){
            setDatashow([...data]);
            
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
            setDisabledP5(!disabledP5);
            setDisabledP7(!disabledP7);
            setDisabledP8(!disabledP8);
            setDisabledP9(!disabledP9);
            setDisabledP10(!disabledP10);
          }
        }
        const handleChangeP7=(e)=>{
          setCheckedP7(e.target.checked); 
          setCheckedP7(!checkedP7);
          if(e.target.value === "۳۳ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۳۳ اینچ" )]);
        
          
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          setDisabledP5(!disabledP5);
          setDisabledP6(!disabledP6);
          setDisabledP8(!disabledP8);
          setDisabledP9(!disabledP9);
          setDisabledP10(!disabledP10);
          }
          if(checkedP7){
            setDatashow([...data]);
            
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
            setDisabledP5(!disabledP5);
            setDisabledP6(!disabledP6);
            setDisabledP8(!disabledP8);
            setDisabledP9(!disabledP9);
            setDisabledP10(!disabledP10);
          }
        }
        const handleChangeP8=(e)=>{
          setCheckedP8(e.target.checked); 
          setCheckedP8(!checkedP8);
          if(e.target.value === "۳۴ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۳۴ اینچ" )]);
        
          
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          setDisabledP5(!disabledP5);
          setDisabledP6(!disabledP6);
          setDisabledP7(!disabledP7);
          setDisabledP9(!disabledP9);
          setDisabledP10(!disabledP10);
          }
          if(checkedP8){
            setDatashow([...data]);
            
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
            setDisabledP5(!disabledP5);
            setDisabledP6(!disabledP6);
            setDisabledP7(!disabledP7);
            setDisabledP9(!disabledP9);
            setDisabledP10(!disabledP10);
          }
        }
        const handleChangeP9=(e)=>{
          setCheckedP9(e.target.checked); 
          setCheckedP9(!checkedP9);
          if(e.target.value === "۳۵ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۳۵ اینچ" )]);
        
          
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          setDisabledP5(!disabledP5);
          setDisabledP6(!disabledP6);
          setDisabledP7(!disabledP7);
          setDisabledP8(!disabledP8);
          setDisabledP10(!disabledP10);
          }
          if(checkedP9){
            setDatashow([...data]);
            
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
            setDisabledP5(!disabledP5);
            setDisabledP6(!disabledP6);
            setDisabledP7(!disabledP7);
            setDisabledP8(!disabledP8);
            setDisabledP10(!disabledP10);
          }
        }
        const handleChangeP10=(e)=>{
          setCheckedP10(e.target.checked); 
          setCheckedP10(!checkedP10);
          if(e.target.value === "۳۶ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fd === "۳۶ اینچ" )]);
        
          
          setDisabledP1(!disabledP1);
          setDisabledP2(!disabledP2);
          setDisabledP3(!disabledP3);
          setDisabledP4(!disabledP4);
          setDisabledP5(!disabledP5);
          setDisabledP6(!disabledP6);
          setDisabledP7(!disabledP7);
          setDisabledP8(!disabledP8);
          setDisabledP9(!disabledP9);
          }
          if(checkedP10){
            setDatashow([...data]);
            
            setDisabledP1(!disabledP1);
            setDisabledP2(!disabledP2);
            setDisabledP3(!disabledP3);
            setDisabledP4(!disabledP4);
            setDisabledP5(!disabledP5);
            setDisabledP6(!disabledP6);
            setDisabledP7(!disabledP7);
            setDisabledP8(!disabledP8);
            setDisabledP9(!disabledP9);
            
          }
        }
        const handleChangeW1=(e)=>{
          setCheckedW1(e.target.checked); 
          setCheckedW1(!checkedW1);
          if(e.target.value === "۲۳ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۲۳ اینچ" )]);
        
          setDisabledW2(!disabledW2);
          setDisabledW3(!disabledW3);
          setDisabledW4(!disabledW4);
          setDisabledW5(!disabledW5);
          setDisabledW6(!disabledW6);
          setDisabledW7(!disabledW7);
          }
          if(checkedW1){
            setDatashow([...data]);
            setDisabledW2(!disabledW2);
            setDisabledW3(!disabledW3);
            setDisabledW4(!disabledW4);
            setDisabledW5(!disabledW5);
            setDisabledW6(!disabledW6);
            setDisabledW7(!disabledW7);
          }
        }
        const handleChangeW2=(e)=>{
          setCheckedW2(e.target.checked); 
          setCheckedW2(!checkedW2);
          if(e.target.value === "۲۴ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۲۴ اینچ" )]);
        
          setDisabledW1(!disabledW1);
          setDisabledW3(!disabledW3);
          setDisabledW4(!disabledW4);
          setDisabledW5(!disabledW5);
          setDisabledW6(!disabledW6);
          setDisabledW7(!disabledW7);
          }
          if(checkedW2){
            setDatashow([...data]);
            setDisabledW1(!disabledW1);
            setDisabledW3(!disabledW3);
            setDisabledW4(!disabledW4);
            setDisabledW5(!disabledW5);
            setDisabledW6(!disabledW6);
            setDisabledW7(!disabledW7);
          }
        }
        const handleChangeW3=(e)=>{
          setCheckedW3(e.target.checked); 
          setCheckedW3(!checkedW3);
          if(e.target.value === "۲۶ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۲۶ اینچ" )]);
          setDisabledW1(!disabledW1);
          setDisabledW2(!disabledW2);
          setDisabledW4(!disabledW4);
          setDisabledW5(!disabledW5);
          setDisabledW6(!disabledW6);
          setDisabledW7(!disabledW7);
          }
          if(checkedW3){
            setDatashow([...data]);
            setDisabledW1(!disabledW1);
            setDisabledW2(!disabledW2);
            setDisabledW4(!disabledW4);
            setDisabledW5(!disabledW5);
            setDisabledW6(!disabledW6);
            setDisabledW7(!disabledW7);
          }
        }
        const handleChangeW4=(e)=>{
          setCheckedW4(e.target.checked); 
          setCheckedW4(!checkedW4);
          if(e.target.value === "۳۰ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۳۰ اینچ" )]);
          setDisabledW1(!disabledW1);
          setDisabledW2(!disabledW2);
          setDisabledW3(!disabledW3);
          setDisabledW5(!disabledW5);
          setDisabledW6(!disabledW6);
          setDisabledW7(!disabledW7);
          }
          if(checkedW4){
            setDatashow([...data]);
            setDisabledW1(!disabledW1);
            setDisabledW2(!disabledW2);
            setDisabledW3(!disabledW3);
            setDisabledW5(!disabledW5);
            setDisabledW6(!disabledW6);
            setDisabledW7(!disabledW7);
          }
        }
        const handleChangeW5=(e)=>{
          setCheckedW5(e.target.checked); 
          setCheckedW5(!checkedW5);
          if(e.target.value === "۳۲ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۳۲ اینچ" )]);
          setDisabledW1(!disabledW1);
          setDisabledW2(!disabledW2);
          setDisabledW3(!disabledW3);
          setDisabledW4(!disabledW4);
          setDisabledW6(!disabledW6);
          setDisabledW7(!disabledW7);
          }
          if(checkedW5){
            setDatashow([...data]);
            
            setDisabledW1(!disabledW1);
            setDisabledW2(!disabledW2);
            setDisabledW3(!disabledW3);
            setDisabledW4(!disabledW4);
            setDisabledW6(!disabledW6);
            setDisabledW7(!disabledW7);
          }
        }
        const handleChangeW6=(e)=>{
          setCheckedW6(e.target.checked); 
          setCheckedW6(!checkedW6);
          if(e.target.value === "۳۳ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۳۳ اینچ" )]);
          
          setDisabledW1(!disabledW1);
          setDisabledW2(!disabledW2);
          setDisabledW3(!disabledW3);
          setDisabledW4(!disabledW4);
          setDisabledW5(!disabledW5);
          setDisabledW7(!disabledW7);
          }
          if(checkedW6){
            setDatashow([...data]);
            
            setDisabledW1(!disabledW1);
            setDisabledW2(!disabledW2);
            setDisabledW3(!disabledW3);
            setDisabledW4(!disabledW4);
            setDisabledW5(!disabledW5);
            setDisabledW7(!disabledW7);
          }
        }
        const handleChangeW7=(e)=>{
          setCheckedW7(e.target.checked); 
          setCheckedW7(!checkedW7);
          if(e.target.value === "۳۶ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fw === "۳۶ اینچ" )]);
        
          
          setDisabledW1(!disabledW1);
          setDisabledW2(!disabledW2);
          setDisabledW3(!disabledW3);
          setDisabledW4(!disabledW4);
          setDisabledW5(!disabledW5);
          setDisabledW6(!disabledW6);
          }
          if(checkedW7){
            setDatashow([...data]);
            
            setDisabledW1(!disabledW1);
            setDisabledW2(!disabledW2);
            setDisabledW3(!disabledW3);
            setDisabledW4(!disabledW4);
            setDisabledW5(!disabledW5);
            setDisabledW6(!disabledW6);
          }
        }
        const handleChangeH1=(e)=>{
          setCheckedH1(e.target.checked); 
          setCheckedH1(!checkedH1);
          if(e.target.value === "۶۷ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۶۷ اینچ" )]);
        
          setDisabledH2(!disabledH2);
          setDisabledH3(!disabledH3);
          setDisabledH4(!disabledH4);
          setDisabledH5(!disabledH5);
          setDisabledH6(!disabledH6);
          setDisabledH7(!disabledH7);
          setDisabledH8(!disabledH8);
          }
          if(checkedH1){
            setDatashow([...data]);
            setDisabledH2(!disabledH2);
            setDisabledH3(!disabledH3);
            setDisabledH4(!disabledH4);
            setDisabledH5(!disabledH5);
            setDisabledH6(!disabledH6);
            setDisabledH7(!disabledH7);
            setDisabledH8(!disabledH8);
          }
        }
        const handleChangeH2=(e)=>{
          setCheckedH2(e.target.checked); 
          setCheckedH2(!checkedH2);
          if(e.target.value === "۶۸ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۶۸ اینچ" )]);
        
          setDisabledH1(!disabledH1);
          setDisabledH3(!disabledH3);
          setDisabledH4(!disabledH4);
          setDisabledH5(!disabledH5);
          setDisabledH6(!disabledH6);
          setDisabledH7(!disabledH7);
          setDisabledH8(!disabledH8);
          }
          if(checkedH2){
            setDatashow([...data]);
            setDisabledH1(!disabledH1);
            setDisabledH3(!disabledH3);
            setDisabledH4(!disabledH4);
            setDisabledH5(!disabledH5);
            setDisabledH6(!disabledH6);
            setDisabledH7(!disabledH7);
            setDisabledH8(!disabledH8);
          }
        }
        const handleChangeH3=(e)=>{
          setCheckedH3(e.target.checked); 
          setCheckedH3(!checkedH3);
          if(e.target.value === "۶۹ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۶۹ اینچ" )]);
          setDisabledH1(!disabledH1);
          setDisabledH2(!disabledH2);
          setDisabledH4(!disabledH4);
          setDisabledH5(!disabledH5);
          setDisabledH6(!disabledH6);
          setDisabledH7(!disabledH7);
          setDisabledH8(!disabledH8);
          }
          if(checkedH3){
            setDatashow([...data]);
            setDisabledH1(!disabledH1);
            setDisabledH2(!disabledH2);
            setDisabledH4(!disabledH4);
            setDisabledH5(!disabledH5);
            setDisabledH6(!disabledH6);
            setDisabledH7(!disabledH7);
            setDisabledH8(!disabledH8);
          }
        }
        const handleChangeH4=(e)=>{
          setCheckedH4(e.target.checked); 
          setCheckedH4(!checkedH4);
          if(e.target.value === "۷۰ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۷۰ اینچ" )]);
          setDisabledH1(!disabledH1);
          setDisabledH2(!disabledH2);
          setDisabledH3(!disabledH3);
          setDisabledH5(!disabledH5);
          setDisabledH6(!disabledH6);
          setDisabledH7(!disabledH7);
          setDisabledH8(!disabledH8);
          }
          if(checkedP4){
            setDatashow([...data]);
            setDisabledH1(!disabledH1);
            setDisabledH2(!disabledH2);
            setDisabledH3(!disabledH3);
            setDisabledH5(!disabledH5);
            setDisabledH6(!disabledH6);
            setDisabledH7(!disabledH7);
            setDisabledH8(!disabledH8);
          }
        }
        const handleChangeH5=(e)=>{
          setCheckedH5(e.target.checked); 
          setCheckedH5(!checkedH5);
          if(e.target.value === "۷۱ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۷۱ اینچ" )]);
          setDisabledH1(!disabledH1);
          setDisabledH2(!disabledH2);
          setDisabledH3(!disabledH3);
          setDisabledH4(!disabledH4);
          setDisabledH6(!disabledH6);
          setDisabledH7(!disabledH7);
          setDisabledH8(!disabledH8);
          }
          if(checkedH5){
            setDatashow([...data]);
            
            setDisabledH1(!disabledH1);
            setDisabledH2(!disabledH2);
            setDisabledH3(!disabledH3);
            setDisabledH4(!disabledH4);
            setDisabledH6(!disabledH6);
            setDisabledH7(!disabledH7);
            setDisabledH8(!disabledH8);
          }
        }
        const handleChangeH6=(e)=>{
          setCheckedH6(e.target.checked); 
          setCheckedH6(!checkedH6);
          if(e.target.value === "۷۲ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۷۲ اینچ" )]);
          
          setDisabledH1(!disabledH1);
          setDisabledH2(!disabledH2);
          setDisabledH3(!disabledH3);
          setDisabledH4(!disabledH4);
          setDisabledH5(!disabledH5);
          setDisabledH7(!disabledH7);
          setDisabledH8(!disabledH8);
          }
          if(checkedH6){
            setDatashow([...data]);
            
            setDisabledH1(!disabledH1);
            setDisabledH2(!disabledH2);
            setDisabledH3(!disabledH3);
            setDisabledH4(!disabledH4);
            setDisabledH5(!disabledH5);
            setDisabledH7(!disabledH7);
            setDisabledH8(!disabledH8);
          }
        }
        const handleChangeH7=(e)=>{
          setCheckedH7(e.target.checked); 
          setCheckedH7(!checkedH7);
          if(e.target.value === "۷۳ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۷۳ اینچ" )]);
        
          
          setDisabledH1(!disabledH1);
          setDisabledH2(!disabledH2);
          setDisabledH3(!disabledH3);
          setDisabledH4(!disabledH4);
          setDisabledH5(!disabledH5);
          setDisabledH6(!disabledH6);
          setDisabledH8(!disabledH8);
          }
          if(checkedH7){
            setDatashow([...data]);
            
            setDisabledH1(!disabledH1);
            setDisabledH2(!disabledH2);
            setDisabledH3(!disabledH3);
            setDisabledH4(!disabledH4);
            setDisabledH5(!disabledH5);
            setDisabledH6(!disabledH6);
            setDisabledH8(!disabledH8);
          }
        }
        const handleChangeH8=(e)=>{
          setCheckedH8(e.target.checked); 
          setCheckedH8(!checkedH8);
          if(e.target.value === "۷۶ اینچ" )
          {
            setDatashow([...data.filter(i=>i.Fh === "۷۶ اینچ" )]);
        
          
          setDisabledH1(!disabledH1);
          setDisabledH2(!disabledH2);
          setDisabledH3(!disabledH3);
          setDisabledH4(!disabledH4);
          setDisabledH5(!disabledH5);
          setDisabledH6(!disabledH6);
          setDisabledH7(!disabledH7);
          }
          if(checkedH8){
            setDatashow([...data]);
            
            setDisabledH1(!disabledH1);
            setDisabledH2(!disabledH2);
            setDisabledH3(!disabledH3);
            setDisabledH4(!disabledH4);
            setDisabledH5(!disabledH5);
            setDisabledH6(!disabledH6);
            setDisabledH7(!disabledH7);
          }
        }
   return (
    <>
    <Box component="div" sx={{width:{xs:'90%',lg:'40%'},display:{xs:"none",lg:'flex'},flexDirection:'column',justifyContent:{xs:'center',lg:'start'}}}>
      <Box sx={{my:3,ml:1,mr:1, display:'flex' ,justifyContent:'start', height:'40px',width:'100%',bgcolor:'#E0E1E3'}}>
<Typography sx={{pt:1,px:2,fontSize:'18px',direction:'rtl'}}>
  نوع نمایش
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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}> تعداد طبقات</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormLabel sx={{my:3}}>   تعداد طبقات </FormLabel>
<FormControlLabel control={<Checkbox checked={checkedD1} value={"2"} disabled={disabledD1}  onChange={handleChangeD1} />} label="2" />
<FormControlLabel control={<Checkbox checked={checkedD2} value={"3"} disabled={disabledD2}   onChange={handleChangeD2}/>} label="3" />
<FormControlLabel control={<Checkbox checked={checkedD3} value={"4"} disabled={disabledD3}   onChange={handleChangeD3}/>} label="4" />
<FormControlLabel control={<Checkbox checked={checkedD4} value={"5"} disabled={disabledD4}   onChange={handleChangeD4}/>} label="5" />
<FormControlLabel control={<Checkbox checked={checkedD5} value={"7"} disabled={disabledD5}   onChange={handleChangeD5}/>} label="7" />
<FormControlLabel control={<Checkbox checked={checkedD6} value={"8"} disabled={disabledD6}   onChange={handleChangeD6}/>} label="8" />

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
        expanded={index === 4}
        onChange={(event, expanded) => {
          setIndex(expanded ? 4 : null);
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
        expanded={index === 5}
        onChange={(event, expanded) => {
          setIndex(expanded ? 5 : null);
        }}
        sx={{borderBottom:'1px solid black',mr:1}}
      >
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  یخ ساز</AccordionSummary>
        <AccordionDetails>
        <FormGroup>
        <FormControlLabel control={<Checkbox checked={checkedY1}   onChange={handleChangeY1} disabled={disabledY1} value={"دارد"}  />} label="دارد" />
        <FormControlLabel  control={<Checkbox checked={checkedY2}   onChange={handleChangeY2} disabled={disabledY2} value={"ندارد"} />} label="ندارد" />
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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}>  عمق</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedP1}  onChange={handleChangeP1} disabled={disabledP1} value={"۲۳ اینچ"} />} label="۲۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP2}   onChange={handleChangeP2} disabled={disabledP2} value={"۲۶ اینچ"} />} label="۲۶ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP3}   onChange={handleChangeP3} disabled={disabledP3} value={"۲۸ اینچ"} />} label="۲۸ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP4}   onChange={handleChangeP4} disabled={disabledP4} value={"۲۹ اینچ"} />} label="۲۹ اینچ"/>
<FormControlLabel  control={<Checkbox checked={checkedP5}   onChange={handleChangeP5} disabled={disabledP5} value={"۳۰ اینچ"} />} label="۳۰ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP6}   onChange={handleChangeP6} disabled={disabledP6} value={"۳۱ اینچ"} />} label="۳۱ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP7}   onChange={handleChangeP7} disabled={disabledP7} value={"۳۳ اینچ"} />} label="۳۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP8}   onChange={handleChangeP8} disabled={disabledP8} value={"۳۴ اینچ"} />} label="۳۴ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP9}   onChange={handleChangeP9} disabled={disabledP9} value={"۳۵ اینچ"} />} label="۳۵ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedP10}   onChange={handleChangeP10} disabled={disabledP10} value={"۳۶ اینچ"} />} label="۳۶ اینچ" />
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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}} />}>  عرض</AccordionSummary>
        <AccordionDetails >
        <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedW1}  onChange={handleChangeW1} disabled={disabledW1} value={"۲۳ اینچ"} />} label="۲۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW2}   onChange={handleChangeW2} disabled={disabledW2} value={"۲۴ اینچ"} />} label="۲۴ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW3}   onChange={handleChangeW3} disabled={disabledW3} value={"۲۶ اینچ"} />} label="۲۶ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW4}   onChange={handleChangeW4} disabled={disabledW4} value={"۳۰ اینچ"} />} label="۳۰ اینچ"/>
<FormControlLabel  control={<Checkbox checked={checkedW5}   onChange={handleChangeW5} disabled={disabledW5} value={"۳۲ اینچ"} />} label="۳۲ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW6}   onChange={handleChangeW6} disabled={disabledW6} value={"۳۳ اینچ"} />} label="۳۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedW7}   onChange={handleChangeW7} disabled={disabledW7} value={"۳۶ اینچ"} />} label="۳۶ اینچ" />

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
        <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  ارتفاع</AccordionSummary>
        <AccordionDetails>
   <FormGroup>
<FormControlLabel  control={<Checkbox checked={checkedH1}  onChange={handleChangeH1} disabled={disabledH1} value={"۶۷ اینچ"} />} label="۶۷ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH2}   onChange={handleChangeH2} disabled={disabledH2} value={"۶۸ اینچ"} />} label="۶۸ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH3}   onChange={handleChangeH3} disabled={disabledH3} value={"۶۹ اینچ"} />} label="۶۹ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH4}   onChange={handleChangeH4} disabled={disabledH4} value={"۷۰ اینچ"} />} label="۷۰ اینچ"/>
<FormControlLabel  control={<Checkbox checked={checkedH5}   onChange={handleChangeH5} disabled={disabledH5} value={"۷۱ اینچ"} />} label="۷۱ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH6}   onChange={handleChangeH6} disabled={disabledH6} value={"۷۲ اینچ"} />} label="۷۲ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH7}   onChange={handleChangeH7} disabled={disabledH7} value={"۷۳ اینچ"} />} label="۷۳ اینچ" />
<FormControlLabel  control={<Checkbox checked={checkedH8}   onChange={handleChangeH8} disabled={disabledH8} value={"۷۶ اینچ"} />} label="۷۶ اینچ" />
</FormGroup>
        </AccordionDetails>
      </Accordion>
</Box>

<Box component="div" sx={{width:{xs:'95%',lg:'40%'},alignSelf:"center",display:{xs:"flex",lg:'none'},flexDirection:'column',justifyContent:{xs:'center',lg:'start'}}}>
     
     <Box sx={{ px:1,alignSelf:"center",width:"100%",height:"15%",bgcolor:'#E0E1E3'}}>
           <Grid container spacing={1} columns={16} sx={{ my:0, display:'flex' ,justifyItems:"center",flexDirection:"row",alignSelf:"center"}} >
             <Grid item xs={8} sx={{ display:"flex",flexDirection:"row",justifyContent:"start"}}>
                 <Grid >
             <IconButton sx={{pt:0}}>
       
           <FilterAltOutlinedIcon/>
         </IconButton>
         </Grid>
             <Grid >
           <Typography sx={{fontSize:'18px',direction:'rtl'}}>
       نوع نمایش
     </Typography>
     </Grid>
             </Grid>
             <Grid item xs={8} sx={{ display:"flex",flexDirection:"row",justifyContent:"end"}}> 
             <IconButton
           onClick={handleDrawerOpen}
         
           sx={{pb:1,pt:0,  ml: 0, ...(open && { display: 'none' }) }}
         >
           <ExpandMoreIcon />
         </IconButton>
              
             </Grid>
           </Grid>
         
          
        
                <Drawer
             sx={{
               width: drawerWidth,
               flexShrink: 0,
               '& .MuiDrawer-paper': {
                 width: drawerWidth,
                 boxSizing: 'border-box',
                 height:'100vh',
                
               },
             }}
             variant="persistent"
             anchor="right"
             open={open}
           >
             <DrawerHeader sx={{mt:1,display:"flex",justifyContent:"space-between",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)"}}>
             <Typography variant='h6' sx={{px:2,direction:'rtl',color:"white"}}>
       نوع نمایش
     </Typography>
               <IconButton onClick={handleDrawerClose}>
                 {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
               </IconButton>
             </DrawerHeader>
     
             <Divider />
                    
     
     <Accordion
             expanded={index === 0}
             onChange={(event, expanded) => {
               setIndex(expanded ? 0 : null);
             }}
             sx={{borderBottom:'1px solid black',mr:1}}
           >
             <AccordionSummary  sx={{fontSize:'16px',direction:'rtl'}} 
              aria-controls="panel1-content"
              expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}> قیمت </AccordionSummary>
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
             <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}> تعداد طبقات</AccordionSummary>
             <AccordionDetails>
        <FormGroup>
     <FormLabel sx={{my:3}}>   تعداد طبقات </FormLabel>
     <FormControlLabel control={<Checkbox checked={checkedD1} value={"2"} disabled={disabledD1}  onChange={handleChangeD1} />} label="2" />
     <FormControlLabel control={<Checkbox checked={checkedD2} value={"3"} disabled={disabledD2}   onChange={handleChangeD2}/>} label="3" />
     <FormControlLabel control={<Checkbox checked={checkedD3} value={"4"} disabled={disabledD3}   onChange={handleChangeD3}/>} label="4" />
     <FormControlLabel control={<Checkbox checked={checkedD4} value={"5"} disabled={disabledD4}   onChange={handleChangeD4}/>} label="5" />
     <FormControlLabel control={<Checkbox checked={checkedD5} value={"7"} disabled={disabledD5}   onChange={handleChangeD5}/>} label="7" />
     <FormControlLabel control={<Checkbox checked={checkedD6} value={"8"} disabled={disabledD6}   onChange={handleChangeD6}/>} label="8" />
     
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
             expanded={index === 4}
             onChange={(event, expanded) => {
               setIndex(expanded ? 4 : null);
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
             expanded={index === 5}
             onChange={(event, expanded) => {
               setIndex(expanded ? 5 : null);
             }}
             sx={{borderBottom:'1px solid black',mr:1}}
           >
             <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  یخ ساز</AccordionSummary>
             <AccordionDetails>
             <FormGroup>
             <FormControlLabel control={<Checkbox checked={checkedY1}   onChange={handleChangeY1} disabled={disabledY1} value={"دارد"}  />} label="دارد" />
             <FormControlLabel  control={<Checkbox checked={checkedY2}   onChange={handleChangeY2} disabled={disabledY2} value={"ندارد"} />} label="ندارد" />
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
             <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}}/>}>  عمق</AccordionSummary>
             <AccordionDetails>
        <FormGroup>
     <FormControlLabel  control={<Checkbox checked={checkedP1}  onChange={handleChangeP1} disabled={disabledP1} value={"۲۳ اینچ"} />} label="۲۳ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedP2}   onChange={handleChangeP2} disabled={disabledP2} value={"۲۶ اینچ"} />} label="۲۶ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedP3}   onChange={handleChangeP3} disabled={disabledP3} value={"۲۸ اینچ"} />} label="۲۸ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedP4}   onChange={handleChangeP4} disabled={disabledP4} value={"۲۹ اینچ"} />} label="۲۹ اینچ"/>
     <FormControlLabel  control={<Checkbox checked={checkedP5}   onChange={handleChangeP5} disabled={disabledP5} value={"۳۰ اینچ"} />} label="۳۰ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedP6}   onChange={handleChangeP6} disabled={disabledP6} value={"۳۱ اینچ"} />} label="۳۱ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedP7}   onChange={handleChangeP7} disabled={disabledP7} value={"۳۳ اینچ"} />} label="۳۳ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedP8}   onChange={handleChangeP8} disabled={disabledP8} value={"۳۴ اینچ"} />} label="۳۴ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedP9}   onChange={handleChangeP9} disabled={disabledP9} value={"۳۵ اینچ"} />} label="۳۵ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedP10}   onChange={handleChangeP10} disabled={disabledP10} value={"۳۶ اینچ"} />} label="۳۶ اینچ" />
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
             <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon  sx={{fontSize:'16px',pl:1.5}} />}>  عرض</AccordionSummary>
             <AccordionDetails >
             <FormGroup>
     <FormControlLabel  control={<Checkbox checked={checkedW1}  onChange={handleChangeW1} disabled={disabledW1} value={"۲۳ اینچ"} />} label="۲۳ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedW2}   onChange={handleChangeW2} disabled={disabledW2} value={"۲۴ اینچ"} />} label="۲۴ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedW3}   onChange={handleChangeW3} disabled={disabledW3} value={"۲۶ اینچ"} />} label="۲۶ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedW4}   onChange={handleChangeW4} disabled={disabledW4} value={"۳۰ اینچ"} />} label="۳۰ اینچ"/>
     <FormControlLabel  control={<Checkbox checked={checkedW5}   onChange={handleChangeW5} disabled={disabledW5} value={"۳۲ اینچ"} />} label="۳۲ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedW6}   onChange={handleChangeW6} disabled={disabledW6} value={"۳۳ اینچ"} />} label="۳۳ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedW7}   onChange={handleChangeW7} disabled={disabledW7} value={"۳۶ اینچ"} />} label="۳۶ اینچ" />
     
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
             <AccordionSummary sx={{fontSize:'16px',direction:'rtl'}}  expandIcon={<AddIcon sx={{fontSize:'16px',pl:1.5}} />}>  ارتفاع</AccordionSummary>
             <AccordionDetails>
        <FormGroup>
     <FormControlLabel  control={<Checkbox checked={checkedH1}  onChange={handleChangeH1} disabled={disabledH1} value={"۶۷ اینچ"} />} label="۶۷ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedH2}   onChange={handleChangeH2} disabled={disabledH2} value={"۶۸ اینچ"} />} label="۶۸ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedH3}   onChange={handleChangeH3} disabled={disabledH3} value={"۶۹ اینچ"} />} label="۶۹ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedH4}   onChange={handleChangeH4} disabled={disabledH4} value={"۷۰ اینچ"} />} label="۷۰ اینچ"/>
     <FormControlLabel  control={<Checkbox checked={checkedH5}   onChange={handleChangeH5} disabled={disabledH5} value={"۷۱ اینچ"} />} label="۷۱ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedH6}   onChange={handleChangeH6} disabled={disabledH6} value={"۷۲ اینچ"} />} label="۷۲ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedH7}   onChange={handleChangeH7} disabled={disabledH7} value={"۷۳ اینچ"} />} label="۷۳ اینچ" />
     <FormControlLabel  control={<Checkbox checked={checkedH8}   onChange={handleChangeH8} disabled={disabledH8} value={"۷۶ اینچ"} />} label="۷۶ اینچ" />
     </FormGroup>
             </AccordionDetails>
           </Accordion>
     
     
           </Drawer>
     
     </Box>   
     </Box>

</>
   )}
 
