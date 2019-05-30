import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from './sagas'

// import { }
// import { createNavigationReducer } from 'react-navigation-redux-helpers'
// const navReducer = createNavigationReducer(AppNavigator);

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
    nav: require('./reducers/NavigationReducer').reducer,
    auth: require('./reducers/AuthReducer').reducer,
    floors: require('./reducers/FloorsReducer').reducer,
    ledgersStore: require('./reducers/LedgersReducer').reducer,
    ordersStore: require('./reducers/OrdersReducer').reducer
})

export default () => {
    let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)

    // if (module.hot) {
    //     module.hot.accept(() => {
    //         const nextRootReducer = require('./').reducers
    //         store.replaceReducer(nextRootReducer)

    //         const newYieldedSagas = require('../Sagas').default
    //         sagasManager.cancel()
    //         sagasManager.done.then(() => {
    //             sagasManager = sagaMiddleware(newYieldedSagas)
    //         })
    //     })
    // }

    return store
}