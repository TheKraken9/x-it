(function () {
	"use strict";

	var siteUrl = "https://evocto.fr";
	var defaultImage = siteUrl + "/assets/images/evocto/generated/service-overview.jpg";

	var pages = {
		"index.html": {
			path: "/",
			title: {
				fr: "EVOCTO | Agence web offshore, developpement web et mobile",
				en: "EVOCTO | Offshore web, mobile and software agency"
			},
			description: {
				fr: "EVOCTO accompagne les entreprises avec des sites web, applications mobiles, logiciels sur mesure, UI/UX, maintenance et equipes dediees.",
				en: "EVOCTO helps companies build websites, mobile apps, custom software, UI/UX experiences, maintenance plans and dedicated digital teams."
			}
		},
		"about.html": {
			path: "/about",
			title: {
				fr: "A propos d'EVOCTO | Vision humaine du digital",
				en: "About EVOCTO | A human vision of digital work"
			},
			description: {
				fr: "Decouvrez EVOCTO, une agence digitale franco-malgache qui simplifie les processus et accompagne durablement les projets tech.",
				en: "Discover EVOCTO, a French-Malagasy digital agency that simplifies operations and supports tech projects over the long term."
			}
		},
		"services.html": {
			path: "/services",
			title: {
				fr: "Services EVOCTO | Web, mobile, logiciel, UI/UX et maintenance",
				en: "EVOCTO Services | Web, mobile, software, UI/UX and maintenance"
			},
			description: {
				fr: "Developpement web, mobile, logiciel sur mesure, design UI/UX, support et externalisation d'equipe pour vos projets digitaux.",
				en: "Web development, mobile apps, custom software, UI/UX design, support and team outsourcing for your digital projects."
			}
		},
		"service-detail.html": {
			path: "/service-detail",
			title: {
				fr: "Details des services EVOCTO | Offres CMS, regie et sur mesure",
				en: "EVOCTO Service Details | CMS, dedicated team and custom offers"
			},
			description: {
				fr: "Explorez les services EVOCTO en detail : sites web, applications mobiles, logiciels, maintenance, digitalisation et offres CMS, regie, sur mesure.",
				en: "Explore evocto services in detail: websites, mobile apps, software, maintenance, digitalization and CMS, dedicated team and custom offers."
			}
		},
		"project.html": {
			path: "/project",
			title: {
				fr: "Realisations EVOCTO | Interfaces web et applications",
				en: "EVOCTO Work | Web interfaces and applications"
			},
			description: {
				fr: "Parcourez des exemples de sites vitrines, plateformes web, e-commerce et applications mobiles realises par EVOCTO.",
				en: "Browse examples of showcase websites, web platforms, ecommerce projects and mobile apps built by EVOCTO."
			}
		},
		"project-detail.html": {
			path: "/project-detail",
			title: {
				fr: "Detail de realisation EVOCTO | Historique projet digital",
				en: "EVOCTO Project Detail | Digital project story"
			},
			description: {
				fr: "Decouvrez le contexte, l'approche et les choix d'interface derriere une realisation digitale accompagnee par EVOCTO.",
				en: "Discover the context, approach and interface decisions behind a digital project supported by EVOCTO."
			}
		},
		"blog.html": {
			path: "/blog",
			title: {
				fr: "Blog EVOCTO | Transformation digitale et bonnes pratiques tech",
				en: "EVOCTO Blog | Digital transformation and tech best practices"
			},
			description: {
				fr: "Articles EVOCTO sur la strategie digitale, la creation de contenu, les projets web, mobile et la transformation numerique.",
				en: "EVOCTO articles about digital strategy, content creation, web and mobile projects, and digital transformation."
			}
		},
		"blog-detail.html": {
			path: "/blog-detail",
			title: {
				fr: "Article EVOCTO | Structurer un projet digital efficace",
				en: "EVOCTO Article | Structuring an effective digital project"
			},
			description: {
				fr: "Conseils pratiques pour cadrer un projet digital, choisir les bons outils et avancer avec une equipe technique fiable.",
				en: "Practical advice to scope a digital project, choose the right tools and move forward with a reliable technical team."
			}
		},
		"contact.html": {
			path: "/contact",
			title: {
				fr: "Contact EVOCTO | Demander un accompagnement digital",
				en: "Contact EVOCTO | Request digital project support"
			},
			description: {
				fr: "Contactez EVOCTO pour un projet web, mobile, logiciel sur mesure, maintenance ou externalisation d'equipe à Antananarivo.",
				en: "Contact EVOCTO for a web, mobile, custom software, maintenance or team outsourcing project in Antananarivo."
			}
		},
		"team-detail.html": {
			path: "/team-detail",
			title: {
				fr: "Equipe EVOCTO | Profils web, mobile, UI/UX et support",
				en: "EVOCTO Team | Web, mobile, UI/UX and support profiles"
			},
			description: {
				fr: "Decouvrez les profils mobilisables par EVOCTO pour renforcer vos projets digitaux : developpement, design, gestion et support.",
				en: "Discover the profiles EVOCTO can mobilize for your digital projects: development, design, management and support."
			}
		},
		"not-found.html": {
			path: "/not-found",
			noindex: true,
			title: {
				fr: "Page introuvable | EVOCTO",
				en: "Page not found | EVOCTO"
			},
			description: {
				fr: "La page demandee est introuvable. Retournez vers l'accueil EVOCTO ou contactez notre equipe.",
				en: "The requested page could not be found. Return to the EVOCTO homepage or contact our team."
			}
		}
	};

	function normalizeLanguage() {
		return document.documentElement.lang === "en" ? "en" : "fr";
	}

	function currentPageName() {
		var segment = window.location.pathname.split("/").filter(Boolean).pop();

		if (!segment) {
			return "index.html";
		}

		return segment.indexOf(".html") === -1 ? segment + ".html" : segment;
	}

	function getPage() {
		var name = currentPageName();
		var segment = name.replace(/\.html$/, "");

		if (pages[name]) {
			return pages[name];
		}

		return {
			path: "/" + segment,
			noindex: true,
			title: {
				fr: "EVOCTO | Page archivee",
				en: "EVOCTO | Archived page"
			},
			description: {
				fr: "Cette page EVOCTO n'est pas destinee a etre indexee. Retrouvez les contenus officiels depuis la navigation principale.",
				en: "This EVOCTO page is not intended for indexing. Use the main navigation to access official content."
			}
		};
	}

	function absoluteUrl(path, language) {
		var suffix = path === "/" ? "" : path;
		return siteUrl + suffix + (language ? "?lang=" + language : "");
	}

	function ensureMeta(selector, attributes) {
		var element = document.head.querySelector(selector);

		if (!element) {
			element = document.createElement("meta");
			document.head.appendChild(element);
		}

		Object.keys(attributes).forEach(function (name) {
			element.setAttribute(name, attributes[name]);
		});
	}

	function ensureLink(selector, attributes) {
		var element = document.head.querySelector(selector);

		if (!element) {
			element = document.createElement("link");
			document.head.appendChild(element);
		}

		Object.keys(attributes).forEach(function (name) {
			element.setAttribute(name, attributes[name]);
		});
	}

	function updateSchema(page, language) {
		var schema = document.getElementById("evocto-schema-organization");

		if (!schema) {
			schema = document.createElement("script");
			schema.type = "application/ld+json";
			schema.id = "evocto-schema-organization";
			document.head.appendChild(schema);
		}

		schema.textContent = JSON.stringify({
			"@context": "https://schema.org",
			"@graph": [
				{
					"@type": "Organization",
					"@id": siteUrl + "/#organization",
					name: "EVOCTO",
					url: siteUrl + "/",
					email: "contact@evocto.fr",
					telephone: "+33759560896",
					logo: siteUrl + "/assets/images/favicon.png",
					image: defaultImage,
					address: {
						"@type": "PostalAddress",
						addressLocality: "Antananarivo",
						addressCountry: "MG"
					},
					contactPoint: {
						"@type": "ContactPoint",
						telephone: "+33759560896",
						contactType: "customer support",
						availableLanguage: ["French", "English"]
					},
					areaServed: ["France", "Madagascar", "Europe", "International"]
				},
				{
					"@type": "WebSite",
					"@id": siteUrl + "/#website",
					url: siteUrl + "/",
					name: "EVOCTO",
					publisher: {
						"@id": siteUrl + "/#organization"
					},
					inLanguage: language
				},
				{
					"@type": "WebPage",
					"@id": absoluteUrl(page.path, language) + "#webpage",
					url: absoluteUrl(page.path, language),
					name: page.title[language],
					description: page.description[language],
					isPartOf: {
						"@id": siteUrl + "/#website"
					},
					about: {
						"@id": siteUrl + "/#organization"
					},
					inLanguage: language
				}
			]
		});
	}

	function applySeo() {
		var language = normalizeLanguage();
		var page = getPage();
		var canonical = page.noindex ? absoluteUrl(page.path) : absoluteUrl(page.path, language === "fr" ? "" : language);
		var title = page.title[language];
		var description = page.description[language];

		document.title = title;

		ensureMeta('meta[name="description"]', { name: "description", content: description });
		ensureMeta('meta[name="robots"]', {
			name: "robots",
			content: page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"
		});
		ensureLink('link[rel="canonical"]', { rel: "canonical", href: canonical });
		ensureLink('link[rel="alternate"][hreflang="fr"]', { rel: "alternate", hreflang: "fr", href: absoluteUrl(page.path, "fr") });
		ensureLink('link[rel="alternate"][hreflang="en"]', { rel: "alternate", hreflang: "en", href: absoluteUrl(page.path, "en") });
		ensureLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: absoluteUrl(page.path) });

		ensureMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "EVOCTO" });
		ensureMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
		ensureMeta('meta[property="og:title"]', { property: "og:title", content: title });
		ensureMeta('meta[property="og:description"]', { property: "og:description", content: description });
		ensureMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
		ensureMeta('meta[property="og:image"]', { property: "og:image", content: defaultImage });
		ensureMeta('meta[property="og:locale"]', { property: "og:locale", content: language === "fr" ? "fr_FR" : "en_US" });
		ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
		ensureMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
		ensureMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
		ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: defaultImage });

		updateSchema(page, language);
	}

	document.addEventListener("evocto:languagechange", applySeo);

	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", applySeo);
	} else {
		applySeo();
	}
})();
