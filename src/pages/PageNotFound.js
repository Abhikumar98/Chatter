import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ErrorImage from '../assests/404.jpg';

const StyledButton = styled(Button)`
	position: absolute;
	width: 18%;
	height: 9%;
	background: white !important;
	top: 89%;
	left: 41.3%;
	font-size: 2rem !important;
	line-height: 0.5 !important;
	font-weight: 700 !important;
	color: #07084b !important;
`;

const PageWrapper = styled.div`
	height: 100vh;
	width: 100vw;
	background-image: url(${ErrorImage});
	background-size: cover;
	background-position: center;
	position: relative;
`;

const PageNotFound = () => {
	return (
		<PageWrapper>
			<Link to="/">
				<StyledButton>Go back</StyledButton>
			</Link>
		</PageWrapper>
	);
};

export default PageNotFound;
