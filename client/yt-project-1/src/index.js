import React from "react"
import ReactDom from "react-dom"
import App from "./Components/app"
import {Provider} from "react-redux"
import { createStore, applyMiddleware, compose} from "redux"
import thunk from 'redux-thunk'
import reducer from './reducers'
const store = createStore(reducer, compose(applyMiddleware(thunk)))
ReactDom.render(<Provider store={store}> <App /> </Provider>, document.getElementById("root"));

