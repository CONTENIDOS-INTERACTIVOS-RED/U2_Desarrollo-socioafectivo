<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        p.mb-4 Bienvenidos a la Unidad 1 de la asignatura "Desarrollo socioafectivo y vínculo", donde estudiaremos conceptos fundamentales del desarrollo emocional y social en la infancia, como la emotividad y los vínculos afectivos que los niños forman en esta etapa. 
        .d-flex.mb-4.align-items-start.bg-azul.p-4(data-aos="fade-up")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-1.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Al finalizar, los estudiantes conocerán la teoría educativa relacionada con el desarrollo afectivo y el vínculo, y serán capaces de aplicar esta teoría, de manera crítica, en diferentes contextos. Este conocimiento les permitirá comprender mejor cómo los vínculos afectivos influyen en el desarrollo infantil y cómo pueden apoyar a los niños en su crecimiento emocional y social.
        span El estudio de la <b>afectividad</b> y los <b>vínculos en la infancia</b>, es fundamental no solo para aquellos que trabajan directamente con niños, como educadores y psicólogos, sino también para cualquier persona interesada en el desarrollo humano. 
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')  

    p.mb-4 Comprender estos conceptos les permitirá mejorar sus habilidades interpersonales y aplicar estos conocimientos en el ámbito profesional, contribuyendo a la creación de entornos más empáticos y comprensivos.
    .bg-amarillo.bg-full-width
      .px-5.pb-md-3.py-4

        .row
          .col-6.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
          .col-12.col-xl-6.d-flex.flex-column.justify-content-center
            p.mb-4(data-aos="fade-up") Esperamos que participen activamente en las actividades grupales e individuales, así como en los foros de discusión. Es importante que se comprometan con la lectura de los artículos, libros y la visualización de los videos proporcionados, dado que estos recursos serán fundamentales para su aprendizaje. No se requiere ningún conocimiento previo específico, pero una actitud abierta y reflexiva, será clave para aprovechar al máximo esta unidad.
            span(data-aos="fade-up") Estamos emocionados de comenzar este viaje de aprendizaje con ustedes y esperamos que encuentren esta unidad enriquecedora y relevante para su desarrollo personal y profesional.

      

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
