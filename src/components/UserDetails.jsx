import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const StyledAvatar = styled(Avatar)`
	margin: 4%;
	height: 3rem !important;
	width: 3rem !important;
`;

const DetailsWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	background: #2196f3;
	color: white;
	margin: auto;
	align-items: center;
`;

const UserName = styled.span`
	font-size: 1.5rem;
`;

const UserDetails = () => {
	return (
		<DetailsWrapper>
			<StyledAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			<UserName>Abhishek Kumar</UserName>
		</DetailsWrapper>
	);
};

export default UserDetails;
