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
export default {
    name: 'App',
    components: {
        Navbar
    }
}
</script>
