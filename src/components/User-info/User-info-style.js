const styles = theme => ({
	margin: {
		margin: theme.spacing.unit * 2
	},
	padding: {
		padding: `0 ${theme.spacing.unit * 2}px`
	},

	sideBarGrid: {
		boxShadow: "2px 0 10px -3px grey",
		height: "100vh",
		position: "fixed"
		// backgroundColor: "#3f51b5"
	},

	middleContent: {
		height: "100vh",
		position: "absolute",
		right: "0px",
		width: "100%"
	},

	tabDiv: {
		textAlign: "center"
	},

	root: {
		flexGrow: 1,
		width: "100%"
	}
});

export default styles;
