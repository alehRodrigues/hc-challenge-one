import styled from "styled-components";

export const Main = styled.main`
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

		& + .content {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		& + .cardsBox {
			width: 100%;
			max-width: 900px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;

			margin-top: 2rem;
		}
	}
`;
