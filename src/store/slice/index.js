import products from './products';
import productImage from './productImage';
import {combineReducers} from 'redux';
import login from './loginAndLogout';
import user from './user';
import provinces from './province';
import category from './category';

const rootReducer = combineReducers({
    products: products,
    login: login,
    productImage: productImage,
    user: user,
    provinces:provinces,
    category:category
});
export default rootReducer;