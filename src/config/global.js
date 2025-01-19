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
    numeroUnidad: '1',
    tituloUnidad: 'Afectividad, vínculo y relaciones',
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
        titulo: 'Afectividad, vínculo y relaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'La afectividad para la psicología',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La afectividad en la filosofía',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La afectividad y sus componentes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Etapas del desarrollo afectivo, según Piaget',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Qué son los vínculos para los niños',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'El concepto de vínculo y su importancia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'El impacto de los vínculos en el desarrollo emocional y social',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'El papel de los vínculos afectivos en la primera infancia',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'El contexto educativo y los vínculos afectivos',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Relaciones interpersonales en la infancia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'El juego como el motor principal de las relaciones sociales en la infancia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El contexto escolar y las relaciones',
            hash: 't_3_2',
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
        'Ainsworth, M. D. S. (1978). The Bowlby-Ainsworth attachment theory. In S. R. S. Van Ijzendoorn & M. D. S. La teoría del apego de Bowlby-Ainsworth. The attachment system in human development (pp. 36-60).',
      link: null,
    },
    {
      referencia:
        'Berger, K. S. (2007). Psicologia del desarrollo. Infancia y adolescencia.',
      link:
        'https://archive.org/details/psicologia-del-desarrollo-infancia-y-adolescencia-',
    },
    {
      referencia:
        'Bronfenbrenner, U. (1987). La ecología del desarrollo humano: experimentos en entornos naturales y diseñados.',
      link: 'https://bibliotecadigital.mineduc.cl/handle/20.500.12365/1803',
    },
    {
      referencia:
        'Dahl, R. (2006). Matilda. Santillana Ediciones Generales, S.L. Alfaguara.',
      link: null,
    },
    {
      referencia:
        'Descartes, R. (2001). Las pasiones del alma. (J. C. de la Vega, Ed.). Ediciones Akal.',
      link: null,
    },
    {
      referencia: 'Freud, S. (1920). Más allá del principio del placer.',
      link: null,
    },
    {
      referencia:
        'Fuentes, A. S. (1 de diciembre de 2013). El desarrollo afectivo en educación infantil. Portal educativo: Educa y Aprende.',
      link:
        'https://educayaprende.com/el-desarrollo-afectivo-en-educacion-infantil/',
    },
    {
      referencia: 'Goleman, D. (1995). Emotional intelligence. Bantam Books.',
      link: null,
    },
    {
      referencia:
        'Gracia, E., & Herrero, J. (2006). La comunidad como fuente de apoyo social: Evaluación e implicaciones en los ámbitos individual y comunitario. Revista Latinoamericana de Psicología, 38(2), 299-312.',
      link: null,
    },
    {
      referencia:
        'Husserl, E. (1970). Investigaciones lógicas. (J. M. de la Vega, Ed.). Ediciones Losada.',
      link: null,
    },
    {
      referencia:
        'Marino, A. (7 de diciembre de 2018). Aristóteles (384 a.C.-322 a.C.). Historiando.org.',
      link: 'https://historiando.org/aristoteles/',
    },
    {
      referencia:
        'Mimenza, O. C. (28 de junio de 2018). Jean Piaget: biografía del padre de la Psicología Evolutiva. pymOrganization.',
      link: 'https://psicologiaymente.com/biografias/jean-piaget',
    },
    {
      referencia:
        'Mora Muñoz, J. (2024). La importancia del vínculo y la comunicación con el bebé en el vientre. Psicología y Mente.',
      link: 'https://psicologiaymente.com/psicologia/importancia-',
    },
    {
      referencia:
        'Olweus, D. (1993). Bullying at school: What we know and what we can do. Wiley-Blackwell.',
      link: null,
    },
    {
      referencia:
        'Páez, D. Zuleta, E. (2023) Dimensiones Culturales Individualismo Colectivismo. Studocu.',
      link:
        'https://www.studocu.com/co/document/universidad-popular-del-cesar/psicologia-politica/corte-3-no-1-dimensiones-culturales-individualismo-colectivismo/28855917',
    },
    {
      referencia:
        'Pérez, H. J. (2017). El desarrollo afectivo según Jean Piaget. Revista Vinculando.',
      link:
        'https://vinculando.org/wp-content/uploads/kalins-pdf/singles/desarrollo-afectivo-jean-piaget.pdf',
    },
    {
      referencia:
        'Quintero, L. J., & Leiva, M. Y. (2015). Desarrollo emocional y afectivo en la primera infancia. Universidad Nacional Abierta y a Distancia.',
      link: null,
    },
    {
      referencia:
        'REBUELTA CHO, A. P., (2015). Un prisma en la diversidad: alternativas en transformación. Revista de Antropología Social, 24(), 460-465.',
      link: null,
    },
    {
      referencia:
        'Regader, B. (29 de mayo de 2015). La Teoría del Desarrollo Psicosocial de Erik Erikson. pymOrganization.',
      link:
        'https://psicologiaymente.com/desarrollo/teoria-del-desarrollo-psicosocial-erikson',
    },
    {
      referencia:
        "Rogers, C. R. (1961). On becoming a person: A therapist's view of psychotherapy. Houghton Mifflin.",
      link: null,
    },
    {
      referencia:
        'Roncallo, C. P., Sánchez de Miguel, M., & Arranz Freijo, E. (2015). Vínculo materno-fetal: implicaciones en el desarrollo psicológico y propuesta de intervención en atención temprana. Escritos de Psicología, 8(2), 1-10.',
      link: 'https://dx.doi.org/10.5231/psy.writ.2015.0706',
    },
    {
      referencia:
        'Shonkoff, J. P., & Phillips, D. A. (Eds.). (2000). From neurons to neighborhoods: The science of early childhood development. National Academies Press.',
      link: null,
    },
    {
      referencia:
        'Spinoza, B. (2004). Ética. (A. R. de la Vega, Ed.). Ediciones Istmo.',
      link: null,
    },
    {
      referencia:
        'Sternberg, R. J. (1986). A triangular theory of love. Psychological Review, 93(2), 119-135.',
      link: null,
    },
    {
      referencia:
        'Teoría de la emoción de William James. (11 de marzo de 2023). Teorías de todo y para todo.',
      link:
        'https://teorias.ar/teorias/teoria-de-la-emocion-de-william-james/?',
    },
    {
      referencia:
        'Torrealba, J. (27 de diciembre de 2021). ¿Qué es la teoría de Wallon y cuáles son sus aportes? TuInfoSalud.',
      link: 'https://www.tuinfosalud.com/articulos/teoria-de-wallon/',
    },
    {
      referencia:
        'Tortez, M. (1 de mayo, 2024). Afectividad: Definición, Evolución y Concepto en Psicología. Definipedia.',
      link:
        'https://definicion.conceptualista.com/concepto-de-afectividad-psicologia/',
    },
    {
      referencia:
        'Triglia, A. (25 de agosto de 2016). El experimento de Harlow y la privación materna: sustituyendo a la madre. pymOrganization.',
      link:
        'https://psicologiaymente.com/psicologia/experimento-harlow-privacion-materna',
    },
    {
      referencia:
        'Vygotsky, L. S. (1978). Mind in society: The development of higher psychological processes. Harvard University Press.',
      link: null,
    },
  ],
  glosario: [
    {
      termino: 'Afectividad',
      significado:
        'Capacidad de experimentar y expresar emociones y sentimientos. Es fundamental en el desarrollo emocional y social de una persona.',
    },
    {
      termino: 'Amistad',
      significado:
        'Relación afectiva entre dos o más personas basada en la confianza, el respeto y el apoyo mutuo. En la infancia, las amistades son cruciales para el desarrollo de habilidades sociales y emocionales.',
    },
    {
      termino: 'Descentración',
      significado:
        'Proceso por el cual el niño empieza a considerar perspectivas y emociones de otros, alejándose de un enfoque egocéntrico. Es clave en el desarrollo afectivo según Piaget.',
    },
    {
      termino: 'Egocentrismo',
      significado:
        'Tendencia de los niños pequeños a ver el mundo desde su propia perspectiva, sin considerar las opiniones o sentimientos de los demás. Este concepto es importante en los primeros estadios de Piaget.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de comprender y compartir los sentimientos de los demás, fundamental para la formación de vínculos afectivos saludables y el desarrollo social.',
    },
    {
      termino: 'Interacción',
      significado:
        'Proceso de comunicación y relación entre el niño y sus cuidadores, esencial para el desarrollo emocional y la construcción de vínculos afectivos.',
    },
    {
      termino: 'Seguridad',
      significado:
        'Sentimiento de confianza y protección que el niño experimenta cuando tiene vínculos afectivos estables y seguros con sus cuidadores.',
    },
    {
      termino: 'Simbolización',
      significado:
        'Capacidad de usar símbolos, como palabras o imágenes, para representar objetos o situaciones ausentes. Esta habilidad es crucial para el desarrollo cognitivo y afectivo en los estadios de Piaget.',
    },
    {
      termino: 'Socialización',
      significado:
        'Proceso mediante el cual el niño aprende y adopta comportamientos y normas sociales a través de sus interacciones y vínculos con los demás.',
    },
    {
      termino: 'Valores',
      significado:
        'Principios o normas que guían el comportamiento y las decisiones de una persona. En los estadios de Piaget, los niños desarrollan un sistema de valores que influye en su afectividad y moralidad.',
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
