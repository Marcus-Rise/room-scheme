<template lang="pug">
    .card.layout(
        :style="{width: `${width}px`, height: `${height}px`}"
    )
        slot
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class LayoutCmpt extends Vue {
        @Prop() readonly width!: number;
        @Prop() readonly height!: number;
    }
</script>

<style lang="scss" scoped>
    @import "~bootstrap/scss/functions";
    @import "~bootstrap/scss/variables";
    @import "~bootstrap/scss/mixins";
    @import "~bootstrap/scss/card";

    .layout {
        overflow: auto;
        position: relative;
        padding: 0;
        max-width: 100%;
    }
</style>
