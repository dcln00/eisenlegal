<template lang="pug">
section#hero.container-fluid 
    .hero-slider.container.p-0
        img(:src='heroPhoto')
        .hero-content
            .section-title {{title}}
            h1(v-html='heading')
            p.
                {{paragraph}}
            NuxtLink(to='/about') #[button {{button}}]
</template>

<script>
import heroPhoto from '~/assets/images/indexhero.jpg';

export default {
    name: 'HeroSlider',
	data() {
		return {
			heroPhoto,
			title: 'Best Lawyers',
			heading: 'Experienced Attorneys With <br> Over 15 Years of Practice.',
			paragraph: 'We have experience in a number of important professional areas, including litigation, arbitration, corporate, commercial, real estate, property and transfer, family law, debt collection, banking, and insurance.',
			button: 'Learn More'
		}
	}
}
</script>