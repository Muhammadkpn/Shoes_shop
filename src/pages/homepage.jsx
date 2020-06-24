import React from 'react'
import Axios from 'axios'

// import components
import CarouselBar from '../components/carousel'

const URL = 'http://localhost:2000/'

class HomePage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
      }

    componentDidMount(){
        this.getData('slider')
    }

    getData = (query) =>{
        Axios.get(URL + query)
        .then(response => {this.setState({data: response.data})
        console.log(response.data)
    })

    .catch(error => console.log(error))
    }
    render(){
        return(
            <div>
                <CarouselBar contentSlider={this.state.data} />
            </div>
        )
    }
}

export default HomePage