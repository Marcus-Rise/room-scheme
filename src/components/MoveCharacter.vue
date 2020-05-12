<template lang="pug">
    .move-controlls
        fa.icon.rotate-left(
            :icon="rotateLeftIcon"
            size="lg"
            @click="$emit('rotate-left')"
        )

        fa.icon.rotate-right(
            :icon="rotateRightIcon"
            size="lg"
            @click="$emit('rotate-right')"
        )

</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {faLevelUpAlt, faLevelDownAlt} from '@fortawesome/free-solid-svg-icons'

    @Component
    export default class MoveCharacter extends Vue {
        rotateLeftIcon = faLevelUpAlt;
        rotateRightIcon = faLevelDownAlt;
    }
</script>

<style lang="scss" scoped>
    .move-controlls {
        width: 100%;
        height: 100%;
        z-index: 900;

        .icon {
            position: absolute;
            z-index: 999;


            &:hover {
                cursor: pointer;
            }

            &.rotate-left {
                top: 40px;
                left: 50px;
            }

            &.rotate-right {
                top: 40px;
                left: -13px;

                transform: rotate(180deg);
            }
        }
    }

</style>
