import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import createOidcMiddleware from 'redux-oidc';
import rootReducer from '../_reducers';
import userManager from '../_helpers/usermanager'

const loggerMiddleware = createLogger();

const oidcMiddleware = createOidcMiddleware(userManager);


export const store = createStore(
    rootReducer,
    applyMiddleware(
        oidcMiddleware,
        thunkMiddleware,
        loggerMiddleware
    )
);
