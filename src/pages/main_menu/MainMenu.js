import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import DocTimeIcon from '../../images/Icons/1.svg';
import UserRoleIcon from '../../images/Icons/2.svg'; 
import DocIcon from '../../images/Icons/3.svg';
import CheckIcon from '../../images/Icons/4.svg';   
import PostIcon from '../../images/Icons/5.svg'; 
import FolderIcon from '../../images/Icons/6.svg';  
import BarChartIcon from '../../images/Icons/7.svg'; 
import QRCodeIcon from '../../images/Icons/8.svg'; 


  // styles
import useStyles from "./mainMenuStyle";

function MainMenu(props) {
  
  var classes = useStyles();  
  return (
    
    <div>
      <Grid container className={classes.container}>
        <div className={classes.menu}>
          <div>
            <div>
              <table>
                <tr>
                  <td><button className={classes.btnIcon}><img src={DocIcon} alt="DocIcon"                onClick={() => { console.log("clicked here"); }} style={{ width: "50px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "60px" }} onMouseOut={(e) => { e.currentTarget.src = DocIcon;       e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "50px" }} /><br /><label className={classes.lbl}>Lorem Ipsum</label></button></td>
                  <td><button className={classes.btnIcon}><img src={PostIcon} alt="PostIcon"                onClick={() => { console.log("clicked here"); }} style={{ width: "50px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "60px" }} onMouseOut={(e) => { e.currentTarget.src = PostIcon;       e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "50px" }} /><br /><label className={classes.lbl}>Lorem Ipsum</label></button></td>
                  <td><button className={classes.btnIcon}><img src={FolderIcon} alt="FolderIcon"                onClick={() => { console.log("clicked here"); }} style={{ width: "50px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "60px" }} onMouseOut={(e) => { e.currentTarget.src = FolderIcon;       e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "50px" }} /><br /><label className={classes.lbl}>Lorem Ipsum</label></button></td>
                  <td><button className={classes.btnIcon}><img src={CheckIcon} alt="CheckIcon"                onClick={() => { console.log("clicked here"); }} style={{ width: "50px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "60px" }} onMouseOut={(e) => { e.currentTarget.src = CheckIcon;       e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "50px" }} /><br /><label className={classes.lbl}>Lorem Ipsum</label></button></td>
                </tr>
                <tr>
                  <td><button className={classes.btnIcon}><img src={BarChartIcon} alt="BarChartIcon"                onClick={() => { console.log("clicked here"); }} style={{ width: "50px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "60px" }} onMouseOut={(e) => { e.currentTarget.src = BarChartIcon;       e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "50px" }} /><br /><label className={classes.lbl}>Lorem Ipsum</label></button></td>
                  <td><button className={classes.btnIcon}><img src={QRCodeIcon} alt="QRCodeIcon"                onClick={() => { console.log("clicked here"); }} style={{ width: "50px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "60px" }} onMouseOut={(e) => { e.currentTarget.src = QRCodeIcon;       e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "50px" }} /><br /><label className={classes.lbl}>Lorem Ipsum</label></button></td>
                  <td><button className={classes.btnIcon}><img src={DocTimeIcon} alt="DocTimeIcon"                onClick={() => { console.log("clicked here"); }} style={{ width: "50px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "60px" }} onMouseOut={(e) => { e.currentTarget.src = DocTimeIcon;       e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "50px" }} /><br /><label className={classes.lbl}>Lorem Ipsum</label></button></td>
                  <td><button className={classes.btnIcon}><img src={UserRoleIcon} alt="UserRoleIcon"                onClick={() => { console.log("clicked here"); }} style={{ width: "50px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "60px" }} onMouseOut={(e) => { e.currentTarget.src = UserRoleIcon;       e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "50px" }} /><br /><label className={classes.lbl}>Lorem Ipsum</label></button></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </Grid>
    </div>
    
  );
}

export default MainMenu;
