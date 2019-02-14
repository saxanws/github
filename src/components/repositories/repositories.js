import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Star from "@material-ui/icons/Star";
import Warning from "@material-ui/icons/Warning";
import DeviceHub from "@material-ui/icons/DeviceHub";
import Visibility from "@material-ui/icons/Visibility";

import { fetchRepositories, updateSearchKey } from "../../actions/index";

class Repositories extends Component {
	componentDidUpdate() {
		this.props.fetchRepositories();
	}

	componentDidMount = async () => {
		if (!this.props.login)
			await this.props.updateSearchKey(this.props.match.params.username);
		this.props.fetchRepositories();
	};

	renderRepositoriesList() {
		const { repositories } = this.props;
		try {
			return Object.keys(repositories).map(repository => {
				return (
					<Grid item xs={4} key={repositories[repository].id}>
						<Card>
							<Grid container spacing={16}>
								<Grid
									item
									xs={2}
									style={{
										// borderRight: "solid",
										borderRightWidth: "thin",
										backgroundColor: "#FFD53D",
										color: "#2B3A88"
									}}
								>
									<Grid container justify="center" alignItems="center">
										<Grid
											item
											xs={12}
											style={{ width: "100%", textAlign: "center" }}
										>
											<Visibility
												style={{
													verticalAlign: "middle",
													paddingLeft: "2%",
													paddingRight: "2%",
													paddingTop: "10%",
													paddingBottom: "10%"
												}}
											/>
											{repositories[repository].watchers}
										</Grid>

										<Grid
											item
											xs={12}
											style={{ width: "100%", textAlign: "center" }}
										>
											<Star
												style={{
													verticalAlign: "middle",
													paddingLeft: "2%",
													paddingRight: "2%",
													paddingTop: "10%",
													paddingBottom: "10%"
												}}
											/>
											{repositories[repository].stargazers_count}
										</Grid>
										<Grid
											item
											xs={12}
											style={{ width: "100%", textAlign: "center" }}
										>
											<DeviceHub
												style={{
													verticalAlign: "middle",
													paddingLeft: "2%",
													paddingRight: "2%",
													paddingTop: "10%",
													paddingBottom: "10%"
												}}
											/>
											{repositories[repository].forks}
										</Grid>
										<Grid
											item
											xs={12}
											style={{ width: "100%", textAlign: "center" }}
										>
											<Warning
												style={{
													verticalAlign: "middle",
													paddingLeft: "2%",
													paddingRight: "2%",
													paddingTop: "10%",
													paddingBottom: "10%"
												}}
											/>
											{repositories[repository].open_issues_count}
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={10}>
									<div>{repositories[repository].name}</div>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				);
			});
		} catch (e) {
			return (
				// <div>No</div>
				<Grid item xs={12}>
					<div>No repository to show</div>
				</Grid>
			);
		}
		// console.log(Object.keys(repositories));
		// if (repositories === null) {

		// } else {

		// }
	}

	render() {
		return (
			<Grid container spacing={40} style={{ overflow: "auto" }}>
				{this.renderRepositoriesList()}
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return {
		login: state.userGeneralInfo.login,
		// username: state.userGeneralInfo.username,
		repositories: state.repositories.repositories
	};
};

export default connect(
	mapStateToProps,
	{ fetchRepositories, updateSearchKey }
)(Repositories);
