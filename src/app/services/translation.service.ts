import { Injectable } from '@angular/core';

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage: Language = 'en';

  private translations: Record<Language, any> = {
    en: {
      navbar: {
        about: 'About',
        experience: 'Experience',
        skills: 'Skills',
        education: 'Education',
        languages: 'Languages',
        interests: 'Interests',
        contact: 'Contact'
      },
      hero: {
        subtitle: 'Full Stack Developer',
        summary: 'Experienced full stack developer specializing in building scalable, high-performance web and mobile applications with modern technologies. Passionate about clean code, user experience, and creating elegant solutions to complex problems.',
        details: 'Angular / React / React Native / Node.js | 5+ years of Web Development | Sousse, Tunisia',
        contactButton: 'Contact Me',
        linkedInButton: 'LinkedIn Profile'
      },
      about: {
        title: 'About Me',
        paragraph: 'Passionate web developer with 5+ years of experience building scalable web and mobile applications using Angular, React, and React Native. Experienced in Firebase services including Firestore, Authentication, and Cloud Messaging (FCM). Strong background in Agile development using Scrum methodologies, with daily use of Git for version control and team collaboration. Skilled in UI/UX principles, teamwork, and delivering high-quality, user-focused applications.',
        cards: {
          languages: {
            title: 'Languages',
            value: 'JavaScript, TypeScript'
          },
          frameworks: {
            title: 'Frameworks',
            value: 'Angular, React.js, React Native, Node.js'
          },
          databases: {
            title: 'Databases',
            value: 'MySQL, SQL Server, MongoDB'
          }
        }
      },
      experience: {
        title: 'Professional Experience',
        experiences: [
          {
            period: 'Feb 2024 - Present',
            role: 'Full-Stack Developer',
            company: 'Armada Delivery Solutions',
            location: 'Sousse, Tunisia',
            summary: 'Developed a cross-platform mobile application using React Native for merchants and operations managers, enabling real-time monitoring and control of delivery operations. Implemented features such as branch and staff management, wallet tracking, and instant operational alerts.',
            technologies: ['Node JS', 'MongoDB', 'React Native', 'Maps', 'Firebase (Authentication & FCM)', 'Pusher', 'QR code scanning', 'PDF handling', 'Leaflet', 'TypeScript', 'Axios', 'react-i18next', 'Zustand', 'GitHub']
          },
          {
            period: 'Aug 2022 - Jan 2024',
            role: 'Full-Stack Developer',
            company: 'Armada Delivery Solutions',
            location: 'Sousse, Tunisia',
            summary: 'Built a high-performance POS mobile application goFast POS integrating Sunmi V2s thermal printing and Android Kiosk Mode, enabling secure and streamlined restaurant operations. Engineered real-time order alerts with Firebase and Pusher, and an offline-first system ensuring continuous sales and seamless sync. Implemented OTP authentication, encrypted storage, and a bilingual interface optimized for fast-paced environments.',
            technologies: ['Node JS', 'MongoDB', 'React Native', 'TypeScript', 'React Query', 'Axios', 'Lottie React Native', 'Firebase', 'Pusher', 'react-i18next', 'Git']
          },
          {
            period: 'Sep 2022 - Sep 2023',
            role: 'Angular Developer',
            company: 'Siyou Technology',
            location: 'Sousse, Tunisia',
            summary: 'Enhanced a B2S2C e-commerce platform by developing new features and optimizing transaction workflows. Proactively resolved critical production issues through root cause analysis, delivering long-term solutions that improved system reliability and minimized downtime.',
            technologies: ['Angular 11', 'TypeScript', 'RxJS', 'Angular Router', 'Component Communication (Input/Output)', 'HTML5', 'SCSS/CSS', 'Git']
          },
          {
            period: 'Apr 2021 - Aug 2022',
            role: 'Angular Developer',
            company: 'Axia Solutions Sousse',
            location: 'Sousse, Tunisia',
            summary: 'Designed and developed multiple enterprise web applications, including a multi-currency management system covering project and commercial operations (sales/purchases) with role-based access control. Built solutions for package and collaborator management, invoicing, client interaction, and vehicle tracking using map integration. Also developed a real-time online meeting platform and systems for residence and transfer management, focusing on data centralization and operational efficiency.',
            technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Router', 'HTML', 'SCSS', 'OpenLayers', 'RTCMultiConnection', 'REST APIs', 'Git']
          },
          {
            period: 'Mar 2019 - Mar 2020',
            role: 'Angular Developer',
            company: 'Leader Call Service Sousse',
            location: 'Sousse, Tunisia',
            summary: 'Designed and developed two web applications for managing real estate and automobile listings in France using Angular 6/7. Implemented key features including Google Maps integration, location autocomplete, multilingual support, SEO optimization, and user account management, delivering a scalable and user-friendly experience.',
            technologies: ['Angular 6/7', 'TypeScript', 'RxJS', 'Angular Router', 'Google Maps API', 'Places Autocomplete', 'i18n (Translation)', 'HTML', 'SCSS', 'REST APIs', 'Git']
          },
          {
            period: 'Jan 2019 - Mar 2019',
            role: 'Inter Developer',
            company: 'Leader Call Service Sousse',
            location: 'Sousse, Tunisia',
            summary: 'Developed a mobile application using Ionic 3, enabling users to manage listings and submit project requests connected to service providers. Focused on intuitive UI/UX and seamless interaction between users and providers.',
            technologies: ['Ionic 3', 'TypeScript', 'HTML', 'SCSS', 'REST APIs', 'Git']
          }
        ]
      },
      skills: {
        title: 'Skills & Expertise',
        expertise: 'Expertise'
      },
      education: {
        title: 'Education',
        items: [
          { title: 'Engineering Degree in Software Engineering', institution: 'EPI Sousse', period: '2015-2018', cardClass: 'engineering-card' },
          { title: 'Applied Bachelor\'s Degree', institution: 'ISET Sousse', period: '2008-2012', cardClass: 'applied-card' },
          { title: 'Baccalaureate in Computer Science', institution: 'High school Farhat Hached M\'saken', period: '2007-2008', cardClass: 'baccalaureate-card' }
        ]
      },
      interests: {
        title: 'Interests',
        items: [
          { title: 'Reading', description: 'Passionate about technology books and articles', backgroundClass: 'reading-bg' },
          { title: 'Travel', description: 'Exploring new places and cultures', backgroundClass: 'travel-bg' },
          { title: 'Cinema', description: 'Enjoying movies and film analysis', backgroundClass: 'cinema-bg' }
        ]
      },
      contact: {
        title: 'Contact',
        heading: 'Let’s Work Together',
        description: 'I’m open to freelance or full-time opportunities.',
        say: "Say",
        hello: "hello",
        subtitle: "Interested in working together? Drop me a line.",
        email: 'inessmhamed@gmail.com',
        phone: '(+216) 93-988-526',
        location: 'Sousse, Tunisia',
        sendEmail: 'Send Email',
        callMe: 'Call Me',
        linkedIn: 'LinkedIn'
      },
      footer: {
        text: '© 2026 Mhamed Ines. Crafted with passion.'
      }
    },
    fr: {
      navbar: {
        about: 'À propos',
        experience: 'Expérience',
        skills: 'Compétences',
        education: 'Éducation',
        languages: 'Langues',
        interests: 'Centres d\'intérêt',
        contact: 'Contact'
      },
      hero: {
        subtitle: 'Développeuse Full Stack',
        summary: 'Développeuse full stack expérimentée, spécialisée dans la création d\'applications web et mobiles performantes et évolutives avec des technologies modernes. Passionnée par le code propre, l\'expérience utilisateur et la création de solutions élégantes à des problèmes complexes.',
        details: 'Angular / React / React Native / Node.js | 5+ ans de développement web | Sousse, Tunisie',
        contactButton: 'Contactez-moi',
        linkedInButton: 'Profil LinkedIn'
      },
      about: {
        title: 'À propos de moi',
        paragraph: 'Développeuse web passionnée avec plus de 5 ans d\'expérience dans la création d\'applications web et mobiles évolutives en utilisant Angular, React et React Native. Expérimentée sur les services Firebase tels que Firestore, Authentication et Cloud Messaging (FCM). Solide expérience en développement Agile avec les méthodologies Scrum, utilisant quotidiennement Git pour le contrôle de version et la collaboration d\'équipe. Compétente en UI/UX, travail d\'équipe et livraison d\'applications de haute qualité centrées sur l\'utilisateur.',
        cards: {
          languages: {
            title: 'Langages',
            value: 'JavaScript, TypeScript'
          },
          frameworks: {
            title: 'Frameworks',
            value: 'Angular, React.js, React Native, Node.js'
          },
          databases: {
            title: 'Bases de données',
            value: 'MySQL, SQL Server, MongoDB'
          }
        }
      },
      experience: {
        title: 'Expérience Professionnelle',
        experiences: [
          {
            period: 'Fév 2024 - Présent',
            role: 'Développeuse Full-Stack',
            company: 'Armada Delivery Solutions',
            location: 'Sousse, Tunisie',
            summary: 'Développé une application mobile multiplateforme en React Native pour les commerçants et les responsables opérationnels, permettant le suivi et le contrôle en temps réel des livraisons. Implémentation de la gestion des agences et du personnel, du suivi des portefeuilles et des alertes opérationnelles instantanées.',
            technologies: ['Node JS', 'MongoDB', 'React Native', 'Maps', 'Firebase (Authentication & FCM)', 'Pusher', 'QR code scanning', 'PDF handling', 'Leaflet', 'TypeScript', 'Axios', 'react-i18next', 'Zustand', 'GitHub']
          },
          {
            period: 'Août 2022 - Jan 2024',
            role: 'Développeuse Full-Stack',
            company: 'Armada Delivery Solutions',
            location: 'Sousse, Tunisie',
            summary: 'Créé une application POS mobile performante goFast POS intégrant l\'impression thermique Sunmi V2s et le mode kiosque Android, pour des opérations de restauration sécurisées et fluides. Conception des alertes de commandes en temps réel avec Firebase et Pusher, et d\'un système offline-first garantissant la continuité des ventes et une synchronisation transparente. Authentification OTP, stockage chiffré et interface bilingue optimisée pour les environnements rapides.',
            technologies: ['Node JS', 'MongoDB', 'React Native', 'TypeScript', 'React Query', 'Axios', 'Lottie React Native', 'Firebase', 'Pusher', 'react-i18next', 'Git']
          },
          {
            period: 'Sep 2022 - Sep 2023',
            role: 'Développeuse Angular',
            company: 'Siyou Technology',
            location: 'Sousse, Tunisie',
            summary: 'Amélioré une plateforme e-commerce B2S2C en développant de nouvelles fonctionnalités et en optimisant les flux de transaction. Résolution proactive des incidents de production via analyse des causes profondes, avec des solutions durables améliorant la fiabilité et réduisant les temps d\'arrêt.',
            technologies: ['Angular 11', 'TypeScript', 'RxJS', 'Angular Router', 'Component Communication (Input/Output)', 'HTML5', 'SCSS/CSS', 'Git']
          },
          {
            period: 'Avr 2021 - Août 2022',
            role: 'Développeuse Angular',
            company: 'Axia Solutions Sousse',
            location: 'Sousse, Tunisie',
            summary: 'Conçu et développé plusieurs applications web d\'entreprise, dont un système de gestion multi-devises couvrant les opérations projet et commerciales (ventes/achats) avec contrôle d\'accès par rôle. Création de solutions pour la gestion des colis, des collaboratrices, la facturation, l\'interaction client et le suivi des véhicules via intégration cartographique. Développement d\'une plateforme de réunion en ligne en temps réel et de systèmes de gestion de résidence et de transferts, en se concentrant sur la centralisation des données et l\'efficacité opérationnelle.',
            technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Router', 'HTML', 'SCSS', 'OpenLayers', 'RTCMultiConnection', 'REST APIs', 'Git']
          },
          {
            period: 'Mar 2019 - Mar 2020',
            role: 'Développeuse Angular',
            company: 'Leader Call Service Sousse',
            location: 'Sousse, Tunisie',
            summary: 'Conçu et développé deux applications web pour la gestion des annonces immobilières et automobiles en France avec Angular 6/7. Mise en œuvre de fonctionnalités clés telles que l\'intégration de Google Maps, l\'autocomplétion de localisation, le support multilingue, l\'optimisation SEO et la gestion des comptes utilisateurs, pour une expérience évolutive et conviviale.',
            technologies: ['Angular 6/7', 'TypeScript', 'RxJS', 'Angular Router', 'Google Maps API', 'Places Autocomplete', 'i18n (Translation)', 'HTML', 'SCSS', 'REST APIs', 'Git']
          },
          {
            period: 'Jan 2019 - Mar 2019',
            role: 'Développeuse Interne',
            company: 'Leader Call Service Sousse',
            location: 'Sousse, Tunisie',
            summary: 'Développé une application mobile avec Ionic 3, permettant aux utilisateurs de gérer des annonces et de soumettre des demandes de projet connectées aux prestataires de services. Accent sur une interface intuitive et une interaction fluide entre utilisateurs et prestataires.',
            technologies: ['Ionic 3', 'TypeScript', 'HTML', 'SCSS', 'REST APIs', 'Git']
          }
        ]
      },
      skills: {
        title: 'Compétences & Expertise',
        expertise: 'Expertise'
      },
      education: {
        title: 'Éducation',
        items: [
          { title: 'Diplôme d\'ingénieur en Génie Logiciel', institution: 'EPI Sousse', period: '2015-2018', cardClass: 'engineering-card' },
          { title: 'Licence Appliquée', institution: 'ISET Sousse', period: '2008-2012', cardClass: 'applied-card' },
          { title: 'Baccalauréat en Informatique', institution: 'Lycée Farhat Hached M\'saken', period: '2007-2008', cardClass: 'baccalaureate-card' }
        ]
      },
      interests: {
        title: 'Centres d\'intérêt',
        items: [
          { title: 'Lecture', description: 'Passionnée par les livres et articles sur la technologie', backgroundClass: 'reading-bg' },
          { title: 'Voyage', description: 'Exploration de nouveaux lieux et cultures', backgroundClass: 'travel-bg' },
          { title: 'Cinéma', description: 'Passionnée par les films et l\'analyse cinématographique', backgroundClass: 'cinema-bg' }
        ]
      },
      contact: {
        title: 'Contact',
        heading: 'Travaillons ensemble',
        description: 'Je suis disponible pour des missions freelance ou des opportunités à temps plein.',
        email: 'inessmhamed@gmail.com',
        phone: '(+216) 93-988-526',
        location: 'Sousse, Tunisie',
        sendEmail: 'Envoyer e-mail',
        callMe: 'Appeler',
        linkedIn: 'LinkedIn'
      },
      footer: {
        text: '© 2026 Mhamed Ines. Réalisé avec passion.'
      }
    }
  };

  get language(): Language {
    return this.currentLanguage;
  }

  setLanguage(lang: Language): void {
    this.currentLanguage = lang;
  }

  translate(path: string): string {
    const value = this.resolve(path, this.translations[this.currentLanguage]);
    return typeof value === 'string' ? value : path;
  }

  get<T = any>(path: string): T {
    return this.resolve(path, this.translations[this.currentLanguage]) as T;
  }

  private resolve(path: string, source: any): any {
    return path.split('.').reduce((obj, key) => obj?.[key], source);
  }
}
