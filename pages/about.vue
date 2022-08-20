<template lang="pug">
div
	utilsBgWrap
	Jumbotron(style='margin-bottom:0;')
		.hero-box(slot='jumbo-img') #[img(:src='jumboPhoto')]
		.section-title(slot="jumbo-title") {{ title }}
		h1(slot='jumbo-heading' v-html='heading')
		p(slot="jumbo-par")
			| One of Ghana's prominent legal firms is Eisen & Co. Since 2003, the only purpose of our existence has been to provide high-quality legal services to clients all over the world. Eisen & Co. is committed to providing business clients, including both people and governmental organizations, with thoughtful legal solutions that cut across disciplines, industries, and sectors. #[br]#[br]

			.d-none.d-sm-none.d-md-none.d-lg-flex
				| We adhere to all of the requirements of ISO 9001, notably those that relate to data protection, to guarantee the quality of services provided to both our domestic and international clients.#[br]#[br]
				| We are devoted to providing solutions and are driven by a genuine desire for excellence. We have experience in a number of important subject areas, including litigation, arbitration, corporate, commercial law, real estate, property and conveyance, family law, debt recovery, banking, and insurance. 
	ValuesAbout
	TeamAbout
</template>

<script>
import jumboPhoto from '~/assets/images/court.jpg'

export default {
  name: 'AboutPage',
  head: {
    titleTemplate: 'About - %s',
  },
  data() {
    return {
      title: 'Who we are',
      heading: 'Eisen & Co., is one of <br>the leading law firms in Ghana.',
      jumboPhoto,
    }
  },
}
</script>
