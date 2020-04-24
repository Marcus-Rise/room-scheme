<template lang="pug">
    div(
        :style="{ left: `${x}px`, bottom: `${y}px`, }"
    )
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class SimpleCharacter extends Vue {
        @Prop() x!: number;
        @Prop() y!: number;
        @Prop() angle!: number;
    }
</script>

<style lang="scss" scoped>
    div {
        $size: 50px;

        width: $size;
        height: $size;
        background: red;
    }
</style>
