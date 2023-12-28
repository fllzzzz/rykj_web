/**
 * @author Xin-FAS
 */

/**
 * @author Xin-FAS
 */

    // 初始化所在元素
const pNodeInit = (el, isAbs) => {
        if (!isAbs) el.style.position = 'relative'
        el.style.overflow = 'hidden'
        // 兼容iphone
        el.style['webkit-backface-visibility'] = 'hidden'
        el.style['-webkit-transform'] = 'translate3d(0, 0, 0)'
    }
// 创建/修改涟漪元素
const emitRippleNode = (color, target) => {
    if (!target) {
        target = document.createElement('span')
        target.className = 'ripple'
    }
    target.style.background = `radial-gradient(ellipse 50% 50% at 50% 50%, ${color || 'rgba(255,255,255,.8)'} 80%,rgba(0,0,0,0) 100%)`
    return target
}

const listenerClick = () => {
    // 监听事件
    let time
    const start = event => {
        if (time) return
        const rippleNode = event.target.querySelector('span[class="ripple"]')
        rippleNode.style.left = event.offsetX + 'px'
        rippleNode.style.top = event.offsetY + 'px'
        // 得到最大扩散的半径，开始扩散
        const maxLen = Math.max(event.target.clientHeight, event.target.clientWidth)
        rippleNode.style.width = maxLen * 2 + 'px'
        rippleNode.style.height = maxLen * 2 + 'px'
        rippleNode.style.display = 'block'
        // 简单节流，让600毫秒内只执行一次
        time = setTimeout(() => {
            rippleNode.style.display = 'none'
            time = undefined
        }, 600)
    }
    return start
}

const ripple = {
    mounted (el, { value, modifiers }) {
        // 当前元素初始化
        pNodeInit(el, modifiers.abs)
        // 涟漪元素初始化
        el.appendChild(emitRippleNode(value))
        // 开始监听点击
        el.addEventListener('click', listenerClick())
    },
    unmounted (el) {
        // 取消监听
        el.removeEventListener('click', listenerClick())
        // 移除元素
        el.removeChild(el.querySelector('span[class="ripple"]'))
    },
    updated (el, { value, oldValue }) {
        if (value === oldValue) return
        const rippleNode = el.querySelector('span[class="ripple"]')
        emitRippleNode(value, rippleNode)
    }
}

export default ripple
