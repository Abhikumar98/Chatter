import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Page = styled.div`
	width: 70%;
	height: 60%;
	border-radius: 15px;
	background: grey;
	color: white;
	margin: auto;
	text-align: center;
	font-size: 2rem;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const PageNotFound = () => {
	return (
		<Page>
			Whoa, you weren,t supposed to come here. <br />
			Click <Link to="/">here</Link> to go back.{' '}
		</Page>
	);
};

export default PageNotFound;
