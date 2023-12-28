<script setup>
import { RouterView } from "vue-router";
import TopNav from "@/components/TopNav.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
    <div>
        <TopNav />
        <RouterView />
        <PageFooter />
    </div>
</template>

<style scoped>

</style>
