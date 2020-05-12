<template lang="pug">
    div
        app(:data-scheme="json")
        app(:data-scheme="json" editor)
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import data from "./data.json";
    import App from "@/App.vue";

    @Component({
        components: {
            App,
        }
    })
    export default class AppWrapper extends Vue {
        get json(): string {
            return JSON.stringify(data);
        }
    }
</script>
