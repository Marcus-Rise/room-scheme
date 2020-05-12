<template lang="pug">
    .btn-group
        slot(name="activator" :on="open")

        .dropdown-menu(
            v-show="show"
            @mouseleave="close"
            @click="close"
        )
            slot

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component
    export default class Dropdown extends Vue {
        show = false

        open() {
            this.show = true;
        }

        close() {
            this.show = false;
        }
    }
</script>

<style lang="scss" scoped>
    .dropdown-menu {
        display: block;
    }
</style>
