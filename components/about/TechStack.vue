<template>
    <section id="techStack" class="text-gray-700">
        <h2 class="text-lg font-bold">Tech Stack</h2>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
            <div v-for="skill in skills" :key="skill" class="flex items-center space-x-2 px-4 py-2 justify-center">
                <span class="font-medium">{{ skill }}</span>
            </div>
        </div>

        <h2 class="text-lg font-bold">Soft Skills</h2>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div v-for="skill in softSkills" :key="skill" class="flex items-center space-x-2 px-4 py-2 justify-center">
                <span class="font-medium">{{ skill }}</span>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const skills = [
        "Vuejs",
        "Node",
        "TypeScript",
        "JavaScript",
        "JQuery",
        "Ajax",
        "Pinia",
        "Vuex",
        "Lodash.js",
        "HTML",
        "S/CSS",
        "Wordpress",
        "RestfulAPI",
        "NuxtJS",
        "Vuetify",
        "Bootstrap",
        "TailwindCSS",
        "RestfulAPI",
        "Github",
        "Jira",
        "Kanban",
        "Confluence",
        "Agile Methodology",
        "AirBnB Coding standard"
    ]

    const softSkills = [
        "Effective Communication",
        "Teamwork",
        "Adaptability",
        "Problem Solving",
        "Critical Thinking",
        "Accountability",
        "Initiative",
        "Active Listening",
        "Collaboration",
        "Empathy"
    ]
</script>
