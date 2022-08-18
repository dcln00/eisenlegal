<template lang="pug">
section#about-section.container-fluid.d-flex.justify-content-center.align-items-center 
    div 
        img(src='~/assets/icons/textwrap.svg')
        .section-title {{title}}
        h1 {{heading}}
        p.
            {{paragraph}}
            
</template>

<script>
export default {
	data() {
		return {
			title: 'About Us',
			heading: 'Welcome To Eisen & Co',
			paragraph: 'We are devoted to providing solutions and are driven by a genuine desire for excellence. We have experience in a number of important professional areas, including litigation, arbitration, corporate, commercial, real estate, property and conveyance, family law, debt recovery, banking, and insurance.'
		}
	}
}
</script>