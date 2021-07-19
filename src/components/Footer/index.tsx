import * as styled from "./styled";

import iconGithub from "../../assets/icons/github.svg";
import iconLinkedin from "../../assets/icons/linkedin.svg";
import iconInstagram from "../../assets/icons/instagram.svg";
import iconTwitter from "../../assets/icons/twitter.svg";
import iconGmail from "../../assets/icons/gmail.svg";
import iconHeart from "../../assets/icons/heart.svg";

export default function Footer() {
	return (
		<styled.Footer>
			<div className="wrapper">
				<div className="social">
					<a
						href="https://www.github.com/stenioas"
						target="_blank"
						rel="noreferrer"
					>
						<img className="iconGithub" src={iconGithub} alt="Github" />
					</a>
					<a
						href="https://www.linkedin.com/in/stenioas"
						target="_blank"
						rel="noreferrer"
					>
						<img className="iconLinkedin" src={iconLinkedin} alt="Linkedin" />
					</a>
					<a
						href="https://www.instagram.com/stenioas"
						target="_blank"
						rel="noreferrer"
					>
						<img
							className="iconInstagram"
							src={iconInstagram}
							alt="Instagram"
						/>
					</a>
					<a
						href="https://twitter.com/stenioas"
						target="_blank"
						rel="noreferrer"
					>
						<img className="iconTwitter" src={iconTwitter} alt="Twitter" />
					</a>
					<a href="mailto:stenioas@gmail.com" target="_blank" rel="noreferrer">
						<img className="iconGmail" src={iconGmail} alt="Gmail" />
					</a>
				</div>
				<p>
					Feito com <img src={iconHeart} alt="Coração" /> por Stenio Almeida.
				</p>
			</div>
		</styled.Footer>
	);
}
