import React from 'react';
import styled from 'styled-components';

const sampleMessages = [
	{ id: 1, text: 'Hello' },
	{ id: 2, text: 'Hi !!' },
	{ id: 1, text: 'Hello' },
	{ id: 2, text: 'Hi !!' },
	{ id: 1, text: 'Hello' },
	{ id: 2, text: 'Hi !!' },
	{ id: 1, text: 'Hello' },
	{ id: 1, text: 'Hello' },
	{ id: 2, text: 'Hi !!' }
];

const Message = styled.div`
	max-width: 60%;
`;

const MessageWrapper = styled.div`
	width: 100%;
	height: 2rem;
	margin: 1% 0;
	background: lightblue;
`;

const UserMessage = styled(Message)`
	background: lightgreen;
`;

const GuestMessage = styled(Message)`
	background: grey;
`;

const UserMessageWrapper = styled(MessageWrapper)`
	justify-content: flex-end;
`;

const GuestMessageWrapper = styled(MessageWrapper)`
	justify-content: flex-start;
`;

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
