<template lang="pug">
div
	section#error.container-fluid.d-flex.justify-content-center.align-items-center
		.box.container.px-0
			img(:src='heroPhoto')
			.errcontent
				h1(v-html='heading')
				p.
					{{paragraph}}
</template>

<script>
import heroPhoto from '~/assets/images/error404.jpg'

export default {
  data() {
    return {
      heroPhoto,
	  heading: 'Error 404',
	  paragraph:
        'The Page you are looking for does not exist.',
    }
  },
}
</script>