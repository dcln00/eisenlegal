<template lang="pug">
section#herojumbo.container-fluid
    slot(name='jumbo-img')
    .container.jumbotext.d-flex.align-items-center
        div
            slot(name='jumbo-title')
            slot(name='jumbo-heading')
            slot(name='jumbo-par')
</template>

<script>
export default {
  name: 'JumbotronSection',
}
</script>
