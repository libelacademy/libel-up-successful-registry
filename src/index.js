import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Video from "./components/modals/Video";
import Whatsapp from "./components/modals/Whatsapp";
import InformativeTalks from "./components/modals/InformativeTalks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./features/video";
import advisoryReducer from "./features/advisory";
import sideMenuReducer from "./features/menu";
import bannerReducer from "./features/banner";
import ScheduleTalk from "./components/modals/ScheduleTalk";

const store = configureStore({
    reducer: {
        video: videoReducer,
        advisory: advisoryReducer,
        sideMenu: sideMenuReducer,
        banner: bannerReducer,
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
            <Video />
            <InformativeTalks />
            <Whatsapp />
            <ScheduleTalk />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
