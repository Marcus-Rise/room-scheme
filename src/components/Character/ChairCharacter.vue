<template lang="pug">
    .chair-character
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class ChairCharacter extends Vue {
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
