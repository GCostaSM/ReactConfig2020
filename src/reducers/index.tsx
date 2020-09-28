import {
    DispatchAction, 
    InitialState, 
    defaultReducer
} from "../reducers/default/default-reducer";

import {createStore} from "redux";

export const store = createStore<InitialState, DispatchAction, null, null>(defaultReducer);