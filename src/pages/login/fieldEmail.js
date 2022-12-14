import {useState}from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  field: {
    fontFamily: "Mulish",
    width: "316px",
    height: "42",
    backgroundColor: "#FCFDFE",
    border: "1px solid #F0F1F7",
    borderRadius: "8px",
    marginBottom: "24px",
    boxSizing: "border-box",
  },
});

const FieldEmail = () => {
const [email, setEmail] =useState("");

const classes=useStyle()
return (
  <TextField
    className={classes.field}
    name="email"
    autoComplete="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    variant="outlined"
    placeholder="Email address"
    fullWidth
  />
);
}
export default FieldEmail;
