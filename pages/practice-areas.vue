<template lang="pug">
div
	utilsBgWrap
	Jumbotron
		.hero-box(slot='jumbo-img') #[img(:src='jumboPhoto')]
		.section-title(slot="jumbo-title") {{ title }}
		h1(slot='jumbo-heading') {{heading}}
		p(slot="jumbo-par").
			We are devoted to providing solutions and are driven by a genuine desire for excellence. We have experience in a number of important professional areas, including litigation, arbitration, corporate, commercial, real estate, property and conveyance, family law, debt recovery, banking, and insurance. 
	Services
</template>

<script>
import jumboPhoto from '~/assets/images/practiceareas.jpg';

export default {
    name: "PracticeAreasPage",
	head: {
		titleTemplate: 'Practice Areas - %s',
	},
    data() {
        return {
            title: "Services",
			heading: 'Practice Areas',
            jumboPhoto,
        };
    }
}
</script>