<template lang="pug">
section#values.container-fluid.px-0
	.row 
		.col-sm-6.p-0 #[img(:src='img01')]
		.col-sm-6.d-flex.justify-content-center.align-items-center.p-0
			.values-content
				.section-title {{title}}
				h1 {{heading}}
				#accordionBasic.accordion
					.card(v-for='(item, index) in accordion' :key='index')
						.card-header(:id="'heading' + item.number")
							h2.mb-0
								button.btn(type='button' data-toggle='collapse' :data-target="'#collapse' + item.number" aria-expanded='true' :aria-controls="'collapse' + item.number")
									.section-title {{item.title}}
								.collapse(:aria-labelledby="'heading' + item.number" data-parent='#accordionBasic' :id="'collapse' + item.number")
									.card-body
										.core-values.d-flex(v-if='item.number === "Three"')
											.cvalue(v-for='values in item.content')
												p {{ values }}
										p(v-else) {{item.content}}
</template>

<script>
import img01 from '~/assets/images/attorney02.jpg'
export default {
  data() {
    return {
      img01,
      title: 'Eisen & Co',
      heading: 'What defines us.',
      accordion: [
        {
          number: 'One',
          title: 'Vision',
          content: `“we Aim To Be The Standard Of Excellence And Reliability In Every Field Of The Law In Ghana And Beyond”`,
        },
        {
          number: 'Two',
          title: 'Mission',
          content: `At Eisen & Co., we deliver premier legal services to our clients. Our experienced and passionate team of lawyers work hard to provide highly skilled, effective and innovative legal counsel and strategic advice. We empower our clients by understanding their objectives and meeting or exceeding their expectations in the best possible way.`,
        },
        {
          number: 'Three',
          title: 'Core Values',
          content: [
            'Excellence',
            'Reliability',
            'Integrity',
            'Respect',
            'Innovation',
          ],
        },
      ],
    }
  },
}
</script>
