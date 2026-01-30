import style from "./AboutSection.module.css";

const AboutSection = () => {
	return (
		<>
			<section id="about" className={style.aboutSection}>
				<h2 className={style.aboutHeader}>Who, me?</h2>
				<p>
					Hey there! I’m Simon — frontend developer with a curious
					mind, a background in elite operations, and a growing drive
					to build, fix, and figure things out — one frontend
					challenge at a time.
				</p>
				<p>
					Since earning my professional degree from Kristiania’s
					Frontend Development Programme, I’ve worked with{" "}
					<strong>React</strong>{" "}and later{" "}
					<strong>Next.js (App Router)</strong> projects. <br /> Further, on the backend side,
					I’ve worked with <strong>Xano</strong> to develop and
					connect APIs, and handle database logic — gaining a good
					understanding of <strong>low-code backends</strong> and how
					they integrate with modern frontends.
				</p>
				<p>
					I’m comfortable working with{" "}
					<strong>AI coding agents</strong>, and have been actively exploring{" "}
					<strong>context engineering</strong> and how to better
					structure and streamline development workflows with these
					tools.
				</p>
				<p>
					Before stepping into tech, I held{" "}
					<strong>management roles at the Royal Palace</strong>, where
					I honed attention to detail, ownership, and people-first
					leadership — all of which now shape the way I approach
					development and teamwork.
				</p>
				<p>
					I love the{" "}
					<strong>endless opportunities to learn and grow</strong> in
					the development profession. Whether it’s a new framework, a fresh
					team, or an unfamiliar challenge, I’m quick to adapt, eager
					to contribute, and ready to dive in.
				</p>
			</section>
		</>
	);
};

export default AboutSection;
