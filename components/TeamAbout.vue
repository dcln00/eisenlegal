<template lang="pug">
section#team-grid.container-fluid.px-0 
	.container 
		.section-title {{title}}
		h1 {{heading}}
	.team-grid
		.swiperatt.mySwiper
			.swiper-wrapper
				.swiper-slide(v-for='att in attourneys' :key='att.id')
					.att(@mouseenter='hoverEnter(att.id)' @mouseleave='hoverLeave(null)') #[img(:src='att.img')] 
						.att-info(:class="active ? 'is-active' : ''" v-if='hover === att.id') #[.section-title {{ att.attourneyTitle}}] #[h1 {{att.attourneyName}}]
						.att-info(:class="active" v-else) #[.section-title {{ att.attourneyTitle}}] #[h1 {{att.attourneyName}}]
</template>

<script>
import img01 from '~/assets/images/attorneys/geraldasante.jpg'
import img02 from '~/assets/images/attorneys/abena.jpg'
import img03 from '~/assets/images/attorneys/denzel.jpg'
import img04 from '~/assets/images/attorneys/ian.jpg'
import  { Swiper, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
export default {
	data() {
		return {
			title: 'Our',
			heading: 'Attorneys',
			active: false,
			attourneys: [
				{img: img01, id:0, attourneyTitle:'Position', attourneyName: 'Lorem Ipsum Delor'},
				{img: img02, id:1, attourneyTitle:'Position', attourneyName: 'Lorem Ipsum Delor'},
				{img: img03, id:2, attourneyTitle:'Position', attourneyName: 'Lorem Ipsum Delor'},
				{img: img04, id:3, attourneyTitle:'Position', attourneyName: 'Lorem Ipsum Delor'},
			],
			hover: -1,
		}
	},
	methods: {
		hoverEnter(index) {
			this.hover = index
			this.active = !this.active
			console.log('hovering on ' + index)
		},

		hoverLeave() {
			this.active = !this.active
			console.log('stopped on ' + this.hover)
		}
	},
	mounted() {
		const swiperatt = new Swiper('.swiperatt', {
			modules: [Autoplay],
			loop: false,
			allowTouchMove: true,
			slidesPerView: 1,
			spaceBetween: 0,
			grabCursor: false,
			freeMode: true,
			centeredSlides: false,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			breakpoints: {
				992: {
					slidesPerView: 3,
					},
			}
    })
	}
}
</script>