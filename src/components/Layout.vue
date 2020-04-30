<template lang="pug">
    .card.layout
        .card-body(
            :style="{width: `${width}px`, height: `${height}px`}"
        )
            slot
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class Layout extends Vue {
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

        .card-body {
            position: relative;
            padding: 0;
        }
    }
</style>
