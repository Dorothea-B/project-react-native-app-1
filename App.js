import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
	flex: 1;
	background-color: lavender;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 35px;
	color: black;
	text-align: center;
`;

const App = () => {
	return (
		<Container>
			<Title>This is Dorothea's super cool app!</Title>
			<Title>Go to App.js and start coding</Title>
			<Title>💅💅💅</Title>
		</Container>
	);
};

export default App;
