"use strict";

//Import Node Modules.
//----------------------
import 'babel-polyfill'; //with babel, we can use the import syntax. //confirmed that is necessary

//JQuery.
//import $ from 'jquery';
//import jQuery from 'jquery';
//window.jQuery = jQuery;
//window.$ = jQuery;
//import $ from 'jquery';
//global.jquery = require('jquery');

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AppReactSSR from "./app.js";
//----------------------

/*
<BrowserRouter>
<App />
</BrowserRouter>,
document.querySelector("#root")

document.querySelector("html")
*/

/*
if (typeof window !== 'undefined')
{
}
*/

ReactDOM.hydrate(
    <BrowserRouter>
        <AppReactSSR />
    </BrowserRouter>,
    document
);