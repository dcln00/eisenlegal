<template lang="pug">
.overlay(@click='removeClasses()')
</template>

<script>
export default {
	methods: {
		removeClasses() {
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