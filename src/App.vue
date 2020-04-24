<template lang="pug">
    #app
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from "vue-property-decorator";
    import {Scheme} from "@/models/Scheme";

    @Component
    export default class extends Vue {
        @Prop({default: () => new Scheme()}) readonly scheme!: Scheme;
        @Prop({default: () => []}) readonly dictionaries!: readonly Dictionary[];
    }
</script>
