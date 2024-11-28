//import { createStore, applyMiddleware } from 'redux'
//import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './reducers'
import createSagaMiddleware from 'redux-saga';
// import thunk from 'redux-thunk';
// import persistReducer from 'redux-persist/es/persistReducer'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
import SagaData from './saga';

let persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    //blacklist: ['app']
}

let persistedReducer = persistReducer(persistConfig, rootReducers)

// const middleWare = [thunk]

//const store = createStore(rootReducers, applyMiddleware(...middleWare))
const sagaMiddleware =  createSagaMiddleware();
const store = configureStore(
    {
        //reducer: rootReducers
        reducer: persistedReducer,
        // middleware: ()=>[sagaMiddleware],
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(sagaMiddleware),
    },
    // applyMiddleware(...middleWare)

)
sagaMiddleware.run(SagaData);
export default store
