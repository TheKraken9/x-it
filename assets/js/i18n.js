(function () {
	"use strict";

	var storageKey = "octo-language";
	var defaultLanguage = "fr";

	var translations = {
		fr: {
			"meta.title": "OCTO | Agence digitale",
			"nav.home": "Accueil",
			"nav.about": "À propos",
			"nav.services": "Services",
			"nav.work": "Nos réalisations",
			"nav.blog": "Blog",
			"nav.contact": "Contact",
			"cta.start": "Démarrer",
			"cta.work": "Travailler avec nous",
			"cta.services": "Voir nos services",
			"cta.contact": "Nous contacter",
			"cta.contactNow": "Contacter maintenant",
			"search.placeholder": "Rechercher",
			"top.address": "<span class=\"icon fa-classic fa-solid fa-location-dot fa-fw\"></span>Tananarive",
			"sidebar.title": "À propos <span>OCTO</span>",
			"sidebar.text": "OCTO est une agence portée par une vision humaine du digital. Nous vous conseillons et vous soutenons durablement dans vos projets.",
			"sidebar.item1": "Conseil stratégique",
			"sidebar.item2": "Développement digital",
			"sidebar.item3": "Mise en œuvre des solutions",
			"sidebar.item4": "Suivi et amélioration continue",
			"hero.eyebrow": "Libérez votre potentiel digital",
			"hero.title": "Des solutions <span>digitales</span> pensées pour votre croissance",
			"hero.reviews": "Clients accompagnés",
			"clients.title": "Nous accompagnons les entreprises dans leur transformation digitale",
			"about.eyebrow": "À propos",
			"about.title": "Une agence portée par une vision humaine du digital",
			"about.text": "Nous accompagnons les entreprises dans leur transformation digitale avec des solutions innovantes et un accompagnement stratégique adaptés à leurs objectifs.",
			"marquee.one": "digital. &nbsp;",
			"marquee.two": "stratégie. &nbsp;",
			"achievements.title": "Des solutions conçues pour simplifier vos opérations",
			"achievements.clients": "Entreprises accompagnées",
			"achievements.reviews": "Retours clients positifs",
			"achievements.success": "Taux de satisfaction",
			"achievements.team": "Experts mobilisables",
			"achievements.projects": "Projets livrés",
			"process.eyebrow": "Notre approche",
			"process.title": "Un accompagnement clair, de l'idée au déploiement",
			"process.step": "Étape",
			"process.step1": "Comprendre le projet",
			"process.step2": "Définir la stratégie",
			"process.step3": "Déployer la solution",
			"process.step4": "Suivre les résultats",
			"process.stepText": "Notre équipe collabore avec vous pour comprendre vos besoins et avancer avec méthode.",
			"process.text": "Nous simplifions les processus, améliorons la performance et optimisons les ressources pour vous aider à vous concentrer sur votre cœur de métier.",
			"services.eyebrow": "Ce que nous proposons",
			"services.title": "Nos services",
			"services.web": "Développement web",
			"services.mobile": "Développement mobile",
			"services.software": "Logiciel sur-mesure",
			"services.ux": "Design UI/UX et identité visuelle",
			"services.tag.strategy": "Stratégie",
			"services.tag.design": "Design",
			"services.tag.dev": "Développement",
			"services.tag.support": "Support",
			"testimonial.eyebrow": "Contact",
			"testimonial.title": "Parlons de votre projet",
			"testimonial.text": "Notre équipe est à votre écoute pour vous conseiller à chaque étape et construire une solution adaptée à vos enjeux.",
			"testimonial.talk": "Discutons",
			"team.eyebrow": "Notre équipe",
			"team.title": "Des profils engagés pour vos projets digitaux",
			"team.info": "Une équipe flexible pour renforcer vos projets web, mobile et logiciel.",
			"incredible.eyebrow": "Découvrir",
			"incredible.title": "des talents engagés",
			"incredible.behind": "derrière <br>OCTO",
			"experience.text": "Nous aidons les entreprises à franchir le cap du digital avec un accompagnement progressif, clair et adapté.",
			"blog.eyebrow": "Blog",
			"blog.title": "Actualités & articles",
			"blog.article1": "Comment structurer un projet digital efficace",
			"blog.article2": "Créer du contenu utile pour attirer les bons clients",
			"blog.article3": "Réussir sa transformation digitale étape par étape",
			"footer.text": "Nous privilégions la collaboration <br>avec nos clients",
			"footer.discuss": "discutons !",
			"footer.email": "contact@octo.digital",
			"footer.phone": "+33 WhatsApp / +261",
			"footer.copyright": "OCTO © 2026. Tous droits réservés."
		},
		en: {
			"meta.title": "OCTO | Digital agency",
			"nav.home": "Home",
			"nav.about": "About",
			"nav.services": "Services",
			"nav.work": "Our work",
			"nav.blog": "Blog",
			"nav.contact": "Contact",
			"cta.start": "Get started",
			"cta.work": "Work with us",
			"cta.services": "View services",
			"cta.contact": "Contact us",
			"cta.contactNow": "Contact now",
			"search.placeholder": "Search",
			"top.address": "<span class=\"icon fa-classic fa-solid fa-location-dot fa-fw\"></span>Antananarivo",
			"sidebar.title": "About <span>OCTO</span>",
			"sidebar.text": "OCTO is an agency driven by a human vision of digital work. We advise you and support your projects over the long term.",
			"sidebar.item1": "Strategic consulting",
			"sidebar.item2": "Digital development",
			"sidebar.item3": "Solution implementation",
			"sidebar.item4": "Monitoring and continuous improvement",
			"hero.eyebrow": "Unlock digital potential",
			"hero.title": "Digital <span>solutions</span> designed for your growth",
			"hero.reviews": "Clients supported",
			"clients.title": "We support companies through their digital transformation",
			"about.eyebrow": "About us",
			"about.title": "An agency driven by a human vision of digital work",
			"about.text": "We support companies in their digital transformation with innovative solutions and strategic guidance tailored to their goals.",
			"marquee.one": "digital. &nbsp;",
			"marquee.two": "strategy. &nbsp;",
			"achievements.title": "Solutions built to simplify your operations",
			"achievements.clients": "Companies supported",
			"achievements.reviews": "Positive client feedback",
			"achievements.success": "Satisfaction rate",
			"achievements.team": "Available experts",
			"achievements.projects": "Projects delivered",
			"process.eyebrow": "Our approach",
			"process.title": "Clear support, from idea to deployment",
			"process.step": "Step",
			"process.step1": "Understand the project",
			"process.step2": "Define the strategy",
			"process.step3": "Deploy the solution",
			"process.step4": "Track the results",
			"process.stepText": "Our team works with you to understand your needs and move forward with method.",
			"process.text": "We simplify processes, improve performance and optimize resources so you can focus on your core business.",
			"services.eyebrow": "What we offer",
			"services.title": "Our services",
			"services.web": "Web development",
			"services.mobile": "Mobile development",
			"services.software": "Custom software",
			"services.ux": "UI/UX design and visual identity",
			"services.tag.strategy": "Strategy",
			"services.tag.design": "Design",
			"services.tag.dev": "Development",
			"services.tag.support": "Support",
			"testimonial.eyebrow": "Contact",
			"testimonial.title": "Let's talk about your project",
			"testimonial.text": "Our team is here to advise you at every stage and build a solution tailored to your challenges.",
			"testimonial.talk": "Let's talk",
			"team.eyebrow": "Our team",
			"team.title": "Committed profiles for your digital projects",
			"team.info": "A flexible team to strengthen your web, mobile and software projects.",
			"incredible.eyebrow": "Discover",
			"incredible.title": "committed talents",
			"incredible.behind": "behind <br>OCTO",
			"experience.text": "We help companies take the next digital step with progressive, clear and tailored support.",
			"blog.eyebrow": "Blog",
			"blog.title": "News & articles",
			"blog.article1": "How to structure an effective digital project",
			"blog.article2": "Create useful content to attract the right clients",
			"blog.article3": "Succeed in digital transformation step by step",
			"footer.text": "We prioritize collaboration <br>with our clients",
			"footer.discuss": "let's discuss!",
			"footer.email": "contact@octo.digital",
			"footer.phone": "+33 WhatsApp / +261",
			"footer.copyright": "OCTO © 2026. All rights reserved."
		}
	};

	var selectorMap = [
		{ selector: ".header-top_list li:nth-child(2)", key: "top.address", mode: "html" },
		{ selector: ".slider-one_title", key: "hero.eyebrow" },
		{ selector: ".slider-one_heading", key: "hero.title", mode: "html" },
		{ selector: ".slider-one_button .text-one, .slider-one_button .text-two", key: "cta.work" },
		{ selector: ".slider-one_options .service-btn", key: "cta.services", mode: "html", suffix: " <i class=\"fa-arrow-right\"></i>" },
		{ selector: ".slider-one_reviews span", key: "hero.reviews" },
		{ selector: ".clients-one_title", key: "clients.title", mode: "html" },
		{ selector: ".about-one .sec-title_title", key: "about.eyebrow", mode: "sectionTitle" },
		{ selector: ".about-one .sec-title_heading", key: "about.title" },
		{ selector: ".about-one_text", key: "about.text" },
		{ selector: ".marketing-one .animation_mode h1:nth-child(odd)", key: "marquee.one", mode: "html" },
		{ selector: ".marketing-one .animation_mode h1:nth-child(even)", key: "marquee.two", mode: "html" },
		{ selector: ".achieve-one .sec-title_heading", key: "achievements.title", mode: "html" },
		{ selector: ".achieve-one .counter-one_column:nth-child(1) .counter-one_text", key: "achievements.clients", mode: "html" },
		{ selector: ".achieve-one .counter-one_column:nth-child(2) .counter-one_text", key: "achievements.reviews", mode: "html" },
		{ selector: ".achieve-one .counter-one_column:nth-child(3) .counter-one_text", key: "achievements.success" },
		{ selector: ".achieve-one .counter-one_column:nth-child(4) .counter-one_text", key: "achievements.team" },
		{ selector: ".achieve-one .counter-one_column:nth-child(5) .counter-one_text", key: "achievements.projects", mode: "html" },
		{ selector: ".process-one .sec-title_title", key: "process.eyebrow", mode: "sectionTitle" },
		{ selector: ".process-one .sec-title_heading", key: "process.title", mode: "html" },
		{ selector: ".step-block_one-number", key: "process.step", mode: "stepLabel" },
		{ selector: ".step-block_one:nth-child(1) .step-block_one-heading", key: "process.step1" },
		{ selector: ".step-block_one:nth-child(2) .step-block_one-heading", key: "process.step2" },
		{ selector: ".step-block_one:nth-child(3) .step-block_one-heading", key: "process.step3" },
		{ selector: ".step-block_one:nth-child(4) .step-block_one-heading", key: "process.step4" },
		{ selector: ".step-block_one-text", key: "process.stepText" },
		{ selector: ".process-one_button .text-one, .process-one_button .text-two", key: "cta.start" },
		{ selector: ".process-one_content-text", key: "process.text", mode: "html" },
		{ selector: ".offer-one .sec-title_title", key: "services.eyebrow", mode: "sectionTitle" },
		{ selector: ".offer-one .sec-title_heading", key: "services.title" },
		{ selector: ".offer-one_title:nth-child(1) .offer-one_heading a", key: "services.web" },
		{ selector: ".offer-one_title:nth-child(2) .offer-one_heading a", key: "services.mobile" },
		{ selector: ".offer-one_title:nth-child(3) .offer-one_heading a", key: "services.software" },
		{ selector: ".offer-one_title:nth-child(4) .offer-one_heading a", key: "services.ux" },
		{ selector: ".offer-one_tags li:nth-child(1) a", key: "services.tag.strategy" },
		{ selector: ".offer-one_tags li:nth-child(2) a", key: "services.tag.design" },
		{ selector: ".offer-one_tags li:nth-child(3) a", key: "services.tag.dev" },
		{ selector: ".offer-one_tags li:nth-child(4) a", key: "services.tag.support" },
		{ selector: ".testimonial-one .sec-title_title", key: "testimonial.eyebrow", mode: "sectionTitle" },
		{ selector: ".testimonial-one .sec-title_heading", key: "testimonial.title" },
		{ selector: ".testimonial-one .sec-title_text", key: "testimonial.text", mode: "html" },
		{ selector: ".testimonial-one_talk span", key: "testimonial.talk" },
		{ selector: ".testimonial-one_button .text-one, .testimonial-one_button .text-two", key: "cta.contact" },
		{ selector: ".team-one .sec-title_title", key: "team.eyebrow", mode: "centeredSectionTitle" },
		{ selector: ".team-one .sec-title_heading", key: "team.title", mode: "html" },
		{ selector: ".team-one_info-text", key: "team.info" },
		{ selector: ".team-one_info-button .text-one, .team-one_info-button .text-two", key: "cta.contactNow" },
		{ selector: ".incredible-one .sec-title_title", key: "incredible.eyebrow", mode: "sectionTitle" },
		{ selector: ".incredible-one .sec-title_heading", key: "incredible.title" },
		{ selector: ".incredible-one_title", key: "incredible.behind", mode: "html" },
		{ selector: ".experiance-one_text", key: "experience.text" },
		{ selector: ".experiance-one_button .text-one, .experiance-one_button .text-two", key: "cta.start" },
		{ selector: ".news-one .sec-title_title", key: "blog.eyebrow", mode: "sectionTitle" },
		{ selector: ".news-one .sec-title_heading", key: "blog.title" },
		{ selector: ".news-one_button .text-one, .news-one_button .text-two", key: "cta.start" },
		{ selector: ".news-block_one:nth-child(1) .news-block_one-title a", key: "blog.article1" },
		{ selector: ".news-block_one:nth-child(2) .news-block_one-title a", key: "blog.article2" },
		{ selector: ".news-block_one:nth-child(3) .news-block_one-title a", key: "blog.article3" },
		{ selector: ".footer-text", key: "footer.text", mode: "html" },
		{ selector: ".footer-discuss span", key: "footer.discuss" },
		{ selector: ".footer-contact_list li:nth-child(1) a", key: "footer.email" },
		{ selector: ".footer-contact_list li:nth-child(2) a", key: "footer.phone" },
		{ selector: ".main-footer_copyright", key: "footer.copyright" }
	];

	function t(language, key) {
		return translations[language][key] || translations[defaultLanguage][key] || "";
	}

	function dotsMarkup() {
		return "<div class=\"sec-title_dots\"><span></span><span></span><span></span></div>";
	}

	function setElementContent(element, value, item) {
		if (item.mode === "html") {
			element.innerHTML = value + (item.suffix || "");
			return;
		}

		if (item.mode === "sectionTitle") {
			element.innerHTML = value + dotsMarkup();
			return;
		}

		if (item.mode === "centeredSectionTitle") {
			element.innerHTML = dotsMarkup() + value + dotsMarkup();
			return;
		}

		if (item.mode === "stepLabel") {
			var number = element.querySelector("span") ? element.querySelector("span").textContent : "";
			element.innerHTML = "<span>" + number + "</span>" + value;
			return;
		}

		element.textContent = value;
	}

	function applyTranslations(language) {
		document.documentElement.lang = language;
		document.title = t(language, "meta.title");

		document.querySelectorAll("[data-i18n]").forEach(function (element) {
			element.textContent = t(language, element.getAttribute("data-i18n"));
		});

		document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
			element.innerHTML = t(language, element.getAttribute("data-i18n-html"));
		});

		document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
			element.setAttribute("placeholder", t(language, element.getAttribute("data-i18n-placeholder")));
		});

		selectorMap.forEach(function (item) {
			document.querySelectorAll(item.selector).forEach(function (element) {
				setElementContent(element, t(language, item.key), item);
			});
		});

		document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
			var isActive = button.getAttribute("data-lang-switch") === language;
			button.classList.toggle("active", isActive);
			button.setAttribute("aria-pressed", isActive ? "true" : "false");
		});
	}

	function setLanguage(language) {
		var nextLanguage = translations[language] ? language : defaultLanguage;
		localStorage.setItem(storageKey, nextLanguage);
		applyTranslations(nextLanguage);
	}

	function init() {
		var savedLanguage = localStorage.getItem(storageKey);
		var language = translations[savedLanguage] ? savedLanguage : defaultLanguage;

		document.addEventListener("click", function (event) {
			var button = event.target.closest("[data-lang-switch]");
			if (!button) {
				return;
			}

			setLanguage(button.getAttribute("data-lang-switch"));
		});

		applyTranslations(language);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
