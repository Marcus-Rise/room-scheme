<template lang="pug">
    #app
        layout(
            :width="scheme.width"
            :height="scheme.height"
        )
            template(
                v-for="item in scheme.characters"
            )
                choosable(
                    v-if="item.type.name === 'chair'"
                    @click="click(item)"
                )
                    character-cmpt(
                        :character="item"
                        :key="item.id"
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
    import Layout from "@/components/Layout.vue";
    import CharacterCmpt from "@/components/Character/CharacterCmpt.vue";
    import Choosable from "@/components/Choosable.vue";
    import {Character} from "@/models/Character";

    @Component({
        components: {Choosable, CharacterCmpt, Layout}
    })
    export default class extends Vue {
        @Prop() readonly dataScheme!: string;

        scheme: Scheme = new Scheme();

        created() {
            this.scheme = new Scheme(JSON.parse(this.dataScheme) as ISchemeDto);
        }

        click(item: Character) {
            console.log("dawdawd", item.id);
        }
    }
</script>
