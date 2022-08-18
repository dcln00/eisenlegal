<template lang="pug">
div
	utilsBgWrap
	Jumbotron
		.hero-box(slot='jumbo-img') #[img(:src='jumboPhoto')]
		.section-title(slot="jumbo-title") {{ title }}
		h1(slot='jumbo-heading') {{heading}}
	ContactForm
	ContactMap
</template>

<script>
import jumboPhoto from '~/assets/images/attorney01.jpg';

export default {
	name: "ContactPage",
	head: {
		titleTemplate: 'Contact - %s',
	},
    data() {
        return {
            title: "Contact Us",
			heading: 'Get In Touch',
            jumboPhoto,
        };
    }
}
</script>