export const siteData = {
  company: {
    name: "OCTO",
    email: "contact@octo.digital",
    phoneLabel: "+33 WhatsApp / +261",
    whatsappUrl: "https://wa.me/33000000000",
    address: {
      fr: "Tananarive",
      en: "Antananarivo"
    },
    socialLinks: [
      { label: "Facebook", href: "https://facebook.com/" },
      { label: "LinkedIn", href: "https://linkedin.com/" }
    ]
  },
  intro: {
    fr: [
      "OCTO est une agence portée par une vision humaine du digital, qui vous conseille et vous soutient durablement dans vos projets.",
      "Nous accompagnons les entreprises dans leur transformation digitale en leur apportant des solutions innovantes et un accompagnement stratégique adaptés à leurs objectifs. Notre approche vise à simplifier les processus, améliorer la performance et optimiser les ressources afin de permettre à chaque organisation de gagner en efficacité et de se concentrer sur son cœur de métier.",
      "Chez OCTO, nous croyons que le numérique est un véritable levier de croissance, capable de réduire les contraintes opérationnelles et de créer de nouvelles opportunités pour les entreprises de toutes tailles."
    ],
    en: [
      "OCTO is an agency driven by a human vision of digital work, advising you and supporting your projects over the long term.",
      "We support companies through their digital transformation by providing innovative solutions and strategic guidance tailored to their goals. Our approach simplifies processes, improves performance and optimizes resources so every organization can become more efficient and focus on its core business.",
      "At OCTO, we believe digital technology is a true growth driver, able to reduce operational constraints and create new opportunities for companies of every size."
    ]
  },
  services: [
    {
      slug: "developpement-web",
      icon: "Globe2",
      image: "/assets/images/resource/offer-1.jpg",
      title: {
        fr: "Développement Web",
        en: "Web Development"
      },
      summary: {
        fr: "Sites vitrines, e-commerce et plateformes web sur-mesure, rapides, sécurisés et faciles à faire évoluer.",
        en: "Showcase websites, e-commerce stores and custom web platforms that are fast, secure and easy to evolve."
      },
      details: {
        fr: [
          "Nous créons des sites internet sur-mesure, adaptés à vos objectifs : site vitrine pour présenter votre activité, boutique e-commerce pour vendre en ligne, ou plateforme web plus complexe pour vos besoins spécifiques.",
          "Notre équipe s'adapte aux technologies les plus pertinentes pour votre projet, sans vous imposer une solution standardisée.",
          "Chaque site est pensé pour être rapide, sécurisé, et facile à faire évoluer dans le temps."
        ],
        en: [
          "We create custom websites tailored to your goals: a showcase site to present your business, an e-commerce store to sell online, or a more complex web platform for specific needs.",
          "Our team adapts to the most relevant technologies for your project without forcing a standardized solution.",
          "Every site is designed to be fast, secure and easy to evolve over time."
        ]
      }
    },
    {
      slug: "developpement-mobile",
      icon: "Smartphone",
      image: "/assets/images/resource/offer-2.jpg",
      title: {
        fr: "Développement Mobile",
        en: "Mobile Development"
      },
      summary: {
        fr: "Applications iOS et Android pensées pour vos besoins métier, de l'expérience utilisateur à la publication.",
        en: "iOS and Android applications designed for your business needs, from user experience to store publication."
      },
      details: {
        fr: [
          "Nous concevons des applications mobiles iOS et Android sur-mesure, pensées pour répondre à un besoin métier précis : gestion, logistique, services aux clients, ou usage interne.",
          "De la conception de l'expérience utilisateur jusqu'à la publication sur les stores, notre équipe vous accompagne à chaque étape.",
          "Nous portons une attention particulière à la fluidité et à la fiabilité de l'application."
        ],
        en: [
          "We design custom iOS and Android mobile applications built around precise business needs: management, logistics, customer services or internal usage.",
          "From user experience design to store publication, our team supports you at every stage.",
          "We pay special attention to the fluidity and reliability of the application."
        ]
      }
    },
    {
      slug: "logiciel-sur-mesure",
      icon: "CircuitBoard",
      image: "/assets/images/resource/offer-3.jpg",
      title: {
        fr: "Logiciel sur-mesure",
        en: "Custom Software"
      },
      summary: {
        fr: "Outils internes, gestion de stock, suivi logistique ou plateformes SaaS adaptés à votre façon de travailler.",
        en: "Internal tools, stock management, logistics tracking or SaaS platforms adapted to the way you work."
      },
      details: {
        fr: [
          "Toutes les entreprises n'ont pas les mêmes besoins, et les outils standards du marché ne conviennent pas toujours.",
          "Nous développons des logiciels entièrement adaptés à votre activité : gestion de stock, suivi logistique, plateformes SaaS, outils internes de pilotage.",
          "L'objectif est simple : un outil pensé pour votre façon de travailler, pas l'inverse."
        ],
        en: [
          "Every company has different needs, and standard market tools do not always fit.",
          "We develop software fully adapted to your activity: stock management, logistics tracking, SaaS platforms and internal management tools.",
          "The goal is simple: a tool designed around the way you work, not the other way around."
        ]
      }
    },
    {
      slug: "design-ui-ux-identite-visuelle",
      icon: "Palette",
      image: "/assets/images/resource/about-4.jpg",
      title: {
        fr: "Design UI/UX & Identité visuelle",
        en: "UI/UX Design & Visual Identity"
      },
      summary: {
        fr: "Interfaces claires, parcours intuitifs, logo, charte graphique et supports visuels cohérents.",
        en: "Clear interfaces, intuitive journeys, logo design, brand guidelines and consistent visual assets."
      },
      details: {
        fr: [
          "Un bon produit digital ne se limite pas à sa technique : il doit aussi être agréable et intuitif à utiliser.",
          "Notre équipe design conçoit des interfaces claires, pensées pour l'expérience de vos utilisateurs, ainsi que des identités visuelles cohérentes pour votre marque : logo, charte graphique et supports visuels.",
          "Design et développement travaillent main dans la main pour un résultat homogène du premier croquis à la mise en ligne."
        ],
        en: [
          "A strong digital product is not only technical: it must also be pleasant and intuitive to use.",
          "Our design team creates clear interfaces focused on your users' experience, as well as coherent visual identities for your brand: logo, guidelines and visual assets.",
          "Design and development work together for a consistent result from the first sketch to launch."
        ]
      }
    },
    {
      slug: "maintenance-support",
      icon: "ShieldCheck",
      image: "/assets/images/resource/services.jpg",
      title: {
        fr: "Maintenance & Support",
        en: "Maintenance & Support"
      },
      summary: {
        fr: "Mises à jour de sécurité, corrections de bugs, petites évolutions et suivi technique dans la durée.",
        en: "Security updates, bug fixes, small improvements and long-term technical monitoring."
      },
      details: {
        fr: [
          "Un site, une application ou un logiciel a besoin d'être entretenu pour rester performant et sécurisé dans le temps.",
          "Nous proposons un service de maintenance incluant les mises à jour de sécurité, les corrections de bugs, les petites évolutions et le suivi technique de votre outil.",
          "Vous gardez ainsi l'esprit tranquille, avec une équipe qui connaît déjà votre projet et reste disponible en cas de besoin."
        ],
        en: [
          "A website, application or software product needs ongoing care to remain performant and secure over time.",
          "We provide maintenance including security updates, bug fixes, small evolutions and technical monitoring.",
          "You keep peace of mind with a team that already knows your project and remains available when needed."
        ]
      }
    },
    {
      slug: "externalisation-equipe-dediee",
      icon: "UsersRound",
      image: "/assets/images/resource/team-1.jpg",
      title: {
        fr: "Externalisation / Mise à disposition d'équipe",
        en: "Outsourcing / Dedicated Team"
      },
      summary: {
        fr: "Développeurs et designers intégrés à votre organisation avec flexibilité, suivi collaboratif et confidentialité.",
        en: "Developers and designers integrated into your organization with flexibility, collaborative tracking and confidentiality."
      },
      details: {
        fr: [
          "Besoin de renforcer temporairement votre équipe technique sans passer par un recrutement long et coûteux ?",
          "Nous mettons à votre disposition un ou plusieurs de nos développeurs ou designers, intégrés à votre organisation le temps nécessaire à votre projet.",
          "Vous gardez le contrôle de votre roadmap, nous apportons la compétence et la disponibilité, avec une grande flexibilité selon vos besoins, de quelques semaines à plusieurs mois."
        ],
        en: [
          "Need to temporarily strengthen your technical team without a long and costly recruitment process?",
          "We provide one or more developers or designers who integrate into your organization for the time your project requires.",
          "You keep control of your roadmap while we bring skills and availability, with strong flexibility from a few weeks to several months."
        ]
      },
      extraTitle: {
        fr: "Pourquoi externaliser chez OCTO ?",
        en: "Why outsource with OCTO?"
      },
      extraDetails: {
        fr: [
          "Habitués à collaborer avec des agences, des entreprises et des partenaires techniques, nous nous adaptons à vos méthodes de travail et à vos exigences afin de garantir une collaboration fluide et efficace.",
          "La confidentialité est au cœur de nos engagements. Si nécessaire, nous pouvons signer un accord de confidentialité (NDA) garantissant la protection de vos informations et le respect de votre relation avec vos clients.",
          "Nous nous engageons notamment à ne jamais solliciter directement vos clients finaux dans le cadre d'une mission réalisée pour votre compte.",
          "Tout au long du projet, vous bénéficiez d'outils de suivi collaboratifs vous permettant de communiquer facilement avec notre équipe et de suivre en toute transparence l'avancement des travaux."
        ],
        en: [
          "Used to collaborating with agencies, companies and technical partners, we adapt to your working methods and requirements to ensure smooth and efficient collaboration.",
          "Confidentiality is central to our commitments. When needed, we can sign a non-disclosure agreement protecting your information and your client relationships.",
          "We notably commit to never directly solicit your end clients during a mission carried out on your behalf.",
          "Throughout the project, collaborative tracking tools help you communicate with our team and follow progress transparently."
        ]
      }
    },
    {
      slug: "accompagnement-digitalisation",
      icon: "Compass",
      image: "/assets/images/resource/empower-2.jpg",
      title: {
        fr: "Accompagnement à la digitalisation",
        en: "Digitalization Support"
      },
      summary: {
        fr: "Diagnostic, recommandation d'outils, mise en place progressive et formation des équipes, sans jargon inutile.",
        en: "Diagnosis, tool recommendations, progressive implementation and team training, without unnecessary jargon."
      },
      details: {
        fr: [
          "Votre entreprise n'a pas encore franchi le cap du digital, ou ne sait pas par où commencer ?",
          "Nous vous accompagnons étape par étape : diagnostic de votre situation actuelle, recommandation des outils adaptés à votre activité, mise en place progressive des solutions, et formation de vos équipes.",
          "Pas de jargon technique inutile : un accompagnement pensé pour vous faire avancer à votre rythme."
        ],
        en: [
          "Has your company not yet taken the digital step, or are you unsure where to begin?",
          "We support you step by step: diagnosis of your current situation, recommendation of tools adapted to your activity, progressive implementation and team training.",
          "No unnecessary technical jargon: support designed to move at your pace."
        ]
      }
    }
  ],
  offers: [
    {
      key: "cms",
      label: { fr: "CMS", en: "CMS" },
      title: { fr: "CMS WordPress / PrestaShop / Drupal", en: "WordPress / PrestaShop / Drupal CMS" },
      price: { fr: "60€ par jour", en: "€60 per day" },
      items: {
        fr: [
          "Un chef de projet",
          "Réduction progressive en fonction du volume apporté",
          "Des équipes dédiées à vos projets"
        ],
        en: [
          "A project manager",
          "Progressive discount based on volume",
          "Dedicated teams for your projects"
        ]
      }
    },
    {
      key: "regie",
      label: { fr: "Régie", en: "Staffing" },
      title: { fr: "Développeur web full-stack à temps plein", en: "Full-time full-stack web developer" },
      price: { fr: "850€ / développement", en: "€850 / development" },
      items: {
        fr: [
          "Un chef de projet",
          "8h de travail par jour avec 1h de pause",
          "Une équipe qui s'adapte à vos horaires",
          "Pas de contrainte de technologie"
        ],
        en: [
          "A project manager",
          "8 working hours per day with a 1-hour break",
          "A team that adapts to your schedule",
          "No technology constraint"
        ]
      }
    },
    {
      key: "sur-mesure",
      label: { fr: "Sur mesure", en: "Custom" },
      title: { fr: "Développement sur mesure", en: "Custom development" },
      price: { fr: "85€ / jour", en: "€85 / day" },
      items: {
        fr: [
          "Un chef de projet",
          "Réduction progressive en fonction du volume apporté",
          "Des équipes dédiées à vos projets"
        ],
        en: [
          "A project manager",
          "Progressive discount based on volume",
          "Dedicated teams for your projects"
        ]
      }
    }
  ],
  projects: [
    {
      title: { fr: "Portfolio web", en: "Web Portfolio" },
      type: { fr: "Réalisation personnelle", en: "Personal work" },
      text: { fr: "Sites vitrines et expériences web prêts à être enrichis avec les références OCTO.", en: "Showcase websites and web experiences ready to be enriched with OCTO references." },
      image: "/assets/images/resource/project-1.jpg"
    },
    {
      title: { fr: "Application métier", en: "Business App" },
      type: { fr: "Mobile & logiciel", en: "Mobile & software" },
      text: { fr: "Parcours de gestion, suivi et services internes pour les équipes opérationnelles.", en: "Management, tracking and internal service flows for operational teams." },
      image: "/assets/images/resource/project-2.jpg"
    },
    {
      title: { fr: "Plateforme SaaS", en: "SaaS Platform" },
      type: { fr: "Sur mesure", en: "Custom" },
      text: { fr: "Base produit évolutive pour centraliser les données, les utilisateurs et les opérations.", en: "Scalable product base for centralizing data, users and operations." },
      image: "/assets/images/resource/project-3.jpg"
    }
  ],
  blogPosts: [
    {
      slug: "structurer-projet-digital",
      title: { fr: "Comment structurer un projet digital efficace", en: "How to structure an effective digital project" },
      excerpt: { fr: "Les étapes simples pour cadrer un besoin, choisir les priorités et avancer sans perdre de temps.", en: "Simple steps to frame a need, choose priorities and move without wasting time." },
      image: "/assets/images/resource/news-1.jpg"
    },
    {
      slug: "contenu-utile-clients",
      title: { fr: "Créer du contenu utile pour attirer les bons clients", en: "Create useful content to attract the right clients" },
      excerpt: { fr: "Un blog OCTO pensé pour évoluer régulièrement avec des articles utiles toutes les deux semaines.", en: "An OCTO blog designed to evolve regularly with useful articles every two weeks." },
      image: "/assets/images/resource/news-2.jpg"
    },
    {
      slug: "transformation-digitale",
      title: { fr: "Réussir sa transformation digitale étape par étape", en: "Succeed in digital transformation step by step" },
      excerpt: { fr: "Diagnostic, outils, adoption et formation : avancer au bon rythme avec une équipe qui accompagne.", en: "Diagnosis, tools, adoption and training: move at the right pace with a supportive team." },
      image: "/assets/images/resource/news-3.jpg"
    }
  ],
  contactOptions: [
    {
      key: "call",
      href: "tel:+33000000000",
      title: { fr: "Appelez-nous", en: "Call us" },
      text: { fr: "Échangez directement avec l'un de nos conseillers pour obtenir des informations ou discuter de votre projet.", en: "Speak directly with one of our advisors to get information or discuss your project." }
    },
    {
      key: "email",
      href: "mailto:contact@octo.digital",
      title: { fr: "Envoyez-nous un e-mail", en: "Send us an email" },
      text: { fr: "Décrivez-nous votre besoin et nous vous répondrons dans les meilleurs délais avec une solution adaptée.", en: "Tell us what you need and we will reply quickly with a suitable solution." }
    },
    {
      key: "whatsapp",
      href: "https://wa.me/33000000000",
      title: { fr: "Contactez-nous sur WhatsApp", en: "Contact us on WhatsApp" },
      text: { fr: "Discutez rapidement avec notre équipe pour obtenir des réponses immédiates ou un premier accompagnement.", en: "Chat quickly with our team to get immediate answers or first guidance." }
    },
    {
      key: "visit",
      href: "https://maps.google.com/?q=Tananarive",
      title: { fr: "Rendez-nous visite", en: "Visit us" },
      text: { fr: "Rencontrez notre équipe dans nos bureaux afin d'échanger sur votre projet et bénéficier de conseils personnalisés.", en: "Meet our team at our office to discuss your project and receive personalized advice." }
    }
  ]
};
