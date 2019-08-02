import { createStore,applyMiddleware,compose } from "redux"
import thunk from 'redux-thunk'
import reducers from "./reducers"
const initialState = {}
const middleware = [thunk]

const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store
// 三个参数：1.reducer，2.状态，3.中间件