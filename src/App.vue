<script setup>
import { RouterView } from 'vue-router'
import LocaleProvider from "@/components/LocaleProvider.vue";

</script>

<template>
    <LocaleProvider>
        <RouterView />
    </LocaleProvider>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
}
a, a:hover, a:focus {
    text-decoration: none;
}
.safe-w {
    @apply w-[1200px] mx-auto;
}
image {
    object-fit: contain;
}
.scroll-text__on:hover, .scroll-text_is-scroll {
    @apply cursor-pointer;
    .scroll-text {
        transition: 500ms !important;
        @apply -translate-y-full;
    }
}
.ripple {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    transform: translate3d(-50%, -50%, 0) scale(0);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    animation: rippleRound .6s ease-in-out;
}

@keyframes rippleRound {
    0% {
        transform: translate3d(-50%, -50%, 0) scale(0);
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        transform: translate3d(-50%, -50%, 0) scale(1);
        opacity: 0;
    }
}
</style>
