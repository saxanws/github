import React from "react";
import Star from "@material-ui/icons/Star";
import Warning from "@material-ui/icons/Warning";
import DeviceHub from "@material-ui/icons/DeviceHub";
import Visibility from "@material-ui/icons/Visibility";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Badge from "@material-ui/core/Badge";

import { troncateTextWithCount } from "../../shared/functions/troncate";

const RepositoryCard = props => {
	const {
		watchers,
		stargazers_count,
		forks,
		open_issues_count,
		name,
		description,
		language
	} = props.repository;
	return (
		<Card style={{ height: "100%" }}>
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
						<Grid item xs={12} style={{ width: "100%", textAlign: "center" }}>
							<Visibility
								style={{
									verticalAlign: "middle",
									paddingLeft: "2%",
									paddingRight: "2%",
									paddingTop: "10%",
									paddingBottom: "10%"
								}}
							/>
							{watchers}
						</Grid>

						<Grid item xs={12} style={{ width: "100%", textAlign: "center" }}>
							<Star
								style={{
									verticalAlign: "middle",
									paddingLeft: "2%",
									paddingRight: "2%",
									paddingTop: "10%",
									paddingBottom: "10%"
								}}
							/>
							{stargazers_count}
						</Grid>
						<Grid item xs={12} style={{ width: "100%", textAlign: "center" }}>
							<DeviceHub
								style={{
									verticalAlign: "middle",
									paddingLeft: "2%",
									paddingRight: "2%",
									paddingTop: "10%",
									paddingBottom: "10%"
								}}
							/>
							{forks}
						</Grid>
						<Grid item xs={12} style={{ width: "100%", textAlign: "center" }}>
							<Warning
								style={{
									verticalAlign: "middle",
									paddingLeft: "2%",
									paddingRight: "2%",
									paddingTop: "10%",
									paddingBottom: "10%"
								}}
							/>
							{open_issues_count}
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={10} style={{ position: "relative" }}>
					<h4>{name}</h4>
					<span>{troncateTextWithCount(description, 68)}</span>
					<div
						style={{ position: "absolute", bottom: 0, paddingBottom: "10px" }}
					>
						<div>
							<Badge
								color="secondary"
								style={{ backgroundColor: "green" }}
								variant="dot"
								children={""}
							/>
							<span style={{ marginLeft: "10px" }}>{language}</span>
						</div>
					</div>
				</Grid>
			</Grid>
		</Card>
	);
};

export default RepositoryCard;
