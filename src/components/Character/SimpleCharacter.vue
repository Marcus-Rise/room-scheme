<template lang="pug">
    .simple-character(
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
    .simple-character {
        $size: 50px;

        width: $size;
        height: $size;
        background: red;
    }
</style>
