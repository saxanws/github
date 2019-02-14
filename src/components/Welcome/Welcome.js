import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Welcome-style";
import PropTypes from "prop-types";

const Welcome = props => {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<h2>Welcome to GithubSearcher</h2>
		</div>
	);
};

Welcome.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Welcome);
