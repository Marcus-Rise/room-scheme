<template lang="pug">
    component.character(
        :is="type"
        :style="style"
        :class="{'selectable': !!selectable}"
        v-on="$listeners"
    )
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {Character} from "@/models/Character";
    import SimpleCharacter from "@/components/Character/SimpleCharacter.vue";
    import ChairCharacter from "@/components/Character/ChairCharacter.vue";

    @Component
    export default class CharacterCmpt extends Vue {
        @Prop() readonly character!: Character;
        @Prop({default: false}) readonly selectable!: boolean;

        get type(): Function {
            let type: Function;

            switch (this.character.type.name) {
                case "chair":
                    type = ChairCharacter;
                    break;
                case "simple":
                default:
                    type = SimpleCharacter;
                    break;
            }

            return type;
        }

        get style() {
            return {
                left: `${this.character.x}px`,
                bottom: `${this.character.y}px`,
                transform: `rotate(${this.character.angle}deg)`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .character {
        position: absolute;
    }

    .selectable:hover {
        box-shadow: 0 0 13px 5px rgba(0, 0, 0, 0.38);
        cursor: pointer;
    }
</style>
