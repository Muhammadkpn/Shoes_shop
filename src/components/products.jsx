import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  OutlinedInput,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormControl
} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import { getProduct } from "../actions";
import Axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



class Products extends React.Component{
  constructor(props){
    super(props)
      this.state = { 
        alert: false,
        open: false, 
        wishlist: [false, false, false, false, false, false, false, false, false, false, false, false], 
        toLogin: false,
        data: [],
        category: "",
        price: "",
    }
  }
    componentDidMount() {
      this.getProductData("");
    }

    getProductData = (input) => {
      Axios.get(`http://localhost:2000/products?q=${input}`)
        .then((res) => this.props.getProduct(res.data))
        .catch((err) => console.log(err));
    };

    handleCategory = (event) => {
      console.log(event.target.value);
      let cat = event.target.value;
      this.setState({ category: cat });
      this.getProductData(cat);
    };
    handleSearch = () => {
      let searchInput = this.search.value;
      this.getProductData(searchInput);
    };
    handlePrice = (event) => {
      console.log(event.target.value);
      let sortPrice = event.target.value;
      let searchInput = this.search.value;
      this.setState({ price: sortPrice });
      Axios.get(
        `http://localhost:2000/products?q=${searchInput}&_sort=price&_order=${sortPrice}`
      )
        .then((res) => this.props.getProduct(res.data))
        .catch((err) => console.log(err));
    };

  handleWishlist = (id) => {
    const { wishlist } = this.state
    let tempWish = wishlist
    
    if(this.props.id){
      tempWish[id] = !tempWish[id]
      this.setState({wishlist: tempWish, alert: false})
    } else {
      this.setState({alert: true})
    }
  }

  handleClose = () => {
    this.setState({alert: false, toLogin: true})
  }

  render(){
    const {wishlist, toLogin, open, alert, category, price} = this.state

    if (toLogin) {
      return <Redirect to='/login'/>
    }


    return (
      <div style={styles.root}>
        <h1 style={styles.title}>Products</h1>
        {/* <div style={{display: 'flex'}}>
          <OutlinedInput
            inputRef={(search) => (this.search = search)}
          ></OutlinedInput>
          <Button variant="contained" type="button" onClick={this.handleSearch}>
            Search
          </Button>
          <Typography variant="h6">Filter Products</Typography>
          <FormControl>
            <InputLabel id="category">Category</InputLabel>
            <Select
              labelId="category"
              // value={category}
              onChange={this.handleCategory}
              >
              <MenuItem value="Men">Men</MenuItem>
              <MenuItem value="Women">Women</MenuItem>
              <MenuItem value="sport">Sport</MenuItem>
              <MenuItem value="converse">Converse</MenuItem>
              <MenuItem value="sandals">Sandals</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6">Sort Products by Price</Typography>
          <InputLabel id="price">Sort</InputLabel>
          <Select labelId="price" value={price} onChange={this.handlePrice}>
            <MenuItem value="asc">From Low to High</MenuItem>
            <MenuItem value="desc">From High to Low</MenuItem>
          </Select>
        </div> */}
        <div style={styles.cardContainer}>
          {this.props.product.map((item,index) => {
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
                    <Box
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                    >
                        <Rating
                            name="read-only"
                            readOnly
                            value={0}
                            precision={0.5}
                        />
                    </Box>
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
                    onClick = {() => this.handleWishlist(index)}
                    startIcon={wishlist[index] ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                  >
                    Wish List
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        <Dialog
            open={alert}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{"⚠ Warning !"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              You are not logged in. Please Log in to input some item to your wishlist
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose} color="primary">
                Ok
            </Button>
            </DialogActions>
        </Dialog>
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
const mapStateToProps = (state) => {
  return {
    product: state.product,
    id: state.user.id
  }
}
export default connect(mapStateToProps, {getProduct})(Products);
