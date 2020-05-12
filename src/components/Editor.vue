<template lang="pug">
    layout-cmpt(
        :width="scheme.width"
        :height="scheme.height"
    )
        character-cmpt(
            v-for="item in scheme.characters"
            selectable
            :character="item"
            :key="item.id"
            @click="select(item)"
        )

</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Scheme} from "@/models/Scheme";
    import CharacterCmpt from "@/components/Character/CharacterCmpt.vue";
    import LayoutCmpt from "@/components/LayoutCmpt.vue";
    import {Character} from "@/models/Character";
    @Component({
        components: {LayoutCmpt, CharacterCmpt}
    })
    export default class Editor extends Vue {
        @Prop() readonly scheme!: Scheme;

        selectedId = "";

        select(item: Character): void {
            this.selectedId = item.id;
        }
    }
</script>
