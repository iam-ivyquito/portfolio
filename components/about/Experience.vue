<template>
    <section>
        <div class="prose max-w-none">
            <div
                v-for="experience in toListExperience"
                :key="experience.title"
                class="border-l-2 border-purple-600 pl-4"
            >
                <div class="flex item-center justify-between">
                    <p class="text-xl font-bold text-gray-800">{{ experience.title }}</p>
                    <p class="text-sm text-gray-500">{{ experience.duration }}</p>
                </div>
                <p class="mb-4 text-sm text-gray-500">
                    {{ experience.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const showMoreExperience = ref(true)
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
