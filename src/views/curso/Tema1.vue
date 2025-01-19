<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Tipologías del vínculo afectivo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 El vínculo afectivo es un componente esencial en la construcción de nuestras relaciones interpersonales y tiene un impacto significativo en nuestro bienestar emocional y social.
    .row.bg-azul.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')

        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Tipologías del vínculo afectivo 
          p.mb-5 En el PDF Tipologías del vínculo afectivo, se exploran las distintas categorías de vínculos emocionales que establecen las personas a lo largo de sus vidas y cómo estos influyen en su desarrollo psicosocial. Desde las teorías clásicas del apego propuestas por autores como Harry Harlow y Mary Ainsworth hasta los criterios que definen las relaciones afectivas, este documento ofrece un análisis profundo sobre la importancia de los lazos emocionales en la formación de comunidades, la estabilidad personal y la creación de entornos seguros. La comprensión de las tipologías del vínculo afectivo permite no solo identificar cómo se construyen y mantienen estas conexiones, sino también cómo su evolución impacta en nuestra capacidad para afrontar desafíos y construir relaciones saludables.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Tipologías del vínculo afectivo.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong>Tipologías del vínculo afectivo.

    .row.bg-verde.bg-full-width.py-4(data-aos="fade-up")
      div.px-5.pb-md-3.py-4.d-flex
      
        div.d-flex.align-items-center
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-8.svg', alt='Texto que describa la imagen')
          p.mb-0 En este contexto, se reconocen distintas tipologías de vínculos afectivos, cada una con características particulares que determinan las pautas de comportamiento y el bienestar emocional de los individuos, a lo largo de su vida. A continuación, se explorarán las principales tipologías del vínculo afectivo, sus implicaciones para el desarrollo y las teorías más influyentes que han abordado este fenómeno.

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3

        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Vínculo romántico
              p Este tipo de vínculo se establece entre dos personas que sienten una atracción emocional, física y sexual. Es un lazo profundo que implica compromiso y una conexión emocional intensa. Según Sternberg (1986), el amor romántico puede descomponerse en tres componentes: intimidad, pasión y compromiso.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Vínculo de amistad
              p Este vínculo se basa en la confianza, la intimidad y el apoyo mutuo entre dos o más personas. La amistad es crucial para el bienestar emocional y social. Según Weiss (1974), la amistad proporciona apoyo emocional, social y práctico.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Vínculo familiar
              p Los vínculos familiares son aquellos que se forman entre miembros de una familia, como entre padres e hijos, hermanos, etc. Estos vínculos son fundamentales para el desarrollo emocional y social de los individuos. Según Bowlby (1988), citado por Moneta (2014), los vínculos familiares proporcionan una base segura, desde la cual los niños pueden explorar el mundo.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Vínculo comunitario
              p Este tipo de vínculo se refiere a las conexiones que las personas establecen dentro de una comunidad. Estos vínculos son importantes para el sentido de pertenencia y el apoyo social. Según Putnam citado por Duran (2023), el capital social, que incluye los vínculos comunitarios, es crucial para el bienestar de las comunidades.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-5
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-6.mb-4.mb-md-0
              p.text-bold Vínculo profesional
              p Los vínculos profesionales se forman en el contexto laboral y son esenciales para el desarrollo de una carrera y el bienestar en el trabajo. Los vínculos profesionales pueden ser fuertes o débiles, y ambos tipos son importantes para el éxito profesional.
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1  
        h2 1.1	Implicaciones para el desarrollo

    .row.mb-4
      .col-12.col-xl-7
        .bg-amarillo.p-4.mb-4(data-aos="fade-up")
          span Después de explorar los diferentes tipos de vínculos que se construyen, es fundamental reflexionar sobre las profundas implicaciones que estos tienen en el desarrollo emocional, social y psicológico de las personas. Por ejemplo, los vínculos familiares seguros, pueden servir como una base sólida para el desarrollo de la autoestima y la capacidad de establecer relaciones saludables en la adultez (Bowlby, 1988). Asimismo, las relaciones de amistad y los lazos comunitarios, desempeñan un papel esencial al ofrecer apoyo emocional y social, factores claves para el bienestar mental y la resiliencia.
        span En este sentido, Putnam (2000), citado por Duran (2023), sostiene que el capital social, definido como las redes de relaciones y la confianza mutua, es un elemento esencial tanto para el bienestar de las comunidades, como para el desarrollo individual. Durante la unidad anterior y lo que llevamos de esta, nos ha quedado claro que, <b>el desarrollo de los vínculos afectivos y emocionales comienza en la niñez, cuando nuestras necesidades son atendidas durante las interacciones con otros</b>. A medida que crecemos, la satisfacción de diversas necesidades fomenta la aparición de emociones de apego, lo que resalta la importancia de mostrar interés por las preocupaciones de los hijos y recibir gestos de cuidado.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')  
      .col-12.col-xl-7.d-flex.flex-column
        .d-flex.mb-4.align-items-start.bg-azul.p-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Este intercambio es fundamental para un desarrollo emocional y personal saludable. La falta de estos gestos puede dificultar la capacidad de establecer relaciones sanas y amistades. La expresión de cariño a través de palabras, elogios, abrazos y actitudes, es clave para crear y fortalecer estos vínculos afectivos.
        span Sin embargo, es necesario entender el concepto de apego al hablar de vínculos afectivos. A lo largo de estas dos unidades, hemos encontrado este término y ahora es el momento de profundizar en él, dado que el apego y los vínculos afectivos, están estrechamente relacionados. El apego se refiere a los lazos emocionales profundos que se forman entre un niño y sus cuidadores, y estos lazos son fundamentales para el desarrollo emocional y social. Comprender el apego nos ayuda a apreciar mejor cómo se forman y mantienen los vínculos afectivos a lo largo de la vida.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2  
        h2 Teoría del apego: conceptualización inicial

    p.mb-4 El apego es un componente central en el desarrollo emocional y social de las personas, y su estudio ha sido clave para comprender la formación de vínculos afectivos desde la infancia.

    .row.bg-azul.bg-full-width.py-4.mb-5
      div.px-5.pb-md-3.py-4.d-flex
             
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
          img.h-100(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-right")
          h2.mb-4.pb-2.me-auto Teoría del apego 
          p.mb-5 En el PDF Teoría del apego se exploran las contribuciones de autores como John Bowlby, Mary Ainsworth, Ronald Fairbairn y Donald Winnicott, quienes sentaron las bases fundamentales de esta teoría, demostrando que el apego no se limita a la satisfacción de necesidades físicas, sino que responde a una necesidad emocional profunda de conexión con los cuidadores. A lo largo del texto, se analizan conceptos fundamentales como los estilos de apego, los efectos de la separación materna, la internalización de experiencias tempranas y la influencia de los cuidadores en la formación del "self". Esta teoría ofrece una perspectiva sólida para entender cómo las primeras interacciones afectan la capacidad de las personas para establecer relaciones seguras y significativas, subrayando la importancia del amor y la estabilidad emocional para nuestro desarrollo emocional y social.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexos_Teoría del apego.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Teoría del apego.

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://elibro.net/es/ereader/tecnologicadeloriente/49152?page=256") Vinculaciones afectivas: apego, amistad y amor [Libro]
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://repository.libertadores.edu.co/server/api/core/bitstreams/4ab28607-cd3a-43ab-a0a3-d52f2f0dc61d/content") El juego como herramienta para fortalecer los vínculos afectivos en las familias ICBF [Documento]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/T2EoNa5p0co?si=IROUCEIwsAQ6Mr5J") Conferencia inaugural: Vínculo materno infantil, una mirada desde la neurociencia afectiva [Vídeo]

          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
