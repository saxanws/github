import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Paper from "@material-ui/core/Paper";
import { Link, Route, Switch } from "react-router-dom";

import { fetchUser, updateSearchKey } from "../../actions/index";
import UserSideBar from "../User-info-sideBar/User-info-sideBar";
import styles from "./User-info-style";
import Repositories from "../repositories/repositories";
import Organizations from "../Organizations/Organizations";
import FollowCards from "../FollowCards/FollowCards";
import history from "../../history";

class UserInfo extends Component {
	state = {
		value: 0
	};

	handleChange = (event, value) => {
		this.setState({ value });
		if (value === 0) {
			history.push(`${this.props.match.url}/repos`);
		} else if (value === 1) {
			history.push(`${this.props.match.url}/orgs`);
		} else if (value === 2) {
			history.push(`${this.props.match.url}/followers`);
		} else if (value === 3) {
			history.push(`${this.props.match.url}/followings`);
		}
	};

	componentDidMount() {
		// console.log(this.props.match.params);
		const { username } = this.props.match.params;

		this.props.updateSearchKey(username);
		this.props.fetchUser();
	}

	renderTab() {
		const { value } = this.state;
		const { classes } = this.props;
		return (
			<div>
				<Paper className={classes.root}>
					<Tabs
						value={this.state.value}
						onChange={this.handleChange}
						indicatorColor="primary"
						textColor="primary"
						centered
					>
						<Tab
							label={
								<Badge
									color="primary"
									badgeContent={this.props.repos}
									className={classes.margin}
								>
									<Typography className={classes.padding}>
										Repositories
									</Typography>
								</Badge>
							}
						/>
						<Tab
							label={
								<Badge
									color="primary"
									badgeContent={4}
									className={classes.margin}
								>
									<Typography className={classes.padding}>
										Organization
									</Typography>
								</Badge>
							}
						/>
						<Tab
							label={
								<Badge
									color="primary"
									badgeContent={this.props.followers}
									className={classes.margin}
								>
									<Typography className={classes.padding}>Followers</Typography>
								</Badge>
							}
						/>
						<Tab
							label={
								<Badge
									color="primary"
									badgeContent={this.props.followings}
									className={classes.margin}
								>
									<Typography className={classes.padding}>
										Followings
									</Typography>
								</Badge>
							}
						/>
					</Tabs>
				</Paper>
			</div>
		);
	}

	render() {
		const { username } = this.props.match.params;
		const { classes } = this.props;
		return (
			<Grid container spacing={24}>
				<Grid item xs={3} xl={2} className={classes.sideBarGrid}>
					<UserSideBar />
				</Grid>
				<Grid item xs={9} xl={10} className={classes.middleContent}>
					{this.renderTab()}
					<br />
					<Switch>
						<Route path={`/user/:${username}/repos`} component={Repositories} />
						<Route path={`/user/:${username}/orgs`} component={Organizations} />
						<Route
							path={`${this.props.match.url}/followers`}
							component={FollowCards}
						/>
						<Route
							path={`${this.props.match.url}/followings`}
							component={FollowCards}
						/>
					</Switch>
				</Grid>
			</Grid>
		);
	}
}

UserInfo.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		username: state.userGeneralInfo.login,
		login: state.userGeneralInfo.login,
		repos: state.userGeneralInfo.public_repos,
		followers: state.userGeneralInfo.followers,
		followings: state.userGeneralInfo.following
	};
};

export default compose(
	withStyles(styles),
	connect(
		mapStateToProps,
		{ updateSearchKey, fetchUser }
	)
)(UserInfo);
