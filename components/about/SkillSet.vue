<template>
    <section id="techStack" class="text-gray-700">
        <h2 class="text-lg font-bold">Skills</h2>
        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 mb-6">
            <div
                v-for="skill in skills"
                :key="skill.name"
                class="grid rid-cols-1 place-items-center space-x-2 px-4 py-2 gap-2"
            >
                <img
                    :src="`/svg/${skill.img}`"
                    class="size-[60px] block grayscale hover:grayscale-0 hover:scale-150 transition duration-500 ease-in-out hover:rotate-[360deg]"
                    :alt="skill.atlText"
                />
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
        { name: "Vuejs", img: "vue.svg", altText: "VueJs" },
        { name: "TypeScript", img: "typescript.svg", atlText: "TypeScript" },
        { name: "JavaScript", img: "javascript.svg", atlText: "JavaScript" },
        { name: "JQuery", img: "jquery.svg", atlText: "JQuery" },
        { name: "Pinia", img: "pinia.svg", atlText: "Pinia" },
        { name: "HTML", img: "html.svg", atlText: "HTML" },
        { name: "CSS", img: "css.svg", atlText: "CSS" },
        { name: "SCSS", img: "scss.svg", altText: "SCSS" },
        { name: "Wordpress", img: "wordpress.svg", atlText: "Wordpress" },
        { name: "NuxtJS", img: "nuxt.svg", atlText: "NuxtJS" },
        { name: "Vuetify", img: "vuetify.svg", atlText: "Vuetify" },
        { name: "Bootstrap", img: "boostrap.svg", atlText: "Bootstrap" },
        { name: "TailwindCSS", img: "tailwind.svg", atlText: "TailwindCSS" },
        { name: "Lodash.js", img: "lodash.svg", atlText: "Lodash.js" }
    ]

    //
    // "RestfulAPI",

    // "RestfulAPI",
    // "Github",
    // "Jira",
    //     "Kanban",
    //     "Confluence",
    //     "Agile Methodology",
    //     "AirBnB Coding standard"

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

<style lang="css">
    .js-icon:hover .bg {
        fill: #000000; /* new background color on hover */
    }

    .js-icon:hover .logo {
        fill: #ffffff; /* new logo color on hover */
    }
</style>
