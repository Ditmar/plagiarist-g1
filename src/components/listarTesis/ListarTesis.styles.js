import { makeStyles } from "@material-ui/styles";
import { CenterFocusStrong } from "@mui/icons-material";
import { borderRadius } from "@mui/system";

export const useStyles = makeStyles(() => ({
    container: {
        backgroundColor: "#fffff",
        border: "1px solid #dfe0eb",
        borderRadius: 3,

    },
    contentTable:{
        width: '100%',
        height:'100%',
    },
    tabletesis:{
        width: '100%',
        height:'100%',
    },
    titles: {
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        color: "#000000",
    },
    subtitle: {
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
        color: "#000000",
    },
    banner:{
        display: 'flex',
        justifyContent:'space-between',
        margin: 20,
    },
    subtitleFilter: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: "#C5C7CD",
        display: 'flex',
    },
    subtitleTab: {
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 12,
        color: "#C5C7CD",
    },
    searchs: {
        fontFamily: "Rubik",
        fontStyle: "normal",
        fontWeight: "600",
        background:"#FCFDFE",
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: "#000000",
        display: 'flex',

    },
    dataDownload:{
        justifyContent: 'flex-end',

    },
    header:{
        display:"flex",
    },
    HIGH:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor:'red',
        color: 'white',
        borderRadius:10,
    },
    NORMAL:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor:'#29CC97',
        borderRadius:4,
        color: 'white',
        borderRadius:10,
    },
    
    LOW:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        backgroundColor:'#FEC400',
        color: 'white',
        borderRadius:10,
    },
    contentList:{
    position: 'relative',
    bbackgroundColor: '#FFFFFF',
    borderRadius:9,
    width: '100%',
    height:'100%',
    },
}))