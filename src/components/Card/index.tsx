import * as styled from "./styled";

type Props = {
	img: string;
	alt: string;
};

export default function Card(props: Props) {
	return (
		<styled.CardBox>
			<img src={props.img} alt={props.alt} />
		</styled.CardBox>
	);
}
