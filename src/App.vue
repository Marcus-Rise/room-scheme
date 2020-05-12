<template lang="pug">
    div
        layout-cmpt(
            v-if="editor === false"
            :width="scheme.width"
            :height="scheme.height"
        )
            character-cmpt(
                v-for="item in scheme.characters"
                :selectable="item.type.name === 'chair'"
                :character="item"
                :key="item.id"
                @chooseChair="$emit('chooseChair', item)"
            )
        editor(
            v-else
            :scheme="scheme"
        )
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import {ISchemeDto, Scheme} from "@/models/Scheme";
    import CharacterCmpt from "@/components/Character/CharacterCmpt.vue";
    import LayoutCmpt from "@/components/LayoutCmpt.vue";

    @Component({
        components: {
            CharacterCmpt,
            LayoutCmpt,
            Editor: () => import(/* webpackChunkName: 'editor' */ "@/components/Editor.vue"),
        }
    })
    export default class App extends Vue {
        @Prop() readonly dataScheme!: string;
        @Prop({default: false}) readonly editor!: boolean;

        scheme: Scheme = new Scheme();

        created() {
            this.scheme = new Scheme(JSON.parse(this.dataScheme) as ISchemeDto);
        }

    }
</script>
