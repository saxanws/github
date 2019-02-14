import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Whatshot from "@material-ui/icons/Whatshot";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
// import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import compose from "recompose/compose";
import { connect } from "react-redux";
import { fetchUser, updateSearchKey } from "../../actions/index";

import styles from "./Header-style";

class Header extends Component {
	updateKey = key => {
		if (key.key === "Enter" && this.props.username) return this.searchUser();

		this.props.updateSearchKey(key.target.value);
	};

	searchUser = () => {
		if (this.props.login === this.props.username) return;

		this.props.fetchUser();
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar>
					<Toolbar>
						<Whatshot fontSize="large" />
						<Typography
							className={classes.title}
							variant="h6"
							color="inherit"
							noWrap
						>
							GitHub Searcher
						</Typography>
						<div className={classes.grow} />
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								onKeyUp={this.updateKey}
							/>
						</div>
						<IconButton onClick={this.searchUser}>
							<SearchIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		username: state.userGeneralInfo.username,
		login: state.userGeneralInfo.login
	};
};

export default compose(
	withStyles(styles),
	connect(
		mapStateToProps,
		{ updateSearchKey, fetchUser }
	)
)(Header);
