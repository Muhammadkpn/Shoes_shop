import React from "react";
import {
  AppBar,
  Toolbar,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import Profile from "./profile"
import {LOGO} from '../assets'

class NavbarMaterial extends React.Component {
  render() {
    return (
        <AppBar position="fixed" style={styles.root} elevation={0}>
          <Toolbar style={styles.toolbar}>
            <div style={styles.leftContent}>
              <Link to="/" style={styles.menu}>
                <img src={LOGO} alt="logo"height='50px'/>
                <h1 style={styles.menuTitle}>Home</h1>
              </Link>
            </div>
            <div style={styles.rightContent}>
              <div style={styles.cart}>
                <ShoppingCartIcon/>
                <h6 style={styles.cartTotal}>Rp. 0</h6>
              </div>
              <Profile/>
            </div>
          </Toolbar>
        </AppBar>
    );
  }
}

const styles = {
  root : {
      height : 90,
      padding : '2% 7%',
      display : 'flex',
      justifyContent : 'center',
      backgroundColor: 'rgba(30,39,46,0.3)'
  },
  toolbar : {
      display : 'flex',
      justifyContent : 'space-between',
      padding : 0
  },
  leftContent : {
      height : '100%',
      flexBasis : '50%',
      maxWidth : '50%',
      display : 'flex',
      justifyContent : 'flex-start',
      alignItems : 'center'
  },
  menu : {
      paddingLeft : '3%',
      fontSize : 12,
      cursor : 'pointer',
      color: '#f2f2f2',
      textDecoration: 'none',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
  menuTitle:{
    marginLeft: '20px'
  },
  rightContent : {
      height : '100%',
      flexBasis : '50%',
      display : 'flex',
      justifyContent : 'flex-end',
      alignItems : 'center'
  },
  cart : {
      height : '100%',
      display : 'flex',
      alignItems : 'center',
      marginRight : 15
  },
  cartTotal : {
      fontSize : 16,
      marginLeft : 15
  }
}

export default NavbarMaterial;
