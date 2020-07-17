import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "./redux/configureStore";
import {Provider as ReduxProvider} from "react-redux";

import App from "./components/App.react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
// import '@fortawesome/fontawesome-free/scss/fontawesome.scss';

import "./main.scss";

const store = configureStore();

render(
    <ReduxProvider store={store}>
        <Router>
            <App />
        </Router>
    </ReduxProvider>,
    document.getElementById("app")
);
