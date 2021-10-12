import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import SellOnZDrop from './Components/pages/SellOnZDropRead/SellOnZDropRead';
import SellerRegistration from './Components/SellerRegistration/SellerRegistrationPage';

function App() {
	return (
		<AppContainer>
			<Router>
				<Switch>
					<Route exact path="/">
						<Container>
							<SellOnZDrop/>
						</Container>
					</Route>
					<Route exact path="/reg">
						<SellerRegistration />
					</Route>
					
				</Switch>
			</Router>
		</AppContainer>
	);
}

export default App;

const AppContainer = styled.div``;
