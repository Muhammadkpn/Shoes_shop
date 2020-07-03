import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
<<<<<<< HEAD

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import component
import App from './App'

// import style
import './index.css'


// setup redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import reducer
import Reducers from './reducers'

// create global store
let globalStore = createStore(Reducers)
globalStore.subscribe(() => console.log('global storage : ',  globalStore.getState()))

ReactDOM.render(
    <Provider store={globalStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    ,document.getElementById('root')
=======

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import component
import App from './App'

// import style
import './index.css'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root')
>>>>>>> ea7d1397a5da6bd317f50bcfb54bd5361b2f281c
)