import React from 'react';
import styled from 'styled-components';
import Messages from './Messages';
import GuestUserInfo from './GuestUserInfo';
import BottomBar from './BottomBar';

const MessagesWrapper = styled.div`
	height: 80%;
	background: white;
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
