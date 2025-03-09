<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Hero Section -->
        <header>
            <!-- Original Header -->
            <div ref="originalHeader">
                <div class="bg-gradient-to-r from-purple-600 to-blue-600 h-48 sm:h-64"></div>
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="relative -mt-24 pb-4">
                        <div class="flex flex-col items-center">
                            <img
                                class="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                                :src="profileData.image"
                                alt="Profile Picture"
                            />
                            <h1 class="mt-4 text-3xl font-bold text-gray-900">
                                <span>{{ profileData.name }}</span>
                            </h1>
                            <p class="text-gray-600">{{ profileData.title }}</p>
                            <p class="text-gray-500 text-sm">{{ profileData.location }}</p>
                            <div class="mt-4">
                                <!-- Tabs Navigation -->
                                <div class="flex justify-center">
                                    <nav class="flex space-x-2 rounded-lg bg-white p-1 shadow-sm">
                                        <button
                                            v-for="tab in tabs"
                                            :key="tab.id"
                                            @click="activeTab = tab.id"
                                            :class="[
                                                'px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-purple-600 hover:text-white',
                                                activeTab === tab.id
                                                    ? 'bg-purple-600 text-white'
                                                    : 'text-gray-600 hover:text-gray-900'
                                            ]"
                                        >
                                            {{ tab.name }}
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Compact Sticky Header (Shows when original header is out of view) -->
            <div
                class="fixed top-0 left-0 right-0 bg-white shadow-md transform transition-transform duration-300 z-50"
                :class="[!isHeaderVisible ? 'translate-y-0' : '-translate-y-full']"
            >
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <img
                                class="w-10 h-10 rounded-full border-2 border-white shadow"
                                :src="profileData.image"
                                alt="Profile Picture"
                            />
                            <div>
                                <h2 class="text-lg font-semibold text-gray-900">
                                    <span class="hidden sm:inline">{{ profileData.name }}</span>
                                    <span class="sm:hidden">{{ profileData.shortName }}</span>
                                </h2>
                            </div>
                        </div>
                        <nav class="flex space-x-2">
                            <button
                                v-for="tab in tabs"
                                :key="tab.id"
                                @click="activeTab = tab.id"
                                :class="[
                                    'px-3 py-1 rounded-md text-sm font-medium transition-colors',
                                    activeTab === tab.id
                                        ? 'bg-purple-600 text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                ]"
                            >
                                {{ tab.name }}
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content with Tabs -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
            <!-- Tab Content -->
            <div class="bg-white rounded-lg shadow-sm p-6">
                <!-- About Tab -->
                <div v-if="activeTab === 'about'" class="space-y-6">
                    <div class="prose max-w-none">
                        <h2 class="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
                        <p class="text-gray-600 leading-relaxed">
                            {{ profileData.description }}
                        </p>
                        <h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">Experience</h3>
                        <div class="space-y-4">
                            <div
                                v-for="experience in experiences"
                                :key="experience.title"
                                class="border-l-2 border-purple-600 pl-4"
                            >
                                <h4 class="font-bold">{{ experience.title }}</h4>
                                <p class="text-gray-600">{{ experience.duration }}</p>
                                <p class="text-gray-600 mb-4">
                                    {{ experience.description }}
                                </p>
                                <!-- <div class="flex flex-wrap items-center justify-end gap-2 my-3">
                                    <span
                                        v-for="tech in experience.technologies"
                                        :key="tech"
                                        class="inline-flex items-center rounded-full bg-purple-100 text-purple-600 px-3 py-1 text-sm"
                                    >
                                        {{ tech }}
                                    </span>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Skills Tab -->
                <div v-if="activeTab === 'skills'" class="space-y-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div
                            v-for="skill in skills"
                            :key="skill.name"
                            class="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div class="w-8 h-8 rounded-full flex items-center justify-center" :class="skill.bgColor">
                                <Icon :name="skill.icon" class="w-5 h-5 text-white" />
                            </div>
                            <span class="font-medium text-gray-800">{{ skill.name }}</span>
                        </div>
                    </div>
                </div>

                <!-- Portfolio Tab -->
                <div v-if="activeTab === 'projects'" class="space-y-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Projects</h2>
                    <div class="flex flex-col items-center justify-center py-12 px-4 text-center">
                        <div class="bg-purple-50 rounded-lg p-8 max-w-2xl w-full">
                            <Icon name="lucide:construction" class="w-16 h-16 text-purple-600 mx-auto mb-4" />
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
                            <p class="text-gray-600">
                                I'm currently curating my best projects to showcase here. Check back soon to see my
                                work!
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Contact Tab -->
                <div v-if="activeTab === 'contact'" class="space-y-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <div class="grid md:grid-cols-2 gap-6 mb-8">
                        <div class="flex items-center space-x-4">
                            <Icon icon="lucide:mail" class="w-6 h-6 text-purple-600" />
                            <div>
                                <p class="text-sm text-gray-500">Email</p>
                                <a href="mailto:iam.ivyquito@gmail.com" class="text-gray-900 hover:text-purple-600">
                                    {{ profileData.email }}
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <Icon icon="lucide:linkedin" class="w-6 h-6 text-purple-600" />
                            <div>
                                <p class="text-sm text-gray-500">LinkedIn</p>
                                <a
                                    :href="profileData.linkedin"
                                    target="_blank"
                                    class="text-gray-900 hover:text-purple-600"
                                >
                                    iam.ivyquito
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <Icon icon="lucide:map-pin" class="w-6 h-6 text-purple-600" />
                            <div>
                                <p class="text-sm text-gray-500">Location</p>
                                <p class="text-gray-900">{{ profileData.location }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Credits Tab -->
                <div v-if="activeTab === 'credits'" class="space-y-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">Credits & Attributions</h2>
                    <div class="space-y-8">
                        <!-- Avatar -->
                        <div class="bg-gray-50 rounded-lg p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Avatar</h3>
                            <div class="flex items-start space-x-4">
                                <img
                                    :src="profileData.image"
                                    alt="Avatar Preview"
                                    class="w-16 h-16 rounded-full border-2 border-white shadow-md"
                                />
                                <div>
                                    <p class="text-gray-600">
                                        Created using
                                        <a
                                            href="https://www.dicebear.com/styles/adventurer"
                                            target="_blank"
                                            class="text-purple-600 hover:text-purple-700"
                                            >DiceBear Adventurer</a
                                        >
                                        style
                                    </p>
                                    <p class="text-sm text-gray-500 mt-1">
                                        Designed by
                                        <span class="font-medium">Lisa Wischofsky</span>
                                        under
                                        <a
                                            href="https://creativecommons.org/licenses/by/4.0/"
                                            target="_blank"
                                            class="text-purple-600 hover:text-purple-700"
                                            >CC BY 4.0</a
                                        >
                                        license
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Icons -->
                        <div class="bg-gray-50 rounded-lg p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Icons</h3>
                            <div class="space-y-2">
                                <p class="text-gray-600">Icons provided by:</p>
                                <ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
                                    <li>
                                        <a
                                            href="https://lucide.dev/"
                                            target="_blank"
                                            class="text-purple-600 hover:text-purple-700"
                                            >Lucide Icons</a
                                        >
                                        - UI Icons
                                    </li>
                                    <li>
                                        <a
                                            href="https://icon-sets.iconify.design/logos/"
                                            target="_blank"
                                            class="text-purple-600 hover:text-purple-700"
                                            >Iconify Logos</a
                                        >
                                        - Technology Logos
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-gray-200 mt-12 fixed w-screen bottom-0">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <p class="text-center text-gray-500">
                    © {{ new Date().getFullYear() }} {{ profileData.shortName }}. All rights reserved.
                </p>
                <p class="text-center text-xs text-gray-400 mt-1">
                    Avatar by
                    <a href="https://www.dicebear.com/styles/adventurer" class="hover:text-purple-600"
                        >Lisa Wischofsky</a
                    >
                    /
                    <a href="https://creativecommons.org/licenses/by/4.0/" class="hover:text-purple-600">CC BY 4.0</a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue"

    const profileData = {
        name: "Ivy Marie Quito",
        shortName: "IQuito",
        title: "Senior Frontend Developer",
        email: "iam.ivyquito@gmail.com",
        location: "Cebu City, Philippines",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Kingston&flip=true&glasses=variant02,variant04&glassesProbability=100&hair=long06&hairColor=0e0e0e,562306",
        description:
            "Hey there! I am a Senior Frontend Developer with 10 years of experience in the industry, for the last 6 years I have been focusing on specializing in the frontend side of the development. I am a passionate developer who enjoys coding and create user-friendly experiences that helps clients grow their business, reaching more people and making their business more successful.",
        linkedin: "https://www.linkedin.com/in/iam-ivyquito"
    }
    const activeTab = ref("about")
    const isHeaderVisible = ref(true)
    const originalHeader = ref(null)

    onMounted(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                isHeaderVisible.value = entry.isIntersecting
            },
            {
                threshold: 0,
                rootMargin: "-80px 0px 0px 0px" // Adjust this value to control when the sticky header appears
            }
        )

        if (originalHeader.value) {
            observer.observe(originalHeader.value)
        }

        onUnmounted(() => {
            if (originalHeader.value) {
                observer.unobserve(originalHeader.value)
            }
        })
    })

    const tabs = [
        { id: "about", name: "About" },
        // { id: "skills", name: "Skills" },
        { id: "projects", name: "Projects" },
        { id: "contact", name: "Contact" },
        { id: "credits", name: "Credits" }
    ]

    const skills = [
        { name: "Vue.js", icon: "logos:vue", bgColor: "bg-emerald-500" },
        { name: "TypeScript", icon: "logos:typescript-icon", bgColor: "bg-blue-600" },
        { name: "Node.js", icon: "logos:nodejs", bgColor: "bg-green-600" },
        { name: "Javascript", icon: "logos:javascript", bgColor: "bg-yellow-500" },
        { name: "Git", icon: "logos:git-icon", bgColor: "bg-red-500" }
    ]

    const softSkills = [
        { name: "Communication", icon: "logos:communication", bgColor: "bg-purple-500" },
        { name: "Teamwork", icon: "logos:teamwork", bgColor: "bg-blue-500" },
        { name: "Problem Solving", icon: "logos:problem-solving", bgColor: "bg-green-500" },
        { name: "Adaptability", icon: "logos:adaptability", bgColor: "bg-yellow-500" }
    ]

    const experiences = [
        {
            title: "Senior Frontend Developer - Full Scale Teams",
            duration: "2019 - Present",
            description:
                "Worked on multiple projects with different clients, using Vue.js and Node.js. Maintained and updated the technical logic for the optimization of the website. Leveraging the latest technologies and best practices to ensure the website is fast, secure, and scalable.",
            technologies: [
                "Vue",
                "Node",
                "TypeScript",
                "TailwindCSS",
                "JQuery",
                "Pinia",
                "Lodash.js",
                "Github",
                "HTML",
                "S/CSS",
                "Wordpress",
                "Ajax",
                "RestfulAPI",
                "NuxtJS",
                "Vuetify",
                "Bootstrap",
                "RestfulAPI"
            ]
        },
        {
            title: "Senior Frontend Developer/Contractor - ZEA Informatique Inc.",
            duration: "2023 - 2024",
            description:
                "Led the development of a web application reservation system for clients in the hospitality industry. Leveraging the the use of Component libraries like Vuetify that are used to create a consistent and professional look and feel for the website.",
            technologies: [
                "Vue",
                "Vuetify",
                "JavaScript",
                "REST API",
                "JQuery",
                "Pinia",
                "Typescript",
                "S/CSS",
                "Github",
                "Lodash.js",
                "Node.js",
                "HTML"
            ]
        },
        {
            title: "Software Developer - Vauldex Inc",
            duration: "2016 - 2019",
            description:
                "Handled the development of the company's support website and other internal tools. Maintained and updated the website content.",
            technologies: [
                "Vue",
                "JavaScript",
                "HTML5",
                "S/CSS",
                "JQuery",
                "GitLab",
                "Lodash.js",
                "Vuetify",
                "Node.js",
                "PostgreSQL"
            ]
        },
        {
            title: "Wordpress Developer - Proweaver Inc.",
            duration: "2016 - 2016",
            description:
                "Focused on developing & converting complex Xara files into fully responsive WordPress CMS websites.",
            technologies: ["WordPress", "HTML", "JavaScript", "CSS"]
        },
        {
            title: "Junior Software Engineer - IXBase Inc.",
            duration: "2015 - 2016",
            description:
                "Spearheaded the development of a comprehensive POS Web Application System tailored for local small to medium businesses.",
            technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML", "CSS"]
        },
        {
            title: "PHP Developer - OutSourceSG",
            duration: "2015 - 2015",
            description: "Engineered a comprehensive system integrator utilizing PHP, MySQL, and JavaScript.",
            technologies: ["PHP", "HTML", "JavaScript", "MySQL", "Database Structure", "Ajax"]
        }
    ]
</script>
