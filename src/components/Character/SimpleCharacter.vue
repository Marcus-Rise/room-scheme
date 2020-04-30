<template lang="pug">
    .simple-character
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class SimpleCharacter extends Vue {
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
