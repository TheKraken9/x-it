import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Navigate, Route, Routes, useParams } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  CircuitBoard,
  Compass,
  Globe2,
  Languages,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  ShieldCheck,
  Smartphone,
  UsersRound,
  X
} from "lucide-react";
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
    heroEyebrow: "Agence digitale OCTO",
    heroTitle: "Une vision humaine du digital pour faire avancer vos projets.",
    heroText: "Nous concevons des solutions web, mobile et logicielles qui simplifient les opérations, améliorent la performance et aident votre organisation à se concentrer sur son cœur de métier.",
    startProject: "Parler d'un projet",
    exploreServices: "Voir les services",
    aboutEyebrow: "À propos",
    aboutTitle: "OCTO conseille, construit et accompagne durablement.",
    servicesEyebrow: "Expertises",
    servicesTitle: "Tous les services OCTO sont reliés à leurs détails.",
    serviceDetails: "Voir le détail",
    offersEyebrow: "Offres",
    offersTitle: "Trois formats pour collaborer",
    projectsEyebrow: "Réalisations",
    projectsTitle: "Un portfolio prêt à évoluer avec vos références",
    blogEyebrow: "Blog",
    blogTitle: "Articles et contenus à mettre à jour régulièrement",
    contactEyebrow: "Contact",
    contactTitle: "Plusieurs moyens de nous contacter",
    contactText: "Notre équipe d'experts est à votre écoute pour vous conseiller et vous accompagner à chaque étape de votre projet.",
    servicePageTitle: "Services OCTO",
    servicePageText: "Chaque service mène vers une page dédiée avec son texte complet, ses objectifs et les offres associées.",
    detailBack: "Tous les services",
    included: "Ce que nous prenons en charge",
    offersForService: "Offres associées",
    projectsText: "Les réalisations personnelles peuvent être intégrées maintenant, puis remplacées ou complétées par les références de l'équipe au fur et à mesure.",
    blogText: "Le blog est prévu pour évoluer avec de nouveaux articles, par exemple toutes les deux semaines.",
    formName: "Nom",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Envoyer",
    formSuccess: "Message envoyé. OCTO reviendra vers vous rapidement.",
    formError: "Impossible d'envoyer le message pour le moment.",
    newsletter: "Abonnez-vous !",
    emailPlaceholder: "Votre email",
    footerText: "Nous privilégions la collaboration avec nos clients.",
    rights: "Tous droits réservés."
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Our work",
    blog: "Blog",
    contact: "Contact",
    heroEyebrow: "OCTO digital agency",
    heroTitle: "A human vision of digital work to move your projects forward.",
    heroText: "We design web, mobile and software solutions that simplify operations, improve performance and help your organization focus on its core business.",
    startProject: "Discuss a project",
    exploreServices: "Explore services",
    aboutEyebrow: "About",
    aboutTitle: "OCTO advises, builds and supports over the long term.",
    servicesEyebrow: "Expertise",
    servicesTitle: "Every OCTO service is linked to its own detail page.",
    serviceDetails: "View details",
    offersEyebrow: "Offers",
    offersTitle: "Three ways to collaborate",
    projectsEyebrow: "Work",
    projectsTitle: "A portfolio ready to evolve with your references",
    blogEyebrow: "Blog",
    blogTitle: "Articles and content to update regularly",
    contactEyebrow: "Contact",
    contactTitle: "Several ways to contact us",
    contactText: "Our expert team is ready to listen, advise you and support you at every stage of your project.",
    servicePageTitle: "OCTO services",
    servicePageText: "Each service leads to a dedicated page with its full text, goals and associated offers.",
    detailBack: "All services",
    included: "What we cover",
    offersForService: "Associated offers",
    projectsText: "Personal work can be added now, then replaced or completed by team references over time.",
    blogText: "The blog is designed to evolve with new articles, for example every two weeks.",
    formName: "Name",
    formEmail: "Email",
    formMessage: "Message",
    formSubmit: "Send",
    formSuccess: "Message sent. OCTO will get back to you shortly.",
    formError: "Unable to send the message right now.",
    newsletter: "Subscribe!",
    emailPlaceholder: "Your email",
    footerText: "We prioritize collaboration with our clients.",
    rights: "All rights reserved."
  }
};

const serviceIcons = {
  Globe2,
  Smartphone,
  CircuitBoard,
  Palette,
  ShieldCheck,
  UsersRound,
  Compass
};

const contactIcons = {
  call: Phone,
  email: Mail,
  whatsapp: MessageCircle,
  visit: MapPin
};

function text(language, key) {
  const dictionary = ui[language] || ui.fr;
  return dictionary[key] || ui.fr[key] || key;
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

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "fr" ? "OCTO | Agence digitale" : "OCTO | Digital agency";
    localStorage.setItem("octo-language", language);
  }, [language]);

  return (
    <div className="app-shell">
      <Header data={data} language={language} setLanguage={setLanguage} />
      <main>
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
      </main>
      <Footer data={data} language={language} />
    </div>
  );
}

