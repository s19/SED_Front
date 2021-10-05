import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
        
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

    icon: {
        border: "none", 
        padding: "5px"
    }
}));