import * as styled from "./styled";

export default function Form() {
	return (
		<styled.Form>
			<h2>Cadastre seu e-mail para receber nossas ofertas!</h2>
			<fieldset>
				<label>
					<input type="email" placeholder="Digite seu e-mail" />
				</label>
				<input type="submit" value="Cadastrar" />
			</fieldset>
		</styled.Form>
	);
}
