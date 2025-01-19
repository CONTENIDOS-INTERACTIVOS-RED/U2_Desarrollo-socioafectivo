export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad: 'Tipologías del vínculo afectivo como base del desarrollo',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipologías del vínculo afectivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Implicaciones para el desarrollo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Teoría del apego: conceptualización inicial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Introducción a la teoría del apego, de John Bowlby',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La teoría del apego, de John Bowlby',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Etapas del desarrollo del apego',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Implicaciones de las tipologías del apego para el desarrollo',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Manejo y desarrollo de la inteligencia emocional, desde sus diferentes etapas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepciones de emoción e inteligencia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '¿Qué es la inteligencia emocional?',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Manejo y desarrollo de la inteligencia emocional en diferentes etapas de la vida',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'La teoría ecológica de Urie Bronfenbrenner',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ainsworth, M. S. (1989). Attachments beyond infancy. American Psychologist, 44(4), 709–716.',
      link: 'https://psycnet.apa.org/doi/10.1037/0003-066X.44.4.709',
    },
    {
      referencia:
        'Duran, S (2023). Teoría del Capital Social de Putnam (Capital Social) Eurekando.org.',
      link:
        'https://www.eurekando.org/ciencias-sociales/teoria-del-capital-social-de-putnam-capital-social/',
    },
    {
      referencia:
        'Fairbairn, W. R. D. (1952). Psychoanalytic studies of the personality. Routledge.',
      link: 'https://archive.org/details/psychoanalyticst00fair_0',
    },
    {
      referencia:
        'Harlow, H. F. (1958). The nature of love. American Psychologist, 13(12), 673-685.',
      link: 'https://doi.org/10.1037/h0047884',
    },
    {
      referencia:
        'Harlow, H. F., & Suomi, S. J. (1971). Social recovery by isolation-reared monkeys. Proceedings of the National Academy of Sciences, 68(7), 1534-1538.',
      link: 'https://doi.org/10.1073/pnas.68.7.1534',
    },
    {
      referencia:
        'Lafuente Benaches, M. J. & Cantero López, M. J. (2016). Vinculaciones afectivas: apego, amistad y amor: (ed.). Difusora Larousse - Ediciones Pirámide.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/49152?page=256',
    },
    {
      referencia:
        'Martin, R.R. D. (2013, febrero 27). El Vínculo Afectivo y la Teoría del Apego. Psicologia - Autoayuda - Autoestima - Felicidad.',
      link: 'https://psicologiayautoayuda.com/psicologia/el-vinculo-afectivo/',
    },
    {
      referencia:
        'MONETA C, MARÍA EUGENIA. (2014). Apego y pérdida: redescubriendo a John Bowlby. Revista chilena de pediatría, 85(3), 265-268.',
      link:
        'https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0370-41062014000300001&lng=en&nrm=iso&tlng=en',
    },
    {
      referencia:
        'Puerta, A. R. (8 de julio de 2021,). Vínculos afectivos. Lifeder.',
      link: 'https://www.lifeder.com/vinculos-afectivos/',
    },
    {
      referencia:
        'Sternberg, R. J. (1986). A triangular theory of love. Psychological Review, 93 (2), 119-135.',
      link: 'https://doi.org/10.1037/0033-295X.93.2.119',
    },
    {
      referencia:
        'Weiss, R. S. (1974). The provisions of social relationships. In Z. Rubin (Ed.), Doing unto others (pp. 17-26). Prentice-Hall.',
      link: 'https://psycnet.apa.org/record/1986-21992-001',
    },
    {
      referencia: 'Ainsworth & Bell, (1970).',
      link:
        'https://psychologysorted.blog/wp-content/uploads/2019/03/ainsworth-and-bell._1970.pdf',
    },
    {
      referencia:
        'Bartholomew, K., & Horowitz, L. M. (1991). Attachment styles among young adults: A test of a four-category model. Journal of Personality and Social Psychology, 61(2), 226-244.',
      link: 'https://doi.org/10.1037/0022-3514.61.2.226',
    },
    {
      referencia:
        'Duran, S. (2023). Teoría del Apego de Mary Ainsworth (Tipos de Apego). Eurekando.org',
      link:
        'https://www.eurekando.org/psicologia/teoria-del-apego-de-mary-ainsworth-tipos-de-apego/',
    },
    {
      referencia: 'Bowlby - El Apego y La Pérdida-1. (1998).',
      link:
        'https://drive.google.com/file/d/1k4ZI6HdDZojr_l2LNtbYqZR6_Sx8cRN6/view',
    },
    {
      referencia:
        'Cassidy, J., & Shaver, P. R. (Eds.). (2016). Handbook of attachment: Theory, research, and clinical applications (3rd ed.). Guilford Press.',
      link: 'https://onlinelibrary.wiley.com/doi/10.1002/imhj.21730',
    },
    {
      referencia:
        'Main, M., & Solomon, J. (1990). Procedures for identifying infants as disorganized/disoriented during the Ainsworth Strange Situation.',
      link: null,
    },
    {
      referencia:
        'Salovey, P., & Mayer, J. D. (1990). Emotional intelligence. Imagination, Cognition and Personality, 9 (3), 185–211.',
      link: 'https://scholars.unh.edu/psych_facpub/450/',
    },
    {
      referencia:
        'Winnicott, D. W. (1965). The maturational processes and the facilitating environment: Studies in the theory of emotional development. International Universities Press.',
      link:
        'https://selfdefinition.org/burns/DW-Winnicott-The-Maturational-Process-and-the-Facilitating-Environment-1965.pdf',
    },
    {
      referencia:
        'Bronfenbrenner, U. (1987). La ecología del desarrollo humano: experimentos en entornos naturales y diseñados.',
      link: 'https://bibliotecadigital.mineduc.cl/handle/20.500.12365/1803',
    },
    {
      referencia:
        'Carneros, P. Á. (2015, junio 2). La Teoría Ecológica de Urie Bronfenbrenner. pymOrganization.',
      link:
        'https://psicologiaymente.com/desarrollo/teoria-ecologica-bronfenbrenner',
    },
    {
      referencia:
        'Charles Chaplin: el poema sobre inteligencia emocional que no puedes dejar de leer. (14 de marzo 2017). PQS.',
      link:
        'https://pqs.pe/aprende-mas/charles-chaplin-el-poema-sobre-inteligencia-emocional-que-no-puedes-dejar-de-leer/',
    },
    {
      referencia:
        'Darwin, C. R. (1872). The expression of the emotions in man and animals. London: John Murray. 1st edition.',
      link:
        'https://darwin-online.org.uk/content/frameset?pageseq=1&itemID=F1142&viewtype=text',
    },
    {
      referencia:
        'Descartes, R (1649). Tratado de LAS PASIONES DEL ALMA (1649).',
      link:
        'http://23118.psi.uba.ar/academica/carrerasdegrado/psicologia/informacion_adicional/obligatorias/034_historia_2/Archivos/Descartes_pasiones.pdf',
    },
    {
      referencia:
        'Deci, E. L., & Ryan, R. M. (1985). Intrinsic motivation and self-determination in human behavior. Springer.',
      link: null,
    },
    {
      referencia: 'Gardner, H. (1983). Estructuras de la mente.',
      link: null,
    },
    {
      referencia: 'Goleman, D. (1995). La inteligencia emocional.',
      link: null,
    },
    {
      referencia:
        'Gross, J. J. (1998). The emerging field of emotion regulation.',
      link:
        'https://emotion.wisc.edu/wp-content/uploads/sites/1353/2021/11/Gross-1998-The-Emerging-Field-of-Emotion-Regulation-An-Integrative-Review.pdf',
    },
    {
      referencia:
        'Hoffman, M. L. (2000). Empathy and moral development: Implications for caring and justice. Cambridge University Press',
      link:
        'https://www.researchgate.net/publication/287443929_Empathy_and_Moral_Development_Implications_for_Caring_and_Justice',
    },
    {
      referencia:
        'Rodríguez, A. (13 de junio de 2018). La teoría ecológica de Bronfenbrenner. La Mente es Maravillosa.',
      link:
        'https://lamenteesmaravillosa.com/la-teoria-ecologica-de-bronfenbrenner/',
    },
  ],
  glosario: [
    {
      termino: 'Apego',
      significado:
        'Vínculo emocional profundo y duradero que se forma entre un niño y su cuidador principal, fundamental para el desarrollo emocional y social.',
    },
    {
      termino: 'Ansiedad',
      significado:
        'Estado emocional de inquietud y temor que puede surgir en niños con apego ansioso-ambivalente debido a la inconsistencia en la respuesta del cuidador.',
    },
    {
      termino: 'Autonomía',
      significado:
        'Capacidad de un individuo para actuar de manera independiente, que se desarrolla mejor en niños con apego seguro.',
    },
    {
      termino: 'Confianza',
      significado:
        'Sentimiento de seguridad y certeza en la disponibilidad y apoyo del cuidador, característico del apego seguro.',
    },
    {
      termino: 'Desorganizado',
      significado:
        'Tipo de apego en el que el niño muestra comportamientos contradictorios y confusos, a menudo debido a experiencias de abuso o negligencia.',
    },
    {
      termino: 'Evitativo',
      significado:
        'Tipo de apego en el que el niño evita la proximidad emocional con el cuidador, posiblemente como una estrategia para protegerse del rechazo.',
    },
    {
      termino: 'Exploración',
      significado:
        'Comportamiento de los niños de investigar su entorno, que es más seguro y frecuente en aquellos con apego seguro.',
    },
    {
      termino: 'Inseguridad',
      significado:
        'Sentimiento de duda y falta de confianza en la disponibilidad del cuidador, común en niños con apego ansioso-ambivalente.',
    },
    {
      termino: 'Persistencia',
      significado:
        'Característica de los vínculos afectivos que se mantienen a lo largo del tiempo y no son transitorios.',
    },
    {
      termino: 'Proximidad',
      significado:
        'Búsqueda de cercanía física y emocional con el cuidador, esencial en todos los tipos de apego.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
