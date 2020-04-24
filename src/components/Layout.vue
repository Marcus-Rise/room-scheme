<template lang="pug">
    .card.layout(
        v-bind="$attrs"
        v-on="$listeners"
    )
        .card-body
            slot
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Layout extends Vue {
    }
</script>

<style lang="scss">
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins";
    @import "~bootstrap/scss/card";

    .card-body {
        position: relative;
        padding: 0;
    }

    .layout {
        overflow: auto;
    }
</style>
