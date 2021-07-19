import styled from "styled-components";

export const Main = styled.main`
	position: relative;
	width: 100%;
	max-width: 900px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	margin: 2rem auto 0;

	header {
		h1 {
			text-align: center;
			font-size: 3rem;
			color: #fafafa;
			-webkit-text-stroke-width: 2px;
			-webkit-text-stroke-color: #3d3d3d;

			& span {
				color: #f7df1e;
			}
		}
	}

	section {
		width: 100%;
		text-align: center;

		h1,
		p,
		span {
			color: #fafafa;
		}

		p {
			font-size: 1.5rem;

			span {
				color: #f7df1e;
				font-weight: 700;
			}
		}
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.cardsBox {
		width: 100%;
		max-width: 640px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;

		margin-top: 2rem;
	}
`;

export const Off50 = styled.img`
	position: absolute;
	width: 25%;
	top: 0;
	right: 0;
	margin-top: -40px;

	@media screen and (max-width: 820px) {
		margin-top: -10px;
	}

	@media screen and (max-width: 600px) {
		visibility: hidden;
	}
`;
