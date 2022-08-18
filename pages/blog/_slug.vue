<template lang="pug">
div
	section#post-hero.container-fluid.px-0
		img(:src='require(`~/assets/resources/${article.image}`)')
		.post-meta.container.d-flex.justify-content-center.align-items-center
			div
				.post-date.section-title {{article.created}}
				.post-title #[h1 {{article.title}}]
				.title-footer.d-flex.justify-content-center
					.post-arthor.section-title {{article.arthor.name }}
					.post-cat.section-title(v-for='(cat, index) in article.category' :key='index') {{ cat }}
	utilsBgWrap
	section#article.container
		article 
			nuxt-content(:document='article')
		.d-flex.justify-content-center.tag-box
			span.tags(v-for='(tag, index) in article.tags' :key='index') {{ tag }}
	
	section#pagination.container-fluid.d-flex.justify-content-between.align-items-center
		.prev.ps-5(v-if='prev')
			p Previous Article
			nuxt-link(:to="{ name: 'blog-slug', params: { slug: prev.slug } }") {{ prev.title }}
		span(v-else) &nbsp;
		.next.pe-5(v-if='next')
			p Next Article
			nuxt-link( :to="{ name: 'blog-slug', params: { slug: next.slug } }") {{ next.title }}
		span(v-else) &nbsp;

</template>

<script>
export default {
	async asyncData({ $content, params, error }) {
		try {
		const article = await $content('articles', params.slug, {deep:true})
		.fetch()

		const [prev, next] = await $content('articles')
			.only(['title', 'slug'])
			.sortBy('createdAt', 'asc')
			.surround(params.slug)
			.fetch()

		return { article, prev, next }
		
		} catch(err) {
			error({
				statusCode: 404,
      			message: 'Page could not be found',
			})
		}
	},

	head() {
		return {
			titleTemplate: this.article.title + ' - %s',
			meta: [
					{ hid: 'description', name: 'description', content: this.article.description},
					{ hid: 'keywords', name: 'keywords', content: this.article.tags},
					{ hid: 'og:title', property: 'og:title', content: this.article.title },
					{ hid: 'og:description', property: 'og:description', content: this.article.description },        
					{ hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
					{ hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
        		],
		}
	}
}
</script>