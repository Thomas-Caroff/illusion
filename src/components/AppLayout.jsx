import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar.jsx";
import { Container, Col } from "reactstrap";

const AppLayout = () => {
	return (
		<Container>
			<Col>
				<Sidebar />
			</Col>
			<Col>
				<Outlet />
			</Col>
		</Container>
	);
};

export default AppLayout;
