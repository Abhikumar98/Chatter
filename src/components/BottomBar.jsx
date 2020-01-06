import React from 'react';
import styled from 'styled-components';
import { Button, Icon, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	}
}));

const BottomBarWrapper = styled.div`
	height: 10%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const UserInput = styled(Input)`
	margin: 1%;
`;

const StyledButton = styled(Button)`
	background: #2e7d32 !important;
	color: white !important;
`;

const BottomBar = () => {
	const classes = useStyles();

	return (
		<BottomBarWrapper>
			<UserInput
				fullWidth
				placeholder="Enter message"
				inputProps={{ 'aria-label': 'description' }}
			/>

			<StyledButton
				variant="contained"
				color="#F44336"
				className={classes.button}
				endIcon={<Icon>send</Icon>}
			>
				Send
			</StyledButton>
		</BottomBarWrapper>
	);
};

export default BottomBar;
