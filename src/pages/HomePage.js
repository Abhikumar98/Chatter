import React from 'react';
import styled from 'styled-components';
import ContactList from '../components/ContactList';
import ChatBox from '../components/ChatBox';

const ContactListWarpper = styled.div`
	width: 30%;
	height: 100%;
	background: white;
`;

const ChatBoxWrapper = styled.div`
	width: 70%;
	height: 100%;
	background: grey;
`;

const ComponentWrapper = styled.div`
	width: 90%;
	height: 80%;
	background: lightgreen;
	margin: auto;
	display: flex;
`;

function HomePage() {
	return (
		<ComponentWrapper>
			<ContactListWarpper>
				<ContactList />
			</ContactListWarpper>
			<ChatBoxWrapper>
				<ChatBox />
			</ChatBoxWrapper>
		</ComponentWrapper>
	);
}

export default HomePage;
