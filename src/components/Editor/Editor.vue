<template lang="pug">
    .row
        .col-auto.pr-0(
            v-if="selected"
        )
            move-character-controls(
                :character="selected"
                @delete="deleteItem(selected)"
            )
        .col.pl-0
            layout-cmpt(
                :width="scheme.width"
                :height="scheme.height"
            )
                character-cmpt(
                    v-for="item in scheme.characters"
                    :selectable="!selected"
                    :transparent="!!selected && selected.id !== item.id"
                    :accent="!!selected && selected.id === item.id"
                    :character="item"
                    :key="item.id"
                    @click.native="select(item)"
                )


</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Scheme} from "@/models/Scheme";
    import CharacterCmpt from "@/components/Character/CharacterCmpt.vue";
    import LayoutCmpt from "@/components/LayoutCmpt.vue";
    import {Character} from "@/models/Character";
    import MoveCharacterControls from "@/components/Editor/MoveCharacterControls.vue";
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    Vue.component('fa', FontAwesomeIcon);

    @Component({
        components: {MoveCharacterControls, LayoutCmpt, CharacterCmpt}
    })
    export default class Editor extends Vue {
        @Prop() readonly scheme!: Scheme;

        selected: Character | null = null;

        select(item: Character): void {
            this.selected = item;
        }

        deleteItem(item: Character): void {
            const index = this.scheme.characters.map(i => i.id).indexOf(item.id);

            if (index > -1) {
                this.scheme.characters.splice(index, 1);
            }
        }
    }
</script>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
</style>
