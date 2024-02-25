import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constants";

const page_url = API_URL + "user/";

class NewUserForm extends React.Component {
	state = {
		pk: "",
		username: "",
		pseudo: "",
		party_list: "",
	};

	componentDidMount() {
		if (this.props.user) {
			const { pk, username, pseudo, party_list } = this.props.user;
			this.setState({ pk, username, party_list, pseudo });
		}
	}

	onChange = (e) => {
		this.setState({ [e.target.username]: e.target.value });
	};

	createUser = (e) => {
		e.preventDefault();
		axios.post(page_url + "user/", this.state).then(() => {
			this.props.resetState();
			this.props.toggle();
		});
	};

	editUser = (e) => {
		e.preventDefault();
		axios.put(page_url + this.state.pk, this.state).then(() => {
			this.props.resetState();
			this.props.toggle();
		});
	};

	defaultIfEmpty = (value) => {
		return value === "" ? "" : value;
	};

	render() {
		return (
			<Form onSubmit={this.props.user ? this.editUser : this.createUser}>
				<FormGroup>
					<Label for="username">Username:</Label>
					<Input
						type="text"
						name="name"
						onChange={this.onChange}
						value={this.defaultIfEmpty(this.state.username)}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="pseudo">Pseudo:</Label>
					<Input
						type="text"
						name="pseudo"
						onChange={this.onChange}
						value={this.defaultIfEmpty(this.state.pseudo)}
					/>
				</FormGroup>
				<FormGroup>
					<Label for="party_list">Party_list:</Label>
					<Input
						type="text"
						name="party_list"
						onChange={this.onChange}
						value={this.defaultIfEmpty(this.state.party_list)}
					/>
				</FormGroup>
				<Button>Send</Button>
			</Form>
		);
	}
}

export default NewUserForm;