function Header({ data, language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: "/", label: text(language, "home") },
    { to: "/#about", label: text(language, "about") },
    { to: "/services", label: text(language, "services") },
    { to: "/projects", label: text(language, "projects") },
    { to: "/blog", label: text(language, "blog") },
    { to: "/contact", label: text(language, "contact") }
  ];

  return (
    <header className="site-header">
      <Link className="brand" to="/" onClick={() => setOpen(false)} aria-label="OCTO">
        <span className="brand-mark">O</span>
        <span>
          <strong>{data.company.name}</strong>
          <small>Digital agency</small>
        </span>
      </Link>

      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Navigation principale">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-toggle" aria-label="Choisir la langue">
          <Languages size={16} aria-hidden="true" />
          <button className={language === "fr" ? "active" : ""} type="button" onClick={() => setLanguage("fr")}>
            FR
          </button>
          <button className={language === "en" ? "active" : ""} type="button" onClick={() => setLanguage("en")}>
            EN
          </button>
        </div>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

function Home({ data, language }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">{text(language, "heroEyebrow")}</p>
          <h1>{text(language, "heroTitle")}</h1>
          <p>{text(language, "heroText")}</p>
          <div className="hero-actions">
            <Link className="primary-button" to="/contact">
              {text(language, "startProject")}
              <ArrowRight size={18} />
            </Link>
            <Link className="secondary-button" to="/services">
              {text(language, "exploreServices")}
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <img src="/assets/images/resource/about-2.jpg" alt="OCTO digital workspace" />
          <div className="hero-panel">
            <strong>7</strong>
            <span>{text(language, "services")}</span>
          </div>
        </div>
      </section>

      <AboutSection data={data} language={language} />
      <ServicesPreview data={data} language={language} />
      <OffersSection data={data} language={language} />
      <ProjectsPreview data={data} language={language} />
      <BlogPreview data={data} language={language} />
      <ContactPreview data={data} language={language} />
    </>
  );
}

