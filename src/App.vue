<template lang="pug">
    #app
        layout(
            :style="{width: `${scheme.width}px`, height: `${scheme.height}px`}"
        )
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from "vue-property-decorator";
    import {ISchemeDto, Scheme} from "@/models/Scheme";
    import {Dictionary, IDictionaryDto} from "@/models/Dictionary";
    import Layout from "@/components/Layout.vue";

    @Component({
        components: {Layout}
    })
    export default class extends Vue {
        @Prop() readonly dataScheme!: ISchemeDto;
        @Prop() readonly dataDictionaries!: readonly IDictionaryDto[];

        scheme: Scheme = new Scheme();
        dictionaries: Dictionary[] = [];

        created() {
            this.scheme = new Scheme(this.dataScheme);

            this.dataDictionaries.forEach((i) => {
                this.dictionaries.push(new Dictionary(i));
            });
        }

    }
</script>
