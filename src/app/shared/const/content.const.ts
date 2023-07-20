import {IContent} from "../interfaces/content.interface";

export const TRANSLATIONS: IContent = {
  spanish: {
    toolbar: {
      links: {
        home: 'Inicio',
        about: 'Sobre mi',
        work: 'Proyectos',
        contact: 'Contacto',
      }
    },
    landing: {
      sections: {
        home: {
          heading1: 'Hola mundo!',
          heading2: 'Soy ',
          span1: 'Victor Moreno',
          heading3: 'Desarrollador & Diseñador UX/UI',
        },
        about: {
          heading1: 'Introducción',
          heading2: 'Sobre mi',
          paragraph1: 'Como ingeniero de sistemas full-stack con más de 5 años de experiencia, me especializo en una variedad de lenguajes y frameworks, incluyendo pero no limitado a Java, PHP, JavaScript, Dart, C#, SQL, Spring Boot, Laravel y Vue. Destaco especialmente en Angular, donde me reconocen como un desarrollador experto. Mi experiencia se extiende a tecnologías como Firebase, Supabase, Payload CMS, facturación electrónica, MongoDB, arquitectura frontend, microservicios, microfrontends y monorepos. Más allá de mis habilidades técnicas, soy capaz de llevar un producto de software desde la idea, pasando por el diseño y prototipado, hasta su desarrollo e implementación completa.',
          skills: {
            design: 'Diseño UI & UX',
            angular: 'Angular',
            laravel: 'Laravel',
            spring: 'Spring boot',
            node: 'NodeJS',
          },
          button1: 'Descargar CV',
        },
        work: {
          heading1: 'Mi trabajo',
          heading2: 'Proyectos',
          projects: {
            project1: {
              title: 'Proyecto 1',
              description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              button: 'Ver proyecto',
            },
            project2: {
              title: 'Proyecto 2',
              description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              button: 'Ver proyecto',
            },
            project3: {
              title: 'Proyecto 3',
              description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              button: 'Ver proyecto',
            }
          }
        },
        contact: {
          heading1: 'Trabajemos juntos',
          heading2: 'Contacto',
          contactOptions: {
            phone: {
              label: 'Teléfono',
              value: '+51 953 518 273',
            },
            email: {
              label: 'Email',
              value: 'contacto@vmorenoz.dev',
            },
            website: {
              label: 'Sitio web',
              value: 'www.vmorenoz.dev',
            },
            address: {
              label: 'Dirección',
              value: 'Piura, Perú',
            }
          },
          form: {
            title: 'O tal vez prefieras enviarme un mensaje',
            name: 'Nombre',
            email: 'Email',
            phone: 'Teléfono',
            subject: 'Asunto',
            message: 'Mensaje',
            button: 'Enviar',
          }
        },
        footer: {
          heading1: 'Hecho por @Vicodev',
          copy: 'Todos los derechos reservados',
        }
      },
    }
  },
  english: {
    toolbar: {
      links: {
        home: "Home",
        about: "About Me",
        work: "Projects",
        contact: "Contact"
      }
    },
    landing: {
      sections: {
        home: {
          heading1: "Hello world!",
          heading2: "I'm ",
          span1: "Victor Moreno",
          heading3: "Developer & UX/UI Designer"
        },
        about: {
          heading1: "Introduction",
          heading2: "About me",
          paragraph1: "As a full-stack systems engineer with over 5 years of experience, I specialize in a variety of languages and frameworks, including but not limited to Java, PHP, JavaScript, Dart, C#, SQL, Spring Boot, Laravel, and Vue. I am particularly recognized as an expert developer in Angular. My experience extends to technologies such as Firebase, Supabase, Payload CMS, electronic billing, MongoDB, frontend architecture, microservices, microfrontends, and monorepos. Beyond my technical skills, I am capable of taking a software product from the idea stage, through design and prototyping, to full development and implementation.",
          skills: {
            design: "UI & UX Design",
            angular: "Angular",
            laravel: "Laravel",
            spring: "Spring Boot",
            node: "NodeJS"
          },
          button1: "Download CV"
        },
        work: {
          heading1: "My Work",
          heading2: "Projects",
          projects: {
            project1: {
              title: "Project 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              button: "View Project"
            },
            project2: {
              title: "Project 2",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              button: "View Project"
            },
            project3: {
              title: "Project 3",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              button: "View Project"
            }
          }
        },
        contact: {
          heading1: "Let's Work Together",
          heading2: "Contact",
          contactOptions: {
            phone: {
              label: "Phone",
              value: "+51 953 518 273"
            },
            email: {
              label: "Email",
              value: "contacto@vmorenoz.dev"
            },
            website: {
              label: "Website",
              value: "www.vmorenoz.dev"
            },
            address: {
              label: "Address",
              value: "Piura, Peru"
            }
          },
          form: {
            title: "Or maybe you want to send me a message?",
            name: "Name",
            email: "Email",
            phone: "Phone",
            subject: "Subject",
            message: "Message",
            button: "Send"
          }
        },
        footer: {
          heading1: "Made by @Vicodev",
          copy: "All rights reserved"
        }
      }
    }
  }
}
