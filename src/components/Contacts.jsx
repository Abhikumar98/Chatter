import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const Contact = styled.div`
	height: 4rem;
	background: pink;
	display: flex;
	align-items: center;
	border-bottom: 1px solid blue;
	&:last-child {
		border-bottom: none;
	}
`;

const StyledAvatar = styled(Avatar)`
	margin: 4%;
	height: 2.5rem !important;
	width: 2.5rem !important;
`;

const ContactsWrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
`;

const NameAndMessage = styled.div`
	display: flex;
	flex-direction: column;
`;

const ContactName = styled.span`
	font-size: 1.3rem;
`;

const MessageSnippet = styled.span`
	font-size: 0.8rem;
`;

const Contacts = () => {
	return (
		<ContactsWrapper>
			{[1, 2, 3, 4, 4, 5, 6].map(i => (
				<Contact key={i}>
					<StyledAvatar
						alt="Remy Sharp"
						src="/static/images/avatar/1.jpg"
					/>
					<NameAndMessage>
						<ContactName>Bro</ContactName>
						<MessageSnippet>Some Message</MessageSnippet>
					</NameAndMessage>
				</Contact>
			))}
		</ContactsWrapper>
	);
};

export default Contacts;
