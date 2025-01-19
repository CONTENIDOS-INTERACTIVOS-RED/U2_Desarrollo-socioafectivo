<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .bg-fondo-2.bg-full-width
      .px-5.pb-md-3.py-4

        .row.mb-4
          .col-12.col-xl-7
            p.mb-4 En esta unidad, explicaremos las diversas tipologías del vínculo afectivo y su importancia fundamental en el desarrollo humano. Comenzaremos con una introducción a la teoría del apego, de John Bowlby, que nos proporcionará una base sólida para entender cómo los vínculos tempranos influyen en el desarrollo emocional y social a lo largo de la vida. Además, abordaremos el manejo y desarrollo de la inteligencia emocional en sus diferentes etapas, destacando cómo estas habilidades pueden ser cultivadas y fortalecidas desde la infancia hasta la adultez.
            .bg-gris.p-4.mb-4(data-aos="fade-up")
              span El estudio de los vínculos afectivos y la inteligencia emocional, es crucial para comprender el comportamiento humano y las relaciones interpersonales. A través de esta unidad, los estudiantes conocerán las ideas expuestas por los autores estudiados en clase, logrando escribir ensayos sobre sus teorías y aplicando estos conceptos a situaciones prácticas.
            span Al finalizar esta unidad, los estudiantes serán capaces de:
          .col-5.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')  

        .row.mb-4.justify-content-center 
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-right")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-2.svg', style="width: 80px")
              p.px-1.text-small.mb-0.d-flex.text-center Conocer y explicar las tipologías del vínculo afectivo.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-3.svg', style="width: 80px")
              p.px-1.text-small.mb-0.d-flex.text-center Comprender la teoría del apego de John Bowlby y su relevancia en el desarrollo humano.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-up")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-4.svg', style="width: 80px")
              p.px-1.text-small.mb-0.d-flex.text-center Manejar y desarrollar la inteligencia emocional en sus diferentes etapas.
          .col-10.col-md-8.col-lg-6.col-xl-3.mx-auto.mb-4.mb-xl-0(data-aos="fade-left")
            .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-5.svg', style="width: 80px")
              p.px-1.text-small.mb-0.d-flex.text-center Escribir ensayos críticos sobre las teorías estudiadas.

    .bg-amarillo.bg-full-width
      .px-5.pb-md-3.py-4

        .row.mb-4
          .col-5.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')  
          .col-12.col-xl-7.d-flex.flex-column.justify-content-center
            p.mb-4(data-aos="fade-up") Esta unidad está diseñada para proporcionar una comprensión profunda y práctica de los vínculos afectivos y la inteligencia emocional. A través de actividades interactivas y recursos variados, los estudiantes podrán apropiarse de los conceptos y aplicarlos en su vida diaria y profesional. 
            span(data-aos="fade-up") Se espera que los estudiantes participen activamente en las actividades y utilicen los recursos proporcionados para una mayor apropiación de los temas. Las actividades incluirán discusiones en clase, análisis de casos, y ejercicios prácticos que facilitarán la comprensión y aplicación de los conceptos estudiados.



</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
