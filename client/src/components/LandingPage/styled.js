import styled from 'styled-components';
import './styled.css';
import image from '../../assets/imagen.jpg';

export const StyledDiv = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	margin: 0px -9px 0px -9px;
	background-image: url(${image});
	background-position: center center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;

	.div_nav {
		display: flex;
		align-items: center;
		width: 100%;
		height: 50px;
		overflow: hidden;
		background-color: #e63946;
		position: fixed;
		top: 0px;
		left: 0px;
		box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.3);
		.title {
			display: flex;
			justify-content: flex-end;
			width: 481px;
			height: fit-content;
			margin-left: 20px;
			align-items: center;
			color: white;
			text-shadow: 1px 2px 2px black;
		}
	}

	.div_content {
		margin-top: 200px;
		border: 3px solid white;
		border-radius: 7px;
		width: 400px;
		padding: 20px 20px 20px 20px;
		margin-left: 200px;

		.h3 {
			text-align: center;
			font-size: 40px;
			color: white;
			text-shadow: 1px 2px 2px black;
			margin: 25px;
		}

		.p {
			padding-left: 50px;
			display: flex;
			justify-items: center;
			width: 300px;
			text-align: center;
			font-size: 30px;
			color: white;
			text-shadow: 1px 2px 2px black;
		}

		.hr {
			width: 400px;
			border: 1px dashed white;
		}
	}

	.div_btn {
		display: flex;
		justify-content: start;
		margin-top: 30px;
		margin-left: 270px;
		.btn {
			width: 300px;
			height: 50px;
			border-style: solid;
			border-color: black;
			border-width: 1px;
			border-radius: 5px;
			color: white;
			text-shadow: 2px 2px 2px black;
			font-size: 30px;
			background-color: #0ead69;
			&:hover {
				box-shadow: 0 0 5px 0 #ffffff;
			}
			&:active {
				outline: 0;
				transform: translateY(3px);
			}
		}
	}
`;
