import styled from "styled-components";

export const CardBox = styled.div`
	display: flex;

	background-color: #f1f1f1;
	border-radius: 0.25rem;

	img {
		width: 100%;
		max-width: 15rem;
		border-radius: 4px;
		border: 2px solid #f7df1e;
		transition: all 0.25s;

		&:hover {
			transform: scale(1.25);
			cursor: pointer;
		}
	}

	p {
		color: #fafafa;
	}
`;
