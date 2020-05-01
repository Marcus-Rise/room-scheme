<template lang="pug">
    .selectable(
        v-on="$listeners"
    )
        slot
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class SelectableCmpt extends Vue {
    }
</script>

<style lang="scss" scoped>
    .selectable > *:hover {
        box-shadow: 0 0 13px 5px rgba(0, 0, 0, 0.38);
        cursor: pointer;
    }
</style>
