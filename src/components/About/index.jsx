import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";

import "./style.scss";

const About = () => {
	const { t } = useTranslation();

	return (
		<section
			id="fixed-target"
			className="about"
			data-scroll-section
		>
			<h1
				className="about__title"
				data-scroll
				data-scroll-speed="-0.3"
				data-scroll-direction="horizontal"
			>
				{t("about_title")}
			</h1>
			<div
				className="about__text"
				data-scroll
				// data-scroll-speed="-1"
				data-scroll-target="#fixed-target"
			>
				<p>{t("about_paragraph_1")}</p>
				<br />
				<p>{t("about_paragraph_2")}</p>
			</div>
			<div className="about__image">
				<StaticImage
					src="../../images/about.jpg"
					alt={t("about_title")}
					formats={["auto", "webp", "avif"]}
					className="about__image-1"
					loading="eager"
				/>
			</div>
		</section>
	);
};

export default About;
