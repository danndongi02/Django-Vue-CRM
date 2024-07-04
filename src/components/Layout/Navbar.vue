<template>
    <nav class="bg-gray-300 border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <router-link to="/" class="self-center text-2xl font-semibold whitespace-nowrap hover:text-blue-500 dark:text-white" >Synergi CRM</router-link>

            <div class="flex gap-x-3 space-x-3 md:order-2 md:space-x-0">
                <router-link to="/sign-up" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</router-link>
                <router-link to="/login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>