import React from 'react';
import styled from 'styled-components';

const sampleMessages = [
	{ id: 1, text: '.' },
	{ id: 2, text: 'Hi !!' },
	{ id: 1, text: 'Hello' },
	{ id: 2, text: 'Hi !!' },
	{
		id: 1,
		text:
			'This includes default colors for primary, secondary, and their variants. This baseline theme also includes additional colors that define your UI, such as the colors for backgrounds, surfaces, errors, typography, and iconography. All of these colors can be customized for your app.'
	},
	{
		id: 2,
		text:
			'This includes default colors for primary, secondary, and their variants. This baseline theme also includes additional colors that define your UI, such as the colors for backgrounds, surfaces, errors, typography, and iconography. All of these colors can be customized for your app.'
	},
	{ id: 1, text: 'Hello' },
	{ id: 1, text: 'Hello' },
	{ id: 2, text: 'Hi !!' }
];

const Message = styled.span`
	min-width: 2%;
	max-width: 60%;
	padding: 0.5%;
	margin: 0 0.5%;
	display: block;
	border-radius: 5px;
	color: white;
`;

const MessageWrapper = styled.div`
	margin: 1% 0;
	min-height: 2rem;
	display: flex;
	align-items: center;
`;

const UserMessage = styled(Message)`
	background: #283593;
`;

const GuestMessage = styled(Message)`
	background: #2196f3;
`;

const UserMessageWrapper = styled(MessageWrapper)`
	justify-content: flex-end;
`;

const GuestMessageWrapper = styled(MessageWrapper)``;

const Messages = () => {
	const currentUserId = 1;
	return (
		<>
			{sampleMessages.map(message => {
				if (message.id === currentUserId) {
					return (
						<UserMessageWrapper>
							<UserMessage>{message.text}</UserMessage>
						</UserMessageWrapper>
					);
				}
				return (
					<GuestMessageWrapper>
						<GuestMessage>{message.text}</GuestMessage>
					</GuestMessageWrapper>
				);
			})}
		</>
	);
};

export default Messages;
