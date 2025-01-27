<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Introducción a la teoría del apego, de John Bowlby'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-4 La teoría del apego de John Bowlby marcó un hito en la psicología del desarrollo al proponer que los vínculos emocionales tempranos entre los niños y sus cuidadores son fundamentales para el bienestar emocional y social a lo largo de la vida.
    .row.bg-azul.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')

        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Teoría del apego de John Bowlby 
          p.mb-5 En el PDF Teoría del apego de John Bowlby, se analizan los principios clave de su teoría, destacando la influencia de Mary Ainsworth, quien complementó su trabajo con investigaciones empíricas que permitieron identificar distintos patrones de apego. Bowlby enfatizó que el apego no es un simple instinto biológico, sino un mecanismo de supervivencia que impulsa a los niños a buscar seguridad y protección en sus figuras de apego. Este documento explora cómo la calidad de estas relaciones tempranas influye en la capacidad de los individuos para establecer vínculos saludables en la adultez, y cómo los estilos de apego identificados por Ainsworth, como el apego seguro, ansioso y evitativo, aportan una comprensión más profunda sobre la importancia de la sensibilidad del cuidador en la formación de la confianza y la autonomía en los niños.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Teoría del apego de John Bowlby.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Teoría del apego de John Bowlby.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.1  
        h2 La teoría del apego, de John Bowlby

    p.mb-4 Después de haber conceptualizado el apego y los aportes de otros autores, veamos de qué se tratan los planteamientos de este autor. Bowlby, en su obra fundamental "Attachment and Loss" (1969), establece los principios básicos de la teoría del apego.

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-verde.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-18.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Esta teoría, con raíces en la psicología evolutiva y la etología (parte de la biología que estudia el comportamiento de los animales), postula que los seres humanos, al igual que otras especies, poseen conductas innatas que favorecen su supervivencia. 
        p.mb-4 Lafuente y Cantero (2016), explican que estas conductas, como el apego a los cuidadores, son producto de la evolución y se manifiestan de manera espontánea, aunque pueden ser modificadas por la experiencia.
        span La teoría del apego, se basa en cinco postulados principales:
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')  

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Carácter instintivo de las conductas")
            p Lafuente y Cantero (2016), siguen exponiendo que, el carácter instintivo de las conductas que favorecen la supervivencia, al igual que otras especies, los humanos poseen conductas innatas, como el apego, que ha evolucionado para asegurar la supervivencia del individuo y de la especie. 
          .div(titulo="Influencia de la evolución")
            p Con respecto a la influencia de la evolución, esta teoría reconoce la influencia de la evolución en el desarrollo de estas conductas, sugiriendo que la naturaleza social del ser humano es, en gran medida, resultado de la selección natural. 
          .div(titulo="Perspectiva filogenética y ontogenética")
            p Otros aspectos relevantes son la perspectiva filogenética y ontogenética; Bowlby considera tanto los aspectos evolutivos (filogenéticos) como los individuales (ontogenéticos) del desarrollo del apego. 
          .div(titulo="Influencia de la etología")
            p La influencia de la etología; esta teoría se apoya en la etología, comparando las conductas de apego en humanos con las de otras especies animales (Bowlby, 1998).
          .div(titulo="Flexibilidad y adaptación")
            p La flexibilidad y la adaptación manifiestan que, aunque las conductas de apego son innatas, pueden modificarse a lo largo de la vida en función de las experiencias individuales y las demandas del entorno. 

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex  

        span La teoría del apego de John Bowlby (1998), entonces, se centra en la importancia de los primeros vínculos emocionales en la vida de una persona, especialmente los que se forman entre el niño y su cuidador principal. Según Bowlby, estos vínculos tempranos son fundamentales para el desarrollo emocional, social y psicológico, puesto que proporcionan una base de seguridad que influye en la forma en que el individuo se relaciona con los demás, a lo largo de su vida. 

    #t_2_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.2  
        h2 Etapas del desarrollo del apego

    p.mb-4 Antes de las etapas del desarrollo, Bowlby argumenta que hay 3 características o aspectos principales, que aparecen en el transcurso del desarrollo afectivo: 

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3

        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold El apego como necesidad biológica
              p Bowlby (1998) argumenta que el apego es un comportamiento innato que tiene como objetivo garantizar la supervivencia del niño. Los bebés están programados para buscar proximidad con un cuidador, especialmente en momentos de peligro o estrés, debido a que esto aumenta sus posibilidades de protección y cuidado.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold "Base segura"
              p La figura de apego (generalmente el cuidador principal) actúa como una base segura desde la cual el niño puede explorar el mundo con confianza. Cuando el niño sabe que su cuidador está disponible y responde de manera consistente, se siente seguro para enfrentar desafíos y aprender.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Modelos internos de trabajo
              p A través de las interacciones con su figura de apego, el niño desarrolla "modelos internos de trabajo", que son esquemas mentales sobre cómo funcionan las relaciones. Estos modelos guían las expectativas y comportamientos en las relaciones futuras, influyendo en la forma en que el individuo percibe el apoyo, la confianza y la reciprocidad en los demás.

    p.mb-4 Bowlby propuso que el apego se desarrolla en una serie de etapas:
    
    ImagenInfografica.color-secundario.mb-4
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.p-4(x="30.5%" y="36.8%" numero="+")
        .h5.mb-2 Pre-apego (0-6 semanas)
        p El bebé muestra comportamientos que buscan proximidad, como llorar o sonreír, pero no distingue entre figuras específicas.
      .tarjeta.bg-white.p-4(x="68.3%" y="36.8%" numero="+")
        .h5.mb-2 Formación del apego (6 semanas-6/8 meses)
        p El bebé comienza a mostrar preferencia por un cuidador específico.
      .tarjeta.bg-white.p-4(x="30%" y="81.2%" numero="+")
        .h5.mb-2 Apego consolidado (6/8 meses-18 meses)
        p El niño establece un vínculo claro con su figura de apego y muestra ansiedad ante la separación.
      .tarjeta.bg-white.p-4(x="67%" y="81.2%" numero="+")
        .h5.mb-2 Relaciones recíprocas (18 meses en adelante)
        p El niño desarrolla un entendimiento más complejo de la relación, incluyendo que el cuidador puede no estar siempre presente.

    .row.mb-4
      .col-12.col-xl-7
        .bg-gris.p-4.mb-4(data-aos="fade-up")
          span Cabe mencionar que, el contexto cultural y social, también juega un papel importante en la configuración de los vínculos afectivos. Las diferencias culturales pueden influir en las expresiones y en la naturaleza de los vínculos afectivos. Por ejemplo, en algunas culturas, los cuidadores pueden ser más autoritarios y menos expresivos emocionalmente, lo que puede dar lugar a diferentes formas de apego. Además, factores como la pobreza, la violencia o el estrés crónico, pueden afectar la calidad del apego y, en consecuencia, el desarrollo infantil.
        span Basándose en las ideas de Bowlby, Mary Ainsworth, su principal colaboradora, amplió la teoría del apego a través del experimento conocido como la "situación extraña". A partir de este trabajo, identificó cuatro tipos principales de apego, los cuales se manifiestan tanto en la niñez como en la adultez. A continuación, se ejemplifican estas categorías en ambos contextos para comprender mejor su impacto a lo largo de la vida:
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Apego seguro")
            p El niño confía en que su cuidador estará disponible y responde de manera consistente a sus necesidades emocionales. Según Ainsworth (1989), este tipo de apego se desarrolla cuando el cuidador responde de manera consistente y sensible, a las necesidades del niño.
          .div(titulo="Ejemplos")
            p Un niño con apego seguro, confía en que su cuidador estará disponible y responderá de manera consistente a sus necesidades emocionales; es decir, cuando el niño se siente asustado, busca a su cuidador para recibir consuelo y se calma rápidamente al recibirlo. Ainsworth (1989), expresa que este niño se siente seguro para explorar su entorno, sabiendo que su cuidador estará allí si lo necesita.<br>En el caso de un adulto con apego seguro, tiende a tener relaciones saludables y equilibradas. Confía en su pareja y se siente cómodo tanto con la intimidad como con la independencia. Por ejemplo, en una relación de pareja, esta persona puede expresar sus sentimientos abiertamente y confiar en que su pareja estará allí para apoyarla.

          .div(titulo="Apego ansioso-ambivalente")
            p En este estilo, los niños demostraban ansiedad intensa cuando el cuidador se ausentaba y dificultad para calmarse al regresar. Con frecuencia, mostraban una mezcla de búsqueda de proximidad y resistencia hacia el cuidador. Este tipo de apego, según Ainsworth, surge cuando los cuidadores responden de manera inconsistente a las necesidades del niño, generando incertidumbre y ansiedad en el menor. 
          .div(titulo="Ejemplos")
            p Un niño con apego ansioso-ambivalente, busca proximidad con su cuidador, pero teme que este no sea consistente en su respuesta. En este caso el niño puede aferrarse a su cuidador y mostrar ansiedad extrema cuando este se va, pero también puede resistirse al consuelo cuando el cuidador regresa, mostrando una mezcla de búsqueda de atención y rechazo.<br>En la persona adulta con apego ansioso-ambivalente, puede tener dificultades para confiar en su pareja y puede ser muy dependiente emocionalmente. Cassidy, & Shaver (2016), explican que, este adulto puede preocuparse constantemente por el estado de la relación y temer el abandono. Por ejemplo, puede necesitar frecuentes afirmaciones de amor y sentirse inseguro incluso en relaciones estables.

          .div(titulo="Apego evitativo")
            p Los niños evitaban el contacto con el cuidador y no mostraban preferencia entre este y un extraño. Aunque externamente parecían independientes, estudios han mostrado que estos niños experimentan estrés interno que reprimen para no depender emocionalmente. Este patrón de apego suele desarrollarse cuando los cuidadores son emocionalmente distantes o rechazan las necesidades del niño (Ainsworth et al., 1978).
          .div(titulo="Ejemplos")
            p Un niño con apego evitativo, evita la proximidad emocional con su cuidador, posiblemente como una estrategia para protegerse de la indiferencia o el rechazo. Por ejemplo, este niño puede no mostrar preferencia por su cuidador sobre un extraño y puede evitar el contacto físico o emocional, incluso cuando está angustiado.<br>En el adulto con apego evitativo, puede tener dificultades para formar relaciones cercanas y puede valorar su independencia por encima de todo (Bartholomew, & Horowitz, 1991). Este adulto puede evitar la intimidad y tener problemas para confiar en los demás. Por ejemplo, puede mantener a su pareja a distancia emocionalmente y evitar discusiones sobre sentimientos.

          .div(titulo="Apego desorganizado")
            p En investigaciones posteriores, Main y Solomon (1986), identificaron este estilo, caracterizado por comportamientos contradictorios, como acercarse al cuidador, pero evitar el contacto visual. Este tipo de apego está frecuentemente asociado con experiencias de abuso, negligencia o trauma en el entorno familiar.

          .div(titulo="Ejemplos")
            p Un niño con apego desorganizado muestra comportamientos contradictorios y confusos, a menudo asociados con experiencias de abuso o negligencia. Por ejemplo, el niño puede acercarse a su cuidador en busca de consuelo, pero luego mostrar miedo o comportamientos desorientados, como congelarse o moverse de manera errática.<br>En el adulto con apego desorganizado, puede tener relaciones caóticas y problemas significativos para manejar el estrés y las emociones (Main y Solomon (1986). Este adulto puede alternar entre buscar proximidad y evitar la intimidad, y puede tener dificultades para confiar en los demás. Por ejemplo, puede tener relaciones inestables y mostrar comportamientos impredecibles en respuesta a conflictos emocionales.

    
    .row.bg-amarillo.bg-full-width.mb-4
      div.px-5.pb-md-3.py-4.d-flex  

        .row
          .col-12.col-xl-7.d-flex.flex-column.justify-content-center
            .bg-amarillo-oscuro.p-4.mb-4(data-aos="fade-up")
              span Los cuatro tipos de apego propuestos por Bowlby y desarrollados por Ainsworth, reflejan la diversidad de relaciones afectivas que los niños pueden establecer con sus cuidadores, y cómo estas moldean sus patrones relacionales a lo largo de la vida.
            span Estas categorías no solo ayudan a comprender cómo los vínculos tempranos influyen en el desarrollo emocional y social, sino también a identificar patrones relacionales que pueden abordarse en contextos educativos, terapéuticos y sociales para fomentar el bienestar y el crecimiento personal.
          .col-5.d-none.d-xl-block(data-aos="fade-left")
            img(h-100 src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

    #t_2_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 2.3
        h2 Implicaciones de las tipologías del apego para el desarrollo

    p.mb-4 Siguiendo esta línea de análisis, el tipo de apego que se forma en la infancia tiene un impacto significativo en el desarrollo emocional, social y cognitivo del individuo, a lo largo de su vida. A continuación, explicaremos algunos aspectos claves en los que el tipo de apego influye, destacando su papel en el desarrollo afectivo y en la manera en que se perciben en los niños y en la forma en que las personas establecen y mantienen relaciones a lo largo del tiempo.

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Desarrollo emocional y psicológico
              p Los individuos con apego seguro tienden a desarrollar una autoestima sólida, una regulación emocional efectiva y una mayor resiliencia ante las adversidades. Por el contrario, aquellos con apego inseguro pueden enfrentar dificultades emocionales, como ansiedad, depresión y problemas de confianza en sus relaciones interpersonales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Desarrollo social
              p El apego seguro favorece una mayor capacidad para establecer relaciones interpersonales satisfactorias. Los individuos con apego seguro tienden a ser más empáticos, cooperativos y tienen una mayor capacidad para resolver conflictos de manera efectiva. En cambio, los individuos con apego inseguro pueden tener dificultades para confiar en los demás, lo que puede generar conflictos interpersonales y dificultades en las relaciones sociales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Desarrollo cognitivo
              p El tipo de apego también puede influir en el desarrollo cognitivo. Los niños con apego seguro tienden a ser más exploratorios y curiosos, lo que favorece su desarrollo. Los niños con apego inseguro, por el contrario, pueden estar más concentrados en la protección de sí mismos, lo que puede reducir su motivación para explorar el mundo y aprender de él.

    .row.bg-amarillo.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex  
        span La teoría de Bowlby subraya que los estilos de apego desarrollados en la infancia, tienden a persistir en la vida adulta y moldean la forma en que las personas se relacionan con sus parejas, amigos y colegas. Por ejemplo, quienes tienen un apego seguro, suelen tener relaciones más saludables y equilibradas, mientras que quienes tienen un apego ansioso o evitativo pueden experimentar dificultades en la confianza, comunicación y manejo emocional.

    .row.mb-4
      .col-12.col-xl-8.d-flex.flex-column
        p.mb-4 Esta perspectiva marcó un hito en la comprensión del desarrollo humano, al destacar la influencia de las relaciones tempranas en la personalidad y en el bienestar emocional a lo largo de la vida. 
        .d-flex.align-items-start.bg-azul.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-31.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0 Su enfoque no solo ha sido fundamental en la psicología infantil, sino que también ha influido en campos como la psicoterapia, la educación y la crianza. Bowlby afirmó: "El apego a un cuidador principal es tan crucial para la salud mental, como las vitaminas y proteínas lo son para la salud física" Bowlby (1969).
      .d-none.d-xl-block.col-xl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')

    .row.mb-4.mx-0.mb-5
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-verde.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Las tipologías del vínculo afectivo son un aspecto clave en el desarrollo humano, porque influyen de manera profunda en la forma en que los individuos se relacionan con los demás, manejan sus emociones y enfrentan los desafíos de la vida. El apego seguro favorece un desarrollo positivo en diversas áreas, mientras que los apegos inseguros pueden generar dificultades emocionales y sociales. Las investigaciones sobre el apego continúan siendo fundamentales para comprender cómo las experiencias tempranas con los cuidadores, influyen en el desarrollo a lo largo de la vida.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="") Crítica de la teoría del apego de Bowlby y Ainsworth [Artículo]
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/46297?page=12") La relación de apego y sus posibilidades educativas [Libro]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/olnzuMtZdA8?si=cpZVLNDD_FMyXdOf") La Teoría del Apego: Cómo la Infancia Afecta la Vida [Vídeo]

          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
