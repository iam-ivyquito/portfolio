<template>
    <section id="techStack" class="text-gray-700">
        <h2 class="text-lg font-bold">Technologies</h2>
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 mb-6">
            <div
                v-for="skill in skills"
                :key="skill.name"
                class="grid grid-cols-1 place-items-center space-x-2 px-4 py-2 gap-2 group"
            >
                <div class="size-[70px] block bg-cover bg-center" :style="`background-image: url(/svg/${skill.img})`">
                    <div
                        class="bg-black/80 backdrop-grayscale h-[inherit] rounded-lg flex place-items-center group-hover:backdrop-grayscale-0 group-hover:bg-black/0 transition duration-200 ease-in-out"
                    >
                        <p class="top-0 bottom-0 text-white mx-auto text-sm group-hover:hidden">
                            {{ skill.name }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <h2 class="text-lg font-bold">Soft Skills</h2>
        <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            <div
                v-for="skill in softSkills"
                :key="skill"
                class="flex items-center text-center space-x-2 px-4 py-2 justify-center"
            >
                <span class="font-medium">{{ skill }}</span>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const skills = [
        { name: "Vuejs", img: "vue.svg", altText: "VueJs" },
        { name: "JavaScript", img: "javascript.svg", atlText: "JavaScript" },
        { name: "HTML", img: "html.svg", atlText: "HTML" },
        { name: "CSS", img: "css.svg", atlText: "CSS" },
        { name: "SCSS", img: "scss.svg", altText: "SCSS" },
        { name: "Pinia", img: "pinia.svg", atlText: "Pinia" },
        { name: "Lodash.js", img: "lodash.svg", atlText: "Lodash.js" },
        { name: "Vuetify", img: "vuetify.svg", atlText: "Vuetify" },
        { name: "Bootstrap", img: "boostrap.svg", atlText: "Bootstrap" },
        { name: "TailwindCSS", img: "tailwind.svg", atlText: "TailwindCSS" },
        { name: "Wordpress", img: "wordpress.svg", atlText: "Wordpress" },
        { name: "NuxtJS", img: "nuxt.svg", atlText: "NuxtJS" },
        { name: "JQuery", img: "jquery.svg", atlText: "JQuery" },
        { name: "TypeScript", img: "typescript.svg", atlText: "TypeScript" },
        { name: "Git", img: "git.svg", altText: "Git" },
        { name: "Jira", img: "jira.svg", altText: "Jira" },
        { name: "Confluence", img: "confluence.svg", altText: "Confluence" },
        { name: "Kanban", img: "kanban.svg", altText: "Kanban" },
        { name: "Agile", img: "agile.svg", altText: "Agile" }
    ]

    const softSkills = [
        "Effective Communication",
        "Adaptability",
        "Teamwork",
        "Problem Solving",
        "Critical Thinking",
        "Accountability",
        "Initiative",
        "Active Listening",
        "Collaboration",
        "Empathy"
    ]
</script>

<style lang="css"></style>
