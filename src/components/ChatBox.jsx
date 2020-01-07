import React from 'react';
import styled from 'styled-components';
import Messages from './Messages';
import GuestUserInfo from './GuestUserInfo';
import BottomBar from './BottomBar';
import background from '../assests/background.jpg';

const MessagesWrapper = styled.div`
	height: 80%;
	background: url(${background});
	background-position: start;
	background-repeat: repeat;
	background-size: contain;
	overflow-y: scroll;
`;

const Wrapper = styled.div`
	height: 100%;
	background: white;
`;

const ChatBox = () => {
	return (
		<Wrapper>
			<GuestUserInfo />
			<MessagesWrapper>
				<Messages />
			</MessagesWrapper>
			<BottomBar />
		</Wrapper>
	);
};

export default ChatBox;
