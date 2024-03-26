import React, { Component } from "react";
import "../assets/css/header.css";
import HeaderContent from "./headerContent/HeaderContent";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>App with React + Django</h1>
				<HeaderContent />
			</div>
		);
	}
}

export default Header;
