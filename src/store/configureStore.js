import { applyMiddleware, createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducers'

const configureStore = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default configureStore
