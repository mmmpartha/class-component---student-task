import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default class Studentdetails extends Component {

	constructor(props) {
		super(props)
		this.state = {
			user: { name: "", genter: "", marks: "" },
			details: [],
			view: false,
		}
		this.Loaddetails = this.Loaddetails.bind(this)
		this.Viewdetails = this.Viewdetails.bind(this)
	}
	Loaddetails(e) {
		e.preventDefault()
		this.state.details.push(this.state.user)
	}

	Viewdetails() {
		this.setState({ view: true })
	}

	render() {

		return (
			<>
				<div>
					<table border={2}>
						<thead>
							<th>Name</th>
							<th>View</th>
						</thead>
						<tbody>
							<button onClick={this.Viewdetails}>ViewDetails</button>
							{
								this.state.view ? <>
									{
										this.state.details.map((student, index) => {
											return (
												<tr key={index}>
													<td>{student.name}</td>
													<td>{student.genter}</td>
													<td>{student.marks}</td>
												</tr>
											)
										})}
								</> : <></>
							}</tbody>
					</table>
				</div>
				<br />
				<div>
					<form onSubmit={this.Loaddetails}>
						<Box
							component="form"
							sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
							noValidate
							autoComplete="off">
							<TextField id="outlined-basic" label="Enter Your Name" variant="outlined" name="name" value={this.state.user.name} onChange={(e) => this.setState({ user: { ...this.state.user, name: e.target.value } })} />
							<TextField id="outlined-basic" label="Enter Your Genter" variant="outlined" name="genter" value={this.state.user.genter} onChange={(e) => this.setState({ user: { ...this.state.user, genter: e.target.value } })} />
							<TextField id="outlined-basic" label="Enter Your Marks" variant="outlined" name="marks" value={this.state.user.marks} onChange={(e) => this.setState({ user: { ...this.state.user, marks: e.target.value } })} />
						</Box>
						<input value="sumbit" type="submit" />
					</form>
				</div>
				<br />
				<Link to="/edit"><button>Next Page</button></Link>
			</>
		)
	}
}