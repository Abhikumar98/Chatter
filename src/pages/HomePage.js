import React from 'react';
import styled from 'styled-components';
import ContactList from '../components/ContactList';
import ChatBox from '../components/ChatBox';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: lightgreen;
	display: flex;
`;

const ContactListWarpper = styled.div`
	width: 30%;
	height: 100%;
	background: white;
`;

const ChatBoxWrapper = styled.div`
	width: 70%;
	height: 100%;
	background: white;
`;

const ComponentWrapper = styled.div`
	width: 100%;
	height: 100%;
	margin: auto;
	display: flex;
`;

function HomePage() {
	return (
		<Wrapper>
			<ComponentWrapper>
				<ContactListWarpper>
					<ContactList />
				</ContactListWarpper>
				<ChatBoxWrapper>
					<ChatBox />
				</ChatBoxWrapper>
			</ComponentWrapper>
		</Wrapper>
	);
}

export default HomePage;
