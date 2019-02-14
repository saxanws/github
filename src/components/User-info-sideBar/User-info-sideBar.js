import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import compose from "recompose/compose";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import Work from "@material-ui/icons/Work";
import MailOutline from "@material-ui/icons/MailOutline";
import LocationOn from "@material-ui/icons/LocationOn";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Link from "@material-ui/icons/Link";
import Typography from "@material-ui/core/Typography";

import styles from "./User-info-sideBar-style";

class UserSideBar extends Component {
	renderSideBar = () => {
		if (!this.props.login) {
			return <div>No User to show</div>;
		} else {
			return this.displayInfo();
		}
	};

	renderBio = rowStyle => {
		if (this.props.bio) {
			return (
				<Grid className={rowStyle}>
					<span>{this.props.bio}</span>
				</Grid>
			);
		}

		return;
	};

	renderWork = (iconStyle, rowStyle) => {
		if (this.props.work) {
			return (
				<Grid className={rowStyle}>
					<Typography>
						<Work className={`${iconStyle}`} />
						{this.props.work}
					</Typography>
				</Grid>
			);
		}

		return;
	};

	renderLocation = (iconStyle, rowStyle) => {
		if (this.props.location) {
			return (
				<Grid className={rowStyle}>
					<Typography>
						<LocationOn className={`${iconStyle}`} />
						{this.props.location}
					</Typography>
				</Grid>
			);
		}

		return;
	};

	renderEmail = (iconStyle, rowStyle) => {
		if (this.props.email) {
			return (
				<Grid className={rowStyle}>
					<Typography>
						<MailOutline className={`${iconStyle}`} />
						{this.props.email}
					</Typography>
				</Grid>
			);
		}

		return;
	};

	renderWebsite = (iconStyle, rowStyle) => {
		if (this.props.website) {
			return (
				<Grid className={rowStyle}>
					<Typography>
						<Link className={`${iconStyle}`} />
						<a href={this.props.website}>{this.props.website}</a>
					</Typography>
				</Grid>
			);
		}

		return;
	};

	renderJoined = (iconStyle, rowStyle) => {
		if (this.props.joined) {
			return (
				<Grid className={rowStyle}>
					<Typography>
						<CalendarToday className={`${iconStyle}`} />
						{this.props.joined}
					</Typography>
				</Grid>
			);
		}

		return;
	};

	displayInfo() {
		const { classes } = this.props;
		return (
			<div>
				<Grid container justify="center" alignItems="center">
					<Grid className={classes.avatarRow}>
						<Avatar
							alt="Remy Sharp"
							src={`${this.props.avatar}`}
							className={classes.bigAvatar}
						/>
						<h3>{this.props.name}</h3>
						<span>@{this.props.login}</span>
						<br />
						<br />
						<Divider />
					</Grid>
					{this.renderBio(classes.bioRow)}

					{/* <Grid className={classes.row}> */}
					{this.renderWork(classes.iconInfo, classes.row)}
					{/* </Grid> */}
					{/* <Grid className={classes.row}> */}
					{this.renderLocation(classes.iconInfo, classes.row)}
					{/* </Grid> */}
					{/* <Grid className={classes.row}> */}
					{this.renderEmail(classes.iconInfo, classes.row)}
					{/* </Grid> */}
					{/* <Grid className={classes.row}> */}
					{this.renderWebsite(classes.iconInfo, classes.row)}
					{this.renderJoined(classes.iconInfo, classes.row)}
					{/* </Grid> */}
				</Grid>
			</div>
		);
	}

	render() {
		const { classes } = this.props;
		return <div className={classes.sideWrapper}>{this.renderSideBar()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		avatar: state.userGeneralInfo.avatar_url,
		login: state.userGeneralInfo.login,
		name: state.userGeneralInfo.name,
		bio: state.userGeneralInfo.bio,
		email: state.userGeneralInfo.email,
		website: state.userGeneralInfo.blog,
		work: state.userGeneralInfo.company,
		location: state.userGeneralInfo.location,
		joined: state.userGeneralInfo.joined
	};
};

export default compose(
	withStyles(styles),
	connect(
		mapStateToProps,
		null
	)
)(UserSideBar);
