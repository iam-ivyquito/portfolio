<template>
    <section>
        <div class="max-w-none">
            <!-- <div
                v-for="experience in toListExperience"
                :key="experience.title"
                class="border-l-2 border-purple-600 pl-4 mb-3"
            >
                <div class="grid grid-cols-1 sm:grid-cols-[1fr_100px] item-center justify-between">
                    <p class="grid grid-cols-1 lg:flex gap-0 lg:gap-2">
                        <span class="text-xl font-bold text-gray-800">{{ experience.title }}</span>
                        <span class="text-lg text-gray-600">{{ experience.company }}</span>
                    </p>
                    <p class="text-sm text-gray-500">{{ experience.duration }}</p>
                </div>
                <p class="py-3 text-sm text-gray-500">
                    {{ experience.description }}
                </p>
            </div> -->

            <ol class="relative border-s border-gray-200 dark:border-blue-600">
                <li v-for="experience in toListExperience" :key="experience.title" class="mb-4 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-purple-600 dark:bg-purple-600"
                    />
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {{ experience.duration }}
                    </time>
                    <template class="grid grid-cols-1 lg:flex gap-0 lg:gap-2">
                        <h3 class="text-xl font-bold text-gray-800">{{ experience.title }}</h3>
                        <p class="text-lg text-gray-600">{{ experience.company }}</p>
                    </template>
                    <p class="py-3 text-sm text-gray-500">
                        {{ experience.description }}
                    </p>
                    <!-- <a
                        href="#"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >Learn more
                        <svg
                            class="w-3 h-3 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            /></svg
                    ></a> -->
                </li>
                <!-- <li class="mb-10 ms-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                        >March 2022</time
                    >
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        All of the pages and components are first designed in Figma and we keep a parity between the two
                        versions even as we update the project.
                    </p>
                </li>
                <li class="ms-4">
                    <div
                        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    ></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                        >April 2022</time
                    >
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        E-Commerce UI code in Tailwind CSS
                    </h3>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </p>
                </li> -->
            </ol>
        </div>
    </section>
</template>

<script lang="ts" setup>
    const showMoreExperience = ref(true)

    const experiences = [
        {
            company: "Full Scale Teams (Cebu City, PH)",
            title: "Senior Frontend Developer",
            duration: "2019 - Present",
            description:
                "Worked on multiple projects with different clients, using Vue.js and Node.js. Maintained and updated the technical logic for the optimization of the website. Leveraging the latest technologies and best practices to ensure the website is fast, secure, and scalable."
        },
        {
            company: "ZEA Informatique Inc. (Québec, CA)",
            title: "Senior Frontend Developer/Contractor",
            duration: "2023 - 2024",
            description:
                "Led the development of a web application reservation system for clients in the hospitality industry. Leveraging the the use of Component libraries like Vuetify that are used to create a consistent and professional look and feel for the website."
        },
        {
            company: "Vauldex Inc (Cebu City, PH)",
            title: "Software Developer",
            duration: "2016 - 2019",
            description:
                "Handled the development of the company's support website and other internal tools. Maintained and updated the website content."
        },
        {
            company: "Proweaver Inc. (Cebu City, PH)",
            title: "Wordpress Developer",
            duration: "2016 - 2016",
            description:
                "Focused on developing & converting complex Xara files into fully responsive WordPress CMS websites."
        },
        {
            company: "IXBase Inc. (Cebu City, PH)",
            title: "Junior Software Engineer",
            duration: "2015 - 2016",
            description:
                "Spearheaded the development of a comprehensive POS Web Application System tailored for local small to medium businesses."
        },
        {
            company: "OutSourceSG (Cebu City, PH)",
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
