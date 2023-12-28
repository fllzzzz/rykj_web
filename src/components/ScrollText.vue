<script setup>
import { useRoute } from 'vue-router'

const props = defineProps({
    path: String,
    text: {
        type: String,
        default: 'home'
    },
    color: {
        type: String,
        default: '#4d7aff'
    }
})
const route = useRoute()
</script>

<template>
    <a class="scroll-text__container" :class="{
        'scroll-text_is-scroll': props.path === route.path
    }">
        <span class="scroll-text text-black">{{ $t(props.text) }}</span>
        <span class="scroll-text" :style="{
            color: props.color
        }">{{ $t(props.text) }}</span>
    </a>
</template>

<style scoped lang="scss">
.scroll-text__container {
    @apply h-[1.5em] overflow-hidden text-[16px];
    .scroll-text {
        @apply h-[1.5em] leading-[1.5em] block transition-all duration-0 font-medium;
    }
}
</style>
