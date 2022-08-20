<template lang="pug">
section.container#contact-form
	.row
		.col-sm-3.contact-info
			.contact-info-box
				.contact-info-title Address 
				.contact-info-details
					| Eisen & co legal practitioners #[br]
					| 3rd dade link, cantonments accra
			.contact-info-box
				.contact-info-title Phone 
				.contact-info-details
					| +233 (0) 30 254 5454 #[br]
					|  +233 (0) 30 223 2345
			.contact-info-box
				.contact-info-title Email 
				.contact-info-details
					| info@eisenlegal.org #[br]
					
		.col-sm-9.contact-entry
			form.contact-fields
				.row
					.col-sm-6
						input(type='text' required autocomplete='off' placeholder="name")
					.col-sm-6 
						input(type='email' required autocomplete='off' placeholder="email")
				input(type='text' placeholder="subject")
				br
				textarea(name='cftextarea' rows='5' placeholder="Message")
				br
				button(type='submit') SUBMIT
</template>

<script>
export default {}
</script>
