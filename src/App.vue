<template lang="pug">
    layout-cmpt(
        :width="scheme.width"
        :height="scheme.height"
    )
        template(
            v-for="item in scheme.characters"
        )
            selectable-cmpt(
                v-if="item.type.name === 'chair'"
                :key="item.id"
            )
                character-cmpt(
                    :character="item"
                )

            character-cmpt(
                v-else
                :character="item"
                :key="item.id"
            )
</template>

<script lang="ts">
    import Vue from "vue";
    import {Component, Prop} from "vue-property-decorator";
    import {ISchemeDto, Scheme} from "@/models/Scheme";
    import CharacterCmpt from "@/components/Character/CharacterCmpt.vue";
    import SelectableCmpt from "@/components/SelectableCmpt.vue";
    import LayoutCmpt from "@/components/LayoutCmpt.vue";

    @Component({
        components: {SelectableCmpt, CharacterCmpt, LayoutCmpt}
    })
    export default class App extends Vue {
        @Prop() readonly dataScheme!: string;

        scheme: Scheme = new Scheme();

        created() {
            this.scheme = new Scheme(JSON.parse(this.dataScheme) as ISchemeDto);
        }

    }
</script>
