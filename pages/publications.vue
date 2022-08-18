<template lang="pug">
div
	utilsBgWrap
	Jumbotron
		.hero-box(slot='jumbo-img') #[img(:src='jumboPhoto')]
		.section-title(slot="jumbo-title") {{ title }}
		h1(slot='jumbo-heading') {{heading}}
	
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
						li.aside-links(v-for='(cat, index) of category' :key='index') #[nuxt-link(:to="`/blog/category/${cat.slug}`") {{ cat.name }}] 
</template>

<script>
import jumboPhoto from '~/assets/images/publications.jpg';

export default {
    name: "PublicationsPage",
    head: {
        titleTemplate: "Publications - %s",
    },
    data() {
        return {
			title: "Blog",
			heading: 'Publications',
            jumboPhoto,
        }
    },
	async asyncData({ $content, params }) {
		const articles = await $content('articles', params.slug)
			.only(['title', 'description', 'image', 'slug', 'category'])
			.sortBy('createdAt', 'desc')
			.fetch()

		const category = await $content('categories')
			.only(['name', 'description','slug'])
			.sortBy('createdAt', 'asc')
			.fetch()

		return { articles, category }
	},
}
</script>