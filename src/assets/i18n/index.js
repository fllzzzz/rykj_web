/**
 * @author Xin-FAS
 */

import en from './en.js'
import zhCn from './zh-cn.js'
import { createI18n } from "vue-i18n";

// 可选择的语言选项
export const localeOptions = [
    {
        name: '简体中文（zh-cn）',
        locale: 'zhCn'
    },
    {
        name: 'English（en）',
        locale: 'en'
    },
]
export default createI18n({
    // legacy: false,
    // globalInjection: true,
    locale: 'zhCn',
    messages: {
        en,
        zhCn
    }
})

