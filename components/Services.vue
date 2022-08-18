<template lang="pug">
div
	section#services.container.d-none.d-sm-none.d-md-none.d-lg-block
		.d-flex.align-items-start
			#v-pills-tab.nav.flex-column.nav-pills.me-5(role='tablist' aria-orientation='vertical')
				a.nav-link(:class='item.active ? "active" : null ' :id="'v-pills-'+ item.name +'-tab'" data-bs-toggle='pill' :href="'#v-pills-' + item.name" role='tab' :aria-controls="'v-pills-' + item.name" aria-selected='true' v-for='item in Categories' :key="'v-pills-'+ item.name +'-tab'") {{item.title}}

			#v-pills-tabContent.tab-content(v-for='item in Categories' v-if='item.id === 1')
				.tab-pane.fade.show.active(:id="'v-pills-'+ item.name" role='tabpanel' :aria-labelledby="'v-pills-'+ item.name +'-tab'")
					.container-fluid.d-flex.justify-content-center.align-items-center.services-title
						.section-title {{ item.title }}
					.services-par {{item.content}}
					.services-ul(v-html='item.list')

			#v-pills-tabContent.tab-content(v-else v-for='item in Categories')
				.tab-pane.fade(:id="'v-pills-'+ item.name" role='tabpanel' :aria-labelledby="'v-pills-'+ item.name +'-tab'" v-for='item in Categories' )
					.container-fluid.d-flex.justify-content-center.align-items-center.services-title
						.section-title {{ item.title }}
					.services-par {{item.content}}

		.services-cta.container-fluid.d-flex.justify-content-center.align-items-center
			.section-title Contact Us Now

	section#services.container.d-sm-block.d-md-block.d-lg-none
		#accordionBasic.accordion
			.accordion-item.mb-4(v-for='item in Categories')
				h2.accordion-header(:id="'heading' + item.name")
					button.accordion-button.collapsed(type='button' data-bs-toggle='collapse' :data-bs-target="'#collapse' + item.name" aria-expanded='true' :aria-controls="'collapse' + item.name")
						.section-title {{item.title}}
				.accordion-collapse.collapse(:aria-labelledby="'heading' + item.name" data-bs-parent='#accordionBasic' :id="'collapse' + item.name")
					.accordion-body
						.services-par {{item.content}}
						.services-ul(v-html='item.list')

</template>

