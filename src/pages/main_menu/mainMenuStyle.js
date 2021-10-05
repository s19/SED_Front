import { makeStyles } from "@material-ui/core";
import shadows from "@material-ui/core/styles/shadows";
import { BorderRight, RotateRightOutlined } from "@material-ui/icons";
import BGImage from '../../images/background.svg'; // Import using relative path

export default makeStyles(theme => ({
      container: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundImage: `url(${BGImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      },
      formContainer: {
        width: "20%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
          width: "50%",
        },
      },
      formLogo: {
        position: "absolute",
        left: "3.3%",
        right: "78%",
        top: "2%",
        bottom: "87%",
      },
      logo: {
        height: "85px",
        width: "75px",
        display:"block",
        position: "absolute",
        alignItems: "left",
        top: 0,
        left: 0,
        backgroundRepeat: "no-repeat",
        border: "0",
        outline: "0",
      },
      text: {
        fontSize: "20px",
        fontWeight: 500,
        textAlign: "center",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
      formControl: {
        position: "relative",
        textAlign: "center",
        size: "border-box",
        height: "46px",
        width: "380px",
        padding: "10px",
        fontSize: "16px",
        background: "#FFFFFF",
        border: "2px solid #585858",
        shadows: "0px 4px 10px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px",
      },
      formControl2: {
        position: "relative",
        textAlign: "center",
        size: "border-box",
        height: "46px",
        width: "380px",
        padding: "10px",
        fontSize: "16px",
        background: "#E8E8E8",
        border: "2px solid #585858",
        shadows: "0px 4px 10px 5px rgba(0, 0, 0, 0.25)",
        borderRadius: "7px",
      },
      formButtons: {
        width: "100%",
        marginTop: theme.spacing(4),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      btnSignIn: {
        width: "124px",
        height: "46px",
        background: "#016367",
        borderRadius: "7px",
        display: "flex",
        alignItems: "center",
        marginTop: theme.spacing(4),
        justifyContent: "center",
        border: "1px solid",
      },
      copyright: {
        marginTop: theme.spacing(4),
        whiteSpace: "nowrap",
        [theme.breakpoints.up("md")]: {
          position: "absolute",
          bottom: theme.spacing(2),
        },
      },
      tab: {
        fontWeight: 400,
        fontSize: 18,
        borderBottomColor: theme.palette.text.primary,
        textAlign: "center",
      },      
      menu: {
        display: "grid",
        gridTemplateColumns: "4 1fr",
        gridTemplateRows: "4 1fr",

          "& div": {
            borderTop: "1px solid lightgray",
            BorderRight: "1px solid lightgray",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          },

          "& div:nth-child(-n+4)": 
          {
            borderTop: 0,
          },

          "& div:nth-child(4n)": 
          {
            BorderRight: 0,
          },
        },
      aside: {
        position: "absolute",
        width: "60px",
        float:"left",
        margin: "0",
        top: "50%",
        transform: "translateY(-50%)",
        background: "#FFFFFF",
        boxShadow: "3px 4px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: "0px 10px 10px 0px",
      }, 

      btnIcon: {
        position: 'inline',
        width: '250px',
        height: '150px',
        background: "#FFFFFF",
        border: "4px solid #016367",
        boxSizing: "border-box",
        borderRadius: "16px",
        padding: "10px",
        margin: "25px",
        "&:hover": {
          background: 'linear-gradient(180deg, #44AF92 0%, #197E76 47.4%, #016367 100%)',
          border: '4px solid #FFFFFF',
          "& label": 
          {
            color: "#FFFFFF",
          },
        },
        
      },

      lbl: {
        elevation: 3,
        position: 'relative',
        fontSize: '20px',
        fontWeight: 'Bold',
        fontStyle: 'normal',
        textTransform: 'uppercase',
        color: '#016367',
        margin: 0,
        marginTop: '20px',
        opacity: 1,
        backgroundImage: 'none',
      }
}));