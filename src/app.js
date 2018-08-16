import React    from "react";
import ReactDOM from "react-dom";

import "./index.html";

class App extends React.Component {
    render() {
        return (
            <h2>Hello world!</h2>
        );
    }
}

ReactDOM.hydrate((
    <App />
), document.querySelector("#map"));