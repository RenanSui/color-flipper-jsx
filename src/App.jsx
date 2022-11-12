import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Hex from './components/Hex';
import Navbar from './components/Navbar';
import Simple from './components/Simple';

function App() {
	return (
		<Router>
			<>
				<GlobalStyle />
				<Navbar />
				<>
					<Routes>
						<Route path='/color-flipper-jsx/' element={<Simple />} />
						<Route path='/color-flipper-jsx/hex' element={<Hex />} />
					</Routes>
				</>
			</>
		</Router>
	);
}

const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body{
		background-color: #f0f8ff;
	}

	li{
		list-style: none;
	}

	a {
		text-decoration: none;
	}`;

export default App;
