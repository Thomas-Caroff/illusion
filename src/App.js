import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./assets/css/app.scss";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Home />
			</Fragment>
		);
	}
}

export default App;
