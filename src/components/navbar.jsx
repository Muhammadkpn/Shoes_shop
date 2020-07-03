import React from "react";
import {
  AppBar,
  Toolbar,
<<<<<<< HEAD
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
=======
  Typography,
  IconButton,
  makeStyles,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class NavbarMaterial extends React.Component {
  render() {
    const styles =  {
        root: {
          flexGrow: 1,
        },
        menuButton: {
            marginRight: '2vw',
        },
        toolbar:{
            width:'95%',
            margin:'auto',
        },
        title: {
          width: '25vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems:'center'
        },
        cart: {
            flexGrow:1, 
            display:'flex',
            justifyContent:'flex-end'
        },
        linkBar: {
            textDecoration: 'none',
            color:'#fff'
        }
      }
    return (
        <div style={styles.root}>
            <AppBar position="static">
                <Toolbar style={styles.toolbar}>
                    <IconButton edge="start" style={styles.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <div style={styles.title}>
                        <Button>
                            <Link style={styles.linkBar} to='/'>
                                <Typography variant="p">
                                Home
                                </Typography>
                            </Link>
                        </Button>
                        <Button>
                            <Link style={styles.linkBar} to='/category'>
                                <Typography variant="p">
                                Category
                                </Typography>
                            </Link>
                        </Button>
                        <Button>
                            <Link style={styles.linkBar} to='/profile'>
                                <Typography variant="p">
                                Profile
                                </Typography>
                            </Link>
                        </Button>
                    </div>
                    <div style={styles.cart}>
                        <Button color="inherit">
                            <ShoppingCartIcon/>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
      </div>
>>>>>>> ea7d1397a5da6bd317f50bcfb54bd5361b2f281c
    );
  }
}

<<<<<<< HEAD
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

=======
>>>>>>> ea7d1397a5da6bd317f50bcfb54bd5361b2f281c
export default NavbarMaterial;
