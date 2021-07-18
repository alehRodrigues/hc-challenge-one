import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

import * as styled from "./styled";

export default function Home() {
	return (
		<styled.Page>
			<Header />
			<Main />
			<Footer />
		</styled.Page>
	);
}
