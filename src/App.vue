<template lang="pug">
    #app
        layout
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from "vue-property-decorator";
    import {Scheme} from "@/models/Scheme";
    import {Dictionary} from "@/models/Dictionary";
    import Layout from "@/components/Layout.vue";

    @Component({
        components: {Layout}
    })
    export default class extends Vue {
        @Prop({default: () => new Scheme()}) readonly scheme!: Scheme;
        @Prop({default: () => []}) readonly dictionaries!: readonly Dictionary[];
    }
</script>
