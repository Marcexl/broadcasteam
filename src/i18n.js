// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: {
            services: 'Services',
            contact: 'Contact',
          },
          about:{
            lineOne: 'We believe that creativity can break through any challenge,',
            lineTwo: 'and we are passionate about providing useful and effective solutions.',
            lineThree: 'We work closely with our clients, generating constant feedback',
            lineFour: 'which allows us to optimize resourcesk',
            lineFive: 'learning and improving in each project.'
          },
          services:{
            events: {
                title:'Events and exhibitions',
                itemOne: 'Product launches',
                itemTwo: 'Stands',
                itemThree: 'Screenings and augmented reality',
                itemFour: 'Interactive AI',
                itemFive: 'Corporate and commercial events'
            },
            transmissions: {
                title:'Transmissions',
                itemOne: 'Streaming and OB Vans',
                itemTwo: 'TV studio and outdoors'
            },
            visual: {
                title:'Audiovisual production',
                itemOne: 'Shooting',
                itemTwo: 'Postproduction',
                itemThree: 'Art and set design'
            },
            multimedia: {
                title:'Multimedia production',
                itemOne: 'Animation',
                itemTwo: 'Graphic design',
                itemThree: 'Web dev. and apps',
                itemFour: 'Social media and digital MKT'
            },
          },
          contact:{
            leftTitle:'Contact us',
            rightTitle:'Or send message',
            followUs: 'Follow us',
                form: {
                    name: 'Name',
                    email: 'Email',
                    phone: 'Phone',
                    message: 'Send a message',
                    submit: 'Send',
                    required: 'This field is required',
                    valid: 'Please type a valid email'
                }
            }
        },
      },
      es: {
        translation: {
            header: {
                services: 'Servicios',
                contact: 'Contacto',
            },
            about:{
                lineOne: 'Creemos que la creatividad puede superar cualquier obstáculo,',
                lineTwo: 'nos apasiona brindar soluciones prácticas y eficientes.',
                lineThree: 'Trabajamos en equipo con nuestros clientes generando un feedback constante',
                lineFour: 'esto nos permite optimizar recursos,',
                lineFive: 'aprender y mejorar en cada proyecto.'
            },
            services:{
                events: {
                    title:'Eventos y experiencias',
                    itemOne: 'Lanzamientos de producto',
                    itemTwo: 'Stands',
                    itemThree: 'Proyecciones y realidad aumentada',
                    itemFour: 'IA recreativo',
                    itemFive: 'Eventos corporativos y comerciales'
                },
                transmissions: {
                    title:'Transmisiones',
                    itemOne: 'Streaming y satelitales',
                    itemTwo: 'Estudios y exteriores'
                },
                visual: {
                    title: 'Producción audiovisual',
                    itemOne:'Rodajes',
                    itemTwo: 'Postproducción',
                    itemThree: 'Arte y escenografía'
                },
                multimedia: {
                    title:'Producción multimedia',
                    itemOne: 'Animación',
                    itemTwo: 'Diseño gráfico',
                    itemThree: 'Desarrollos web y apps',
                    itemFour: 'Redes sociales y MKT digital'
                }
            },
            contact:{
                leftTitle:'Contactanos',
                rightTitle:'O envianos un mensaje',
                followUs: 'Seguinos',
                form: {
                    name: 'Nombre',
                    email: 'Email',
                    phone: 'Teléfono',
                    message: 'Dejanos tu mensaje',
                    submit: 'Enviar',
                    required: 'Este campo es obligatorio',
                    valid: 'Ingrese un email valido'
                }
            }
        },
      },
    },
    lng: 'es', // Set the default language
    fallbackLng: 'es', // Fallback language if the selected language file is missing
    interpolation: {
      escapeValue: false, // Not needed for React as it escapes by default
    },
  });

export default i18n;
