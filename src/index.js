import React from 'react';
import * as ReactDOM from "react-dom";
import Combine from './Combine.js';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(

    <Provider store={store}>
        <Combine/>
    </Provider>,
    document.getElementById("root")
);