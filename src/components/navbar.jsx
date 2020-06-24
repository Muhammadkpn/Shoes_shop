import React from "react";
import {
  AppBar,
  Toolbar,
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
    );
  }
}

export default NavbarMaterial;
