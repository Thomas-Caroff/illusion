import React, { Component, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Blank from "./pages/Blank";
import "boxicons/css/boxicons.min.css";
import "./assets/css/app.css";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<AppLayout />}>
							<Route index element={<Home />} />
							<Route path="/started" element={<Blank />} />
							<Route path="/calendar" element={<Home />} />
							<Route path="/user" element={<Blank />} />
							<Route path="/order" element={<Home />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</Fragment>
		);
	}
}

export default App;
