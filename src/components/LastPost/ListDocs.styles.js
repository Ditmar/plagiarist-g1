import { makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.primary.main,
        border: "1px solid #DFE0EB",
        borderRadius: 3,
        padding: "24px 4px 24px 0px",
    },
    link: {
        fontFamily: "mulish",
        fontStyle: "normal",
        fontWeight: "00",
        fontSize:"14px",
        color: "#3751FF",
        textAlign: "right",
        marginRight:"25",
        letterSpacing: "0.4px",
    },
    title:{
        fontFamily: "mulish",
        marginTop:20,
        fontStyle: "normal",
        fontWeight: "600",
        fontSize:"18px",
        color: "#252733",
        marginLeft:20,
        letterSpacing: "0.4px",
        lineHeight: "24px",
    },
    itemTitle:{
        fontFamily: "mulish",
        fontStyle: "normal",
        fontWeight: "550",
        fontSize:"14px",
        color: "#252733",
        marginLeft:20,
        marginButtom:10,
        letterSpacing: "0.2px",
        lineHeight: "20px",
    },
    itemV:{
        fontFamily: "mulish",
        fontStyle: "normal",
        fontWeight: "100",
        fontSize:"14px",
        color: "#9FA2B4",
        letterSpacing: "0.4px",
        lineHeight: "20px",
        textAlign:"left",
    },
    subtitle_G:{
        fontFamily: "arial",
        fontWeight: "10",
        fontSize:"12px",
        color: "#9FA2B4",
        marginRight:"50",
        letterSpacing: "0.8px",
        lineHeight: "16px",
    },
    subtitle_S:{
        color: "#252733",
        marginLeft:"5",
        fontWeight: "550",
        
    },
    lastRow:{
        marginTop:100,

    },
    container:{
        height:"100vh%",
        minHeight:"50vh",
        minWidth:"50vh",
        width:"100vh",
        backgroundColor:'#ffffff',
        borderRadius:9,

    },
    mainBlock:{
        padding:90,
        marginLeft:255,
        "@media (max-width:1080px)":{
            padding:10,
            marginLeft:0,
            
        }
    },
}))