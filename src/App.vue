<template lang="pug">
    #app
        layout(
            :width="scheme.width"
            :height="scheme.height"
        )
            character-cmpt(
                v-for="item in scheme.characters"
                :key="item.id"
                :character="item"
            )
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from "vue-property-decorator";
    import {ISchemeDto, Scheme} from "@/models/Scheme";
    import Layout from "@/components/Layout.vue";
    import CharacterCmpt from "@/components/Character/CharacterCmpt.vue";

    @Component({
        components: {CharacterCmpt, Layout}
    })
    export default class extends Vue {
        @Prop() readonly dataScheme!: string;

        scheme: Scheme = new Scheme();

        created() {
            this.scheme = new Scheme(JSON.parse(this.dataScheme) as ISchemeDto);
        }
    }
</script>
