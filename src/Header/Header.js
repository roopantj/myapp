import React from 'react';
import {Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   NavbarText} from 'reactstrap';
import HeaderComponents from './HeaderComponents';
import './Header.css';

const Header = () =>{
    return(
       <div className="Layout">
         {/* 
         <div className="LeftHeader">
            <HeaderComponents name="SHOP" />
            <HeaderComponents name="SUBSCRIBE + SAVE " />
            <HeaderComponents name="LEARN" />
            <HeaderComponents name="OUR STORY" />
         </div>
         <div className="Logo">
             <img src='https://cdn.shopify.com/s/files/1/1456/8506/files/MatchaKari-Logo.png?v=1610986702' width="153" height="100
             " alt='Logo'/>
         </div> 
         <div className="RightHeader">
            <HeaderComponents name="JOURNAL" />
            <HeaderComponents name="STARTER KITS" />
            <HeaderComponents name="RECIPES" />
            <HeaderComponents name="LOGIN" />
         </div>*/
         }
         <Navbar color="light" light expand="md">
        
        <NavbarToggler  />
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>

                 </div>
    );
}

export default Header;