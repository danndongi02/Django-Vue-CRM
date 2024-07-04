<template>
    <div>
        <Navbar />

        <div class="p-12 bg-white dark:bg-gray-900 h-screen max-h-full">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Layout/Navbar.vue'
import axios from 'axios';

export default {
    name: 'App',
    components: {
        Navbar
    },
    beforeCreate() {
        this.$store.commit('initializeStore');

        if (this.$store.state.token) {
            axios.defaults.headers.common['Authorization'] = "Token " + this.$store.state.token
        } else {
            axios.defaults.headers.common['Authorization'] = ""
        }
    },
}
</script>
