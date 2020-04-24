<template lang="pug">
    component(
        :is="type"
        :x="character.x"
        :y="character.y"
        :angle="character.angle"
    )
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Character} from "@/models/Character";
    import SimpleCharacter from "@/components/Character/SimpleCharacter.vue";

    @Component
    export default class CharacterCmpt extends Vue {
        @Prop() readonly character!: Character;

        get type(): Function {
            let type: Function;

            switch (this.character.type.name) {
                case "simple":
                default:
                    type = SimpleCharacter;
                    break;
            }

            return type;
        }
    }
</script>

<style lang="scss" scoped>
    :host {
        position: absolute;
    }
</style>