<script>
export default {
	data() {
		return {
			Categories: [
				{
					name: 'litigation',
					title: 'litigation',
					id: 1,
					active: true,
					content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem deleniti reprehenderit deserunt repudiandae magni fugit nisi ex error molestias non autem ab ut necessitatibus sunt maiores itaque aspernatur dolorum vero maxime consectetur quam! Tempora, numquam at nulla, distinctio libero praesentium qui delectus dolore, quibusdam molestiae laboriosam dolorem rerum molestias?`,
					list: `
					<br>
					<ul> 
					<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, suscipit.</li>
					<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, reprehenderit tempora.</li>
					<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
					<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, assumenda?</li>
					<li>Lorem, ipsum dolor.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
					<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, provident amet!</li>
					<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequatur error eos minus.</li>
					<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis eum libero nesciunt voluptate voluptas error officia aspernatur vitae consequatur.</li>
					<li>Lorem, ipsum.</li>
					<li>Lorem ipsum dolor sit amet consectetur.</li>
					<li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe.</li>
					<li>Lorem ipsum dolor sit.</li>
					<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
					</ul>
					`
				},
				{
					name: 'familylaw',
					title: 'family law',
					id: 2,
					content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consectetur incidunt nam iste, esse eligendi itaque voluptatum quasi eaque labore eos fugit ea libero cupiditate, deserunt consequatur accusantium velit delectus nobis quis modi excepturi. Illum, sit quas! Eum, perferendis nulla.`,
				},
				{
					name: 'contracts',
					title: 'contracts',
					id: 3,
					content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sit quas eum porro ipsa, voluptate earum quos laborum ea alias ducimus temporibus aut quaerat! Molestias odit odio quia! Natus, reprehenderit quod, sapiente blanditiis ex placeat corporis porro eius esse odio optio enim dolorem nihil illo sunt suscipit alias tempora ea.`
				},
				{
					name: 'tax',
					title: 'tax',
					id: 4,
					content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias eos officia, cumque recusandae harum repellendus asperiores similique accusamus amet voluptate a vel fuga hic doloremque expedita autem nesciunt ea fugit eius voluptatibus aspernatur, quae deleniti reprehenderit. Eveniet quisquam veritatis temporibus in magnam architecto tempore, eligendi, cum maxime facilis deleniti sapiente! Culpa nisi assumenda temporibus libero. Incidunt possimus aliquam sequi unde totam nobis atque molestiae dolores. Et quidem non quis explicabo, obcaecati quibusdam illo facere eius, recusandae temporibus, magnam voluptates?`
				},
				{
					name: 'capitalmarkets',
					title: 'capital markets',
					id: 5,
					content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi provident maiores quas fuga itaque magnam, numquam labore temporibus. Consequuntur cum quod facilis cupiditate blanditiis cumque nesciunt corrupti exercitationem a rerum temporibus illum, iure nam dolorem libero sapiente ullam earum!`
				},
				{
					name: 'corporate',
					title: 'corporate',
					id: 6,
					content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, natus. Eum facere repellat, culpa nisi similique tempora ut illum asperiores doloribus! Perspiciatis a aliquam totam. Enim omnis harum labore quam sint laboriosam dicta libero adipisci? Dolorem accusantium quidem sint tempore esse dolore in placeat reiciendis doloremque nostrum sit rem minima perferendis ipsa mollitia vero, praesentium repellat incidunt provident soluta cumque eveniet! Adipisci fugit eius quia necessitatibus quaerat et natus ratione, quam eveniet, dignissimos, sed incidunt illum voluptate aperiam porro pariatur consectetur maiores? Voluptates, fuga excepturi sint perspiciatis eum ducimus, aut consectetur assumenda beatae pariatur, odit nostrum ullam est ut quia?`
				},
				{
					name: 'debtrecovery',
					title: 'debt recovery',
					id: 7,
					content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consectetur excepturi minima nobis nisi ea illo eligendi molestias, magni, esse dolorum accusantium optio culpa dolores obcaecati sapiente libero repellat nam consequatur delectus doloribus! Ratione repellendus voluptates assumenda adipisci nam fugiat eligendi, quia eos blanditiis nihil culpa mollitia dolorem ipsa ex, minus sapiente porro. Excepturi tempore iste quos saepe nam necessitatibus tenetur a hic rerum magni, ad doloremque sunt esse vero, doloribus consectetur architecto porro amet iure expedita. Dolore beatae ea fugit exercitationem nesciunt odio eligendi.`
				},
				{
					name: 'insurance',
					title: 'insurance',
					id: 8,
					content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repudiandae dolor quidem nam, doloremque expedita inventore eius repellat ullam deleniti natus placeat, quas accusamus nulla! Excepturi quod perspiciatis quisquam, voluptates corrupti, minima soluta culpa odio sequi quaerat atque tempore omnis optio accusamus. Tenetur maiores porro voluptatibus. Ipsum asperiores deserunt vitae quidem ad magni tempora earum exercitationem aut quo, iusto nobis laudantium eum illo obcaecati qui et pariatur facere quas? Itaque, exercitationem neque!`
				},
				{
					name: 'realestate',
					title: 'real estate',
					id: 9,
					content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sit quas eum porro ipsa, voluptate earum quos laborum ea alias ducimus temporibus aut quaerat! Molestias odit odio quia! Natus, reprehenderit quod, sapiente blanditiis ex placeat corporis porro eius esse odio optio enim dolorem nihil illo sunt suscipit alias tempora ea.`
				},
				{
					name: 'arbitration',
					title: 'arbitration',
					id: 10,
					content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure molestias eos officia, cumque recusandae harum repellendus asperiores similique accusamus amet voluptate a vel fuga hic doloremque expedita autem nesciunt ea fugit eius voluptatibus aspernatur, quae deleniti reprehenderit. Eveniet quisquam veritatis temporibus in magnam architecto tempore, eligendi, cum maxime facilis deleniti sapiente! Culpa nisi assumenda temporibus libero. Incidunt possimus aliquam sequi unde totam nobis atque molestiae dolores. Et quidem non quis explicabo, obcaecati quibusdam illo facere eius, recusandae temporibus, magnam voluptates?`
				},
				{
					name: 'criminallitigation',
					title: 'criminal litigation',
					id: 11,
					content: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, quidem deleniti reprehenderit deserunt repudiandae magni fugit nisi ex error molestias non autem ab ut necessitatibus sunt maiores itaque aspernatur dolorum vero maxime consectetur quam! Tempora, numquam at nulla, distinctio libero praesentium qui delectus dolore, quibusdam molestiae laboriosam dolorem rerum molestias? #[br]`
				},
				{
					name: 'oilngas',
					title: 'oil & gas',
					id: 12,
					content: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae sit quas eum porro ipsa, voluptate earum quos laborum ea alias ducimus temporibus aut quaerat! Molestias odit odio quia! Natus, reprehenderit quod, sapiente blanditiis ex placeat corporis porro eius esse odio optio enim dolorem nihil illo sunt suscipit alias tempora ea.`
				},
			],
		}
	},
}
</script>