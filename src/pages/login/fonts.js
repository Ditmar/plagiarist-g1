import React from 'react'
import Grid, { CardContent, makeStyles,Typography } from '@material-ui/core'
const useStyle=makeStyles({
  tittle1Style:{
    fontFamily: 'Mulish',
    fontSize: '19px',
    letterSpacing: '0.4px',
    color: '#A4A6B3',
    opacity: '0.7',
    fontWeight: 700,
    width: '316px',
    height:'24px',
    marginTop:'12px',
    marginBottom:'0px',
    textAlign:'center'
    },
    tittle2Style:{
    textAlign:'center',
    width:'316px',
    Height: '30px',
    fontFamily: 'Mulish',
    color:'#252733',
    letterSpacing: '0.3px',
    fontWeight:700,
    fontSize: '24px',
    fontStyle: 'normal',
    marginTop:'32px',
    marginBottom:'12px'  
    },
    tittle3Style:{
    width:'316px',
    height:'20px',
    marginTop:'0px',
    textAlign:'center',
    fontFamily: 'Mulish',
    color:'#9FA2B4',
    fontSize: '14px',
    fontStyle:'normal',
    letterSpacing: '0.3px',
    fontWeight:400,
    marginBottom:'40px'
    },
})

 const Fonts= () => {
   const classes=useStyle()
  return (
    <>
      <Typography className={classes.tittle1Style}>Plagio Control</Typography>
             <Typography className={classes.tittle2Style}>Login Plagio Control</Typography>
             <Typography className={classes.tittle3Style}>Enter your email and password below</Typography>
             </>
  )
}
export default Fonts
