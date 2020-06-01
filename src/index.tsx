import React    from "react";
import ReactDOM from "react-dom";

import Mapboxgl from "mapbox-gl";

import config from "../config.json";

import "./index.html";
import "./style.css";

class App extends React.Component {
    componentDidMount() {
        Mapboxgl.accessToken = config.Mapboxgl.accessToken;

        new Mapboxgl.Map({
            container : "map",
            style     : "mapbox://styles/mapbox/streets-v11"
        });
    }

    render() {
        return (
            <>
                <h1>Hello World</h1>
                <div id="map"></div>
            </>
        );
    }
}

ReactDOM.render((
    <App />
), document.querySelector("#app"));
