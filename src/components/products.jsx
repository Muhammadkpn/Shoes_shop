import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import {Link} from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


class Products extends React.Component{
  constructor(props){
    super(props)
      this.state = { 
        open: false
    }
  }

  handleBuyNow = (id) =>{
    this.setState({open: !this.state.open})
  }

  render(){
    return (
      <div style={styles.root}>
        <h1 style={styles.title}>Products</h1>
        <div style={styles.cardContainer}>
          {this.props.dataProducts.map((item,index) => {
            return (
              <Card  className = 'card-box' style={styles.card}>
                <CardActionArea style={styles.contentArea}>
                  <CardMedia image={item.images[0]} component="img" style={styles.contentImage} />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="p">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {`Rp. ${item.price.toLocaleString()}, 00`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={styles.contentActions}>
                  <Link to={{pathname:'/details', search:`id=${item.id}`}} style={styles.btnBuy}>
                    <Button 
                      size="small" 
                      color="primary"
                      startIcon={<ShoppingCartIcon/>}>
                      Buy Now
                    </Button> 
                  </Link>
                  <Button
                    // variant = 'containedSecondary'
                    size="small" 
                    color="secondary"
                    startIcon={<FavoriteIcon/>}>
                    Wish List
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

const styles = {
  root: {
    height : 'auto',
    width : '100%',
    backgroundColor : '#f2f2f2',
    padding : '2% 7%',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column'
  },
  title : {
    fontSize : 50,
    fontWight : 600,
    margin : '2% 0px',
    paddingLeft: '4%'
},
cardContainer : {
    width : '100%',
    display : 'flex',
    flexWrap : 'wrap',
    justifyContent : 'center'
},
card : {
    flexBasis : '19%',
    minWidth : '300px',
    marginBottom : '1%',
    marginRight : '1%',
},
contentArea : {
    height : '87%',
    padding : '1%'
},
contentImage : {
    width : '100%',
    padding : '5%'
},
contentActions : {
    height : '13%',
    alignItems : 'center'
},
btnBuy:{
  textDecoration: 'none'
}
};

export default Products;
