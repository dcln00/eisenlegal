<template lang="pug">
section#contact-map.container-fluid.px-0
	.mapouter
		.gmap_canvas
			iframe#gmap_canvas(src='https://maps.google.com/maps?q=3rd%20dade%20link&t=&z=17&ie=UTF8&iwloc=&output=embed' frameborder='0' scrolling='no' marginheight='0' marginwidth='0')
	.map-details.container
		.row 
			.col-sm-3.map-info
				.contact-info-title Working Hours 
				.contact-info-details
					|monday – friday: 08.00am – 09.00pm #[br]
					|saturdays and public holidays – #[br]
					|on appointment
					br
					br
					| "IN GHANA AND ABROAD, WE SEEK TO SET THE STANDARD FOR EXCELLENCE AND RELIABILITY IN EVERY AREA OF THE LAW".

</template>

<script>
export default {

}
</script>

<style>
.gmap_canvas {
        overflow: hidden;
        background: none !important;
        height: 50vh;
        width: 100%;
      }

.mapouter {
        position: relative;
        text-align: right;
        height: 50vh;
        width: 100%;
      }

#gmap_canvas {
	width: 100%;
	height: 50vh;
}
</style>