import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;
	display: flex;
	justify-content: center;
	position: fixed;

	left: 0;
	bottom: 0;

	padding: 1rem;

	.wrapper {
		width: 100%;
		max-width: 900px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	.social {
		display: flex;
		gap: 1rem;

		a img {
			width: 1.2rem;
			transition: all 0.2s;

			&:hover {
				transform: scale(1.25);
			}
		}
	}

	p {
		color: #fafafa;
		font-size: 1rem;

		img {
			width: 1.6rem;
			transform: translateY(4px);
		}

		span {
			font-weight: 700;
		}
	}
`;
