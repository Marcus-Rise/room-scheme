<template lang="pug">
    .card.move-controlls
        .btn-group
            button.btn.btn-light(
                @click="character.angle++"
            )
                fa.icon(
                    :icon="rotateRightIcon"
                )
            button.btn.btn-light(
                @click="character.angle--"
            )
                fa.icon(
                    :icon="rotateLeftIcon"
                )
        .btn-group
            button.btn.btn-light(
                @click="character.x--"
            )
                fa.icon(
                    :icon="moveLeftIcon"
                )
            button.btn.btn-light(
                @click="character.x++"
            )
                fa.icon(
                    :icon="moveRightIcon"
                )
        .btn-group
            button.btn.btn-light(
                @click="character.y++"
            )
                fa.icon(
                    :icon="moveUpIcon"
                )
            button.btn.btn-light(
                @click="character.y--"
            )
                fa.icon(
                    :icon="moveDownIcon"
                )
        .input-group
            .input-group-prepend
                span.input-group-text X

            input.form-control(
                type="number"
                v-model="character.x"
            )
        .input-group
            .input-group-prepend
                span.input-group-text Y

            input.form-control(
                type="number"
                v-model="character.y"
            )
        .btn-group
            dropdown
                template(v-slot:activator="{on}")
                    button.btn.btn-light.dropdown-toggle(
                        @click="on"
                    )
                        fa.icon.mr-2(
                            :icon="addIcon"
                        )
                        | Добавить

                .dropdown-item(
                    v-for="item of characterTypes"
                    @click="$emit('add', item)"
                ) {{ item }}
            button.btn.btn-light(
                @click="$emit('delete')"
            )
                fa.icon.mr-2(
                    :icon="deleteIcon"
                )
                | Удалить

</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import {
        faRedoAlt,
        faUndoAlt,
        faChevronLeft,
        faChevronRight,
        faChevronUp,
        faChevronDown,
        faPlus,
        faTrashAlt,
    } from '@fortawesome/free-solid-svg-icons'
    import {Character} from "@/models/Character";
    import Dropdown from "@/components/Editor/Dropdown.vue";
    import {CharacterTypeEnum} from "@/models/CharacterType";

    @Component({
        components: {Dropdown}
    })
    export default class MoveCharacterControls extends Vue {
        @Prop() readonly character!: Character;

        rotateLeftIcon = faUndoAlt;
        rotateRightIcon = faRedoAlt;
        moveLeftIcon = faChevronLeft;
        moveRightIcon = faChevronRight;
        moveUpIcon = faChevronUp;
        moveDownIcon = faChevronDown;
        addIcon = faPlus;
        deleteIcon = faTrashAlt;

        readonly characterTypes: readonly string[] = Object.values(CharacterTypeEnum);
    }
</script>

<style lang="scss" scoped>
    .move-controlls {
        width: 100%;
        height: 100%;
    }

    .icon {
        $size: 15px;

        width: $size;
        height: $size;
    }

</style>
