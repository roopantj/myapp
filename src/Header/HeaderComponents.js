import React from 'react';
import './Header.css';
const HeaderComponents = (props) =>{
    return(
        <div className='HeaderComponent'>
            <p style={{fontFamily:'montserrat,sans-serif', fontSize:'0.8rem'}}>{props.name}</p>  
        </div>
    )
}

export default HeaderComponents;