<script setup>
import ScrollText from "@/components/ScrollText.vue";
import { ArrowDown } from '@element-plus/icons-vue'
import i18n, { localeOptions } from '@/assets/i18n'
import { inject } from "vue";

const { setLocale } = inject('app-provide')
</script>

<template>
    <div class="bg-white">
        <div class="flex items-center justify-between safe-w">
            <!-- 左侧logo -->
            <image src="" class="bg-amber-300 w-[120px] h-[64px]"/>
            <!-- 右侧导航 -->
            <nav class="top-nav__list h-[64px]">
                <li class="scroll-text__on">
                    <ScrollText path="/home" text="home" />
                </li>
                <li class="scroll-text__on">
                    <el-dropdown class="h-full w-full">
                        <div class="flex items-center">
                            <ScrollText path="/home1" text="solution" />
                            <el-icon class="ml-[7px]">
                                <arrow-down />
                            </el-icon>
                        </div>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>选项一</el-dropdown-item>
                                <el-dropdown-item>选项二</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </li>
                <li class="scroll-text__on">
                    <ScrollText path="/home2" text="consultation" />
                </li>
                <li class="scroll-text__on">
                    <ScrollText path="/home3" text="about" />
                </li>
                <li style="padding: 0"><el-divider direction="vertical" /></li>
                <li>
                    <el-dropdown class="cursor-pointer">
                        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-v-12008bb2=""><path fill="currentColor" d="m18.5 10l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16.5 10h2zM10 2v2h6v2h-1.968a18.222 18.222 0 0 1-3.62 6.301a14.864 14.864 0 0 0 2.336 1.707l-.751 1.878A17.015 17.015 0 0 1 9 13.725a16.676 16.676 0 0 1-6.201 3.548l-.536-1.929a14.7 14.7 0 0 0 5.327-3.042A18.078 18.078 0 0 1 4.767 8h2.24A16.032 16.032 0 0 0 9 10.877a16.165 16.165 0 0 0 2.91-4.876L2 6V4h6V2h2zm7.5 10.885L16.253 16h2.492L17.5 12.885z"></path></svg>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :disabled="item.locale === $i18n.locale" @click="setLocale(item.locale)" v-for="item of localeOptions" :key="item.locale">
                                    {{ item.name }}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </li>
            </nav>
        </div>
    </div>
</template>

<style scoped lang="scss">
.top-nav__list {
    @apply flex;

    li {
        @apply px-[40px] flex items-center;
    }
}
</style>
