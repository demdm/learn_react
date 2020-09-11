import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import {
    middleware,
    composeEnhancers,
    sagaMiddleware,
} from './middleware';

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
