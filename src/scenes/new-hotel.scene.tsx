import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { AppLayout } from "layouts";
import { NewHotel } from "pods";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		width: "100%",
		overflow: "hidden"
	},
	title: {
		margin: "15px 8px",

		"& > * + *": {
			marginLeft: theme.spacing(2)
		}
	}
}));

export const NewHotelScene = () => {
	const classes = useStyles();

	return (
		<AppLayout>
			<Typography className={classes.title} variant="h5">
				New Hotel
			</Typography>
			<div className={classes.root}>
				<NewHotel />
			</div>
		</AppLayout>
	);
};
