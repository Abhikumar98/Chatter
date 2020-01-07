import React from 'react';
import styled from 'styled-components';
import UserDetails from './UserDetails';
import Contacts from './Contacts';
import SearchBar from './SearchBar';

const UserWrapper = styled.div`
	width: 100%;
	height: 10%;
	background: orange;
	display: flex;
`;

const ContactWrapper = styled.div`
	height: 85%;
`;

const ContactList = () => {
	return (
		<>
			<UserWrapper>
				<UserDetails />
			</UserWrapper>
			<SearchBar />
			<ContactWrapper>
				<Contacts />
			</ContactWrapper>
		</>
	);
};

export default ContactList;
