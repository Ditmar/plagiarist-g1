import { makeStyles } from "@material-ui/styles";
import { CenterFocusStrong } from "@mui/icons-material";
import { borderRadius } from "@mui/system";
import Theme from "../../theme/theme";


export const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.palette.listThesis.main,
        border: "1px solid #dfe0eb",
        borderRadius: 4,

    },
    contentTable:{
        background: theme.palette.listThesis.main,
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
        background:theme.palette.search.main,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        fontSize: 14,
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
        background:theme.palette.high.main,
        color: 'white',
        borderRadius:10,
    },
    NORMAL:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        background:theme.palette.normal.main,
        borderRadius:4,
        color: 'white',
        borderRadius:10,
    },
    
    LOW:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        background:theme.palette.low.main,
        color: 'white',
        borderRadius:10,
    },
    contentList:{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        borderRadius:9,
        width: '100%',
        height:'100%',
    },
}))