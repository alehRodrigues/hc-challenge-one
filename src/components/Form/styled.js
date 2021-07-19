import styled from "styled-components";

export const Form = styled.form`
	width: 100%;
	max-width: 640px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 2rem auto 0;

	h2 {
		color: #fafafa;
		text-align: center;
	}

	fieldset {
		display: flex;
		border: none;
		margin-top: 1rem;

		label {
			width: 100%;
			height: 3rem;

			input[type="email"] {
				width: 100%;
				height: 3rem;
				font-size: 1rem;
				background-color: #f1f1f1;
				color: #222222;
				border: none;

				padding: 1rem;

				&::placeholder {
					color: #aaaaaa;
				}
			}
		}

		input[type="submit"] {
			height: 3rem;
			border: none;
			font-size: 1rem;
			font-weight: 700;
			color: #222222;
			background-color: #f7df1e;
			transition: all 0.2s;

			padding: 0.5rem 1rem;
			cursor: pointer;

			&:hover {
				background-color: #dec91b;
			}
		}
	}
`;
