import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const ResultUser = styled.div`
	width: 80%;
	margin: 1% 0;
	border: 1px solid;
	border-radius: 5px;
	padding: 1%;
	height: 10%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

const SearchResults = () => {
	return (
		<>
			<ResultUser>
				<Avatar />
				SearchResults
			</ResultUser>
			<ResultUser>
				<Avatar />
				SearchResults
			</ResultUser>
			<ResultUser>
				<Avatar />
				SearchResults
			</ResultUser>
			<ResultUser>
				<Avatar />
				SearchResults
			</ResultUser>
			<ResultUser>
				<Avatar />
				SearchResults
			</ResultUser>
		</>
	);
};

export default SearchResults;
