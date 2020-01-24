import React    from "react";
import ReactDOM from "react-dom";

import "./index.html";
import "./style.css";

class App extends React.Component {
    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

ReactDOM.render((
    <App />
), document.querySelector("#app"));