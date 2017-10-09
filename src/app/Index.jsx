import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import { App } from "./containers/App.jsx";
import './scss/style.scss';

render( <App />,
    window.document.getElementById('app'));
