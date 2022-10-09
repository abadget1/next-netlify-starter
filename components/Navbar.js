// import React from "react";
// import { Link } from "react-router-dom";
// // JavaScript plugin that hides or shows a component based on your scroll
// // import logo from "../assets/img/Logo.png";
// // import cart from "../assets/img/cart4.svg";

// // reactstrap components
// import {
//   Collapse,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   NavbarBrand,
//   Navbar,
//   NavItem,
//   Nav,
//   Container,
//   UncontrolledTooltip,
// } from "reactstrap";
// import {Button, Badge } from "@material-ui/core";
// import {cartData} from './Layout'
// // import cartitems from "../../App"
// // core components

// const BlackNavbar = () => {
//   const [bodyClick, setBodyClick] = React.useState(false);
//   const [collapseOpen, setCollapseOpen] = React.useState(false);


//   return (
//     <>
//       {bodyClick ? (
//         <div
//           id="bodyClick"
//           onClick={() => {
//             document.documentElement.classList.toggle("nav-open");
//             setBodyClick(false);
//             setCollapseOpen(false);
//           }}
//         />
//       ) : null}
//       <Navbar className="sticky-top" fixed="top" expand="lg" id="navbar-main" style={{background: "#000000"}}>
//         <Container>
//           <div className="navbar-translate">
//             <NavbarBrand id="navbar-brand" to="/" >
//             <img width="125px" height="auto" className="img-responsive" src={logo} alt="logo"/>
//             </NavbarBrand>
//             <button
//               className="navbar-toggler"
//               id="navigation"
//               type="button"
//               onClick={() => {
//                 document.documentElement.classList.toggle("nav-open");
//                 setBodyClick(true);
//                 setCollapseOpen(true);
//               }}
//             >
//               <span className="navbar-toggler-bar bar1" style={{backgroundColor:"#ffffff"}}/>
//               <span className="navbar-toggler-bar bar2" style={{backgroundColor:"#ffffff"}}/>
//               <span className="navbar-toggler-bar bar3" style={{backgroundColor:"#ffffff"}}/>
//             </button>
//           </div>
//           <Collapse navbar isOpen={collapseOpen}>
//             <Nav className="ml-auto" navbar>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle className="mr-1" style={{color:"white"}} nav>
//                   Shop
//                 </DropdownToggle>
//               </UncontrolledDropdown>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle className="mr-1" style={{color:"white"}} nav>
//                   Info
//                 </DropdownToggle>
//               </UncontrolledDropdown>
//               <UncontrolledDropdown nav inNavbar>
//                 {/* <DropdownToggle className="mr-2 btn-rotate" color="default" nav>
//                   <i className="nc-icon nc-cart-simple" />
//                 </DropdownToggle> */}
//                 <NavItem>
//                     <a
//                       className="btn btn-link"
//                       href="/cart"
//                       size="md" >
//                     <Badge badgeContent="3" color='primary' >
//                         {/* <img width="20px" height="auto" className="img-responsive" src={cart} alt="cart"/> */}
//                         CART
//                     </Badge>
//                     </a>
//                 </NavItem>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default BlackNavbar;
