<template lang="pug">
section#practice-areas-section.container-fluid.px-0
	.pr-text
		.section-title {{ title }}
		h1 {{ heading }}
		p.
			{{ paragraph }}
	.prg-container
		div(v-for='image in practiceGroup')
			img(:src='image.img' :class="opaque ? 'opaque' : ''" v-if='hover === image.id')
			img(:src='image.img' v-else :class="!opaque")
		.practice-groups
			.pr-group(@mouseover='hoverEnter(area.id)' v-for='area in practiceGroup' :key='area.id') {{area.pr}}
	NuxtLink(to='/practice-areas') #[button View All Services]
</template>

<script>
import img01 from '~/assets/images/img_003.jpg';
import img02 from '~/assets/images/familylaw.jpg';
import img03 from '~/assets/images/realestate.jpg';
import img04 from '~/assets/images/contract.jpg';
import img05 from '~/assets/images/tax.jpg';
import img06 from '~/assets/images/debtrecovery.jpg';
import img07 from '~/assets/images/insurance.jpg';
import img08 from '~/assets/images/capitalmarkets.jpg';


export default {
	data() {
		return {
			title: 'Practice Areas',
			heading: 'Broad Range of Law Services',
			paragraph: 'We provide our customers with first-rate legal services. Our knowledgeable, efficient, and creative legal staff works arduously to offer excellent legal assistance and strategic recommendations. ',
			practiceGroup: [
				{pr: 'Criminal Litigation', img: img01, id:1},
				{pr: 'Family Law', img: img02, id:2},
				{pr: 'Real Estate', img: img03, id:3},
				{pr: 'Contract', img: img04, id:4},
				{pr: 'Tax', img: img05, id:5},
				{pr: 'Debt Recovery', img: img06, id:6},
				{pr: 'Insurance', img: img07, id:7},
				{pr: 'Capital Markets', img: img08, id:8}
			],
			opaque: true,
			hover: 1,
		}
	}, 
	methods: {
		hoverEnter(index) {
			this.hover = index
		}
	}
}
</script>