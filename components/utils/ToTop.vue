<template lang="pug">
#to-top-button(:class='active' @click='scrollToTop()')
    div Back to top
</template>

<script>
export default {
    data() {
        return {
            active: false,
        }
    },
    beforeMount() {
        window.onscroll = () => {
            this.scrollAction()
        }
    },
    methods: {
        scrollToTop() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        },

        scrollAction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    this.active = 'is-active'
                } else {
                    this.active = ''
                }
        }
    }
}
</script>
