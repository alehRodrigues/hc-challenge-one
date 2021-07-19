import { useState } from "react";

import * as styled from "./styled";

export default function Form() {
	const [email, setEmail] = useState("");
	const savingData = () => {
		if (email) {
			localStorage.setItem(email, "e-mail");
		}
	};

	return (
		<styled.Form onSubmit={savingData}>
			<h2>Cadastre seu e-mail para receber nossas ofertas!</h2>
			<fieldset>
				<label>
					<input
						type="email"
						placeholder="Digite seu e-mail"
						value={email}
						required
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<input type="submit" value="Cadastrar" />
			</fieldset>
		</styled.Form>
	);
}
