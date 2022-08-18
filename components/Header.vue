<template lang="pug">
header
	nav.container-fluid.d-flex.align-items-center.d-none.d-sm-none.d-md-none.d-lg-flex.px-5
		NuxtLink(to='/')
			.logo
				img(:src='logo')
		.nav-btn.d-flex
			NuxtLink(:to="item.url" v-for='item in Nav') {{item.title}}
		.nav-date.ms-auto {{ $moment().format('ddd MMMM Do YYYY') }} | {{ showTime }}
		button
			.nav-btn-text Call For Consultation
			.dropdown
				div {{consultation[0]}}
				hr
				div {{consultation[1]}}
		i(class="fa fa-search" aria-hidden="true")

	nav.container-fluid.d-flex.align-items-center.justify-content-around.d-sm-flex.d-md-flex.d-lg-none.mobile
		i(class="fa fa-bars" aria-hidden="true" @click="toggleMenu()")
		a(href='/')
			.logo
				img(:src='logo')
		i(class="fa fa-phone" aria-hidden="true" @click='toggleConsult()')
</template>

<script>
import logoimg from '~/assets/images/logo.svg'

export default {
    name: "HeaderSection",
	data() {
		return {
			logo: logoimg,
			showTime: '',
			interval:null,
			consultation: [
				'+233 (0) 30 254 5454',
				'+233 (0) 30 223 2345'
			],
			Nav: [
				{
					title: 'Home',
					url: '/'
				},
				{
					title: 'About',
					url: '/about'
				},
				{
					title: 'Practice Areas',
					url: '/practice-areas'
				},
				{
					title: 'Publications',
					url: '/publications'
				},
				{
					title: 'Contact',
					url: '/contact'
				},
			]
		}
	},
	methods: {
		toggleMenu() {
			let mobileNav = document.querySelector('#mobile-nav')
			let overlayBox = document.querySelector('.overlay')
			mobileNav.classList.toggle('is-active')
			overlayBox.classList.add('is-active')
		},

		toggleConsult() {
			let consultBox = document.querySelector('#consultation-box')
			let overlayBox = document.querySelector('.overlay')
			overlayBox.classList.add('is-active')
  			consultBox.classList.toggle('is-active')
		}
	},
	created() {
		this.interval=setInterval(() => {
      	this.showTime = this.$moment().format('h:mm:ss a');
    	}, 1000)
	},
}

</script>
