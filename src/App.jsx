import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { siteData as fallbackData } from "./data/content.js";
import "./styles.css";

const ui = {
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    projects: "Nos réalisations",
    blog: "Blog",
    contact: "Contact",
    start: "Démarrer",
    work: "Travailler avec nous",
    moreServices: "Voir nos services",
    heroTitle: "Des solutions digitales pensées pour votre croissance",
    heroSubtitle: "Libérez votre potentiel digital",
    clients: "Nous accompagnons les entreprises dans leur transformation digitale",
    aboutTitle: "Une agence portée par une vision humaine du digital",
    processTitle: "Un accompagnement clair, de l'idée au déploiement",
    processText: "Nous simplifions les processus, améliorons la performance et optimisons les ressources pour vous aider à vous concentrer sur votre cœur de métier.",
    servicesTitle: "Nos services",
    servicesEyebrow: "Ce que nous proposons",
    offersTitle: "Trois formats pour collaborer",
    offersEyebrow: "Offres",
    contactTitle: "Parlons de votre projet",
    contactText: "Notre équipe d'experts est à votre écoute pour vous conseiller et vous accompagner à chaque étape de votre projet.",
    blogTitle: "Actualités & articles",
    blogText: "Le blog peut évoluer avec de nouveaux articles, par exemple toutes les deux semaines.",
    projectsTitle: "Portfolio & réalisations",
    projectsText: "Les réalisations personnelles peuvent être intégrées maintenant, puis complétées par les références de l'équipe.",
    detailBack: "Retour aux services",
    offerings: "Ce que couvre ce service",
    included: "Offres associées",
    formName: "Nom",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Envoyer",
    formSuccess: "Message envoyé. OCTO reviendra vers vous rapidement.",
    formError: "Impossible d'envoyer le message pour le moment.",
    footerText: "Nous privilégions la collaboration avec nos clients",
    rights: "Tous droits réservés."
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Our work",
    blog: "Blog",
    contact: "Contact",
    start: "Get started",
    work: "Work with us",
    moreServices: "View services",
    heroTitle: "Digital solutions designed for your growth",
    heroSubtitle: "Unlock digital potential",
    clients: "We support companies through their digital transformation",
    aboutTitle: "An agency driven by a human vision of digital work",
    processTitle: "Clear support, from idea to deployment",
    processText: "We simplify processes, improve performance and optimize resources so you can focus on your core business.",
    servicesTitle: "Our services",
    servicesEyebrow: "What we offer",
    offersTitle: "Three ways to collaborate",
    offersEyebrow: "Offers",
    contactTitle: "Let's talk about your project",
    contactText: "Our expert team is ready to listen, advise you and support you at every stage of your project.",
    blogTitle: "News & articles",
    blogText: "The blog can evolve with new articles, for example every two weeks.",
    projectsTitle: "Portfolio & work",
    projectsText: "Personal work can be added now, then completed with team references over time.",
    detailBack: "Back to services",
    offerings: "What this service covers",
    included: "Associated offers",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send",
    formSuccess: "Message sent. OCTO will get back to you shortly.",
    formError: "Unable to send the message right now.",
    footerText: "We prioritize collaboration with our clients",
    rights: "All rights reserved."
  }
};

function t(language, key) {
  return (ui[language] || ui.fr)[key] || ui.fr[key] || key;
}

function localize(value, language) {
  if (!value || typeof value === "string") {
    return value || "";
  }

  return value[language] || value.fr || "";
}

