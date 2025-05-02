<template>
    <section id="projects">
        <div class="flex flex-col place-items-center justify-center text-center h-[91vh] mx-6">
            <div class="bg-purple-50 rounded-lg p-8 max-w-2xl w-full z-50">
                <Icon name="lucide:construction" class="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
                <p class="text-gray-600">
                    I'm currently curating my best projects to showcase here. Check back soon to see my work!
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style lang="css" scoped>
    section#projects {
        background: url("/svg/wavey-fingerprint.svg");
    }
    section#projects::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 91vh;
        right: 0;
        background: black;
        z-index: 0;
        opacity: 15%;
    }
</style>
