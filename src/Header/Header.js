import React, { useState } from 'react';
import SideDrawer from './../SideDrawer/SideDrawer';
import HeaderComponents from './HeaderComponents';
import './Header.css';

const Header = () =>{
  const [open,setOpen] = useState(false)  
  let object1=["SHOP","SUBSCRIBE + SAVE","LEARN","OUR STORY"];
  let object2=["JOURNAL","STARTER KITS","RECIPES","LOGIN"];
  return(
       <div className="Layout">
         <div className="LeftHeader">
            {object1.map(el=><HeaderComponents name={el}/>) }
         </div>
         <SideDrawer isOpen={open} clicked={()=>setOpen(false)}/>
         <div className="Toolbar" onClick={()=>setOpen(!open)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z"/></svg>								 
         </div>
         <div className="Logo">
             <img src='https://cdn.shopify.com/s/files/1/1456/8506/files/MatchaKari-Logo.png?v=1610986702' width="153" height="100
             " alt='Logo'/>
         </div> 
         <div className="RightHeader">
            {object2.map(el=><HeaderComponents name={el}/>) }
         </div>
        </div>
    );
}

export default Header;