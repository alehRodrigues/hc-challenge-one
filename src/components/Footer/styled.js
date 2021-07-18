import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;
	display: flex;
	justify-content: center;
	position: fixed;

	bottom: 0;
	padding: 1rem 1rem;

	.wrapper {
		width: 100%;
		max-width: 900px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.social {
		display: flex;
		gap: 1rem;

		a img {
			width: 1rem;
			transition: all 0.2s;

			&:hover {
				transform: scale(1.25);
			}
		}
	}

	p {
		color: #fafafa;
		font-size: 1rem;
	}
`;
