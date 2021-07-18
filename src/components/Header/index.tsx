import imgLogo from "../../assets/imgs/logo.png";

import * as styled from "./styled";

export default function Header() {
	return (
		<styled.Header>
			<div className="wrapper">
				<img src={imgLogo} alt="Logo" />
			</div>
		</styled.Header>
	);
}
