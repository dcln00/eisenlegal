<template lang="pug">
section#client-section.container-fluid
	.section-title {{title}}
	.client-gallery.container
		.swiperclient.mySwiper
			.swiper-wrapper
				.swiper-slide(v-for='client in clientele')
					.clientele #[img(:src='client.client')]
</template>

<script>
import img01 from '~/assets/images/clients/logos-05.svg'
import img02 from '~/assets/images/clients/logos-06.svg'
import img03 from '~/assets/images/clients/logos-07.svg'
import img04 from '~/assets/images/clients/logos-08.svg'
import { Swiper, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
export default {
  name: 'ClientsHome',
  data() {
    return {
      title: 'Our Clients',
      clientele: [
        { client: img01 },
        { client: img02 },
        { client: img03 },
        { client: img04 },
      ],
    }
  },
  mounted() {
    const swiperclient = new Swiper('.swiperclient', {
      modules: [Autoplay],
      loop: true,
      allowTouchMove: true,
      slidesPerView: 2,
      spaceBetween: 30,
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
        },
      },
    })
  },
}
</script>
