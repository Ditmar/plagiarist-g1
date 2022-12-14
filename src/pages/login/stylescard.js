import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  cardStyle: {
    background: "#FFFFFF",
    width: "380px",
    height: "582px",
    border: "1px solid #DFE0EB",
    borderRadius: "8px",
    margin: "139px 530px 139px 530px",
    paddingLeft: "32px",
    paddingRight: "32px",
    paddingTop: "35px",
    paddingBottom: "40px",
  },
  cardCont: {
    margin: "0px",
    padding: "0px",
    textAlign: "center",
    alignContent: "center",
  },
  textfieldStyle: {
    fontFamily: "Mulish",
    width: "316px",
    height: "16px",
    color: "#9FA2B4",
    fontSize: "12px",
    letterSpacing: "0.3px",
    fontWeight: 700,
    marginTop: "0px",
    marginBottom: "6px",
  },
  cardActionStyle: {
    paddingLeft: "0px",
    margin: "0px",
  },
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
export default useStyles;