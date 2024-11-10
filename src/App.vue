<template>
    <div class="flex flex-col gap-4 min-h-screen min-w-[320px] bg-app-paleNavy items-center">
        <main class="flex flex-col grow
        items-center justify-center
        mobile:p-4 mobile:container
        ">
            <SuccessMessage v-if="isSubscribed" 
            @dissmissMessage="dissmissMessage" 
            :emailAddress="emailAddress"
            class="max-mobile:grow max-mobile:rounded-none"
            />
            <SignUpForm v-else @subscribe="subscribe"
            class="max-mobile:grow max-mobile:rounded-none"
            />
        </main>

        <footer>
            <Attribution />
        </footer>
    </div>
</template>
<script>
import Attribution from './components/Attribution.vue';
import SignUpForm from './components/SignUpForm.vue'
import SuccessMessage from './components/SuccessMessage.vue';
export default {
    components: {
        Attribution,
        SignUpForm,
        SuccessMessage
    },
    data() {
        return {
            isSubscribed: false,
            emailAddress: ''
        }
    },
    methods: {
        subscribe(emailAddress) {
            this.emailAddress = emailAddress;
            this.isSubscribed = true;
        },
        dissmissMessage() {
            this.isSubscribed = false;
        }
    }
}
</script>