import style from "./AboutSection.module.css";

const AboutSection = () => {
  return (
	<>
	<section id='about' className={style.aboutSection}>		
		<h2 className={style.aboutHeader}>About me</h2>
		<p>Old, schmold!</p>
		<p>Alright, alright — a tad grey, I'll admit. But I can code! And I'm thoroughly enjoying it!</p>
		<p>From the first week of diving into coding I knew I'd found my place! The endless possibilities to learn new stuff, and rewarding feeling of overcoming the struggles!</p>
		<p>I started off with the Foundations Course of <a href="https://www.theodinproject.com/" target='_blank'>The Odin Project</a>, which I thoroughly enjoyed. Soon after I enrolled in the <a href="https://www.kristiania.no/studier/fagskole/frontend-utvikling/" target='_blank'>Kristiania Frontend Developer Programme</a>, earning my professional degree.</p>
		<p>From my roles at The Royal Palace, I bring a sharp eye for detail, a strong sense of ownership and initiative, and a set of soft skills that I truly believe benefit any developer-team!</p>
		<p>I genuinely enjoy helping and teaching others - Especially when it comes to adapting new systems and technologies</p>
		<p>Whether it's a new framework, a new team, or a whole new challenge — I adapt, learn, and dive headfirst in. Bring it on!</p>
	</section>
	</>
  )
}

export default AboutSection