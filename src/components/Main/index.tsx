import Form from "../../components/Form";
import Card from "../../components/Card";

import imgRoom1 from "../../assets/imgs/room1.jpg";
import imgRoom2 from "../../assets/imgs/room2.jpg";
import imgRoom3 from "../../assets/imgs/room3.jpg";

import * as styled from "./styled";

export default function Main() {
	return (
		<styled.Main>
			<header>
				<h1>
					BLACK <span>TURISMO</span>
				</h1>
			</header>
			<section className="content">
				<div className="countdown">
					<p>
						Um mês inteiro de <span>OFERTAS</span>
						<br />
						PRA VOCÊ VIAJAR O ANO TODO!
					</p>
				</div>
				<Form />
			</section>
			<section className="cardsBox">
				<Card img={imgRoom1} alt="Quarto de Casal"></Card>
				<Card img={imgRoom2} alt="Quarto de Casal"></Card>
				<Card img={imgRoom3} alt="Quarto de Casal"></Card>
			</section>
		</styled.Main>
	);
}
