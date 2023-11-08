import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./i18n.js";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./contexts/apiContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ApiProvider>
            <I18nextProvider i18n={i18n}>
                <App />
            </I18nextProvider >
        </ApiProvider>
    </BrowserRouter>
);
