import React from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {blue } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor:'#3751FF',
    '&:hover': {
      backgroundColor:'#3751FF' ,
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    width: "316px",
    height: "48px",
    boxShadow: "0px 4px 24px 12px ##3751ff3d",
    borderRadius: "8px",
    marginTop: "14px",
    textTransform: "Capitalize",
  },
}));

const CustomizedButtons=()=>{
  const classes = useStyles();

  return (
    <div>
      <ColorButton
        variant="contained"
        color="primary"
        fullWidth
        className={classes.margin}
      >
        Log In
      </ColorButton>
    </div>
  );
}
export default CustomizedButtons;