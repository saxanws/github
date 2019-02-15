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
import { troncateTextWithCount } from "../../shared/functions/troncate";
import RepositoryCard from "../Repository-card/RepositoryCard";

class Repositories extends Component {
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
						<RepositoryCard repository={repositories[repository]} />
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
