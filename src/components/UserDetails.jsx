import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const StyledAvatar = styled(Avatar)`
	margin: 4%;
	height: 4rem !important;
	width: 4rem !important;
`;

const DetailsWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	background: lightblue;
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
