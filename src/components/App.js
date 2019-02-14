import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./header/Header";
import Welcome from "./Welcome/Welcome";
import UserInfo from "./User-info/User-info";
import history from "../history";

class App extends Component {
	renderMainContent() {
		// if (!this.props.login) {
		// 	return <Welcome />;
		// }

		return <UserInfo />;
	}

	render() {
		return (
			<div>
				<Router history={history}>
					<Grid container spacing={24}>
						<Grid item xs={12}>
							<Header />
						</Grid>
						<Grid item xs={12} style={{ marginTop: 40 }}>
							<Switch>
								<Route exact path="/" component={Welcome} />
								<Route path="/user/:username" component={UserInfo} />
							</Switch>
						</Grid>
					</Grid>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { login: state.userGeneralInfo.login };
};

export default connect(
	mapStateToProps,
	null
)(App);
