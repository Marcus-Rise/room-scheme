<template lang="pug">
    .chair-character(
        :style="{ left: `${x}px`, bottom: `${y}px`, }"
    )
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";

    @Component
    export default class ChairCharacter extends Vue {
        @Prop() x!: number;
        @Prop() y!: number;
        @Prop() angle!: number;
    }
</script>

<style lang="scss" scoped>
    .chair-character {
        $size: 50px;

        width: $size;
        height: $size;
        background: orange;
        border-radius: 100%;
    }
</style>
