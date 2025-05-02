<template>
    <!-- antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950 -->
    <Body class="">
        <Header />
        <!-- <div id="stars" /> -->
        <div id="stars2" />
        <!-- <div id="stars3" /> -->

        <NuxtLayout>
            <NuxtLoadingIndicator />
            <NuxtPage />
        </NuxtLayout>
        <Footer />
    </Body>
</template>

<script lang="ts" setup>
    import Header from "~/components/Header.vue"
    import Footer from "~/components/Footer.vue"
</script>
