import { compose } from "redux";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const __DEV__ = process.env.NODE_ENV !== 'production';

export const logger = createLogger({
    duration: true,
    collapsed: true,
    // colors: {}
});

const sagaMiddleware = createSagaMiddleware();

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__&& devtools ? devtools : compose;

const middleware = [ sagaMiddleware ];

if (__DEV__) {
    middleware.push(logger);
}

export {
    middleware,
    composeEnhancers,
    sagaMiddleware,
};
