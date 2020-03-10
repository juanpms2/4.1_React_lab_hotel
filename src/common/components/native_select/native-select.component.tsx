import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import { Field } from "react-final-form";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export const NativeSelects = () => {
	const classes = useStyles();
	const [state, setState] = React.useState({
		city: ""
	});

	const handleChange = (name) => (event) => {
		setState({
			...state,
			[name]: event.target.value
		});
	};

	return (
		<Field name="city">
			{(props) => (
				<div>
					<FormControl className={classes.formControl}>
						{/* <InputLabel shrink htmlFor="city-native-label-placeholder">
							City
						</InputLabel> */}
						<NativeSelect
							name={props.input.name}
							value={props.input.value}
							onChange={props.input.onChange}
							// onChange={handleChange("city")}
							inputProps={{
								name: "city",
								id: "city-native-label-placeholder"
							}}
						>
							<option value="New york">New york</option>
							<option value="California">California</option>
							<option value="Seattle">Seattle</option>
							<option value="Chicago">Chicago</option>
						</NativeSelect>
						<FormHelperText>Select city</FormHelperText>
						<FormHelperText>
							{props.meta.error && props.meta.touched && (
								<Alert severity="error">{props.meta.error}</Alert>
							)}
						</FormHelperText>
					</FormControl>
				</div>
			)}
		</Field>
	);
};
