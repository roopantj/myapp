import React from 'react';
import './SideDrawer.css';

const SideDrawer = (props) => {
    let options=["SHOP","SUBSCRIBE","LEARN","ORU STORY"];
    return(
      <div>  
         <div className={props.isOpen?"Sidedrawer open":"Sidedrawer close"}>
           {options.map((el)=> <div style={{height:'2rem',width:'100%',borderBottom:'1px solid black'}}>{el}</div>)}
         </div>
         <div className={props.isOpen?"Backdrop":null} onClick={props.clicked}>
         </div>
      </div>
    );
}

export default SideDrawer;