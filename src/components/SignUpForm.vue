<template>
    <div class="daisy-card bg-app-white desktop:daisy-card-side desktop:p-6 desktop:items-center desktop:gap-6 desktop:max-w-[930px]">
        <figure class="desktop:order-last desktop:flex-1">
            <img v-if="isDesktop" class="w-full" src="/src/assets/images/illustration-sign-up-desktop.svg" alt="">
            <img v-else class="w-full" src="/src/assets/images/illustration-sign-up-mobile.svg" alt="">
        </figure>
        <div class="daisy-card-body text-app-darkNavy desktop:flex-1">
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
                    <div class="flex justify-between w-full app-body-small gap-4">
                        <span class=" text-nowrap">Email address</span>
                        <span aria-live="polite" v-if="emailError" class="text-app-vermellion break-all">{{ emailError }}</span>
                    </div>
                    <input name="emailAddr" type="email" placeholder="email@company.com" @input="emailError=null"  @invalid.prevent="invalidEmail"
                        :class="['daisy-input text-app-grey app-text-body border-app-grey border-opacity-25 w-full placeholder:text-opacity-25',
                        emailError && 'border-app-vermellion text-app-vermellion bg-app-vermellion/15']"
                        required>
                </label>
                <div class="daisy-card-actions"><button type="submit" class="app-button w-full">
                        Subscribe to monthly
                        newsletter</button></div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    inject: ['isDesktop'],
    emits: ['subscribe'],
    data() {
        return {
            emailError: ''
        }
    },  
    methods: {
        invalidEmail(e) {
            this.emailError = e.target.validationMessage
        },
        submitEmail(e) {
            const data = new FormData(e.target)
            this.$emit('subscribe', data.get('emailAddr'))
        }
    },
}
</script>
