<template>
    <div class="daisy-card bg-app-white desktop:daisy-card-side desktop:p-6 desktop:items-center">
        <figure class="desktop:order-last">
            <img v-if="isDesktop" class="w-full"
            src="/src/assets/images/illustration-sign-up-desktop.svg"
             alt="">
             <img v-else class="w-full"
            src="/src/assets/images/illustration-sign-up-mobile.svg"
             alt="">
        </figure>
        <div class="daisy-card-body text-app-darkNavy">
            <div class="flex flex-col gap-6">

                <p class="daisy-card-title app-text-heading">Stay updated!</p>
                <p class="app-text-body">Join 60,000+ product managers receiving monthly updates on:</p>

                <p v-for="item in [
                    'Product discovery and building what matters',
                    'Measuring to ensure updates are a success',
                    'And much more!'
                ]" class="flex flex-row flex-nowrap gap-2 items-start app-text-body"><span
                        class="bg-[url(/src/assets/images/icon-list.svg)] bg-cover aspect-square w-[21px]"></span><span>{{
                            item }}</span></p>
            </div>
            <form @submit.prevent="submitEmail" class="flex flex-col gap-6">
                <label class="daisy-label flex flex-col gap-2 items-start">
                    <span class="app-text-body-small">Email address</span>
                    <input name="emailAddr" type="email" placeholder="email@company.com"
                        class="daisy-input text-app-grey app-text-body border-app-grey border-opacity-25 w-full placeholder:text-opacity-25"
                        required>
                </label>
                <div class="daisy-card-actions"><button type="submit"
                        class="daisy-btn text-app-white bg-app-darkNavy w-full">Subscribe to monthly
                        newsletter</button></div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    inject: ['isDesktop'],
    emits: ['subscribe'],
    methods: {
        submitEmail(e) {
            const data=new FormData(e.target)
            this.$emit('subscribe', data.get('emailAddr'))
        }
    },
}
</script>
<style lang="scss" scoped></style>