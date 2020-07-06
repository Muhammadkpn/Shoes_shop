import {combineReducers} from 'redux'

// import reducers
import {userReducer} from './userReducer'
import {sliderReducer} from './sliderReducer'
import { historyReducer } from './historyReducer'
import { productReducer} from './productReducer'

const Reducers = combineReducers({
    user: userReducer,
    sliderReducer,
    history: historyReducer,
    product : productReducer
})

export default Reducers