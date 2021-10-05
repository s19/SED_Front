import React from "react";
import useStyles from "../grid_menu/gridMenuStyle";
import DocTimeIcon from '../../images/Icons/1.svg';
import UserRoleIcon from '../../images/Icons/2.svg'; 
import DocIcon from '../../images/Icons/3.svg';
import CheckIcon from '../../images/Icons/4.svg';   
import PostIcon from '../../images/Icons/5.svg'; 
import FolderIcon from '../../images/Icons/6.svg';  
import BarChartIcon from '../../images/Icons/7.svg'; 
import QRCodeIcon from '../../images/Icons/8.svg'; 

// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//     return images;
//   }
  
//   const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

function Grid_Menu(props) {
    var classes = useStyles()
    return (
      <div className={classes.container}>
        <aside className={classes.aside}>
          <table>
            <tbody>
                <tr><td><button className={classes.icon}><img src={DocIcon} alt="DocIcon"            onClick={() => { console.log("clicked here"); }} style={{ width: "40px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "50px" }} onMouseOut={(e) => { e.currentTarget.src = DocIcon;       e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "40px" }} /></button></td></tr>
                <tr><td><button className={classes.icon}><img src={PostIcon} alt="PostIcon"          onClick={() => { console.log("clicked here"); }} style={{ width: "40px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "50px" }} onMouseOut={(e) => { e.currentTarget.src = PostIcon;      e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "40px" }} /></button></td></tr>
                <tr><td><button className={classes.icon}><img src={FolderIcon} alt="FolderIcon"      onClick={() => { console.log("clicked here"); }} style={{ width: "40px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "50px" }} onMouseOut={(e) => { e.currentTarget.src = FolderIcon;    e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "40px" }} /></button></td></tr>
                <tr><td><button className={classes.icon}><img src={CheckIcon} alt="CheckIcon"        onClick={() => { console.log("clicked here"); }} style={{ width: "40px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "50px" }} onMouseOut={(e) => { e.currentTarget.src = CheckIcon;     e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "40px" }} /></button></td></tr>
                <tr><td><button className={classes.icon}><img src={BarChartIcon} alt="BarChartIcon"  onClick={() => { console.log("clicked here"); }} style={{ width: "40px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "50px" }} onMouseOut={(e) => { e.currentTarget.src = BarChartIcon;  e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "40px" }} /></button></td></tr>
                <tr><td><button className={classes.icon}><img src={QRCodeIcon} alt="QRCodeIcon"      onClick={() => { console.log("clicked here"); }} style={{ width: "40px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "50px" }} onMouseOut={(e) => { e.currentTarget.src = QRCodeIcon;    e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "40px" }} /></button></td></tr>
                <tr><td><button className={classes.icon}><img src={DocTimeIcon} alt="DocTimeIcon"    onClick={() => { console.log("clicked here"); }} style={{ width: "40px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "50px" }} onMouseOut={(e) => { e.currentTarget.src = DocTimeIcon;   e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "40px" }} /></button></td></tr>
                <tr><td><button className={classes.icon}><img src={UserRoleIcon} alt="UserRoleIcon"  onClick={() => { console.log("clicked here"); }} style={{ width: "40px", height: "auto", backgroundColor: "white" }} onMouseOver={(e) => { e.currentTarget.style.width = "50px" }} onMouseOut={(e) => { e.currentTarget.src = UserRoleIcon;  e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.width = "40px" }} /></button></td></tr>
            </tbody>
          </table>
        </aside>
      </div>
    );
  }
  
  export default Grid_Menu;