import getRoutes from './utils/getRoutes';

const main_base_URL =  'https://eisenlegal.vercel.app';

export default {
  head: {
    title: 'Eisen & Co - Legal Practitioners',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Best &seasoned lawyers with over 25 years experience. Our work spans across key practice areas such as litigation, arbitration, corporate, commercial law, real estate, property and conveyance, family law practice, debt recovery, banking and insurance.  LEARN MORE Follow Us Follow Us ABOUT US passion for excellence We are driven by a deep passion for excellence' },
      { hid:'keywords', name:'keywords', content:'lawyer, court, attournet, legal, litigation, solicitor, law, prosecutor, statutory, barrister, counsel, family law, lawsuit, civil law, law firm, corporate law, tax law, bankruptcy law, ghana, accra, international,'},
      //og
      { hid:'og:locale', property:'og:locale', content:'en_US'},
      { hid:'og:title', property:'og:title', content:'Eisen & Co'},
      { hid:'og:type', property:'og:type', content:'website'},
      { hid:'og:url', property:'og:url', content:''},
      { hid:'og:image', property:'og:image', content:''},
      { hid:'og:description', property:'og:locale', content:'Best &seasoned lawyers with over 25 years experience. Our work spans across key practice areas such as litigation, arbitration, corporate, commercial law, real estate, property and conveyance, family law practice, debt recovery, banking and insurance.  LEARN MORE Follow Us Follow Us ABOUT US passion for excellence We are driven by a deep passion for excellence'},
      { hid:'og:site_name', property:'og:site_name', content:'Eisen & Co'},
      { hid:'og:image:alt', property:'og:image:alt', content:''},
      //tc
      { hid:'twitter:card', property:'twitter:card', content:'summary'},
      { hid:'twitter:site', property:'twitter:site', content:''},
      { hid:'twitter:title', property:'twitter:title', content:'Eisen & Co'},
      { hid:'twitter:description', property:'twitter:description', content:'Best &seasoned lawyers with over 25 years experience. Our work spans across key practice areas such as litigation, arbitration, corporate, commercial law, real estate, property and conveyance, family law practice, debt recovery, banking and insurance.  LEARN MORE Follow Us Follow Us ABOUT US passion for excellence We are driven by a deep passion for excellence'},
      { hid:'twitter:image', property:'twitter:image', content:''},
      { hid:'twitter:image:alt', property:'twitter:image', content:''},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }
    ],
    script: [
      {src: 'https://use.fontawesome.com/7e475b8521.js'},
	  {src: '~/plugins/main.js', body: true}
    ]
  },

  css: [
	'bootstrap/scss/bootstrap.scss',
    '~/assets/style/style.scss',
  ],

  plugins: [
	{ src: '~/plugins/bootstrap', ssr: false },
  ],

  components: true,

  buildModules: [
    '@vueuse/nuxt',
    'nuxt-purgecss',
	'@nuxtjs/moment',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
	'@nuxtjs/sitemap',
  ],

  axios: {
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {
	fullTextSearchFields: ['title', 'description'],
	
  },

  sitemap: {
	hostname: main_base_URL,
	env: {
        main_base_URL
    },
    routes() {
		return getRoutes();
	  },
  },

  moment: {
    timezone: true,
  },

  build: {
	standalone: true,
	extend(config, ctx) {
		config.externals = [
		  {
			encoding: 'encoding',
		  },
		]
	  },
  }
}
