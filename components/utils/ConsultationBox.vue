<template lang="pug">
#consultation-box.d-block.justify-content-center.align-items-center.d-sm-block.d-md-block.d-lg-none.mobile
    div {{consultation[0]}}
    hr
    div {{consultation[1]}}
</template>

<script>
export default {
  data() {
    return {
      consultation: ['+233 (0) 30 254 5454', '+233 (0) 30 223 2345'],
    }
  },
}
</script>
