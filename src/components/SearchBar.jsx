import React from 'react';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import SearchResults from './SearchResults';

const StyledSearchInput = styled(TextField)`
	margin: 3% 1% !important;
	width: 98%;
`;

const SearchBar = () => {
	return (
		<>
			<StyledSearchInput
				id="outlined-secondary"
				label="Search for someone"
				variant="outlined"
				color="success"
			/>
			<SearchResults />
		</>
	);
};

export default SearchBar;