function SectionHeading({ eyebrow, title, text: body }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function AboutSection({ data, language }) {
  return (
    <section className="content-section about-layout" id="about">
      <div>
        <SectionHeading eyebrow={text(language, "aboutEyebrow")} title={text(language, "aboutTitle")} />
        <div className="paragraph-stack">
          {data.intro[language].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="about-card">
        <CheckCircle2 />
        <h3>{language === "fr" ? "Une approche claire" : "A clear approach"}</h3>
        <p>
          {language === "fr"
            ? "Conseil, conception, développement, suivi et amélioration continue sont reliés dans un même accompagnement."
            : "Consulting, design, development, monitoring and continuous improvement are connected in one support flow."}
        </p>
      </div>
    </section>
  );
}

function ServicesPreview({ data, language }) {
  return (
    <section className="content-section" id="services">
      <SectionHeading
        eyebrow={text(language, "servicesEyebrow")}
        title={text(language, "servicesTitle")}
        text={text(language, "servicePageText")}
      />
      <div className="service-grid">
        {data.services.map((service) => (
          <ServiceCard key={service.slug} service={service} language={language} />
        ))}
      </div>
    </section>
  );
}

function ServicesPage({ data, language }) {
  return (
    <section className="page-section">
      <SectionHeading
        eyebrow={text(language, "servicesEyebrow")}
        title={text(language, "servicePageTitle")}
        text={text(language, "servicePageText")}
      />
      <div className="service-grid">
        {data.services.map((service) => (
          <ServiceCard key={service.slug} service={service} language={language} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service, language }) {
  const Icon = serviceIcons[service.icon] || BriefcaseBusiness;

  return (
    <article className="service-card">
      <Icon aria-hidden="true" />
      <h3>{localize(service.title, language)}</h3>
      <p>{localize(service.summary, language)}</p>
      <Link to={`/services/${service.slug}`}>
        {text(language, "serviceDetails")}
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}

function ServiceDetailPage({ data, language }) {
  const { slug } = useParams();
  const service = useMemo(() => data.services.find((item) => item.slug === slug), [data.services, slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = serviceIcons[service.icon] || BriefcaseBusiness;

  return (
    <section className="page-section service-detail-page">
      <Link className="back-link" to="/services">
        {text(language, "detailBack")}
      </Link>
      <div className="detail-layout">
        <aside className="detail-sidebar">
          <h2>{text(language, "services")}</h2>
          {data.services.map((item) => (
            <NavLink key={item.slug} to={`/services/${item.slug}`}>
              {localize(item.title, language)}
            </NavLink>
          ))}
        </aside>

        <article className="detail-content">
          <div className="detail-hero">
            <img src={service.image} alt={localize(service.title, language)} />
            <div>
              <Icon />
              <p className="eyebrow">{text(language, "included")}</p>
              <h1>{localize(service.title, language)}</h1>
              <p>{localize(service.summary, language)}</p>
            </div>
          </div>

          <div className="paragraph-stack detail-text">
            {service.details[language].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {service.extraTitle ? (
            <div className="detail-extra">
              <h2>{localize(service.extraTitle, language)}</h2>
              <div className="paragraph-stack">
                {service.extraDetails[language].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : null}

          <OffersSection data={data} language={language} compact />
        </article>
      </div>
    </section>
  );
}

function OffersSection({ data, language, compact = false }) {
  return (
    <section className={compact ? "offers-section compact" : "content-section offers-section"}>
      <SectionHeading eyebrow={text(language, "offersEyebrow")} title={compact ? text(language, "offersForService") : text(language, "offersTitle")} />
      <div className="offer-grid">
        {data.offers.map((offer) => (
          <article className="offer-card" key={offer.key}>
            <span>{localize(offer.label, language)}</span>
            <h3>{localize(offer.title, language)}</h3>
            <strong>{localize(offer.price, language)}</strong>
            <ul>
              {offer.items[language].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsPreview({ data, language }) {
  return (
    <section className="content-section">
      <SectionHeading eyebrow={text(language, "projectsEyebrow")} title={text(language, "projectsTitle")} text={text(language, "projectsText")} />
      <ProjectGrid projects={data.projects} language={language} />
    </section>
  );
}

function ProjectsPage({ data, language }) {
  return (
    <section className="page-section">
      <SectionHeading eyebrow={text(language, "projectsEyebrow")} title={text(language, "projectsTitle")} text={text(language, "projectsText")} />
      <ProjectGrid projects={data.projects} language={language} />
    </section>
  );
}

function ProjectGrid({ projects, language }) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <article className="project-card" key={localize(project.title, language)}>
          <img src={project.image} alt={localize(project.title, language)} />
          <div>
            <span>{localize(project.type, language)}</span>
            <h3>{localize(project.title, language)}</h3>
            <p>{localize(project.text, language)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function BlogPreview({ data, language }) {
  return (
    <section className="content-section">
      <SectionHeading eyebrow={text(language, "blogEyebrow")} title={text(language, "blogTitle")} text={text(language, "blogText")} />
      <BlogGrid posts={data.blogPosts} language={language} />
    </section>
  );
}

function BlogPage({ data, language }) {
  return (
    <section className="page-section">
      <SectionHeading eyebrow={text(language, "blogEyebrow")} title={text(language, "blogTitle")} text={text(language, "blogText")} />
      <BlogGrid posts={data.blogPosts} language={language} />
    </section>
  );
}

function BlogGrid({ posts, language }) {
  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <article className="blog-card" key={post.slug}>
          <img src={post.image} alt={localize(post.title, language)} />
          <div>
            <CalendarDays size={18} />
            <span>{language === "fr" ? "Mise à jour éditoriale" : "Editorial update"}</span>
          </div>
          <h3>{localize(post.title, language)}</h3>
          <p>{localize(post.excerpt, language)}</p>
        </article>
      ))}
    </div>
  );
}

function ContactPreview({ data, language }) {
  return (
    <section className="content-section contact-band" id="contact">
      <SectionHeading eyebrow={text(language, "contactEyebrow")} title={text(language, "contactTitle")} text={text(language, "contactText")} />
      <ContactOptions options={data.contactOptions} language={language} />
      <Link className="primary-button" to="/contact">
        {text(language, "startProject")}
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}

function ContactPage({ data, language }) {
  return (
    <section className="page-section contact-page">
      <div>
        <SectionHeading eyebrow={text(language, "contactEyebrow")} title={text(language, "contactTitle")} text={text(language, "contactText")} />
        <ContactOptions options={data.contactOptions} language={language} />
      </div>
      <ContactForm language={language} />
    </section>
  );
}

function ContactOptions({ options, language }) {
  return (
    <div className="contact-options">
      {options.map((option) => {
        const Icon = contactIcons[option.key] || Phone;
        return (
          <a className="contact-option" href={option.href} key={option.key}>
            <Icon aria-hidden="true" />
            <strong>{localize(option.title, language)}</strong>
            <span>{localize(option.text, language)}</span>
          </a>
        );
      })}
    </div>
  );
}

function ContactForm({ language }) {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

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
      setStatus(text(language, "formSuccess"));
    } catch {
      setStatus(text(language, "formError"));
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        {text(language, "formName")}
        <input name="name" type="text" required />
      </label>
      <label>
        {text(language, "formEmail")}
        <input name="email" type="email" required />
      </label>
      <label>
        {text(language, "formMessage")}
        <textarea name="message" rows="6" required />
      </label>
      <button className="primary-button" type="submit">
        {text(language, "formSubmit")}
        <ArrowRight size={18} />
      </button>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  );
}

function Footer({ data, language }) {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand" to="/" aria-label="OCTO">
          <span className="brand-mark">O</span>
          <span>
            <strong>{data.company.name}</strong>
            <small>Digital agency</small>
          </span>
        </Link>
        <p>{text(language, "footerText")}</p>
      </div>
      <div className="footer-contact">
        <a href={`mailto:${data.company.email}`}>
          <Mail size={16} />
          {data.company.email}
        </a>
        <span>
          <Phone size={16} />
          {data.company.phoneLabel}
        </span>
        <span>
          <MapPin size={16} />
          {localize(data.company.address, language)}
        </span>
      </div>
      <p className="copyright">OCTO © 2026. {text(language, "rights")}</p>
    </footer>
  );
}

export default App;
