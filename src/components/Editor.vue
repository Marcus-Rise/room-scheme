<template lang="pug">
    layout-cmpt(
        :width="scheme.width"
        :height="scheme.height"
    )
        character-cmpt(
            v-for="item in scheme.characters"
            :selectable="!selectedId"
            :transparent="!!selectedId && selectedId !== item.id"
            :character="item"
            :key="item.id"
            @click.native="select(item)"
        )
            move-character(
                v-if="selectedId === item.id"
                @rotate-left="item.angle--"
                @rotate-right="item.angle++"
            )

</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Scheme} from "@/models/Scheme";
    import CharacterCmpt from "@/components/Character/CharacterCmpt.vue";
    import LayoutCmpt from "@/components/LayoutCmpt.vue";
    import {Character} from "@/models/Character";
    import MoveCharacter from "@/components/MoveCharacter.vue";
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

    Vue.component('fa', FontAwesomeIcon);

    @Component({
        components: {MoveCharacter, LayoutCmpt, CharacterCmpt}
    })
    export default class Editor extends Vue {
        @Prop() readonly scheme!: Scheme;

        selectedId = "";

        select(item: Character): void {
            this.selectedId = item.id;
        }
    }
</script>
