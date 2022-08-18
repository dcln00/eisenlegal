<template lang="pug">
div
	utilsBgWrap
	SmallJumbotron
		.smalljumbotext(slot='smalljumbo-title') {{cat.name}}

	section.row
		.col-sm-9
			section#posts.container-fluid
				.articles
					article(v-for='(article) in articles' :key='article.slug')
						.article-inner.d-flex.align-items-center
							nuxt-link(:to="{ name:'blog-slug', params: {slug:article.slug} }")
								.pub-img
									img(:src='require(`~/assets/resources/${article.image}`)')
							.inner-detail
								.pub-cat.section-title {{ article.category[0] }}
								nuxt-link(:to="{ name:'blog-slug', params: {slug:article.slug} }")
									.pub-title {{article.title}}
								.pub-desc {{article.description}}
								nuxt-link(:to="{ name:'blog-slug', params: {slug:article.slug} }")
									.pub-btn Read More

		.col-sm-3
			aside#post-side.px-3
				.aside-box
					.aside-title Categories
					ul
						li.aside-links(v-for='(cats, index) of categories' :key='index') #[nuxt-link(:to="`/blog/category/${cat.slug}`") {{ cats.name }}] 
</template>

<script>
export default {
	async asyncData({ $content, params, error }) {
		try {
			const category = await $content('categories')
				.where({ slug: { $contains: params.category } })
				.limit(1)
				.fetch()

			const cat = category.length > 0 ? category[0] : {}

			const articles = await $content('articles')
				.where({ category: { $contains: cat.name } })
				.sortBy('createdAt', 'asc')
				.fetch()

			const categories = await $content('categories')
			.only(['name', 'description','slug'])
			.sortBy('createdAt', 'asc')
			.fetch()

			return { cat, articles, categories }

		} catch (err) {
			error({
				statusCode: 404,
				message: 'Page could not be found',
			})
		}
	},

	head() {
		return {
			titleTemplate:this.cat.name + ' - %s',
			meta: [
				{ hid: 'description', name: 'description', content: this.cat.description },
				{ hid: 'og:title', property: 'og:title', content: this.cat.name },
				{ hid: 'og:description', property: 'og:description', content: this.cat.description },
				{ hid: 'twitter:title', name: 'twitter:title', content: this.cat.name },
				{ hid: 'twitter:description', name: 'twitter:description', content: this.cat.description }
			],
		}
	}
}
</script>