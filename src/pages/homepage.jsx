import React from 'react'
import Axios from 'axios'

// import components
import CarouselBar from '../components/carousel'
<<<<<<< HEAD
import Products from '../components/products';
import NavbarMaterial from '../components/navbar';
import Footer from '../components/footer'

import { connect } from 'react-redux'
import { getSlider } from '../actions'
=======
>>>>>>> ea7d1397a5da6bd317f50bcfb54bd5361b2f281c

const URL = 'http://localhost:2000/'

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
<<<<<<< HEAD
          slider: [], products: []
=======
          data: [],
>>>>>>> ea7d1397a5da6bd317f50bcfb54bd5361b2f281c
        };
      }

    componentDidMount(){
<<<<<<< HEAD
        this.getData('products')
        this.getData('slider')
        this.getData('users')
    }
    
    getData = (query) =>{
        Axios.get(URL + query)
        .then((response) => {
            if(query === 'slider'){
                // this.setState({slider: response.data})
                this.props.getSlider(response.data)
                console.log(response.data)
            } else if(query === 'products'){
                this.setState({products: response.data})
                console.log(response.data)
            } else {
                this.setState({users: response.data})
                console.log(response.data)
            }
=======
        this.getData('slider')
    }

    getData = (query) =>{
        Axios.get(URL + query)
        .then(response => {this.setState({data: response.data})
        console.log(response.data)
>>>>>>> ea7d1397a5da6bd317f50bcfb54bd5361b2f281c
    })

    .catch(error => console.log(error))
    }
    render(){
<<<<<<< HEAD
        console.log(this.state.slider)
        console.log(this.state.products)
        return(
            <div>
                <NavbarMaterial/>
                <CarouselBar dataSlider ={this.props.slide} />
                <Products dataProducts = {this.state.products}/>
                <Footer/>
=======
        return(
            <div>
                <CarouselBar contentSlider={this.state.data} />
>>>>>>> ea7d1397a5da6bd317f50bcfb54bd5361b2f281c
            </div>
        )
    }
}

<<<<<<< HEAD

const mapToProps = (state) => {
    console.log("MapToprops", state.sliderReducer)
    return {
        slide: state.sliderReducer
    }
}

export default connect(mapToProps, { getSlider })(HomePage);
=======
export default HomePage
>>>>>>> ea7d1397a5da6bd317f50bcfb54bd5361b2f281c
