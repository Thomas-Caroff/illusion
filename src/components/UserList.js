import React, { Component } from "react";
import { Table } from "reactstrap";
import NewUserModal from "./NewUserModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class UserList extends Component {
	render() {
		const users = this.props.users;
		return (
			<Table dark>
				<thead>
					<tr>
						<th>Username</th>
						<th>Pseudo</th>
						<th>Party List</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{!users || users.length <= 0 ? (
						<tr>
							<td colSpan="6" align="center">
								<b>Oops, no one here yet</b>
							</td>
						</tr>
					) : (
						users.map((user) => (
							<tr key={user.pk}>
								<td>{user.username}</td>
								<td>{user.pseudo}</td>
								<td>{user.party_list}</td>
								<td align="center">
									<NewUserModal
										create={false}
										user={user}
										resetState={this.props.resetState}
									/>
									&nbsp;&nbsp;
									<ConfirmRemovalModal
										pk={user.pk}
										resetState={this.props.resetState}
									/>
								</td>
							</tr>
						))
					)}
				</tbody>
			</Table>
		);
	}
}

export default UserList;
