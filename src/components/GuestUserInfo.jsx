import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const GuestUserPic = styled(Avatar)`
	height: 3rem !important;
	width: 3rem !important;
	margin: 0 1rem;
`;

const GuestUserName = styled.span`
	font-size: 1.5rem;
`;

const GuestUserWrapper = styled.div`
	height: 10%;
	width: 100%;
	background: #283593;
	color: white;
	display: flex;
	align-items: center;
`;

const GuestUserInfo = () => {
	return (
		<GuestUserWrapper>
			<GuestUserPic alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
			<GuestUserName>Bro</GuestUserName>
		</GuestUserWrapper>
	);
};

export default GuestUserInfo;
