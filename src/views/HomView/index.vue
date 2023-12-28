<script setup>

</script>

<template>
    <!-- banner -->
    <el-carousel height="491px">
        <el-carousel-item>
            <div class="h-full flex items-center justify-center" style="background-image: url('https://picsum.photos/1920/556')">
                <div class="text-white w-[56%] pb-[50px]">
                    <p class="font-bold text-[40px] tracking-widest leading-[1.8em]">深耕细分行业数字化建设</p>
                    <p class="text-[25px] font-thin tracking-widest">提供行业定制化解决方案推动科技与行业的演进与发展</p>
                </div>
            </div>
        </el-carousel-item>
        <el-carousel-item>
            <div class="h-full flex items-center justify-center" style="background-image: url('https://picsum.photos/1920/556')">
                <div class="text-white w-[56%] pb-[50px]">
                    <p class="font-bold text-[40px] tracking-widest leading-[1.8em]">深耕细分行业数字化建设</p>
                    <p class="text-[25px] font-thin tracking-widest">提供行业定制化解决方案推动科技与行业的演进与发展</p>
                </div>
            </div>
        </el-carousel-item>
    </el-carousel>
    <!--  banner bottom nav  -->
    <div style="border-bottom: 2px dashed #e8e8e8">
        <div class="home__tip-container safe-w">
            <div class="home__tip-item">
                <img class="tip-item__image" src="https://picsum.photos/200/300" />
                <div class="tip-item__content">
                    <p>信息化咨询</p>
                    <p>10+年的咨询经验</p>
                </div>
            </div>
            <div class="home__tip-item">
                <img class="tip-item__image" src="https://picsum.photos/200/300" />
                <div class="tip-item__content">
                    <p>数据挖掘</p>
                    <p>深入业务场景，拓展数据价值</p>
                </div>
            </div>
            <div class="home__tip-item">
                <img class="tip-item__image" src="https://picsum.photos/200/300" />
                <div class="tip-item__content">
                    <p>助力企业发展</p>
                    <p>切实服务好客户与业务</p>
                </div>
            </div>
        </div>
    </div>
    <!--  解决方案  -->
    <div class="bg-[#f7f7f7] pb-[75px]">
        <div class="safe-w">
            <p class="leading-[4em] text-[35px] text-center text-[#333]">整体解决方案专家</p>
            <div class="flex gap-[31px] justify-center">
                <div class="h-[400px] w-[240px] bg-amber-400 flex flex-col justify-between items-center pt-[74px] pb-[38px] box-border">
                    <img src="" alt="" class="w-[110px] h-[110px] bg-amber-700">
                    <p class="text-white text-[21px]">无人机巡检</p>
                    <button style="background: linear-gradient(90deg, #00A1E7 0%, #72BD51 100%);" class="py-[10px] px-[52px] border-none rounded-full text-white">查康详情</button>
                </div>
                <div class="h-[400px] w-[240px] bg-amber-400 flex flex-col justify-between items-center pt-[74px] pb-[38px] box-border">
                    <img src="" alt="" class="w-[110px] h-[110px] bg-amber-700">
                    <p class="text-white text-[21px]">无人机巡检</p>
                    <button style="background: linear-gradient(90deg, #00A1E7 0%, #72BD51 100%);" class="py-[10px] px-[52px] border-none rounded-full text-white">查康详情</button>
                </div>
                <div class="h-[400px] w-[240px] bg-amber-400 flex flex-col justify-between items-center pt-[74px] pb-[38px] box-border">
                    <img src="" alt="" class="w-[110px] h-[110px] bg-amber-700">
                    <p class="text-white text-[21px]">无人机巡检</p>
                    <button style="background: linear-gradient(90deg, #00A1E7 0%, #72BD51 100%);" class="py-[10px] px-[52px] border-none rounded-full text-white">查康详情</button>
                </div>
                <div class="h-[400px] w-[240px] bg-amber-400 flex flex-col justify-between items-center pt-[74px] pb-[38px] box-border">
                    <img src="" alt="" class="w-[110px] h-[110px] bg-amber-700">
                    <p class="text-white text-[21px]">无人机巡检</p>
                    <button style="background: linear-gradient(90deg, #00A1E7 0%, #72BD51 100%);" class="py-[10px] px-[52px] border-none rounded-full text-white">查康详情</button>
                </div>
            </div>
        </div>
    </div>
    <!-- 客户展示 -->
    <div class="h-[560px] bg-cyan-400">
        123
    </div>
</template>

<style scoped lang="scss">
.home__tip-container {
    @apply h-[97px] overflow-hidden flex justify-center items-center;

    .home__tip-item {
        border: 1px solid #e8e8e8;
        @apply w-[350px] h-full flex justify-center items-center border-b-0 box-border
        hover:-translate-y-1 transition;

        .tip-item__image {
            @apply w-[60px] h-[60px];
        }
        .tip-item__content {
            @apply ml-[30px];

            p:nth-child(1) {
                @apply mb-[10px] text-[#333] font-semibold tracking-wider;
            }
            p:nth-child(2) {
                @apply text-[#777];
            }
        }

        + .home__tip-item {
            @apply border-l-0
        }
    }
}
</style>
