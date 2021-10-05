import { makeStyles } from "@material-ui/core";
import shadows from "@material-ui/core/styles/shadows";
import { RotateRightOutlined } from "@material-ui/icons";
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
}));