<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Manejo y desarrollo de la inteligencia emocional, desde sus diferentes etapas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 Para comenzar con esta temática, quisiera que leyéramos y reflexionemos sobre este hermoso poema escrito en 1970, por Charles Chaplin.

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto Cuando me amé de verdad 
          p.mb-5 El poema "Cuando me amé de verdad", atribuido a Charles Chaplin, invita a una profunda reflexión sobre la importancia del amor propio como base para alcanzar un equilibrio emocional y una vida plena. A lo largo del texto, se abordan conceptos esenciales como la autoestima, la autenticidad, el respeto, la simplicidad y la humildad, los cuales forman parte de la inteligencia emocional. Este PDF explora cómo el reconocimiento de nuestras emociones y la aceptación de nuestra propia humanidad son pasos fundamentales para lograr una transformación personal. Comprender que las experiencias, incluso las difíciles, contribuyen a nuestro crecimiento, nos permite vivir con mayor plenitud y conectar con quienes nos rodean de manera auténtica y respetuosa. El poema nos enseña que amar y aceptarnos a nosotros mismos es el primer paso hacia una vida consciente, donde nuestras decisiones están alineadas con nuestros valores, generando bienestar y armonía interior.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Cuando me amé de verdad.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Cuando me amé de verdad.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.1  
        h2 Concepciones de emoción e inteligencia

    p.mb-4 El concepto de emoción y el concepto de inteligencia, han evolucionado a lo largo de la historia, adaptándose a diferentes contextos culturales y científicos. Ambos términos, fundamentales para entender al ser humano, han sido analizados desde perspectivas filosóficas, psicológicas y neurocientíficas, estableciendo las bases para conceptos como la inteligencia emocional.

    h3 Emoción
    p.mb-4 Hablemos primero sobre la emoción:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
               
              p Las emociones han sido estudiadas desde la antigüedad. Platón, por ejemplo, reconocía la importancia de las emociones en el aprendizaje. Sin embargo, durante mucho tiempo, las emociones fueron vistas como obstáculos para la razón. Fue en el siglo XX cuando los psicólogos comenzaron a estudiar las emociones como fenómenos complejos que influyen en el comportamiento y el pensamiento humano (Salovey & Mayer, 1990).
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
               
              p La palabra emoción proviene del latín emotio, que significa "movimiento" o "impulso". Este término, originalmente hacía referencia al proceso de moverse hacia algo, lo que subraya su naturaleza dinámica e interna. En su evolución histórica, las emociones comenzaron a ser estudiadas como fenómenos psicológicos que representan respuestas a estímulos internos o externos.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
               
              p Los primeros enfoques sobre las emociones se remontan a los filósofos griegos como Aristóteles, quien las denominó "pasiones del alma" y destacó su función en la moralidad y la acción humana (Ética a Nicómaco). Platón, por su parte, consideraba las emociones como fuerzas irracionales que debían ser controladas por la razón.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
               
              p En el siglo XVII, Descartes, en su obra Las pasiones del alma (1649), propuso que las emociones son procesos fisiológicos que influyen en el alma. Este enfoque marcó el inicio de la relación entre emociones y biología, porque en el siglo XIX, Charles Darwin (1872), estudió las emociones desde una perspectiva evolutiva, argumentando que son universales y tienen una función adaptativa. Por su parte, William James y Carl Lange, desarrollaron la teoría James-Lange, según la cual las emociones son el resultado de reacciones fisiológicas ante estímulos externos.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
               
              p Hoy, las emociones se definen como procesos psicológicos complejos que implican experiencias subjetivas, respuestas fisiológicas y comportamientos expresivos. Este enfoque destaca la interacción entre lo biológico, lo cognitivo y lo social en la experiencia emocional.
    p.text-bold.mb-4 Inteligencia

    p.mb-4 Y continuemos con la inteligencia:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              
              p Tradicionalmente, la inteligencia se ha medido a través de pruebas de coeficiente intelectual (CI), que evalúan habilidades como la lógica, el razonamiento y la memoria. Sin embargo, esta visión limitada fue desafiada por teorías que proponían una comprensión más amplia de la inteligencia, como la teoría de las inteligencias múltiples de Howard Gardner (1983), que incluye la inteligencia interpersonal e intrapersonal. 
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-40.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              
              p El término inteligencia tiene su raíz etimológica en el latín intelligentia, derivada de intelligere, que significa "comprender" o "discernir". Desde sus orígenes, la inteligencia ha sido vista como una capacidad inherente al ser humano, para interpretar y responder a su entorno.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              
              p En la Antigua Grecia, Aristóteles vinculó la inteligencia con la razón y la consideraba el aspecto más elevado de la mente humana (De Anima). Platón, por otro lado, la relacionaba con la capacidad de acceder al conocimiento verdadero. Durante este período, la inteligencia fue asociada con conceptos teológicos. Tomás de Aquino la definió como "la capacidad de conocer la verdad divina", vinculándola con la racionalidad humana.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              
              p En el siglo XIX, la inteligencia comenzó a estudiarse científicamente con el surgimiento de la psicometría. Alfred Binet, a principios del siglo XX, desarrolló el primer test de inteligencia para identificar habilidades cognitivas en niños. Posteriormente, Charles Spearman en 1904 propuso la existencia de un factor general de inteligencia (g), mientras que Howard Gardner en 1983, amplió el concepto al introducir la teoría de las inteligencias múltiples, que incluye habilidades como la interpersonal y la intrapersonal.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-43.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0
              
              p Actualmente, la inteligencia se define como la capacidad de adquirir conocimientos, resolver problemas y adaptarse al entorno. Esta definición integra habilidades tanto cognitivas como prácticas, ampliando el alcance del término más allá del intelecto académico.
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

    #t_3_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.2
        h2 ¿Qué es la inteligencia emocional?

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4 La combinación de ambos conceptos ha dado lugar a la teoría de la inteligencia emocional. Según Goleman (1995), esta capacidad implica integrar la gestión emocional con el razonamiento, destacando que "la inteligencia emocional influye directamente en cómo las personas comprenden y manejan sus emociones y las de los demás". Esta relación ha transformado nuestra comprensión del comportamiento humano, subrayando que las emociones no solo son reacciones, sino también herramientas para la adaptación y el éxito.
        .d-flex.align-items-start.bg-gris.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-45.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0 La inteligencia emocional es un concepto que ha evolucionado a partir de las concepciones de emoción e inteligencia. Para entender su desarrollo, es importante revisar cómo se han definido y estudiado estos conceptos a lo largo del tiempo.
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-46.png', alt='Texto que describa la imagen')

    p.mb-4 Desarrollo de la inteligencia emocional:

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7

        LineaTiempoD.color-secundario
          p(numero="1" titulo="Primeros estudios") En la década de 1950, Abraham Maslow escribió sobre cómo las personas podían mejorar sus fortalezas emocionales, físicas, espirituales y mentales, sentando las bases para el estudio de la inteligencia emocional.  
          p(numero="2" titulo="Salovey y Mayer") En 1990, Peter Salovey y John Mayer definieron, por primera vez, la inteligencia emocional como "la capacidad de percibir, asimilar, comprender y regular las emociones propias y las de los demás" (Salovey & Mayer, 1990). Su trabajo fue fundamental para establecer la inteligencia emocional como un campo de estudio científico.  
          p(numero="3" titulo="Daniel Goleman") En 1995, Daniel Goleman popularizó el concepto de inteligencia emocional con su libro "Inteligencia Emocional". Goleman amplió la definición para incluir cinco componentes claves: autoconciencia, autorregulación, motivación, empatía y habilidades sociales (Goleman, 1995). Su trabajo destacó la importancia de la inteligencia emocional en el éxito personal y profesional.  
          p(numero="4" titulo="Teoría de las inteligencias múltiples") Howard Gardner, aunque no se centró exclusivamente en la inteligencia emocional, contribuyó al campo con su teoría de las inteligencias múltiples, que incluye la inteligencia interpersonal e intrapersonal (Gardner, 1983). Estas formas de inteligencia son esenciales para la comprensión y gestión de las emociones. 

    .row.bg-verde.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex

        span El término "inteligencia emocional" fue introducido formalmente por Peter Salovey y John Mayer en 1990, quienes la definieron como "la capacidad de percibir, integrar, comprender y regular las emociones, para promover el crecimiento emocional e intelectual" (Salovey & Mayer, 1990). Más tarde, Daniel Goleman (1995), popularizó el concepto en su libro Inteligencia emocional, donde destacó que esta habilidad es tan importante, o incluso más que el coeficiente intelectual (CI), para el éxito en la vida personal y profesional.

    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Las cinco competencias fundamentales de la inteligencia emocional, según Goleman 
          p.mb-5 La inteligencia emocional es una habilidad clave para el bienestar personal y el éxito en diversos ámbitos de la vida, ya que permite gestionar las emociones propias y comprender las de los demás. En el PDF Las cinco competencias fundamentales de la inteligencia emocional, se profundiza en las competencias propuestas por Daniel Goleman: autoconciencia, autorregulación, motivación, empatía y habilidades sociales. Estas competencias constituyen un marco esencial para desarrollar relaciones interpersonales saludables, manejar situaciones conflictivas y alcanzar metas personales y profesionales. A lo largo del documento, se describen ejemplos prácticos y estudios relevantes que ayudan a comprender cómo cada una de estas competencias contribuye al desarrollo de una inteligencia emocional sólida, necesaria para enfrentar los desafíos emocionales y sociales del día a día.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Las cinco competencias fundamentales de la inteligencia emocional, según Goleman.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Las cinco competencias fundamentales de la inteligencia emocional, según Goleman.
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-48.png', alt='Texto que describa la imagen')

    #t_3_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.3
        h2 Manejo y desarrollo de la inteligencia emocional en diferentes etapas de la vida

    p.mb-4 Para conocer más sobre la temática, lo invitamos a ver el siguiente video.

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        
        .video
          <iframe width="1903" height="748" src="https://www.youtube.com/embed/3-QSx8ZcyRE" title="Manejo y desarrollo de la inteligencia emocional en diferentes estapas de la vida" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    #t_3_4.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 3.4
        h2 La teoría ecológica de Urie Bronfenbrenner

    p.mb-4 Ahora bien, con respecto a <b>La teoría ecológica de Urie Bronfenbrenner</b>, este es un enfoque integral para entender el desarrollo humano a través de la interacción con diferentes entornos. Esta teoría se basa en la idea de que el desarrollo de una persona está influenciado por varios sistemas ambientales que interactúan entre sí. A continuación, se explican los cinco sistemas principales que propone Bronfenbrenner:

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-49.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Microsistema
              p Es el entorno más cercano al individuo, donde se desarrollan sus primeras interacciones y experiencias. Incluye la familia, amigos cercanos, la escuela y los compañeros. Las relaciones en este sistema son directas y bidireccionales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-50.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Mesosistema
              p Representa las interconexiones entre diferentes microsistemas. Por ejemplo, la relación entre los padres y los maestros, afecta la experiencia educativa del niño (Carneros, 2015). La consistencia o los conflictos entre estos entornos pueden impactar en la estabilidad emocional y el bienestar del individuo.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-51.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Exosistema
              p Incluye contextos en los que el individuo no participa directamente, pero que tienen un impacto en su vida (Carneros, 2015). Ejemplos de esto son los horarios laborales de los padres o las políticas escolares, que influyen en el bienestar del individuo de manera indirecta.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-52.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Macrosistema
              p Abarca las influencias culturales, sociales, económicas y políticas más amplias que afectan a todos los demás sistemas. Incluye valores culturales, normas sociales, leyes y políticas económicas.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-53.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Cronosistema
              p Introduce el componente temporal, considerando cómo los eventos importantes y los cambios a lo largo del tiempo (como los avances tecnológicos o cambios en las estructuras familiares) afectan el desarrollo.

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-amarillo.p-4(data-aos="fade-up")
          span Según Carneros, (2015), Bronfenbrenner observó que la forma de ser de los niños cambiaba en función del contexto en el que vivían, y decidió estudiar los elementos que más condicionan el desarrollo infantil. Su teoría ha sido fundamental en la psicología del desarrollo y otras disciplinas, proporcionando una comprensión profunda de cómo el entorno influye en el crecimiento y desarrollo de las personas.
        p.mb-0 Así mismo, La teoría ecológica de Urie Bronfenbrenner y las etapas del desarrollo de la inteligencia emocional, están interrelacionadas, puesto que ambas destacan la importancia del entorno en el desarrollo humano; es decir, el microsistema incluye la familia, la escuela y los amigos cercanos, que son los entornos más inmediatos y directos en los que se desarrolla una persona (Rodríguez, 2018).
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-54.png', alt='Texto que describa la imagen')

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-55.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-verde.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Las interacciones en este nivel, son cruciales para el desarrollo de la inteligencia emocional. Por ejemplo, un entorno familiar que fomente la expresión y gestión de emociones ayuda a los niños a desarrollar habilidades emocionales como la autoconciencia y la autorregulación. 

    p.mb-4 De esta manera:

    .row.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Mesosistema")
            p Se refiere a las interacciones entre diferentes microsistemas, como la relación entre los padres y los maestros (Rodríguez, 2018). Estas interacciones pueden influir en la inteligencia emocional al proporcionar modelos de comportamiento y estrategias de manejo emocional. Por ejemplo, una buena comunicación entre padres y maestros, puede crear un entorno coherente y de apoyo que refuerce las habilidades emocionales del niño.
          .div(titulo="Exosistema")
            p Incluye contextos en los que el individuo no participa directamente, pero que afectan su vida, como el lugar de trabajo de los padres o las políticas escolares. Estos factores pueden influir en la inteligencia emocional al afectar el bienestar general del individuo. Por ejemplo, un ambiente laboral estresante para los padres, puede influir en su capacidad para proporcionar un entorno emocionalmente estable en el hogar.
          .div(titulo="Macrosistema")
            p Abarca las influencias culturales, sociales, económicas y políticas más amplias (Rodríguez, 2018). Los valores y normas culturales pueden influir en cómo se perciben y manejan las emociones. Por ejemplo, en algunas culturas, la expresión abierta de emociones puede ser más aceptada y fomentada, lo que facilita el desarrollo de la inteligencia emocional. 
          .div(titulo="Cronosistema")
            p Introduce la dimensión temporal, considerando cómo los eventos importantes y los cambios a lo largo del tiempo afectan el desarrollo. Los cambios en la estructura familiar, como el divorcio o la mudanza, pueden tener un impacto significativo en la inteligencia emocional de una persona, ya que estos eventos pueden alterar los entornos de apoyo y las relaciones interpersonales.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-56.png', alt='Texto que describa la imagen')

    .row.bg-amarillo.bg-full-width
      div.px-5.pb-md-3.py-4.d-flex

        .row.mb-4 
          .col-5.d-none.d-xl-block(data-aos="fade-right")
            img.h-100(src='@/assets/curso/unidad/img-57.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.flex-column.justify-content-center
            p.mb-4 Para Carneros (2015), la crítica principal a la visión ambientalista es que ignora los factores biológicos y cognitivos en el desarrollo humano, y carece de una secuencia clara del cambio, como sí lo hacen las teorías de Jean Piaget y Erik Erikson. Sin embargo, al centrarse en el contexto del desarrollo, que permite intervenir directamente, esta teoría se utiliza frecuentemente en la discusión sobre la educación en red y la responsabilidad compartida en la educación.
            .bg-amarillo-oscuro.p-4(data-aos="fade-up")
              span Considerando que somos seres sociales inmersos en un contexto cultural en constante transformación, influenciado por la globalización, el desarrollo personal puede entenderse a través de los intermediarios culturales y las interrelaciones de los sistemas propuestos en la Teoría Ecológica de Bronfenbrenner. Para abordar las críticas al modelo, es crucial considerar la interacción entre variables de personalidad y el entorno, dado que la combinación de estos sistemas actúa como un agente tanto socializador como individualizador, ayudando a comprender el desarrollo del individuo en diversos contextos.
    
    .row.bg-azul.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex

        .d-flex.align-items-start(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-58.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.mb-0 La teoría ecológica de Bronfenbrenner proporciona un marco comprensivo para entender cómo diversos entornos y sus interacciones, influyen en el desarrollo de la inteligencia emocional. Al considerar estos múltiples niveles de influencia, podemos apreciar cómo el entorno en su totalidad, contribuye al desarrollo emocional y social de una persona.

    h2 La inteligencia emocional en la educación

    p.mb-4 El entorno educativo es un espacio clave para el desarrollo de la inteligencia emocional; los programas de aprendizaje socioemocional (SEL, por sus siglas en inglés), integran la enseñanza de habilidades emocionales y sociales en el currículo escolar, mejorando el clima escolar y el desempeño académico. Aquí encontramos:

    p.mb-4.text-bold Manejo y desarrollo de la inteligencia emocional en diferentes etapas de la vida

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        
        .row.mb-4
          .col-10.col-md-6.col-xl-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-59.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Promoción de la empatía
                p.text-small.px-4.text-center.pb-2 Los programas educativos que enseñan a los estudiantes a comprender las emociones de los demás fomentan relaciones más saludables y reducen el acoso escolar.
          .col-10.col-md-6.col-xl-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-60.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Manejo del estrés
                p.text-small.px-4.text-center.pb-2 Las técnicas de autorregulación emocional, como la meditación o la respiración consciente, ayudan a los estudiantes a enfrentar situaciones de presión académica.
          .col-10.col-md-6.col-xl-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-61.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Educación emocional para docentes
                p.text-small.px-4.text-center.pb-2 Los profesores con alta inteligencia emocional, son más efectivos al manejar conflictos en el aula y promover un ambiente de aprendizaje positivo.


    .row.bg-verde.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex

        span La inteligencia emocional es una capacidad fundamental que influye en el desarrollo integral de las personas a lo largo de la vida. Desde las primeras etapas de la infancia hasta la vejez, las habilidades emocionales impactan en la forma en que las personas gestionan sus emociones, establecen relaciones y enfrentan los desafíos cotidianos. En el ámbito educativo, la incorporación de programas de aprendizaje socioemocional puede transformar tanto el desempeño académico como el bienestar emocional de estudiantes y docentes. En definitiva, cultivar la inteligencia emocional es una inversión en el bienestar personal y social, promoviendo relaciones más saludables y comunidades más resilientes.

    .bg-full-width.border-top-9-azul.mb-5
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://repositorio.utp.edu.co/server/api/core/bitstreams/18892a5f-bc5d-4292-8733-fa1894ea445a/content") Inteligencia emocional en la infancia [Documento]
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/230039?page=24") El desarrollo de la competencia emocional en la educación primaria [Libro]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=voKgAvI_qwE") La inteligencia emocional en la vida cotidiana [Vídeo]

          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


    .bg-full-width.border-top.actividad(style="background-color: #ebf1f5; border-top: 5px solid #f5c145 !important")
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    cuestionario: {
      tema: 'Tipos de apego',
      titulo: 'Ponte a prueba',
      introduccion:
        'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'Los niños con apego seguro tienden a tener mejores habilidades sociales y emocionales.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'El apego evitativo se caracteriza por la búsqueda constante de cercanía y apoyo emocional.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Los niños con apego ansioso-ambivalente pueden mostrar ansiedad y dependencia excesiva de sus cuidadores.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'El apego seguro no tiene impacto en la capacidad de un niño para explorar su entorno.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Los niños con apego desorganizado tienen un mayor riesgo de desarrollar problemas de comportamiento.',
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
