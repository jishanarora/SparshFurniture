import {combineReducers} from 'redux';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from '../redux/directory/directory.reducer'
import collectionItemsReducer from './collection-items/collection-items.reducer';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer= combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer,
    itemCollection: collectionItemsReducer

});
export default persistReducer(persistConfig,rootReducer);