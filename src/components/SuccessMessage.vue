<template>

    <div class="daisy-card bg-app-white">
        <div class="daisy-card-body text-app-darkNavy gap-8">
            <div class="grow flex flex-col items-start justify-center gap-8">
                <img src="/src/assets/images/icon-success.svg" alt="">
                <div class="daisy-card-title app-text-heading">Thanks for subscribing!</div>
                <div>
                    A confirmation email has been sent to <span class="font-bold">{{ emailAddress }}</span>.
                    Please open it and click the button inside to confirm your subscription.
                </div>
            </div>
            <div class="daisy-card-actions">
                <button class="app-button w-full"
                @click="dissmissMessage">
                    Dismiss message
                </button>
            </div>
        </div>

    </div>


</template>

<script>
export default {
    emits: ['dissmissMessage'],
    props: {
        emailAddress: {
            type: String,
            required: true
        }
    },
    methods: {
        dissmissMessage() {
            this.$emit('dissmissMessage')
        }
    }
}
</script>