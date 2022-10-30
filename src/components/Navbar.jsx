import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
	return (
		<NavbarContainer>
			<Title>Color Flipper</Title>

			<ul>
				<li>
					<Link to='/'>Simple</Link>
				</li>
				<li>
					<Link to='/hex'>Hex</Link>
				</li>
			</ul>
		</NavbarContainer>
	);
};

const Title = styled.h1`
	font-family: Arial, Helvetica, sans-serif;
	letter-spacing: 6px;
	color: #449dca;
	font-weight: 600;
	margin: 0 4rem;
    cursor: pointer;
`;

const NavbarContainer = styled.div`
	position: relative;
	display: flex;
	box-shadow: 0px 1px 50px 10px rgba(0, 0, 0, 0.3);
	justify-content: space-between;
	align-items: center;
	background-color: white;

	ul {
		display: flex;
		margin: 0 4rem;
	}

	li {
		padding: 2rem 0;
	}

	a {
		font-family: Arial, Helvetica, sans-serif;
		letter-spacing: 6px;
		padding: 2rem 1rem;
		font-weight: 600;
		color: #255d79;
	}
`;

export default Navbar;
