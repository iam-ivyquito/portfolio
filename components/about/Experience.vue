<template>
    <section>
        <header>
            <h2 class="text-xl font-bold mb-4">Experience</h2>
        </header>
        <div class="prose max-w-none">
            <div
                v-for="experience in toListExperience"
                :key="experience.title"
                class="border-l-2 border-purple-600 pl-4"
            >
                <h4 class="font-bold">{{ experience.title }}</h4>
                <p class="">{{ experience.duration }}</p>
                <p class="mb-4">
                    {{ experience.description }}
                </p>
            </div>
            <div class="button-holder text-center">
                <button
                    class="px-4 py-2 text-sm text-gray-700"
                    @click.prevent="showMoreExperience = !showMoreExperience"
                >
                    <Icon
                        v-if="!showMoreExperience"
                        name="lucide:chevrons-down"
                        class="w-6 h-6 text-purple-600 font-bold animate-bounce"
                    />
                    <Icon v-else name="lucide:chevrons-up" class="w-6 h-6 text-purple-600 font-bold" />
                </button>
            </div>

            <!-- <hr class="my-6" />
            <section>
                <h1 class="text-2xl font-bold mb-4">Skills & Expertise</h1>
                <h2 class="text-lg font-bold">Tech Stack</h2>
                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
                    <div
                        v-for="skill in skills"
                        :key="skill"
                        class="flex items-center space-x-2 px-4 py-2 justify-center"
                    >
                        <span class="font-medium">{{ skill }}</span>
                    </div>
                </div>

                <h2 class="text-lg font-bold">Soft Skills</h2>
                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div
                        v-for="skill in softSkills"
                        :key="skill"
                        class="flex items-center space-x-2 px-4 py-2 justify-center"
                    >
                        <span class="font-medium">{{ skill }}</span>
                    </div>
                </div>
            </section> -->
        </div>
    </section>
</template>

<script lang="ts" setup>
    const showMoreExperience = ref(false)
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

    const experiences = [
        {
            title: "Senior Frontend Developer - Full Scale Teams",
            duration: "2019 - Present",
            description:
                "Worked on multiple projects with different clients, using Vue.js and Node.js. Maintained and updated the technical logic for the optimization of the website. Leveraging the latest technologies and best practices to ensure the website is fast, secure, and scalable."
        },
        {
            title: "Senior Frontend Developer/Contractor - ZEA Informatique Inc.",
            duration: "2023 - 2024",
            description:
                "Led the development of a web application reservation system for clients in the hospitality industry. Leveraging the the use of Component libraries like Vuetify that are used to create a consistent and professional look and feel for the website."
        },
        {
            title: "Software Developer - Vauldex Inc",
            duration: "2016 - 2019",
            description:
                "Handled the development of the company's support website and other internal tools. Maintained and updated the website content."
        },
        {
            title: "Wordpress Developer - Proweaver Inc.",
            duration: "2016 - 2016",
            description:
                "Focused on developing & converting complex Xara files into fully responsive WordPress CMS websites."
        },
        {
            title: "Junior Software Engineer - IXBase Inc.",
            duration: "2015 - 2016",
            description:
                "Spearheaded the development of a comprehensive POS Web Application System tailored for local small to medium businesses."
        },
        {
            title: "PHP Developer - OutSourceSG",
            duration: "2015 - 2015",
            description: "Engineered a comprehensive system integrator utilizing PHP, MySQL, and JavaScript."
        }
    ]

    const toListExperience = computed(() => {
        if (showMoreExperience.value) {
            return experiences
        }

        return experiences.slice(0, 3)
    })
</script>
