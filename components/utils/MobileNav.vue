<template lang="pug">
#mobile-nav.d-block.justify-content-center.align-items-center.d-sm-block.d-md-block.d-lg-none.mobile
	NuxtLink(:to="item.url" v-for='item in Nav') #[div(@click="closeMenu()") {{item.title}}]
	div #[.copyright Copyright © Eisen & Co]
	i(class="fa fa-angle-left" aria-hidden="true" @click="closeMenu()")
</template>

<script>
export default {
	data() {
		return {
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
		closeMenu() {
			let overlayBox = document.querySelector('.overlay')
			let consultBox = document.querySelector('#consultation-box')
			let mobileNav = document.querySelector('#mobile-nav')
			overlayBox.classList.remove('is-active')
			consultBox.classList.remove('is-active')
			mobileNav.classList.remove('is-active')
		}
	}
}
</script>