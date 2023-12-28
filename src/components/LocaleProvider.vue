<script setup>
import { ElConfigProvider } from "element-plus";
import { provide, reactive, ref } from "vue";
import i18n from "@/assets/i18n/index.js";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'


const locale = ref(zhCn)

const localeList = reactive({
    'zhCn': zhCn,
    'en': en,
})
const setLocale = newLocale => {
    // 设置element显示语言和i8n语言
    locale.value = localeList[newLocale]
    i18n.global.locale = newLocale
}
// 注入一个全局修改语言事件
provide('app-provide', {
    setLocale
})
</script>

<template>
    <el-config-provider :locale="locale">
        <slot />
    </el-config-provider>
</template>

<style scoped lang="scss">

</style>
