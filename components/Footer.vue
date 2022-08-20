<template lang="pug">
footer.container-fluid 
    .inner-footer.container.d-flex.justify-content-center.align-items-center
        .logo #[img(:src='logo')]
        p.
            We are devoted to providing solutions and are driven by a genuine desire for excellence. We have experience in a number of important professional areas, including litigation, arbitration, corporate, commercial, real estate, property and conveyance, family law, debt recovery, banking, and insurance. 

    .container.footer-menu
        .row
            .col-sm-6
                .footer-menu-title Address
                .address.
                    Eisen & co legal practitioners #[br]
                    3rd dade link, cantonments accra #[br]
                    #[br]#[br]
                    info@eisenlegal.org #[br]
                    +233 (0) 30 254 5454 | +233 (0) 30 223 2345
            .col-sm-3.col-6
                .footer-menu-title Services
                ul  
                    li(v-for='item in services' :key='item.service') {{ item.service }}
            .col-sm-3.col-6
                .footer-menu-title {{footerMenuTitle}}
                .working-hrs.
                    monday - friday 08.00AM - 09.00pm #[br]
                    saturdays and public holidays - #[br]
                    on appointment
                .footer-contact 
                    NuxtLink(to='/contact') Contact Us

    .footer-details
        .copyright Copyright © Eisen & Co
        .credits Developed and built by Nii Aryeh x 22 Ayvas  
</template>

<script>
import logo from '~/assets/images/logo.svg'
export default {
  name: 'FooterSection',
  data() {
    return {
      footerMenuTitle: 'Working Hours',
      logo,
      services: [
        { service: 'Company Secretarial Services' },
        { service: 'Registration of trademark, etc.' },
        { service: 'Investment Consultants' },
        { service: 'Arbitration and Mediation ' },
        { service: 'Property Consultants ' },
        { service: 'Notary Public' },
      ],
    }
  },
}
</script>
