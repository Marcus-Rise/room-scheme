<template lang="pug">
    div
        app(
            :data-scheme="json"
            @chooseChair="chooseChair"
        )
        app(
            :data-scheme="json"
            editor
        )
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import data from "./data.json";
    import App from "@/App.vue";
    import {Character} from "@/models/Character";

    @Component({
        components: {
            App,
        }
    })
    export default class AppWrapper extends Vue {
        get json(): string {
            return JSON.stringify(data);
        }

        chooseChair(item: Character) {
            console.log(item);
        }
    }
</script>
