(function () {
	"use strict";

	var storageKey = "octo-language";
	var languageParam = "lang";
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
			"legal.terms.title": "Conditions générales de vente",
			"legal.terms.breadcrumb": "CGV",
			"legal.notice.big": "Légal",
			"legal.notice.title": "Mentions légales",
			"legal.notice.breadcrumb": "Mentions légales",
			"legal.cookies.big": "Cookies",
			"legal.cookies.title": "Politique de cookies",
			"legal.cookies.breadcrumb": "Cookies",
			"legal.country.kicker": "Sélection du pays",
			"legal.country.title": "Choisissez votre pays avant de consulter les mentions légales",
			"legal.country.text": "La clause de droit applicable et de juridiction s'adapte au pays sélectionné.",
			"legal.country.madagascar": "Madagascar",
			"legal.country.france": "France",
			"legal.country.change": "Modifier le pays",
			"cta.start": "Démarrer",
			"cta.work": "Travailler avec nous",
			"cta.services": "Voir nos services",
			"cta.contact": "Nous contacter",
			"cta.contactNow": "Contacter maintenant",
			"search.placeholder": "Rechercher",
			"top.email": "contact@octo.fr",
			"top.address": "<span class=\"icon fa-classic fa-solid fa-location-dot fa-fw\"></span>Paris, France / Antananarivo, Madagascar",
			"sidebar.title": "À propos <span>OCTO</span>",
			"sidebar.text": "<p>OCTO est une agence portée par une vision humaine du digital, qui vous conseille et vous soutient durablement dans vos projets.</p><p>Nous accompagnons les entreprises dans leur transformation digitale en leur apportant des solutions innovantes et un accompagnement stratégique adaptés à leurs objectifs. Notre approche vise à simplifier les processus, améliorer la performance et optimiser les ressources afin de permettre à chaque organisation de gagner en efficacité et de se concentrer sur son cœur de métier.</p><p>Chez OCTO, nous croyons que le numérique est un véritable levier de croissance, capable de réduire les contraintes opérationnelles et de créer de nouvelles opportunités pour les entreprises de toutes tailles.</p>",
			"sidebar.item1": "Conseil stratégique",
			"sidebar.item2": "Développement digital",
			"sidebar.item3": "Mise en œuvre des solutions",
			"sidebar.item4": "Suivi et amélioration continue",
			"sidebar.addressLabel": "Adresse",
			"sidebar.address": "Paris, France / Antananarivo, Madagascar",
			"sidebar.emailLabel": "Email",
			"sidebar.email": "contact@octo.fr",
			"sidebar.contactLabel": "Contact",
			"sidebar.contact": "WhatsApp +33 / Ligne +261",
			"sidebar.subscribe": "Abonnez-vous !",
			"sidebar.emailPlaceholder": "Votre email",
			"sidebar.subscribeAction": "S'abonner",
			"hero.eyebrow": "Libérez votre potentiel digital",
			"hero.title": "Des produits <span>digitaux</span> utiles, fiables et évolutifs",
			"hero.slide1.eyebrow": "Transformation digitale",
			"hero.slide1.title": "Des plateformes <span>web</span> pensées pour vos opérations",
			"hero.slide2.eyebrow": "Design & expérience",
			"hero.slide2.title": "Des interfaces <span>claires</span> pour vos utilisateurs",
			"hero.slide3.eyebrow": "Applications métier",
			"hero.slide3.title": "Des outils <span>mobiles</span> fiables pour vos équipes",
			"hero.reviews": "Clients accompagnés",
			"clients.title": "Nous accompagnons les entreprises dans leur transformation digitale",
			"about.eyebrow": "À propos",
			"about.title": "Une agence portée par une vision humaine du digital",
			"about.text": "<p>Nous accompagnons les entreprises dans leur transformation digitale en leur apportant des solutions innovantes et un accompagnement stratégique adaptés à leurs objectifs.</p><p>Notre approche vise à simplifier les processus, améliorer la performance et optimiser les ressources afin de permettre à chaque organisation de gagner en efficacité et de se concentrer sur son cœur de métier.</p><p>Chez OCTO, nous croyons que le numérique est un véritable levier de croissance, capable de réduire les contraintes opérationnelles et de créer de nouvelles opportunités pour les entreprises de toutes tailles.</p>",
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
			"services.maintenance": "Maintenance & support",
			"services.outsourcing": "Externalisation / équipe dédiée",
			"services.digitalization": "Accompagnement à la digitalisation",
			"services.webText": "Sites vitrines, e-commerce et plateformes web sur-mesure, rapides, sécurisés et faciles à faire évoluer.",
			"services.mobileText": "Applications iOS et Android pensées pour vos besoins métier, de l'expérience utilisateur à la publication.",
			"services.softwareText": "Outils internes, gestion de stock, suivi logistique ou plateformes SaaS adaptés à votre façon de travailler.",
			"services.uxText": "Interfaces claires, parcours intuitifs, logo, charte graphique et supports visuels cohérents.",
			"services.maintenanceText": "Mises à jour de sécurité, corrections de bugs, petites évolutions et suivi technique dans la durée.",
			"services.outsourcingText": "Développeurs et designers intégrés à votre organisation avec flexibilité, suivi collaboratif et confidentialité.",
			"services.digitalizationText": "Diagnostic, recommandation d'outils, mise en place progressive et formation des équipes, sans jargon inutile.",
			"services.tag.strategy": "Stratégie",
			"services.tag.design": "Design",
			"services.tag.dev": "Développement",
			"services.tag.support": "Support",
			"offers.eyebrow": "Offres",
			"offers.title": "Trois formats pour avancer avec OCTO",
			"offers.cmsLabel": "CMS",
			"offers.cmsTitle": "CMS WordPress / PrestaShop / Drupal",
			"offers.cmsPrice": "60€ par jour",
			"offers.cmsItem1": "Un chef de projet",
			"offers.cmsItem2": "Réduction progressive selon le volume apporté",
			"offers.cmsItem3": "Des équipes dédiées à vos projets",
			"offers.regieLabel": "Régie",
			"offers.regieTitle": "Développeur web full-stack à temps plein",
			"offers.regiePrice": "850€ / développement",
			"offers.regieItem1": "Un chef de projet",
			"offers.regieItem2": "8h de travail par jour avec 1h de pause",
			"offers.regieItem3": "Une équipe qui s'adapte à vos horaires",
			"offers.regieItem4": "Pas de contrainte de technologie",
			"offers.customLabel": "Sur mesure",
			"offers.customTitle": "Développement sur mesure",
			"offers.customPrice": "85€ / jour",
			"offers.customItem1": "Un chef de projet",
			"offers.customItem2": "Réduction progressive selon le volume apporté",
			"offers.customItem3": "Des équipes dédiées à vos projets",
			"tech.eyebrow": "Technologies",
			"tech.title": "Une stack fiable pour externaliser efficacement vos projets digitaux",
			"tech.text": "OCTO est une agence web offshore qui combine expertise technique et efficacité opérationnelle. Nous utilisons des technologies fiables comme WordPress, PrestaShop, Laravel et Flutter pour développer des sites vitrines, des e-commerces, des projets web sur mesure et des applications mobiles. Notre approche franco-malgache facilite la communication avec les équipes françaises et internationales, avec des livrables alignés sur les standards européens.",
			"tech.note": "Remarque : la technologie n'est jamais imposée. Elle est choisie selon vos objectifs, votre budget et la maintenabilité du projet.",
			"homeProjects.eyebrow": "Réalisations",
			"homeProjects.title": "Quelques-uns des derniers projets que nous avons réalisés",
			"homeProjects.text": "Des interfaces de sites vitrines, plateformes web et applications mobiles, présentées comme travaux réalisés sans afficher les commanditaires.",
			"homeProjects.siteType": "Site vitrine",
			"homeProjects.siteTitle": "Interface corporate claire et évolutive",
			"homeProjects.ecommerceType": "E-commerce",
			"homeProjects.ecommerceTitle": "Parcours d'achat et gestion catalogue",
			"homeProjects.mobileType": "Application mobile",
			"homeProjects.mobileTitle": "Interface métier pour équipes terrain",
			"homeProjects.read": "Lire la suite",
			"testimonial.eyebrow": "Contact",
			"testimonial.title": "Parlons de votre projet",
			"testimonial.text": "Notre équipe d'experts est à votre écoute pour vous conseiller et vous accompagner à chaque étape de votre projet. Contactez-nous dès aujourd'hui afin de bénéficier d'un accompagnement personnalisé et de solutions conçues pour répondre efficacement à vos enjeux.",
			"testimonial.talk": "Discutons",
			"contact.methodsTitle": "Plusieurs moyens de nous contacter",
			"contact.callTitle": "Appelez-nous",
			"contact.callText": "Échangez directement avec l'un de nos conseillers pour obtenir des informations ou discuter de votre projet.",
			"contact.emailTitle": "Envoyez-nous un e-mail",
			"contact.emailText": "Décrivez-nous votre besoin et nous vous répondrons dans les meilleurs délais avec une solution adaptée.",
			"contact.whatsappTitle": "Contactez-nous sur WhatsApp",
			"contact.whatsappText": "Discutez rapidement avec notre équipe pour obtenir des réponses immédiates ou un premier accompagnement.",
			"contact.visitTitle": "Rendez-nous visite",
			"contact.visitText": "Rencontrez notre équipe dans nos bureaux afin d'échanger sur votre projet et bénéficier de conseils personnalisés.",
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
			"footer.email": "contact@octo.fr",
			"footer.phone": "+33 WhatsApp / +261",
			"footer.terms": "CGV",
			"footer.legal": "Mentions légales",
			"footer.cookies": "Politique de cookies",
			"footer.copyright": "OCTO © 2026. Tous droits réservés."
		},
		en: {
			"meta.title": "OCTO | Digital agency",
			"nav.home": "Home",
			"nav.about": "About",
			"nav.services": "Our services",
			"nav.work": "Our work",
			"nav.blog": "Articles",
			"nav.contact": "Contact us",
			"legal.terms.title": "Sales Terms",
			"legal.terms.breadcrumb": "Sales Terms",
			"legal.notice.big": "Legal",
			"legal.notice.title": "Legal Notice",
			"legal.notice.breadcrumb": "Legal Notice",
			"legal.cookies.big": "Cookies",
			"legal.cookies.title": "Cookie Policy",
			"legal.cookies.breadcrumb": "Cookies",
			"legal.country.kicker": "Country selection",
			"legal.country.title": "Choose your country before reading the legal notice",
			"legal.country.text": "The applicable law and jurisdiction clause adapts to the selected country.",
			"legal.country.madagascar": "Madagascar",
			"legal.country.france": "France",
			"legal.country.change": "Change country",
			"cta.start": "Get started",
			"cta.work": "Work with us",
			"cta.services": "View services",
			"cta.contact": "Contact us",
			"cta.contactNow": "Contact now",
			"search.placeholder": "Search",
			"top.email": "contact@octo.fr",
			"top.address": "<span class=\"icon fa-classic fa-solid fa-location-dot fa-fw\"></span>Paris, France / Antananarivo, Madagascar",
			"sidebar.title": "About <span>OCTO</span>",
			"sidebar.text": "<p>OCTO is an agency driven by a human vision of digital work, advising you and supporting your projects over the long term.</p><p>We support companies through their digital transformation by providing innovative solutions and strategic guidance tailored to their goals. Our approach simplifies processes, improves performance and optimizes resources so every organization can become more efficient and focus on its core business.</p><p>At OCTO, we believe digital technology is a true growth driver, able to reduce operational constraints and create new opportunities for companies of every size.</p>",
			"sidebar.item1": "Strategic consulting",
			"sidebar.item2": "Digital development",
			"sidebar.item3": "Solution implementation",
			"sidebar.item4": "Monitoring and continuous improvement",
			"sidebar.addressLabel": "Address",
			"sidebar.address": "Paris, France / Antananarivo, Madagascar",
			"sidebar.emailLabel": "Email",
			"sidebar.email": "contact@octo.fr",
			"sidebar.contactLabel": "Contact",
			"sidebar.contact": "WhatsApp +33 / +261 line",
			"sidebar.subscribe": "Subscribe!",
			"sidebar.emailPlaceholder": "Your email",
			"sidebar.subscribeAction": "Subscribe",
			"hero.eyebrow": "Unlock digital potential",
			"hero.title": "Useful, reliable and scalable <span>digital</span> products",
			"hero.slide1.eyebrow": "Digital transformation",
			"hero.slide1.title": "<span>Web</span> platforms built for your operations",
			"hero.slide2.eyebrow": "Design & experience",
			"hero.slide2.title": "<span>Clear</span> interfaces for your users",
			"hero.slide3.eyebrow": "Business applications",
			"hero.slide3.title": "Reliable <span>mobile</span> tools for your teams",
			"hero.reviews": "Clients supported",
			"clients.title": "We support companies through their digital transformation",
			"about.eyebrow": "About us",
			"about.title": "An agency driven by a human vision of digital work",
			"about.text": "<p>We support companies through their digital transformation by providing innovative solutions and strategic guidance tailored to their goals.</p><p>Our approach simplifies processes, improves performance and optimizes resources so every organization can become more efficient and focus on its core business.</p><p>At OCTO, we believe digital technology is a true growth driver, able to reduce operational constraints and create new opportunities for companies of every size.</p>",
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
			"services.maintenance": "Maintenance & support",
			"services.outsourcing": "Outsourcing / dedicated team",
			"services.digitalization": "Digitalization support",
			"services.webText": "Showcase websites, e-commerce stores and custom web platforms that are fast, secure and easy to evolve.",
			"services.mobileText": "iOS and Android applications designed for your business needs, from user experience to store publication.",
			"services.softwareText": "Internal tools, stock management, logistics tracking or SaaS platforms adapted to the way you work.",
			"services.uxText": "Clear interfaces, intuitive journeys, logo design, brand guidelines and consistent visual assets.",
			"services.maintenanceText": "Security updates, bug fixes, small improvements and long-term technical monitoring.",
			"services.outsourcingText": "Developers and designers integrated into your organization with flexibility, collaborative tracking and confidentiality.",
			"services.digitalizationText": "Diagnosis, tool recommendations, progressive implementation and team training, without unnecessary jargon.",
			"services.tag.strategy": "Strategy",
			"services.tag.design": "Design",
			"services.tag.dev": "Development",
			"services.tag.support": "Support",
			"offers.eyebrow": "Offers",
			"offers.title": "Three ways to move forward with OCTO",
			"offers.cmsLabel": "CMS",
			"offers.cmsTitle": "WordPress / PrestaShop / Drupal CMS",
			"offers.cmsPrice": "€60 per day",
			"offers.cmsItem1": "A project manager",
			"offers.cmsItem2": "Progressive discount based on volume",
			"offers.cmsItem3": "Dedicated teams for your projects",
			"offers.regieLabel": "Staffing",
			"offers.regieTitle": "Full-time full-stack web developer",
			"offers.regiePrice": "€850 / development",
			"offers.regieItem1": "A project manager",
			"offers.regieItem2": "8 working hours per day with a 1-hour break",
			"offers.regieItem3": "A team that adapts to your schedule",
			"offers.regieItem4": "No technology constraint",
			"offers.customLabel": "Custom",
			"offers.customTitle": "Custom development",
			"offers.customPrice": "€85 / day",
			"offers.customItem1": "A project manager",
			"offers.customItem2": "Progressive discount based on volume",
			"offers.customItem3": "Dedicated teams for your projects",
			"tech.eyebrow": "Technologies",
			"tech.title": "A reliable stack to outsource your digital projects efficiently",
			"tech.text": "OCTO is an offshore web agency combining technical expertise with operational efficiency. We use reliable technologies such as WordPress, PrestaShop, Laravel and Flutter to build showcase websites, e-commerce platforms, custom web projects and mobile applications. Our French-Malagasy approach makes communication easier for French and international teams, with deliverables aligned with European standards.",
			"tech.note": "Note: technology is never imposed. It is selected according to your goals, budget and long-term maintainability.",
			"homeProjects.eyebrow": "Work",
			"homeProjects.title": "A few of the latest projects we have delivered",
			"homeProjects.text": "Showcase website, web platform and mobile app interfaces, presented as completed work without displaying the commissioning clients.",
			"homeProjects.siteType": "Showcase website",
			"homeProjects.siteTitle": "Clear, scalable corporate interface",
			"homeProjects.ecommerceType": "E-commerce",
			"homeProjects.ecommerceTitle": "Shopping journey and catalog management",
			"homeProjects.mobileType": "Mobile app",
			"homeProjects.mobileTitle": "Business interface for field teams",
			"homeProjects.read": "Read more",
			"testimonial.eyebrow": "Contact",
			"testimonial.title": "Let's talk about your project",
			"testimonial.text": "Our expert team is ready to listen, advise you and support you at every stage of your project. Contact us today to benefit from personalized guidance and solutions designed to address your challenges effectively.",
			"testimonial.talk": "Let's talk",
			"contact.methodsTitle": "Several ways to contact us",
			"contact.callTitle": "Call us",
			"contact.callText": "Speak directly with one of our advisors to get information or discuss your project.",
			"contact.emailTitle": "Send us an email",
			"contact.emailText": "Tell us what you need and we will reply quickly with a suitable solution.",
			"contact.whatsappTitle": "Contact us on WhatsApp",
			"contact.whatsappText": "Chat quickly with our team to get immediate answers or first guidance.",
			"contact.visitTitle": "Visit us",
			"contact.visitText": "Meet our team at our office to discuss your project and receive personalized advice.",
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
			"footer.email": "contact@octo.fr",
			"footer.phone": "+33 WhatsApp / +261",
			"footer.terms": "Sales Terms",
			"footer.legal": "Legal Notice",
			"footer.cookies": "Cookie Policy",
			"footer.copyright": "OCTO © 2026. All rights reserved."
		}
	};

	function isKnownLanguage(language) {
		return Boolean(translations[language]);
	}

	function storedLanguage() {
		try {
			return localStorage.getItem(storageKey);
		} catch (error) {
			return null;
		}
	}

	function saveLanguage(language) {
		try {
			localStorage.setItem(storageKey, language);
		} catch (error) {
			return;
		}
	}

	function languageFromUrl() {
		try {
			var value = new URLSearchParams(window.location.search).get(languageParam);
			return isKnownLanguage(value) ? value : null;
		} catch (error) {
			return null;
		}
	}

	function normalizeLanguage(language) {
		return isKnownLanguage(language) ? language : defaultLanguage;
	}

	function currentLanguage() {
		var urlLanguage = languageFromUrl();
		if (urlLanguage) {
			saveLanguage(urlLanguage);
			return urlLanguage;
		}

		return normalizeLanguage(storedLanguage());
	}

	function syncCurrentUrlLanguage(language) {
		if (!window.history || !window.history.replaceState) {
			return;
		}

		try {
			var url = new URL(window.location.href);
			url.searchParams.set(languageParam, language);
			var nextUrl = window.location.protocol === "file:" ? url.href : url.pathname + url.search + url.hash;
			window.history.replaceState(null, document.title, nextUrl);
		} catch (error) {
			return;
		}
	}

	function hasExternalScheme(href) {
		return /^[a-z][a-z0-9+.-]*:/i.test(href) || href.indexOf("//") === 0;
	}

	function withLanguageParam(href, language) {
		if (!href || href.charAt(0) === "#" || hasExternalScheme(href)) {
			return href;
		}

		var hash = "";
		var hashIndex = href.indexOf("#");
		var hrefWithoutHash = href;
		if (hashIndex !== -1) {
			hash = href.slice(hashIndex);
			hrefWithoutHash = href.slice(0, hashIndex);
		}

		var path = hrefWithoutHash;
		var query = "";
		var queryIndex = hrefWithoutHash.indexOf("?");
		if (queryIndex !== -1) {
			path = hrefWithoutHash.slice(0, queryIndex);
			query = hrefWithoutHash.slice(queryIndex + 1);
		}

		if (!/\.html$/i.test(path)) {
			return href;
		}

		var params = new URLSearchParams(query);
		params.set(languageParam, language);

		return path + "?" + params.toString() + hash;
	}

	function syncLanguageLinks(language) {
		document.querySelectorAll("a[href]").forEach(function (link) {
			var originalHref = link.getAttribute("data-original-href");
			if (!originalHref) {
				originalHref = link.getAttribute("href") || "";
				link.setAttribute("data-original-href", originalHref);
			}

			link.setAttribute("href", withLanguageParam(originalHref, language));
		});
	}

	var selectorMap = [
		{ selector: ".header-top_list li:nth-child(2), .header-top_list-two li:nth-child(2)", key: "top.address", mode: "html" },
		{ selector: ".main-slider .swiper-slide[data-hero-slide=\"web-platforms\"] .slider-one_title", key: "hero.slide1.eyebrow" },
		{ selector: ".main-slider .swiper-slide[data-hero-slide=\"web-platforms\"] .slider-one_heading", key: "hero.slide1.title", mode: "html" },
		{ selector: ".main-slider .swiper-slide[data-hero-slide=\"interface-design\"] .slider-one_title", key: "hero.slide2.eyebrow" },
		{ selector: ".main-slider .swiper-slide[data-hero-slide=\"interface-design\"] .slider-one_heading", key: "hero.slide2.title", mode: "html" },
		{ selector: ".main-slider .swiper-slide[data-hero-slide=\"mobile-tools\"] .slider-one_title", key: "hero.slide3.eyebrow" },
		{ selector: ".main-slider .swiper-slide[data-hero-slide=\"mobile-tools\"] .slider-one_heading", key: "hero.slide3.title", mode: "html" },
		{ selector: ".slider-one_button .text-one, .slider-one_button .text-two", key: "cta.work" },
		{ selector: ".slider-one_options .service-btn", key: "cta.services", mode: "html", suffix: " <i class=\"fa-arrow-right\"></i>" },
		{ selector: ".slider-one_reviews span", key: "hero.reviews" },
		{ selector: ".clients-one_title", key: "clients.title", mode: "html" },
		{ selector: ".about-one .sec-title_title", key: "about.eyebrow", mode: "sectionTitle" },
		{ selector: ".about-one .sec-title_heading", key: "about.title" },
		{ selector: ".about-one_text", key: "about.text", mode: "html" },
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
		{ selector: ".offer-one_title:nth-child(5) .offer-one_heading a", key: "services.maintenance" },
		{ selector: ".offer-one_title:nth-child(6) .offer-one_heading a", key: "services.outsourcing" },
		{ selector: ".offer-one_title:nth-child(7) .offer-one_heading a", key: "services.digitalization" },
		{ selector: ".offer-one_tags li:nth-child(1) a", key: "services.tag.strategy" },
		{ selector: ".offer-one_tags li:nth-child(2) a", key: "services.tag.design" },
		{ selector: ".offer-one_tags li:nth-child(3) a", key: "services.tag.dev" },
		{ selector: ".offer-one_tags li:nth-child(4) a", key: "services.tag.support" },
		{ selector: ".octo-offers .sec-title_title", key: "offers.eyebrow", mode: "centeredSectionTitle" },
		{ selector: ".octo-home-projects .sec-title_title", key: "homeProjects.eyebrow", mode: "centeredSectionTitle" },
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

	var pageContentMap = [
		{ pages: ["services.html"], selector: ".page-title h1", fr: "Nos services", en: "Our services" },
		{ pages: ["services.html"], selector: ".bread-crumb li:last-child", fr: "Services", en: "Our services" },
		{ pages: ["services.html"], selector: ".octo-services-page .sec-title_title", fr: "Ce que nous proposons", en: "What we offer", mode: "centeredSectionTitle" },
		{ pages: ["services.html"], selector: ".octo-services-page .sec-title_heading", fr: "Des solutions digitales concrètes pour votre activité", en: "Concrete digital solutions for your business" },
		{ pages: ["services.html"], selector: ".octo-services-page .sec-title_text", fr: "OCTO conçoit, développe et maintient des outils adaptés à vos objectifs, sans vous imposer de solution standardisée.", en: "OCTO designs, develops and maintains tools tailored to your goals, without imposing a standardized solution." },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(1) h3 a", fr: "Développement Web", en: "Web Development" },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(1) p", fr: "Sites vitrines, boutiques e-commerce et plateformes web sur-mesure, rapides, sécurisées et évolutives.", en: "Showcase websites, e-commerce stores and custom web platforms that are fast, secure and scalable." },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(2) h3 a", fr: "Développement Mobile", en: "Mobile Development" },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(2) p", fr: "Applications iOS et Android pensées pour un besoin métier précis, de l'UX à la publication.", en: "iOS and Android apps designed for a precise business need, from UX to publication." },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(3) h3 a", fr: "Logiciel sur-mesure", en: "Custom software" },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(3) p", fr: "Outils internes, gestion de stock, suivi logistique et plateformes SaaS adaptés à votre façon de travailler.", en: "Internal tools, stock management, logistics tracking and SaaS platforms adapted to the way you work." },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(4) h3 a", fr: "Design UI/UX & Identité visuelle", en: "UI/UX Design & Visual Identity" },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(4) p", fr: "Interfaces claires, parcours intuitifs, logo, charte graphique et supports cohérents.", en: "Clear interfaces, intuitive journeys, logo design, brand guidelines and consistent assets." },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(5) h3 a", fr: "Maintenance & Support", en: "Maintenance & Support" },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(5) p", fr: "Mises à jour, corrections, petites évolutions et suivi technique pour garder vos outils fiables.", en: "Updates, fixes, small improvements and technical monitoring to keep your tools reliable." },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(6) h3 a", fr: "Externalisation / Mise à disposition d'équipe", en: "Outsourcing / Dedicated team" },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(6) p", fr: "Développeurs et designers intégrés à votre organisation, avec flexibilité, suivi et confidentialité.", en: "Developers and designers integrated into your organization, with flexibility, tracking and confidentiality." },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(7) h3 a", fr: "Accompagnement à la digitalisation", en: "Digitalization support" },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-service-card:nth-child(7) p", fr: "Diagnostic, conseil, choix d'outils, mise en place progressive et accompagnement des équipes.", en: "Diagnosis, consulting, tool selection, progressive implementation and team support." },
		{ pages: ["services.html"], selector: ".octo-services-page .octo-link", fr: "Voir le détail", en: "View details", mode: "html", suffix: " <span class=\"fa-solid fa-arrow-right\"></span>" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .sec-title_title", fr: "Offres", en: "Offers", mode: "centeredSectionTitle" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .sec-title_heading", fr: "Trois formats pour avancer avec OCTO", en: "Three ways to move forward with OCTO" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(1) .octo-offer-card_label, #offres .row > div:nth-child(1) .octo-offer-card_label", fr: "CMS", en: "CMS" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(1) .octo-offer-card h3, #offres .row > div:nth-child(1) .octo-offer-card h3", fr: "CMS WordPress / PrestaShop / Drupal", en: "WordPress / PrestaShop / Drupal CMS" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(1) .octo-offer-card_price, #offres .row > div:nth-child(1) .octo-offer-card_price", fr: "60€ par jour", en: "€60 per day" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(1) li:nth-child(1), #offres .row > div:nth-child(1) li:nth-child(1)", fr: "Un chef de projet", en: "A project manager" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(1) li:nth-child(2), #offres .row > div:nth-child(1) li:nth-child(2)", fr: "Réduction progressive selon le volume apporté", en: "Progressive discount based on volume" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(1) li:nth-child(3), #offres .row > div:nth-child(1) li:nth-child(3)", fr: "Des équipes dédiées à vos projets", en: "Dedicated teams for your projects" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(2) .octo-offer-card_label, #offres .row > div:nth-child(2) .octo-offer-card_label", fr: "Régie", en: "Staffing" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(2) .octo-offer-card h3, #offres .row > div:nth-child(2) .octo-offer-card h3", fr: "Développeur Web full-stack à temps plein", en: "Full-time full-stack web developer" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(2) .octo-offer-card_price, #offres .row > div:nth-child(2) .octo-offer-card_price", fr: "850€ / développement", en: "€850 / development" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(2) li:nth-child(1), #offres .row > div:nth-child(2) li:nth-child(1)", fr: "Un chef de projet", en: "A project manager" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(2) li:nth-child(2), #offres .row > div:nth-child(2) li:nth-child(2)", fr: "8h de travail par jour avec 1h de pause", en: "8 working hours per day with a 1-hour break" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(2) li:nth-child(3), #offres .row > div:nth-child(2) li:nth-child(3)", fr: "Une équipe qui s'adapte à vos horaires", en: "A team that adapts to your schedule" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(2) li:nth-child(4), #offres .row > div:nth-child(2) li:nth-child(4)", fr: "Pas de contrainte de technologie", en: "No technology constraint" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(3) .octo-offer-card_label, #offres .row > div:nth-child(3) .octo-offer-card_label", fr: "Sur mesure", en: "Custom" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(3) .octo-offer-card h3, #offres .row > div:nth-child(3) .octo-offer-card h3", fr: "Développement sur mesure", en: "Custom development" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(3) .octo-offer-card_price, #offres .row > div:nth-child(3) .octo-offer-card_price", fr: "85€ / jour", en: "€85 / day" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(3) li:nth-child(1), #offres .row > div:nth-child(3) li:nth-child(1)", fr: "Un chef de projet", en: "A project manager" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(3) li:nth-child(2), #offres .row > div:nth-child(3) li:nth-child(2)", fr: "Réduction progressive selon le volume apporté", en: "Progressive discount based on volume" },
		{ pages: ["services.html", "service-detail.html"], selector: ".octo-offers .row > div:nth-child(3) li:nth-child(3), #offres .row > div:nth-child(3) li:nth-child(3)", fr: "Des équipes dédiées à vos projets", en: "Dedicated teams for your projects" },

		{ pages: ["project.html"], selector: ".page-title h1", fr: "Nos réalisations", en: "Our work" },
		{ pages: ["project.html"], selector: ".bread-crumb li:last-child", fr: "Réalisations", en: "Work" },
		{ pages: ["project.html"], selector: ".octo-project-page .sec-title_title", fr: "Réalisations", en: "Work", mode: "centeredSectionTitle" },
		{ pages: ["project.html"], selector: ".octo-project-page .sec-title_heading", fr: "Des projets pensés pour des besoins concrets", en: "Projects designed for concrete needs" },
		{ pages: ["project.html"], selector: ".gallery-block-one:nth-child(1) .gallery-block_one-designation", fr: "Site vitrine", en: "Showcase website" },
		{ pages: ["project.html"], selector: ".gallery-block-one:nth-child(1) .gallery-block-one_title a", fr: "Interface corporate claire et évolutive", en: "Clear, scalable corporate interface" },
		{ pages: ["project.html"], selector: ".gallery-block-one:nth-child(2) .gallery-block_one-designation", fr: "Web / E-commerce", en: "Web / E-commerce" },
		{ pages: ["project.html"], selector: ".gallery-block-one:nth-child(2) .gallery-block-one_title a", fr: "Plateforme e-commerce sur-mesure", en: "Custom e-commerce platform" },
		{ pages: ["project.html"], selector: ".gallery-block-one:nth-child(3) .gallery-block_one-designation", fr: "Mobile / Opérations", en: "Mobile / Operations" },
		{ pages: ["project.html"], selector: ".gallery-block-one:nth-child(3) .gallery-block-one_title a", fr: "Application mobile métier", en: "Business mobile app" },
		{ pages: ["project.html"], selector: ".gallery-block-one:nth-child(4) .gallery-block_one-designation", fr: "Logiciel / SaaS", en: "Software / SaaS" },
		{ pages: ["project.html"], selector: ".gallery-block-one:nth-child(4) .gallery-block-one_title a", fr: "Outil interne de pilotage", en: "Internal management tool" },

		{ pages: ["blog.html"], selector: ".page-title h1", fr: "Blog OCTO", en: "OCTO Articles" },
		{ pages: ["blog.html"], selector: ".bread-crumb li:last-child", fr: "Blog", en: "Articles" },
		{ pages: ["blog.html"], selector: ".octo-blog-page .sec-title_title", fr: "Blog", en: "Articles", mode: "centeredSectionTitle" },
		{ pages: ["blog.html"], selector: ".octo-blog-page .sec-title_heading", fr: "Conseils et repères pour vos projets digitaux", en: "Guidance and benchmarks for your digital projects" },
		{ pages: ["blog.html"], selector: ".octo-blog-page .news-block_one:nth-child(1) .news-block_one-title a", fr: "Comment structurer un projet digital efficace", en: "How to structure an effective digital project" },
		{ pages: ["blog.html"], selector: ".octo-blog-page .news-block_one:nth-child(1) .octo-card-text", fr: "Un projet digital réussit mieux quand les objectifs, les utilisateurs, les contraintes et les étapes de livraison sont cadrés dès le départ.", en: "A digital project succeeds more easily when goals, users, constraints and delivery stages are framed from the start." },
		{ pages: ["blog.html"], selector: ".octo-blog-page .news-block_one:nth-child(2) .news-block_one-title a", fr: "Créer du contenu utile pour attirer les bons clients", en: "Create useful content to attract the right clients" },
		{ pages: ["blog.html"], selector: ".octo-blog-page .news-block_one:nth-child(2) .octo-card-text", fr: "Le contenu devient un levier commercial quand il répond aux vraies questions des clients et met en avant l'expertise de l'entreprise.", en: "Content becomes a business driver when it answers real client questions and showcases the company's expertise." },
		{ pages: ["blog.html"], selector: ".octo-blog-page .news-block_one:nth-child(3) .news-block_one-title a", fr: "Réussir sa transformation digitale étape par étape", en: "Succeed in digital transformation step by step" },
		{ pages: ["blog.html"], selector: ".octo-blog-page .news-block_one:nth-child(3) .octo-card-text", fr: "La transformation digitale est plus durable quand elle avance par priorités, avec des outils adaptés et un accompagnement clair des équipes.", en: "Digital transformation is more sustainable when it moves forward by priorities, with suitable tools and clear team support." },
		{ pages: ["blog.html"], selector: ".octo-blog-page .news-block_one-meta li:nth-child(2)", fr: "<span class=\"icon fa-solid fa-user fa-fw\"></span>Conseil", en: "<span class=\"icon fa-solid fa-user fa-fw\"></span>Consulting", mode: "html" },

		{ pages: ["contact.html"], selector: ".page-title h1", fr: "Contactez OCTO", en: "Contact OCTO" },
		{ pages: ["contact.html"], selector: ".bread-crumb li:last-child", fr: "Contact", en: "Contact us" },
		{ pages: ["contact.html"], selector: ".octo-contact-page .sec-title_title", fr: "Contact", en: "Contact us", mode: "sectionTitle" },
		{ pages: ["contact.html"], selector: ".octo-contact-page .sec-title_heading", fr: "Parlons de votre projet", en: "Let's talk about your project" },
		{ pages: ["contact.html"], selector: ".octo-contact-page .octo-rich-text p", fr: "Notre équipe d'experts est à votre écoute pour vous conseiller et vous accompagner à chaque étape de votre projet. Contactez-nous afin de bénéficier d'un accompagnement personnalisé et de solutions conçues pour répondre efficacement à vos enjeux.", en: "Our expert team is ready to listen, advise you and support you at every stage of your project. Contact us to benefit from personalized guidance and solutions designed to address your challenges effectively." },
		{ pages: ["contact.html"], selector: ".octo-contact-method:nth-child(1) strong", fr: "Appelez-nous", en: "Call us" },
		{ pages: ["contact.html"], selector: ".octo-contact-method:nth-child(1) em", fr: "Échangez directement avec un conseiller.", en: "Speak directly with an advisor." },
		{ pages: ["contact.html"], selector: ".octo-contact-method:nth-child(2) strong", fr: "Envoyez-nous un e-mail", en: "Send us an email" },
		{ pages: ["contact.html"], selector: ".octo-contact-method:nth-child(2) em", fr: "Décrivez votre besoin et recevez une réponse adaptée.", en: "Describe your need and receive a suitable response." },
		{ pages: ["contact.html"], selector: ".octo-contact-method:nth-child(3) strong", fr: "WhatsApp", en: "WhatsApp" },
		{ pages: ["contact.html"], selector: ".octo-contact-method:nth-child(3) em", fr: "Obtenez rapidement une première orientation.", en: "Quickly get initial guidance." },
		{ pages: ["contact.html"], selector: ".octo-contact-method:nth-child(4) strong", fr: "Rendez-nous visite", en: "Visit us" },
		{ pages: ["contact.html"], selector: ".octo-contact-method:nth-child(4) em", fr: "Tananarive, Madagascar.", en: "Antananarivo, Madagascar." },
		{ pages: ["contact.html"], selector: ".octo-contact-page .btn-style-one .text-one, .octo-contact-page .btn-style-one .text-two", fr: "Envoyer le message", en: "Send message" },

		{ pages: ["project-detail.html"], selector: ".page-title h1", fr: "Détails des réalisations", en: "Work details" },
		{ pages: ["project-detail.html"], selector: ".bread-crumb li:last-child", fr: "Détails des réalisations", en: "Work details" },
		{ pages: ["project-detail.html"], selector: "#site-vitrine-corporate span", fr: "Site vitrine", en: "Showcase website" },
		{ pages: ["project-detail.html"], selector: "#site-vitrine-corporate h2", fr: "Interface corporate claire et évolutive", en: "Clear, scalable corporate interface" },
		{ pages: ["project-detail.html"], selector: "#site-vitrine-corporate p", fr: "Un site vitrine conçu pour présenter une activité avec clarté, valoriser l'offre et faciliter la prise de contact. L'historique détaillé du projet sera complété avec les informations fournies.", en: "A showcase website designed to present an activity clearly, highlight the offer and make contact easier. The detailed project history will be completed with the information provided." },
		{ pages: ["project-detail.html"], selector: "#plateforme-ecommerce h2", fr: "Plateforme e-commerce sur-mesure", en: "Custom e-commerce platform" },
		{ pages: ["project-detail.html"], selector: "#plateforme-ecommerce p", fr: "Une boutique pensée pour vendre en ligne, gérer les contenus, suivre les commandes et rester simple à faire évoluer.", en: "A store designed to sell online, manage content, track orders and remain easy to evolve." },
		{ pages: ["project-detail.html"], selector: "#application-mobile-metier h2", fr: "Application mobile métier", en: "Business mobile app" },
		{ pages: ["project-detail.html"], selector: "#application-mobile-metier p", fr: "Une application iOS et Android pour fluidifier les échanges entre les équipes terrain, les clients et l'administration.", en: "An iOS and Android app to streamline exchanges between field teams, clients and administration." },
		{ pages: ["project-detail.html"], selector: "#outil-pilotage-interne h2", fr: "Outil interne de pilotage", en: "Internal management tool" },
		{ pages: ["project-detail.html"], selector: "#outil-pilotage-interne p", fr: "Un outil de suivi opérationnel pour centraliser les données, automatiser les tâches et piloter les décisions.", en: "An operational tracking tool to centralize data, automate tasks and guide decisions." },
		{ pages: ["project-detail.html"], selector: ".service-detail_list-two li:nth-child(1)", fr: "Cadrage du besoin et des utilisateurs", en: "Framing needs and users" },
		{ pages: ["project-detail.html"], selector: ".service-detail_list-two li:nth-child(2)", fr: "Design d'une interface claire et exploitable", en: "Designing a clear and usable interface" },
		{ pages: ["project-detail.html"], selector: ".service-detail_list-two li:nth-child(3)", fr: "Développement, tests et mise en ligne progressive", en: "Development, testing and progressive launch" },
		{ pages: ["project-detail.html"], selector: "#site-vitrine-corporate .service-detail_list-two li:nth-child(1)", fr: "Structure de pages pensée pour la compréhension rapide", en: "Page structure designed for quick understanding" },
		{ pages: ["project-detail.html"], selector: "#site-vitrine-corporate .service-detail_list-two li:nth-child(2)", fr: "Interface responsive avec contenus faciles à faire évoluer", en: "Responsive interface with content that is easy to evolve" },
		{ pages: ["project-detail.html"], selector: "#site-vitrine-corporate .service-detail_list-two li:nth-child(3)", fr: "Parcours de contact visible et cohérent", en: "Visible and coherent contact journey" },

		{ pages: ["blog-detail.html"], selector: ".page-title h1", fr: "Articles OCTO", en: "OCTO Articles" },
		{ pages: ["blog-detail.html"], selector: ".bread-crumb li:last-child", fr: "Articles", en: "Articles" },
		{ pages: ["blog-detail.html"], selector: "#structurer-projet-digital h2", fr: "Comment structurer un projet digital efficace", en: "How to structure an effective digital project" },
		{ pages: ["blog-detail.html"], selector: "#contenu-utile-clients h2", fr: "Créer du contenu utile pour attirer les bons clients", en: "Create useful content to attract the right clients" },
		{ pages: ["blog-detail.html"], selector: "#transformation-digitale h2", fr: "Réussir sa transformation digitale étape par étape", en: "Succeed in digital transformation step by step" },
		{ pages: ["blog-detail.html"], selector: "#structurer-projet-digital p:nth-of-type(1)", fr: "Un projet digital réussit mieux quand les objectifs, les utilisateurs, les contraintes et les étapes de livraison sont cadrés dès le départ.", en: "A digital project succeeds more easily when goals, users, constraints and delivery stages are framed from the start." },
		{ pages: ["blog-detail.html"], selector: "#contenu-utile-clients p:nth-of-type(1)", fr: "Le contenu devient un levier commercial quand il répond aux vraies questions des clients et met en avant l'expertise de l'entreprise.", en: "Content becomes a business driver when it answers real client questions and showcases the company's expertise." },
		{ pages: ["blog-detail.html"], selector: "#transformation-digitale p:nth-of-type(1)", fr: "La transformation digitale est plus durable quand elle avance par priorités, avec des outils adaptés et un accompagnement clair des équipes.", en: "Digital transformation is more sustainable when it moves forward by priorities, with suitable tools and clear team support." },
		{ pages: ["blog-detail.html"], selector: ".octo-detail-article p:nth-of-type(2)", fr: "Chez OCTO, nous privilégions une approche progressive : comprendre le besoin réel, choisir les bons outils, construire une solution lisible, puis l'améliorer dans le temps avec les retours des utilisateurs.", en: "At OCTO, we favor a progressive approach: understand the real need, choose the right tools, build a clear solution, then improve it over time with user feedback." },
		{ pages: ["blog-detail.html"], selector: ".service-detail_list li:nth-child(1)", fr: "Clarifier les objectifs métier avant la solution technique.", en: "Clarify business goals before the technical solution." },
		{ pages: ["blog-detail.html"], selector: ".service-detail_list li:nth-child(2)", fr: "Prévoir une première version utile, puis l'enrichir étape par étape.", en: "Plan a useful first version, then enrich it step by step." },
		{ pages: ["blog-detail.html"], selector: ".service-detail_list li:nth-child(3)", fr: "Garder un suivi collaboratif pour décider vite et bien.", en: "Keep collaborative tracking to make fast, sound decisions." }
	];

	var pageAttributeMap = [
		{ pages: ["contact.html"], selector: "input[name='name']", attribute: "placeholder", fr: "Votre nom", en: "Your name" },
		{ pages: ["contact.html"], selector: "input[name='email']", attribute: "placeholder", fr: "Votre email", en: "Your email" },
		{ pages: ["contact.html"], selector: "input[name='subject']", attribute: "placeholder", fr: "Sujet du projet", en: "Project subject" },
		{ pages: ["contact.html"], selector: "textarea[name='message']", attribute: "placeholder", fr: "Décrivez votre besoin", en: "Describe your need" }
	];

	var documentTitleTranslations = {
		en: {
			"OCTO | Agence digitale": "OCTO | Digital agency",
			"OCTO | À propos": "OCTO | About",
			"OCTO | Services": "OCTO | Our services",
			"OCTO | Détails des services": "OCTO | Service details",
			"OCTO | Réalisations": "OCTO | Work",
			"OCTO | Détails des réalisations": "OCTO | Work details",
			"OCTO | Blog": "OCTO | Articles",
			"OCTO | Articles": "OCTO | Articles",
			"OCTO | Contact": "OCTO | Contact us",
			"OCTO | Conditions générales de vente": "OCTO | Sales Terms",
			"OCTO | Mentions légales": "OCTO | Legal Notice",
			"OCTO | Politique de cookies": "OCTO | Cookie Policy"
		}
	};

	var autoTextTranslations = {
		en: {
			"Accueil": "Home",
			"À propos": "About",
			"Services": "Our services",
			"Nos réalisations": "Our work",
			"Réalisations": "Work",
			"Détails": "Details",
			"Détails des services": "Service details",
			"Détails des réalisations": "Work details",
			"Blog": "Articles",
			"Articles": "Articles",
			"Contact": "Contact us",
			"CGV": "Sales Terms",
			"Mentions légales": "Legal Notice",
			"Politique de cookies": "Cookie Policy",
			"Conditions générales de vente": "Sales Terms",
			"Contactez OCTO": "Contact OCTO",
			"Blog OCTO": "OCTO Blog",
			"Articles OCTO": "OCTO Articles",
			"Navigation": "Navigation",
			"Prêt à avancer ?": "Ready to move forward?",
			"Parlons de votre projet digital.": "Let's talk about your digital project.",
			"Nous contacter": "Contact us",
			"Démarrer": "Start",
			"Voir le détail": "View details",
			"Conseil": "Consulting",
			"Design": "Design",
			"Développement": "Development",
			"Maintenance": "Maintenance",
			"Support": "Support",
			"Stratégie": "Strategy",
			"Développement Web": "Web Development",
			"Développement web": "Web development",
			"Développement Mobile": "Mobile Development",
			"Développement mobile": "Mobile development",
			"Logiciel sur-mesure": "Custom software",
			"Design UI/UX & Identité visuelle": "UI/UX Design & Visual Identity",
			"Design UI/UX & identité visuelle": "UI/UX design & visual identity",
			"Maintenance & Support": "Maintenance & Support",
			"Maintenance & support": "Maintenance & support",
			"Externalisation / Mise à disposition d'équipe": "Outsourcing / Dedicated team",
			"Externalisation / équipe dédiée": "Outsourcing / dedicated team",
			"Accompagnement à la digitalisation": "Digitalization support",
			"Offres": "Offers",
			"Offres associées": "Related offers",
			"Offres CMS, Régie, Sur mesure": "CMS, staffing and custom offers",
			"Trois formats pour avancer avec OCTO": "Three ways to move forward with OCTO",
			"CMS WordPress / PrestaShop / Drupal": "WordPress / PrestaShop / Drupal CMS",
			"60€ par jour": "€60 per day",
			"Un chef de projet": "A project manager",
			"Réduction progressive selon le volume apporté": "Progressive discount based on volume",
			"Des équipes dédiées à vos projets": "Dedicated teams for your projects",
			"Régie": "Staffing",
			"Développeur Web full-stack à temps plein": "Full-time full-stack web developer",
			"Développeur web full-stack à temps plein": "Full-time full-stack web developer",
			"850€ / développement": "€850 / development",
			"8h de travail par jour avec 1h de pause": "8 working hours per day with a 1-hour break",
			"Une équipe qui s'adapte à vos horaires": "A team that adapts to your schedule",
			"Pas de contrainte de technologie": "No technology constraint",
			"Sur mesure": "Custom",
			"Développement sur mesure": "Custom development",
			"85€ / jour": "€85 / day",
			"Une agence portée par une vision humaine du digital": "An agency driven by a human vision of digital work",
			"OCTO est une agence portée par une vision humaine du digital, qui vous conseille et vous soutient durablement dans vos projets.": "OCTO is an agency driven by a human vision of digital work, advising you and supporting your projects over the long term.",
			"Nous accompagnons les entreprises dans leur transformation digitale en leur apportant des solutions innovantes et un accompagnement stratégique adaptés à leurs objectifs. Notre approche vise à simplifier les processus, améliorer la performance et optimiser les ressources afin de permettre à chaque organisation de gagner en efficacité et de se concentrer sur son cœur de métier.": "We support companies through their digital transformation by providing innovative solutions and strategic guidance tailored to their goals. Our approach simplifies processes, improves performance and optimizes resources so every organization can become more efficient and focus on its core business.",
			"Chez OCTO, nous croyons que le numérique est un véritable levier de croissance, capable de réduire les contraintes opérationnelles et de créer de nouvelles opportunités pour les entreprises de toutes tailles.": "At OCTO, we believe digital technology is a true growth driver, able to reduce operational constraints and create new opportunities for companies of every size.",
			"Notre approche": "Our approach",
			"Un accompagnement clair, de l'idée au déploiement": "Clear support, from idea to deployment",
			"Étape": "Step",
			"Comprendre le projet": "Understand the project",
			"Définir la stratégie": "Define the strategy",
			"Déployer la solution": "Deploy the solution",
			"Suivre et améliorer": "Track and improve",
			"Nous avançons avec méthode pour garder le projet lisible, utile et durable.": "We move forward methodically to keep the project clear, useful and sustainable.",
			"Ce que nous proposons": "What we offer",
			"Nos services": "Our services",
			"Des solutions digitales concrètes pour votre activité": "Concrete digital solutions for your business",
			"OCTO conçoit, développe et maintient des outils adaptés à vos objectifs, sans vous imposer de solution standardisée.": "OCTO designs, develops and maintains tools tailored to your goals, without imposing a standardized solution.",
			"Sites vitrines, boutiques e-commerce et plateformes web sur-mesure, rapides, sécurisées et évolutives.": "Showcase websites, e-commerce stores and custom web platforms that are fast, secure and scalable.",
			"Applications iOS et Android pensées pour un besoin métier précis, de l'UX à la publication.": "iOS and Android apps designed for a precise business need, from UX to publication.",
			"Outils internes, gestion de stock, suivi logistique et plateformes SaaS adaptés à votre façon de travailler.": "Internal tools, stock management, logistics tracking and SaaS platforms adapted to the way you work.",
			"Interfaces claires, parcours intuitifs, logo, charte graphique et supports cohérents.": "Clear interfaces, intuitive journeys, logo design, brand guidelines and consistent assets.",
			"Mises à jour, corrections, petites évolutions et suivi technique pour garder vos outils fiables.": "Updates, fixes, small improvements and technical monitoring to keep your tools reliable.",
			"Développeurs et designers intégrés à votre organisation, avec flexibilité, suivi et confidentialité.": "Developers and designers integrated into your organization, with flexibility, tracking and confidentiality.",
			"Diagnostic, conseil, choix d'outils, mise en place progressive et accompagnement des équipes.": "Diagnosis, consulting, tool selection, progressive implementation and team support.",
			"Nous créons des sites internet sur-mesure, adaptés à vos objectifs : site vitrine pour présenter votre activité, boutique e-commerce pour vendre en ligne, ou plateforme web plus complexe pour vos besoins spécifiques. Notre équipe s'adapte aux technologies les plus pertinentes pour votre projet, sans vous imposer une solution standardisée. Chaque site est pensé pour être rapide, sécurisé, et facile à faire évoluer dans le temps.": "We create custom websites tailored to your goals: showcase websites to present your activity, e-commerce stores to sell online, or more complex web platforms for specific needs. Our team adapts to the technologies that best fit your project, without imposing a standardized solution. Every site is built to be fast, secure and easy to evolve over time.",
			"Nous concevons des applications mobiles iOS et Android sur-mesure, pensées pour répondre à un besoin métier précis : gestion, logistique, services aux clients, ou usage interne. De la conception de l'expérience utilisateur jusqu'à la publication sur les stores, notre équipe vous accompagne à chaque étape, avec une attention particulière portée à la fluidité et à la fiabilité de l'application.": "We design custom iOS and Android mobile apps built around a precise business need: management, logistics, customer services or internal use. From user experience design to store publication, our team supports you at every stage, with particular attention to fluidity and reliability.",
			"Toutes les entreprises n'ont pas les mêmes besoins, et les outils standards du marché ne conviennent pas toujours. Nous développons des logiciels entièrement adaptés à votre activité : gestion de stock, suivi logistique, plateformes SaaS, outils internes de pilotage. L'objectif est simple : un outil pensé pour votre façon de travailler, pas l'inverse.": "Every company has different needs, and standard market tools are not always suitable. We develop software fully adapted to your activity: stock management, logistics tracking, SaaS platforms and internal management tools. The goal is simple: a tool designed around the way you work, not the other way around.",
			"Un bon produit digital ne se limite pas à sa technique : il doit aussi être agréable et intuitif à utiliser. Notre équipe design conçoit des interfaces claires, pensées pour l'expérience de vos utilisateurs (UI/UX), ainsi que des identités visuelles cohérentes pour votre marque (logo, charte graphique, supports visuels). Design et développement travaillent main dans la main pour un résultat homogène du premier croquis à la mise en ligne.": "A good digital product is not only technical: it must also be pleasant and intuitive to use. Our design team creates clear interfaces focused on your users' experience (UI/UX), as well as coherent visual identities for your brand (logo, brand guidelines, visual assets). Design and development work hand in hand for a consistent result from first sketch to launch.",
			"Un site, une application ou un logiciel a besoin d'être entretenu pour rester performant et sécurisé dans le temps. Nous proposons un service de maintenance incluant les mises à jour de sécurité, les corrections de bugs, les petites évolutions et le suivi technique de votre outil. Vous gardez ainsi l'esprit tranquille, avec une équipe qui connaît déjà votre projet et reste disponible en cas de besoin.": "A website, app or software product needs maintenance to remain performant and secure over time. We offer maintenance services including security updates, bug fixes, small improvements and technical monitoring. You keep peace of mind with a team that already knows your project and remains available when needed.",
			"Besoin de renforcer temporairement votre équipe technique sans passer par un recrutement long et coûteux ? Nous mettons à votre disposition un ou plusieurs de nos développeurs ou designers, intégrés à votre organisation le temps nécessaire à votre projet. Vous gardez le contrôle de votre roadmap, nous apportons la compétence et la disponibilité, avec une grande flexibilité selon vos besoins (de quelques semaines à plusieurs mois).": "Need to temporarily strengthen your technical team without a long and costly recruitment process? We provide one or more of our developers or designers, integrated into your organization for the time your project requires. You keep control of your roadmap, while we bring skills and availability with strong flexibility according to your needs, from a few weeks to several months.",
			"Votre entreprise n'a pas encore franchi le cap du digital, ou ne sait pas par où commencer ? Nous vous accompagnons étape par étape : diagnostic de votre situation actuelle, recommandation des outils adaptés à votre activité, mise en place progressive des solutions, et formation de vos équipes. Pas de jargon technique inutile — un accompagnement pensé pour vous faire avancer à votre rythme.": "Your company has not yet made the digital leap, or does not know where to start? We support you step by step: diagnosis of your current situation, recommendation of tools adapted to your activity, progressive implementation of solutions, and training for your teams. No unnecessary technical jargon, just support designed to help you move forward at your own pace.",
			"Pourquoi externaliser chez OCTO ?": "Why outsource with OCTO?",
			"Habitués à collaborer avec des agences, des entreprises et des partenaires techniques, nous nous adaptons à vos méthodes de travail et à vos exigences afin de garantir une collaboration fluide et efficace.": "Used to working with agencies, companies and technical partners, we adapt to your methods and requirements to ensure smooth and efficient collaboration.",
			"La confidentialité est au cœur de nos engagements. Si nécessaire, nous pouvons signer un accord de confidentialité (NDA) garantissant la protection de vos informations et le respect de votre relation avec vos clients. Nous nous engageons notamment à ne jamais solliciter directement vos clients finaux dans le cadre d'une mission réalisée pour votre compte.": "Confidentiality is central to our commitments. If needed, we can sign a non-disclosure agreement (NDA) guaranteeing the protection of your information and respect for your client relationships. In particular, we commit never to directly solicit your end clients as part of a mission carried out on your behalf.",
			"Tout au long du projet, vous bénéficiez d'outils de suivi collaboratifs vous permettant de communiquer facilement avec notre équipe et de suivre en toute transparence l'avancement des travaux.": "Throughout the project, you benefit from collaborative tracking tools that let you communicate easily with our team and transparently monitor progress.",
			"Des projets pensés pour des besoins concrets": "Projects designed for concrete needs",
			"Site vitrine": "Showcase website",
			"Interface corporate claire et évolutive": "Clear, scalable corporate interface",
			"Plateforme e-commerce sur-mesure": "Custom e-commerce platform",
			"Application mobile métier": "Business mobile app",
			"Outil interne de pilotage": "Internal management tool",
			"Mobile / Opérations": "Mobile / Operations",
			"Un site vitrine conçu pour présenter une activité avec clarté, valoriser l'offre et faciliter la prise de contact. L'historique détaillé du projet sera complété avec les informations fournies.": "A showcase website designed to present an activity clearly, highlight the offer and make contact easier. The detailed project history will be completed with the information provided.",
			"Structure de pages pensée pour la compréhension rapide": "Page structure designed for quick understanding",
			"Interface responsive avec contenus faciles à faire évoluer": "Responsive interface with content that is easy to evolve",
			"Parcours de contact visible et cohérent": "Visible and coherent contact journey",
			"Une boutique pensée pour vendre en ligne, gérer les contenus, suivre les commandes et rester simple à faire évoluer.": "A store designed to sell online, manage content, track orders and remain easy to evolve.",
			"Une application iOS et Android pour fluidifier les échanges entre les équipes terrain, les clients et l'administration.": "An iOS and Android app to streamline exchanges between field teams, clients and administration.",
			"Un outil de suivi opérationnel pour centraliser les données, automatiser les tâches et piloter les décisions.": "An operational tracking tool to centralize data, automate tasks and guide decisions.",
			"Cadrage du besoin et des utilisateurs": "Framing needs and users",
			"Design d'une interface claire et exploitable": "Designing a clear and usable interface",
			"Développement, tests et mise en ligne progressive": "Development, testing and progressive launch",
			"Conseils et repères pour vos projets digitaux": "Guidance and benchmarks for your digital projects",
			"Comment structurer un projet digital efficace": "How to structure an effective digital project",
			"Créer du contenu utile pour attirer les bons clients": "Create useful content to attract the right clients",
			"Réussir sa transformation digitale étape par étape": "Succeed in digital transformation step by step",
			"Un projet digital réussit mieux quand les objectifs, les utilisateurs, les contraintes et les étapes de livraison sont cadrés dès le départ.": "A digital project succeeds more easily when goals, users, constraints and delivery stages are framed from the start.",
			"Le contenu devient un levier commercial quand il répond aux vraies questions des clients et met en avant l'expertise de l'entreprise.": "Content becomes a business driver when it answers real client questions and showcases the company's expertise.",
			"La transformation digitale est plus durable quand elle avance par priorités, avec des outils adaptés et un accompagnement clair des équipes.": "Digital transformation is more sustainable when it moves forward by priorities, with suitable tools and clear team support.",
			"Chez OCTO, nous privilégions une approche progressive : comprendre le besoin réel, choisir les bons outils, construire une solution lisible, puis l'améliorer dans le temps avec les retours des utilisateurs.": "At OCTO, we favor a progressive approach: understand the real need, choose the right tools, build a clear solution, then improve it over time with user feedback.",
			"Clarifier les objectifs métier avant la solution technique.": "Clarify business goals before the technical solution.",
			"Prévoir une première version utile, puis l'enrichir étape par étape.": "Plan a useful first version, then enrich it step by step.",
			"Garder un suivi collaboratif pour décider vite et bien.": "Keep collaborative tracking to make fast, sound decisions.",
			"Parlons de votre projet": "Let's talk about your project",
			"Notre équipe d'experts est à votre écoute pour vous conseiller et vous accompagner à chaque étape de votre projet.": "Our expert team is ready to listen, advise you and support you at every stage of your project.",
			"Notre équipe d'experts est à votre écoute pour vous conseiller et vous accompagner à chaque étape de votre projet. Contactez-nous afin de bénéficier d'un accompagnement personnalisé et de solutions conçues pour répondre efficacement à vos enjeux.": "Our expert team is ready to listen, advise you and support you at every stage of your project. Contact us to benefit from personalized guidance and solutions designed to address your challenges effectively.",
			"Appelez-nous": "Call us",
			"Échangez directement avec un conseiller.": "Speak directly with an advisor.",
			"Envoyez-nous un e-mail": "Send us an email",
			"Décrivez votre besoin et recevez une réponse adaptée.": "Describe your need and receive a suitable response.",
			"WhatsApp": "WhatsApp",
			"Obtenez rapidement une première orientation.": "Quickly get initial guidance.",
			"Rendez-nous visite": "Visit us",
			"Tananarive, Madagascar.": "Antananarivo, Madagascar.",
			"Envoyer le message": "Send message",
			"Client OCTO": "OCTO client",
			"Direction générale": "Executive management",
			"Partenaire agence": "Agency partner",
			"Responsable projet digital": "Digital project manager",
			"Entreprise accompagnée": "Supported company",
			"Opérations & digitalisation": "Operations & digitalization",
			"OCTO nous a aidés à clarifier notre besoin, structurer le projet et livrer une solution web adaptée à notre façon de travailler.": "OCTO helped us clarify our need, structure the project and deliver a web solution adapted to the way we work.",
			"L'équipe s'est intégrée rapidement à notre méthode de travail. Le suivi était clair, les échanges fluides et la confidentialité respectée.": "The team quickly integrated into our way of working. Tracking was clear, exchanges were smooth and confidentiality was respected.",
			"Les outils mis en place ont simplifié nos processus internes et nous ont permis de suivre plus facilement l'avancement de nos opérations.": "The tools implemented simplified our internal processes and helped us track operations more easily.",
			"Actualités & articles": "News & articles",
			"Des profils engagés": "Committed profiles",
			"derrière": "behind",
			"Web / E-commerce": "Web / E-commerce",
			"Logiciel / SaaS": "Software / SaaS"
		}
	};

	var autoAttributeTranslations = {
		en: {
			"Choisir la langue": "Choose language",
			"Équipe OCTO": "OCTO team",
			"Interface de site vitrine corporate": "Corporate showcase website interface",
			"Interface de plateforme e-commerce": "E-commerce platform interface",
			"Interface d'application mobile métier": "Business mobile app interface",
			"Chef de projet OCTO": "OCTO project manager",
			"Développeur web OCTO": "OCTO web developer",
			"Designer UI UX OCTO": "OCTO UI UX designer",
			"Ingénieur support OCTO": "OCTO support engineer",
			"Plateforme e-commerce sur-mesure": "Custom e-commerce platform",
			"Application mobile métier": "Business mobile app",
			"Outil interne de pilotage": "Internal management tool",
			"Comment structurer un projet digital efficace": "How to structure an effective digital project",
			"Créer du contenu utile pour attirer les bons clients": "Create useful content to attract the right clients",
			"Réussir sa transformation digitale étape par étape": "Succeed in digital transformation step by step",
			"Développement Web": "Web Development",
			"Développement Mobile": "Mobile Development",
			"Logiciel sur-mesure": "Custom software",
			"Design UI/UX & Identité visuelle": "UI/UX Design & Visual Identity",
			"Maintenance & Support": "Maintenance & Support",
			"Externalisation / Mise à disposition d'équipe": "Outsourcing / Dedicated team",
			"Accompagnement à la digitalisation": "Digitalization support",
			"Votre nom": "Your name",
			"Votre email": "Your email",
			"Sujet du projet": "Project subject",
			"Décrivez votre besoin": "Describe your need",
			"Rechercher": "Search"
		}
	};

	var originalTextNodes = typeof WeakMap !== "undefined" ? new WeakMap() : null;
	var originalAttributeValues = typeof WeakMap !== "undefined" ? new WeakMap() : null;

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

	function normalizeAutoValue(value) {
		return value.replace(/\s+/g, " ").trim();
	}

	function translatedAutoValue(language, originalValue, dictionary) {
		if (language === defaultLanguage) {
			return originalValue;
		}

		return (dictionary[language] && dictionary[language][normalizeAutoValue(originalValue)]) || originalValue;
	}

	function shouldTranslateTextNode(node) {
		if (!node.nodeValue || !normalizeAutoValue(node.nodeValue)) {
			return false;
		}

		var parent = node.parentElement;
		if (!parent) {
			return false;
		}

		if (parent.closest("script, style, noscript, textarea, [data-i18n], [data-i18n-html], [data-lang-switch]")) {
			return false;
		}

		return true;
	}

	function applyAutoTextTranslations(language) {
		if (!document.body || !originalTextNodes) {
			return;
		}

		var walker = document.createTreeWalker(
			document.body,
			NodeFilter.SHOW_TEXT,
			{
				acceptNode: function (node) {
					return shouldTranslateTextNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
				}
			}
		);

		var node;
		while ((node = walker.nextNode())) {
			if (!originalTextNodes.has(node)) {
				originalTextNodes.set(node, node.nodeValue);
			}

			var originalValue = originalTextNodes.get(node);
			var translatedValue = translatedAutoValue(language, originalValue, autoTextTranslations);
			var leading = originalValue.match(/^\s*/)[0];
			var trailing = originalValue.match(/\s*$/)[0];
			node.nodeValue = leading + normalizeAutoValue(translatedValue) + trailing;
		}
	}

	function getOriginalAttributeValue(element, attribute) {
		if (!originalAttributeValues) {
			return element.getAttribute(attribute) || "";
		}

		var values = originalAttributeValues.get(element);
		if (!values) {
			values = {};
			originalAttributeValues.set(element, values);
		}

		if (!Object.prototype.hasOwnProperty.call(values, attribute)) {
			values[attribute] = element.getAttribute(attribute) || "";
		}

		return values[attribute];
	}

	function applyAutoAttributeTranslations(language) {
		var attributes = ["placeholder", "alt", "aria-label"];

		attributes.forEach(function (attribute) {
			document.querySelectorAll("[" + attribute + "]").forEach(function (element) {
				if (element.hasAttribute("data-i18n-" + attribute)) {
					return;
				}

				var originalValue = getOriginalAttributeValue(element, attribute);
				element.setAttribute(attribute, translatedAutoValue(language, originalValue, autoAttributeTranslations));
			});
		});
	}

	function applyDocumentTitle(language) {
		var originalTitle = document.documentElement.getAttribute("data-original-title");
		if (!originalTitle) {
			originalTitle = document.title;
			document.documentElement.setAttribute("data-original-title", originalTitle);
		}

		if (language === defaultLanguage) {
			document.title = originalTitle;
			return;
		}

		document.title = (documentTitleTranslations[language] && documentTitleTranslations[language][originalTitle]) || t(language, "meta.title");
	}

	function applyAutoTranslations(language) {
		applyDocumentTitle(language);
		applyAutoTextTranslations(language);
		applyAutoAttributeTranslations(language);
	}

	function currentPageName() {
		var page = window.location.pathname.split("/").pop();
		return page || "index.html";
	}

	function pageMatches(item, page) {
		return !item.pages || item.pages.indexOf(page) !== -1;
	}

	function localizedPageValue(language, item) {
		return language === defaultLanguage ? item.fr : item.en;
	}

	function applyPageContentTranslations(language) {
		var page = currentPageName();

		pageContentMap.forEach(function (item) {
			if (!pageMatches(item, page)) {
				return;
			}

			document.querySelectorAll(item.selector).forEach(function (element) {
				setElementContent(element, localizedPageValue(language, item), item);
			});
		});

		pageAttributeMap.forEach(function (item) {
			if (!pageMatches(item, page)) {
				return;
			}

			document.querySelectorAll(item.selector).forEach(function (element) {
				element.setAttribute(item.attribute, localizedPageValue(language, item));
			});
		});
	}

	function applyLegalLanguageSections(language) {
		document.querySelectorAll(".legal-language").forEach(function (section) {
			var isActive = section.getAttribute("data-legal-lang") === language;
			section.hidden = !isActive;
			section.setAttribute("aria-hidden", isActive ? "false" : "true");
		});
	}

	function applyTranslations(language) {
		document.documentElement.lang = language;
		applyDocumentTitle(language);

		document.querySelectorAll("[data-i18n]").forEach(function (element) {
			element.textContent = t(language, element.getAttribute("data-i18n"));
		});

		document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
			element.innerHTML = t(language, element.getAttribute("data-i18n-html"));
		});

		document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
			element.setAttribute("placeholder", t(language, element.getAttribute("data-i18n-placeholder")));
		});

		document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
			element.setAttribute("aria-label", t(language, element.getAttribute("data-i18n-aria-label")));
		});

		applyAutoTranslations(language);

		selectorMap.forEach(function (item) {
			document.querySelectorAll(item.selector).forEach(function (element) {
				setElementContent(element, t(language, item.key), item);
			});
		});

		applyPageContentTranslations(language);
		applyLegalLanguageSections(language);
		syncLanguageLinks(language);

		document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
			var isActive = button.getAttribute("data-lang-switch") === language;
			button.classList.toggle("active", isActive);
			button.setAttribute("aria-pressed", isActive ? "true" : "false");
		});

		document.dispatchEvent(new CustomEvent("octo:languagechange", {
			detail: {
				language: language
			}
		}));
	}

	function setLanguage(language) {
		var nextLanguage = normalizeLanguage(language);
		saveLanguage(nextLanguage);
		syncCurrentUrlLanguage(nextLanguage);
		applyTranslations(nextLanguage);
	}

	function handleLanguageSwitch(event) {
		var button = event.target.closest && event.target.closest("[data-lang-switch]");
		if (!button) {
			return;
		}

		event.preventDefault();
		setLanguage(button.getAttribute("data-lang-switch"));
	}

	function init() {
		var language = currentLanguage();

		document.addEventListener("click", handleLanguageSwitch, true);

		applyTranslations(language);
	}

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", init);
	} else {
		init();
	}
})();
