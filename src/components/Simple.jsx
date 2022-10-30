import { useState } from 'react';
import styled from 'styled-components';

const Simple = () => {
	const [color, setColor] = useState('#f0f8ff');
	const colorPalette = ['red', 'aquamarine', 'blanchedalmond', '#ffb8e7'];

	const randomSimpleColor = () => {
		const random = () => {
			let randomColor;
			do {
				let rands = Math.floor(Math.random() * colorPalette.length);
				randomColor = colorPalette[rands];
			} while (randomColor === color);
			return randomColor;
		};
		setColor(random());
	};

	const copyColor = () => {
		navigator.clipboard.writeText(color);
	};

	return (
		<SimpleContainer spanColor={color}>
			<div className='colorContainer' onClick={copyColor}>
				Background Color:
				<span>{color}</span>
				<span className='clipboard'>click to copy</span>
			</div>
			<button onClick={randomSimpleColor}>Click Me</button>
		</SimpleContainer>
	);
};

const SimpleContainer = styled.div`
	width: 100%;
	height: calc(100vh - 82px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: ${(props) => props.spanColor};

	.colorContainer {
		display: flex;
		flex-direction: column;
		background-color: #1d1d2c;
		color: #f0f8ff;
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 600;
		font-size: 24px;
		letter-spacing: 4px;
		border-radius: 10px;
		padding: 2rem 8rem;
		cursor: pointer;
		position: relative;

		span {
			color: ${(props) => props.spanColor};
			align-self: center;
			margin-top: 1rem;
			pointer-events: none;
		}

		.clipboard {
			color: #f0f8ff;
			font-size: 12px;
			position: absolute;
			bottom: 0;
			right: 0;
			margin: 1rem;
		}
	}

	button {
		margin-top: 4rem;
		background: none;
		border-radius: 5px;
		color: #1d1d2c;
		font-weight: 600;
		font-size: 24px;
		letter-spacing: 4px;
		padding: 1rem 3rem;
		border-color: #1d1d2c;
		cursor: pointer;

		&:hover {
			background: #1d1d2c;
			color: #f0f8ff;
		}
	}
`;

export default Simple;
