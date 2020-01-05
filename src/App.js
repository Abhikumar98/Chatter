import React from 'react';
import styled from 'styled-components';
import Routes from './routes';

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
`;

function App() {
	return (
		<Wrapper>
			<Routes />
		</Wrapper>
	);
}

export default App;
