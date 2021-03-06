import * as React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { HotelEntityVm } from "./hotel-edition.vm";
import { HotelEditionFormContainer } from "./components/hotel-edition-form.container";

interface Props {
	hotelEdition: HotelEntityVm;
}

const useStyles = makeStyles({
	listLayout: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around"
	}
});

export const HotelEditionComponent: React.FunctionComponent<Props> = (
	props
) => {
	const { hotelEdition } = props;
	const classes = useStyles(props);

	return (
		<div className={classes.listLayout}>
			<HotelEditionFormContainer formHotelEdition={hotelEdition} />
		</div>
	);
};
