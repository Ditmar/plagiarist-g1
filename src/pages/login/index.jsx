import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {Typography,CardContent,Card,CardActions} from '@material-ui/core';
import AvatarD from './Avatar';
import FieldEmail from './fieldEmail'
import FieldPassword from './FieldPassword';
import SigUp from './sigUp';
import CustomizedButtons from './boton'
import Fonts from './fonts';

const useStyles = makeStyles({
  cardStyle: {
  background:'#FFFFFF',
  width:'380px',
  height:'582px',
  border:'1px solid #DFE0EB',
  borderRadius:"8px",
  margin:"139px 530px 139px 530px",
  paddingLeft:'32px',
  paddingRight:'32px',
  paddingTop:'35px',
  paddingBottom:'40px',
  },
  cardCont:{
  margin:'0px',
  padding:'0px',
  textAlign:'center',
  alignContent:'center'
  },
  textfieldStyle:{
  fontFamily: 'Mulish',
  width:'316px',
  height:'16px',
  color:'#9FA2B4',
  fontSize: '12px',
  letterSpacing: '0.3px',
  fontWeight:700, 
  marginTop:'0px',
  marginBottom:'6px'
  },
  cardActionStyle:{
  paddingLeft:'0px',
  margin:'0px'
  }
})

const Login= () => {
const classes=useStyles()
  return (
    <Card className={classes.cardStyle}>
      <CardContent className={classes.cardCont}>
        <AvatarD></AvatarD>
        <Fonts></Fonts>
      </CardContent>
      <Typography className={classes.textfieldStyle}>EMAIL</Typography>
      <FieldEmail />
      <Typography className={classes.textfieldStyle}>PASSWORD</Typography>
      <FieldPassword />
      <CardActions className={classes.cardActionStyle}>
        <CustomizedButtons />
      </CardActions>
      <SigUp></SigUp>
    </Card>
  );
}


export default Login;