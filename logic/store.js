import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import reduxThunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer"

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const store = createStore(
    rootReducer,
    bindMiddleware([reduxThunk])
);
