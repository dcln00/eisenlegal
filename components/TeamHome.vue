<template lang="pug">
section#team-section.container-fluid.px-0
	.row
		.col-lg-6.team-carousel.px-0
			.swiperimg.mySwiper
				.swiper-wrapper
					.swiper-slide(v-for='(title, index) in team' :key='index')
						img(:src='title.image')
			
			.carousel-info.d-flex
				.info-stuff
					.swiperinfo.mySwiper
						.swiper-wrapper
							.swiper-slide(v-for='(title, index) in team' :key='index')
								.section-title {{title.position}}
								h1 {{title.name}}
				.carousel-controls.ms-auto.d-flex
					.prev(class="swiper-button-prev" aria-hidden="true")
					.next(class="swiper-button-next" aria-hidden="true")

		.col-lg-6.px-0
			.team-title.px-4
				.section-title {{title}}
				h1 {{heading}}
			.team-svg
				img(src='~/assets/icons/scales.svg')
			.team-names
				.team-members.d-flex.justify-content-between.align-items-center(v-for='(item, index) in team' :key='index')
					.team-name {{item.name}}
					.team-line
					.team-pos {{item.position}}

</template>

<script>
import img01 from '~/assets/images/attorneys/geraldasante.jpg'
import img02 from '~/assets/images/attorneys/abena.jpg'
import img03 from '~/assets/images/attorneys/denzel.jpg'
import img04 from '~/assets/images/attorneys/ian.jpg'
import { Swiper, Navigation, Autoplay, EffectFade, Controller } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  data() {
    return {
      title: 'Meet our Attorneys',
      heading: 'Team Performance is a Priority',
      team: [
        { name: 'Hon. Gerald Asante', position: 'ceo', image: img01 },
        {
          name: 'Ms. Abena Sefah',
          position: 'snr. associate partner',
          image: img02,
        },
        { name: 'Denzel Aarons', position: 'attorney', image: img03 },
        { name: 'Ian J. Asante', position: 'intern', image: img04 },
      ],
    }
  },
  mounted() {
    const swiperimg = new Swiper('.swiperimg', {
      loop: true,
      allowTouchMove: false,
      modules: [Navigation, Autoplay, Controller],
      //grabCursor: false,
      //centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      controller: {
        control: swiperinfo,
        by: 'slide',
      },
    })

    const swiperinfo = new Swiper('.swiperinfo', {
      loop: true,
      modules: [Navigation, Autoplay, EffectFade, Controller],
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      allowTouchMove: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    swiperimg.params.control = swiperinfo
    swiperinfo.params.control = swiperimg
  },
}
</script>

<style lang="scss">
.swiperimg.mySwiper .swiper-wrapper {
  aspect-ratio: 1;
  position: relative;
}

.swiperinfo > .swiper-wrapper:nth-child(1) {
  aspect-ratio: inherit;
  max-width: 600px;
  height: auto;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 15px;
}
</style>
