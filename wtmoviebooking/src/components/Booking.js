import React,{useState} from 'react'
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {Link ,useLocation} from 'react-router-dom'
import { Stack, Button, Avatar, Typography } from '@mui/material';

const Booking = () => {


  const Location = useLocation()
  const data = Location.state
  const [temp , setTemp] = useState(data)

  const [c , setC] = useState(0)


  const [p , setP] = useState(0)

  const [details, setDetails] = useState([[],[]])

  console.log(details);

  return (<div> 
      <Stack  sx={{ marginLeft:"50%" , marginRight:'50%' ,padding:'10px'}} direction='row'>

      <Typography variant='h6'>{temp.title}</Typography> 
      <Avatar
  src={`https://image.tmdb.org/t/p/original/${temp.poster_path}`}
  sx={{ width: 100, height: 100, marginLeft:'10px' }}
/> 

      </Stack>
      
    
  <h3>Prime : <CurrencyRupeeIcon fontSize='small'/>250<br></br> Total Prime Count:   {c}</h3>  
  <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  color="primary" disableRipple   >
 A <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('A1')): (setC(c-1),   details[0].splice(  details[0].indexOf('A1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A2')): (setC(c-1),   details[0].splice(  details[0].indexOf('A2'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A3')): (setC(c-1),   details[0].splice(  details[0].indexOf('A3'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A4')): (setC(c-1),   details[0].splice(  details[0].indexOf('A4'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('A5')): (setC(c-1),   details[0].splice(  details[0].indexOf('A5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A6')): (setC(c-1),   details[0].splice(  details[0].indexOf('A6'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A7')): (setC(c-1),   details[0].splice(  details[0].indexOf('A7'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A8')): (setC(c-1),   details[0].splice(  details[0].indexOf('A8'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('A9')): (setC(c-1),   details[0].splice(  details[0].indexOf('A9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A10')): (setC(c-1),   details[0].splice(  details[0].indexOf('A10'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A11')): (setC(c-1),   details[0].splice(  details[0].indexOf('A11'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A12')): (setC(c-1),   details[0].splice(  details[0].indexOf('A12'), 1) )  } />
</IconButton>
 <IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('A13')): (setC(c-1),   details[0].splice(  details[0].indexOf('A13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A14')): (setC(c-1),   details[0].splice(  details[0].indexOf('A14'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A15')): (setC(c-1),   details[0].splice(  details[0].indexOf('A15'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('A16')): (setC(c-1),   details[0].splice(  details[0].indexOf('A16'), 1) )  } />
</IconButton>
    </Stack>

    </div>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  color="primary" disableRipple   >
 B <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('B1')): (setC(c-1),   details[0].splice(  details[0].indexOf('B1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B2')): (setC(c-1),   details[0].splice(  details[0].indexOf('B2'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B3')): (setC(c-1),   details[0].splice(  details[0].indexOf('B3'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B4')): (setC(c-1),   details[0].splice(  details[0].indexOf('B4'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('B5')): (setC(c-1),   details[0].splice(  details[0].indexOf('B5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B6')): (setC(c-1),   details[0].splice(  details[0].indexOf('B6'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B7')): (setC(c-1),   details[0].splice(  details[0].indexOf('B7'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B8')): (setC(c-1),   details[0].splice(  details[0].indexOf('B8'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('B9')): (setC(c-1),   details[0].splice(  details[0].indexOf('B9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B10')): (setC(c-1),   details[0].splice(  details[0].indexOf('B10'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B11')): (setC(c-1),   details[0].splice(  details[0].indexOf('B11'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B12')): (setC(c-1),   details[0].splice(  details[0].indexOf('B12'), 1) )  } />
</IconButton>
 <IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('B13')): (setC(c-1),   details[0].splice(  details[0].indexOf('B13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B14')): (setC(c-1),   details[0].splice(  details[0].indexOf('B14'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B15')): (setC(c-1),   details[0].splice(  details[0].indexOf('B15'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('B16')): (setC(c-1),   details[0].splice(  details[0].indexOf('B16'), 1) )  } />
</IconButton>
    </Stack>
    </div>
    
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  color="primary" disableRipple   >
C <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C1')): (setC(c-1),   details[0].splice(  details[0].indexOf('C1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C2')): (setC(c-1),   details[0].splice(  details[0].indexOf('C2'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C3')): (setC(c-1),   details[0].splice(  details[0].indexOf('C3'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C4')): (setC(c-1),   details[0].splice(  details[0].indexOf('C4'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C5')): (setC(c-1),   details[0].splice(  details[0].indexOf('C5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C6')): (setC(c-1),   details[0].splice(  details[0].indexOf('C6'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C7')): (setC(c-1),   details[0].splice(  details[0].indexOf('C7'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C8')): (setC(c-1),   details[0].splice(  details[0].indexOf('C8'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C9')): (setC(c-1),   details[0].splice(  details[0].indexOf('C9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C10')): (setC(c-1),   details[0].splice(  details[0].indexOf('C10'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C11')): (setC(c-1),   details[0].splice(  details[0].indexOf('C11'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C12')): (setC(c-1),   details[0].splice(  details[0].indexOf('C12'), 1) )  } />
</IconButton>
 <IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?(setC(c+1) ,  details[0].push('C13')): (setC(c-1),   details[0].splice(  details[0].indexOf('C13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C14')): (setC(c-1),   details[0].splice(  details[0].indexOf('C14'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C15')): (setC(c-1),   details[0].splice(  details[0].indexOf('C15'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? (setC(c+1) ,   details[0].push('C16')): (setC(c-1),   details[0].splice(  details[0].indexOf('C16'), 1) )  } />
</IconButton>
    </Stack>
    </div>

        <hr/>
    
    
        <h3>Classic : <CurrencyRupeeIcon fontSize='small'/> 150<br></br>   <span><strong> Total Classic Count:   {p}</strong></span></h3>   
    
        <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  color="primary" disableRipple   >
D <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('D1')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D2')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D2'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D3')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D3'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D4')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D4'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('D5')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D6')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D6'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D7')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D7'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D8')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D8'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('D9')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D10')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D10'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D11')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D11'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D12')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D12'), 1) )  } />
</IconButton>
 <IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('D13')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D14')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D14'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D15')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D15'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('D16')): ( setP( p-1),   details[1].splice(  details[1].indexOf('D16'), 1) )  } />
</IconButton>
    </Stack>
    </div>


    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  color="primary" disableRipple   >
E <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('E1')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E2')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E2'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E3')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E3'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E4')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E4'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('E5')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E6')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E6'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E7')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E7'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E8')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E8'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('E9')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E10')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E10'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E11')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E11'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E12')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E12'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('E13')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E14')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E14'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E15')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E15'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('E16')): ( setP( p-1),   details[1].splice(  details[1].indexOf('E16'), 1) )  } />
</IconButton>
    </Stack>
    </div>
    
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  color="primary" disableRipple   >
F <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('F1')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F2')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F2'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F3')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F3'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F4')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F4'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('F5')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F6')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F6'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F7')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F7'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F8')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F8'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('F9')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F10')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F10'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F11')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F11'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F12')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F12'), 1) )  } />
</IconButton>
 <IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('F13')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F14')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F14'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F15')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F15'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('F16')): ( setP( p-1),   details[1].splice(  details[1].indexOf('F16'), 1) )  } />
</IconButton>
</Stack>
    </div>
    
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>   
<Stack direction="row"  spacing={2}>
 <IconButton  color="primary" disableRipple   >
G <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('G1')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G1'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G2')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G2'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G3')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G3'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G4')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G4'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('G5')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G5'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G6')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G6'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G7')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G7'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G8')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G8'), 1) )  } />
</IconButton>
<IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('G9')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G9'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G10')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G10'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G11')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G11'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G12')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G12'), 1) )  } />
</IconButton>
 <IconButton  color="primary" disableRipple   >
  <Checkbox   onChange= { (e) => e.target.checked === true ?( setP( p+1) ,  details[1].push('G13')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G13'), 1)   ) } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G14')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G14'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G15')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G15'), 1) )  } />
 <Checkbox  onChange= { (e) => e.target.checked === true ? ( setP( p+1) ,   details[1].push('G16')): ( setP( p-1),   details[1].splice(  details[1].indexOf('G16'), 1) )  } />
</IconButton>
    </Stack>
    </div>
      


      <div className="container">
  <img  alt='screen this way' style={{width: '50%' }}/>

  <Link style={{textDecoration:'none'}} to={(250*c  + 150*p) ===0 ? '' :'/checkout'} state={{data ,c,p , details}}>
  <Button  disabled={(250*c  + 150*p) ===0 ? true : false} variant='contained' color='secondary'>Book Tickets  ({250*c  + 150*p})</Button>
  </Link>
  
</div> 
    </div>
  )
}

export default Booking