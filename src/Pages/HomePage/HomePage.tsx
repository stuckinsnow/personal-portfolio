import { useDocumentTitle } from "../../utils/functions";
import ProjectsList from "../../Components/ProjectsList/ProjectsList";

import "./HomePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
	useDocumentTitle("Philip Lucas - Full Stack Web Developer")

	const tagLine: string = 'Please contact me on linkedin below!';

	return (
		<main className="p-homepage">

			<script defer src="https://umami-l4g80sc8swoo8kcc0skws4w0.44.231.47.122.sslip.io/script.js" data-website-id="482bcc0d-0391-407a-a00d-1af28dd45d39"></script>

			<div className="p-homepage__group">

				<section className="hp-card">

					<h1 className="hp-card__title">Philip Lucas</h1>
					<h2 className="hp-card__subtitle">Full-Stack Web Developer</h2>
					<p className="hp-card__description">{tagLine}</p>

				</section>

				<div className="hp-card hp-card__links">

					<p className="">
						<Link to="https://www.linkedin.com/in/lswr/" target="blank" className="hp-card__link">LinkedIn</Link>
					</p>
					<p className="">
						<Link to="https://github.com/stuckinsnow" target="blank" className="hp-card__link" >GitHub</Link>
					</p>
					<p className="">
						<Link to="https://leetcode.com/philiplucas/" target="blank" className="hp-card__link">Leetcode</Link>
					</p>

					<p className="">
						<Link to="https://devpad.net" target="blank" className="hp-card__link">Blog</Link>
					</p>

				</div>
			</div>

			<ProjectsList />

		</main>


	)
}

export default HomePage
