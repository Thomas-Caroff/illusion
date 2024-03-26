import React, { Component, Fragment } from "react";
import HeaderContent from "./components/headerContent/HeaderContent";
import Home from "./pages/Home";
import "./assets/css/app.scss";

class App extends Component {
	render() {
		return (
			<Fragment>
				<HeaderContent />
				<Home />
			</Fragment>
		);
	}
}

export default App;
