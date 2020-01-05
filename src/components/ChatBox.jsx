import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Icon, Input } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import Messages from './Messages';

const useStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1)
	}
}));

const MessagesWrapper = styled.div`
	height: 90%;
	background: white;
	overflow-y: scroll;
`;

const BottomBar = styled.div`
	height: 10%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
`;

const UserInput = styled(Input)`
	margin: 1%;
`;

const Wrapper = styled.div`
	height: 100%;
	background: white;
`;

const ChatBox = () => {
	const classes = useStyles();
	const primaryColor = green.A700;
	return (
		<Wrapper>
			<MessagesWrapper>
				<Messages />
			</MessagesWrapper>
			<BottomBar>
				<UserInput
					fullWidth
					placeholder="Enter message"
					inputProps={{ 'aria-label': 'description' }}
				/>

				<Button
					variant="contained"
					color={primaryColor}
					className={classes.button}
					endIcon={<Icon>send</Icon>}
				>
					Send
				</Button>
			</BottomBar>
		</Wrapper>
	);
};

export default ChatBox;