function useSiteData() {
  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    let active = true;

    fetch("/api/site")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API unavailable");
        }
        return response.json();
      })
      .then((payload) => {
        if (active) {
          setData(payload);
        }
      })
      .catch(() => {
        if (active) {
          setData(fallbackData);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return data;
}

function App() {
  const [language, setLanguage] = useState(() => (localStorage.getItem("octo-language") === "en" ? "en" : "fr"));
  const data = useSiteData();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "fr" ? "OCTO | Agence digitale" : "OCTO | Digital agency";
    localStorage.setItem("octo-language", language);
  }, [language]);

  useEffect(() => {
    if (location.hash) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="page-wrapper octo-react-template">
      <Header data={data} language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Home data={data} language={language} />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about.html" element={<Navigate to="/#about" replace />} />
        <Route path="/services" element={<ServicesPage data={data} language={language} />} />
        <Route path="/services.html" element={<Navigate to="/services" replace />} />
        <Route path="/services/:slug" element={<ServiceDetailPage data={data} language={language} />} />
        <Route path="/service-detail.html" element={<Navigate to="/services/developpement-web" replace />} />
        <Route path="/projects" element={<ProjectsPage data={data} language={language} />} />
        <Route path="/project.html" element={<Navigate to="/projects" replace />} />
        <Route path="/project-detail.html" element={<Navigate to="/projects" replace />} />
        <Route path="/blog" element={<BlogPage data={data} language={language} />} />
        <Route path="/blog.html" element={<Navigate to="/blog" replace />} />
        <Route path="/blog-detail.html" element={<Navigate to="/blog" replace />} />
        <Route path="/contact" element={<ContactPage data={data} language={language} />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer data={data} language={language} />
    </div>
  );
}

function Header({ data, language, setLanguage }) {
  const nav = [
    { to: "/", label: t(language, "home") },
    { to: "/#about", label: t(language, "about") },
    { to: "/services", label: t(language, "services") },
    { to: "/projects", label: t(language, "projects") },
    { to: "/blog", label: t(language, "blog") },
    { to: "/contact", label: t(language, "contact") }
  ];

  return (
    <header className="main-header header-style-one">
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <ul className="header-top_list d-flex flex-wrap">
                <li>
                  <span className="icon fa-classic fa-solid fa-envelope fa-fw"></span>
                  <a href={`mailto:${data.company.email}`}>{data.company.email}</a>
                </li>
                <li>
                  <span className="icon fa-classic fa-solid fa-location-dot fa-fw"></span>
                  {localize(data.company.address, language)}
                </li>
              </ul>
              <div className="header-top_socials">
                <div className="social-inner">
                  {data.company.socialLinks.map((item) => (
                    <a href={item.href} aria-label={item.label} key={item.label}>
                      <i className={item.label === "LinkedIn" ? "fa-brands fa-linkedin-in" : "fa-brands fa-facebook-f"}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-lower">
        <div className="auto-container">
          <div className="inner-container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/" className="octo-logo-text">
                    OCTO
                  </Link>
                </div>
              </div>
              <div className="nav-outer d-flex flex-wrap">
                <nav className="main-menu navbar-expand-md">
                  <div className="navbar-collapse collapse clearfix show">
                    <ul className="navigation clearfix">
                      {nav.map((item) => (
                        <li key={item.to}>
                          <NavLink to={item.to}>{item.label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="outer-box d-flex align-items-center flex-wrap">
                <div className="language-switcher" role="group" aria-label="Choisir la langue">
                  <button type="button" className={language === "fr" ? "language-switcher_btn active" : "language-switcher_btn"} onClick={() => setLanguage("fr")}>
                    FR
                  </button>
                  <button type="button" className={language === "en" ? "language-switcher_btn active" : "language-switcher_btn"} onClick={() => setLanguage("en")}>
                    EN
                  </button>
                </div>
                <div className="main-header_button">
                  <Link to="/contact" className="theme-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">{t(language, "start")}</span>
                      <span className="text-two">{t(language, "start")}</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Home({ data, language }) {
  return (
    <>
      <Hero language={language} />
      <Clients language={language} />
      <AboutSection data={data} language={language} />
      <ProcessSection language={language} />
      <OfferOne data={data} language={language} />
      <OffersSection data={data} language={language} />
      <ContactBand data={data} language={language} />
      <ProjectsSection data={data} language={language} />
      <BlogSection data={data} language={language} />
    </>
  );
}

function Hero({ language }) {
  return (
    <section className="slider-one">
      <div className="main-slider swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="slider-one_image-layer" style={{ backgroundImage: "url(/assets/images/main-slider/1.jpg)" }}></div>
            <div className="slider-one_pattern" style={{ backgroundImage: "url(/assets/images/main-slider/vector-1.png)" }}></div>
            <div className="auto-container">
              <div className="slider-one_content">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">{t(language, "heroSubtitle")}</div>
                  <h1 className="slider-one_heading">
                    {language === "fr" ? (
                      <>
                        Des solutions <span>digitales</span> pensées pour votre croissance
                      </>
                    ) : (
                      <>
                        Digital <span>solutions</span> designed for your growth
                      </>
                    )}
                  </h1>
                  <div className="slider-one_button d-flex align-items-center flex-wrap">
                    <Link to="/contact" className="theme-btn btn-style-two">
                      <span className="btn-wrap">
                        <span className="text-one">{t(language, "work")}</span>
                        <span className="text-two">{t(language, "work")}</span>
                      </span>
                    </Link>
                  </div>
                  <div className="slider-one_arrow" style={{ backgroundImage: "url(/assets/images/main-slider/vector-2.png)" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-one_socials">
        <a href="https://facebook.com/">facebook</a>
        <a href="https://linkedin.com/">linkedin</a>
      </div>
      <div className="slider-one_options">
        <div className="button">
          <Link className="service-btn" to="/services">
            {t(language, "moreServices")} <i className="fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Clients({ language }) {
  return (
    <section className="clients-one">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">
            <div className="column col-lg-3 col-md-12 col-sm-12">
              <div className="clients-one_title">{t(language, "clients")}</div>
            </div>
            <div className="column col-lg-9 col-md-12 col-sm-12">
              <div className="clients-one_slider swiper-container">
                <div className="swiper-wrapper octo-client-row">
                  {[1, 2, 3, 4].map((item) => (
                    <div className="swiper-slide" key={item}>
                      <div className="client-image">
                        <img src={`/assets/images/clients/${item}.png`} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, centered = false }) {
  return (
    <div className={centered ? "sec-title centered" : "sec-title title-anim"}>
      <div className="sec-title_title">
        {centered ? dots() : null}
        {eyebrow}
        {dots()}
      </div>
      <h2 className="sec-title_heading">{title}</h2>
    </div>
  );
}

function dots() {
  return (
    <div className="sec-title_dots">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function AboutSection({ data, language }) {
  return (
    <section className="about-one" id="about">
      <div className="about-one_vector" style={{ backgroundImage: "url(/assets/images/background/pattern-3.png)" }}></div>
      <div className="about-one_pattern-layer" style={{ backgroundImage: "url(/assets/images/background/pattern-1.png)" }}></div>
      <div className="about-one_pattern-two" style={{ backgroundImage: "url(/assets/images/background/pattern-2.png)" }}></div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <SectionTitle eyebrow={t(language, "about")} title={t(language, "aboutTitle")} />
              <div className="about-one_text octo-about-text">
                {data.intro[language].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="about-one_image-outer">
                <div className="about-one_image">
                  <img src="/assets/images/resource/about-2.jpg" alt="OCTO" />
                </div>
              </div>
              <div className="d-flex align-items-center flex-wrap">
                <div className="about-one_image-two">
                  <img src="/assets/images/resource/about-3.png" alt="" />
                </div>
                <div className="about-one_carousel">
                  <div className="review-block_one">
                    <div className="review-block_one-quote">
                      <img src="/assets/images/icons/quote.svg" alt="" />
                    </div>
                    <div className="review-block_one-text">{t(language, "processText")}</div>
                    <div className="review-block_one-info">
                      <i>OCTO</i>
                      <strong>{language === "fr" ? "Vision humaine" : "Human vision"}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ language }) {
  const steps = language === "fr"
    ? ["Comprendre le projet", "Définir la stratégie", "Déployer la solution", "Suivre les résultats"]
    : ["Understand the project", "Define the strategy", "Deploy the solution", "Track results"];

  return (
    <section className="process-one">
      <div className="auto-container">
        <SectionTitle eyebrow={language === "fr" ? "Notre approche" : "Our approach"} title={t(language, "processTitle")} />
        <div className="process-one_inner-container">
          {steps.map((step, index) => (
            <div className="step-block_one" key={step}>
              <div className="step-block_one-inner">
                <div className="step-block_one-number">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {language === "fr" ? "Étape" : "Step"}
                </div>
                <h4 className="step-block_one-heading">{step}</h4>
                <div className="step-block_one-text">{t(language, "processText")}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferOne({ data, language }) {
  const [active, setActive] = useState(0);

  return (
    <section className="offer-one" id="services">
      <div className="offer-one_color"></div>
      <div className="offer-one_bg-color"></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="offer-one_image-column col-lg-6 col-md-12 col-sm-12">
            <div className="offer-one_image-outer">
              <div className="offer-one_images_outer">
                {data.services.map((service, index) => (
                  <div className={index === active ? "offer-one_image active" : "offer-one_image"} key={service.slug}>
                    <img src={service.image} alt={localize(service.title, language)} />
                  </div>
                ))}
              </div>
              <div className="step-award_box">
                <div className="step-award_count">7</div>
                <span className="step-award_subtitle">{t(language, "services")}</span>
              </div>
            </div>
          </div>
          <div className="offer-one_content-column col-lg-6 col-md-12 col-sm-12">
            <div className="offer-one_content-outer">
              <SectionTitle eyebrow={t(language, "servicesEyebrow")} title={t(language, "servicesTitle")} />
              <div className="offer-one_titles">
                {data.services.map((service, index) => (
                  <div
                    className={index === active ? "offer-one_title active" : "offer-one_title"}
                    key={service.slug}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                  >
                    <div className="offer-one_icon-outer">
                      <span className="offer-one_number">{index + 1}</span>
                      <div className="offer-one_icon">
                        <img src={`/assets/images/icons/offer-${(index % 7) + 1}.svg`} alt="" />
                      </div>
                    </div>
                    <h3 className="offer-one_heading">
                      <Link to={`/services/${service.slug}`}>{localize(service.title, language)}</Link>
                    </h3>
                    <div className="octo-service-summary">{localize(service.summary, language)}</div>
                    <ul className="offer-one_tags">
                      <li><a>Stratégie</a></li>
                      <li><a>Design</a></li>
                      <li><a>Développement</a></li>
                      <li><a>Support</a></li>
                    </ul>
                    <Link className="offer-one_arrow" to={`/services/${service.slug}`}>
                      <img src="/assets/images/icons/offer_arrow.svg" alt="" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OffersSection({ data, language }) {
  return (
    <section className="octo-offers" id="offers">
      <div className="auto-container">
        <SectionTitle eyebrow={t(language, "offersEyebrow")} title={t(language, "offersTitle")} centered />
        <div className="row clearfix">
          {data.offers.map((offer) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={offer.key}>
              <div className={offer.key === "regie" ? "octo-offer-card featured" : "octo-offer-card"}>
                <span className="octo-offer-card_label">{localize(offer.label, language)}</span>
                <h3>{localize(offer.title, language)}</h3>
                <div className="octo-offer-card_price">{localize(offer.price, language)}</div>
                <ul>
                  {offer.items[language].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBand({ data, language }) {
  return (
    <section className="testimonial-one" id="contact">
      <div className="testimonial-one_pattern-layer" style={{ backgroundImage: "url(/assets/images/background/pattern-6.png)" }}></div>
      <div className="auto-container">
        <div className="row clearfix">
          <div className="testimonial-one_content-column col-lg-5 col-md-12 col-sm-12">
            <SectionTitle eyebrow={t(language, "contact")} title={t(language, "contactTitle")} />
            <div className="sec-title_text">{t(language, "contactText")}</div>
            <ContactOptions data={data} language={language} />
          </div>
          <div className="testimonial-one_carousel-column col-lg-7 col-md-12 col-sm-12">
            <ContactForm language={language} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactOptions({ data, language }) {
  return (
    <div className="octo-contact-methods">
      <h3>{language === "fr" ? "Plusieurs moyens de nous contacter" : "Several ways to contact us"}</h3>
      {data.contactOptions.map((option) => (
        <a className="octo-contact-method" href={option.href} key={option.key}>
          <span className={option.key === "whatsapp" ? "fa-brands fa-whatsapp" : option.key === "email" ? "fa-solid fa-envelope" : option.key === "visit" ? "fa-solid fa-location-dot" : "fa-solid fa-phone"}></span>
          <strong>{localize(option.title, language)}</strong>
          <em>{localize(option.text, language)}</em>
        </a>
      ))}
    </div>
  );
}

function ContactForm({ language }) {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Contact failed");
      }

      event.currentTarget.reset();
      setStatus(t(language, "formSuccess"));
    } catch {
      setStatus(t(language, "formError"));
    }
  }

  return (
    <div className="contact-one_form-outer octo-contact-form">
      <div className="contact-one_form-title-box">
        <h3 className="contact-one_form-title">{t(language, "contact")}</h3>
        <div className="contact-one_form-text">{t(language, "contactText")}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" name="name" placeholder={t(language, "formName")} required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder={t(language, "formEmail")} required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder={t(language, "formMessage")} required></textarea>
        </div>
        <button className="theme-btn btn-style-one" type="submit">
          <span className="btn-wrap">
            <span className="text-one">{t(language, "formSubmit")}</span>
            <span className="text-two">{t(language, "formSubmit")}</span>
          </span>
        </button>
        {status ? <div className="octo-form-status">{status}</div> : null}
      </form>
    </div>
  );
}

function ProjectsSection({ data, language }) {
  return (
    <section className="project-one">
      <div className="auto-container">
        <SectionTitle eyebrow={t(language, "projects")} title={t(language, "projectsTitle")} centered />
        <div className="row clearfix">
          {data.projects.map((project) => (
            <div className="gallery-block-one col-lg-4 col-md-6 col-sm-12" key={localize(project.title, language)}>
              <div className="gallery-block-one_inner">
                <div className="gallery-block_one-image">
                  <img src={project.image} alt={localize(project.title, language)} />
                  <div className="gallery-block-one_overlay">
                    <div className="gallery-block-one_title">{localize(project.title, language)}</div>
                    <div className="gallery-block-one_designation">{localize(project.type, language)}</div>
                  </div>
                </div>
                <div className="octo-card-text">{localize(project.text, language)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogSection({ data, language }) {
  return (
    <section className="news-one" id="blog">
      <div className="auto-container">
        <div className="sec-title d-flex justify-content-between align-items-center flex-wrap">
          <div className="left-box title-anim">
            <div className="sec-title_title">
              {t(language, "blog")}
              {dots()}
            </div>
            <h2 className="sec-title_heading">{t(language, "blogTitle")}</h2>
          </div>
          <div className="right-box title-anim">
            <div className="news-one_button">
              <Link to="/blog" className="theme-btn btn-style-three">
                <span className="btn-wrap">
                  <span className="text-one">{t(language, "start")}</span>
                  <span className="text-two">{t(language, "start")}</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="row clearfix">
          {data.blogPosts.map((post, index) => (
            <div className="news-block_one col-lg-4 col-md-6 col-sm-12" key={post.slug}>
              <div className="news-block_one-inner">
                <div className="news-block_one-date_outer">
                  <div className="news-block_one-date">{String(index + 1).padStart(2, "0")}/<span>2026</span></div>
                </div>
                <div className="news-block_one-image">
                  <img src={post.image} alt={localize(post.title, language)} />
                </div>
                <div className="news-block_one-content">
                  <h3 className="news-block_one-title">{localize(post.title, language)}</h3>
                  <div className="octo-card-text">{localize(post.excerpt, language)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPage({ data, language }) {
  return (
    <>
      <PageTitle title={t(language, "services")} />
      <OfferOne data={data} language={language} />
      <OffersSection data={data} language={language} />
    </>
  );
}

function ServiceDetailPage({ data, language }) {
  const { slug } = useParams();
  const service = useMemo(() => data.services.find((item) => item.slug === slug), [data.services, slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <PageTitle title={localize(service.title, language)} />
      <section className="services-detail">
        <div className="auto-container">
          <Link className="octo-back-link" to="/services">{t(language, "detailBack")}</Link>
          <div className="row clearfix">
            <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
              <aside className="sidebar">
                <div className="service-widget">
                  <ul className="service-list">
                    {data.services.map((item) => (
                      <li key={item.slug} className={item.slug === service.slug ? "active" : ""}>
                        <Link to={`/services/${item.slug}`}>{localize(item.title, language)}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
            <div className="content-side col-lg-8 col-md-12 col-sm-12">
              <div className="service-detail">
                <div className="service-detail_inner">
                  <div className="service-detail_image">
                    <img src={service.image} alt={localize(service.title, language)} />
                    <div className="service-detail_tag">{t(language, "services")}</div>
                  </div>
                  <h2 className="service-detail_title">{localize(service.title, language)}</h2>
                  <div className="service-detail_text">
                    {service.details[language].map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {service.extraTitle ? (
                    <>
                      <h3 className="service-detail_subtitle">{localize(service.extraTitle, language)}</h3>
                      <ul className="service-detail_list">
                        {service.extraDetails[language].map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                  <h3 className="service-detail_subtitle">{t(language, "included")}</h3>
                  <ul className="service-detail_list-two">
                    {data.offers.map((offer) => (
                      <li key={offer.key}>{localize(offer.label, language)} - {localize(offer.price, language)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectsPage({ data, language }) {
  return (
    <>
      <PageTitle title={t(language, "projects")} />
      <ProjectsSection data={data} language={language} />
    </>
  );
}

function BlogPage({ data, language }) {
  return (
    <>
      <PageTitle title={t(language, "blog")} />
      <BlogSection data={data} language={language} />
    </>
  );
}

function ContactPage({ data, language }) {
  return (
    <>
      <PageTitle title={t(language, "contact")} />
      <section className="contact-one">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="contact-one_form-column col-lg-5 col-md-12 col-sm-12">
              <ContactForm language={language} />
            </div>
            <div className="contact-one_info-column col-lg-7 col-md-12 col-sm-12">
              <SectionTitle eyebrow={t(language, "contact")} title={t(language, "contactTitle")} />
              <ContactOptions data={data} language={language} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PageTitle({ title }) {
  return (
    <section className="page-title">
      <div className="page-title_big-title">{title}</div>
      <div className="page-title_bg-image" style={{ backgroundImage: "url(/assets/images/background/3.jpg)" }}></div>
      <div className="page-title_shape-one" style={{ backgroundImage: "url(/assets/images/background/page-title-1.png)" }}></div>
      <div className="page-title_shape-two" style={{ backgroundImage: "url(/assets/images/background/page-title-2.png)" }}></div>
      <div className="auto-container">
        <h1>{title}</h1>
        <ul className="bread-crumb clearfix">
          <li><Link to="/">OCTO</Link></li>
          <li>{title}</li>
        </ul>
      </div>
    </section>
  );
}

function Footer({ data, language }) {
  return (
    <footer className="main-footer" id="footer">
      <div className="main-footer_bg-color"></div>
      <div className="main-footer_vector" style={{ backgroundImage: "url(/assets/images/icons/vector-3.png)" }}></div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="footer-logo">
            <Link to="/" className="octo-footer-logo">OCTO</Link>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="footer-text">{t(language, "footerText")}</div>
            <div className="footer-social_box">
              {data.company.socialLinks.map((item) => (
                <a href={item.href} aria-label={item.label} key={item.label}>
                  <i className={item.label === "LinkedIn" ? "fa-brands fa-linkedin-in" : "fa-brands fa-facebook-f"}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-discuss">
            <span className="up-down_animation">{language === "fr" ? "discutons !" : "let's discuss!"}</span>
          </div>
          <ul className="footer-contact_list d-flex justify-content-end">
            <li><a href={`mailto:${data.company.email}`}>{data.company.email}</a></li>
            <li><a href="tel:+33000000000">{data.company.phoneLabel}</a></li>
          </ul>
          <div className="footer-type_title variable-text"></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="main-footer_copyright">OCTO © 2026. {t(language, "rights")}</div>
        </div>
      </div>
    </footer>
  );
}

export default App;
