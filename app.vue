<template>
    <div class="min-h-screen bg-gray-50 min-w-[450px]">
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
                            <!-- <p class="text-gray-500 text-sm">{{ profileData.location }}</p> -->
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
                            <div class="relative inline-block text-left">
                                <div>
                                    <button
                                        type="button"
                                        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
                                        id="menu-button"
                                        aria-expanded="true"
                                        aria-haspopup="true"
                                    >
                                        <Icon v-if="!openMenu" name="lucide:menu" class="menu-icon w-5 h-5 text-gray" />
                                        <Icon v-else name="lucide:x" class="menu-icon w-5 h-5 text-gray" />
                                    </button>
                                </div>
                                <div
                                    v-if="openMenu"
                                    class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabindex="-1"
                                >
                                    <div class="py-1" role="none">
                                        <button
                                            v-for="tab in tabs"
                                            :key="tab.id"
                                            @click="activeTab = tab.id"
                                            :class="[
                                                'block px-4 py-2 text-sm text-gray-700 w-full text-left',
                                                { 'bg-purple-600 text-white': activeTab === tab.id }
                                            ]"
                                        >
                                            {{ tab.name }}
                                        </button>
                                    </div>
                                </div>
                            </div>
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
                        <h1 class="text-2xl font-bold text-gray-900 mb-4">About Me</h1>
                        <p class="text-gray-600 leading-relaxed" v-html="profileData.description" />

                        <hr class="my-6" />

                        <section>
                            <h1 class="text-2xl font-bold text-gray-900 mb-4">Experience</h1>
                            <div class="space-y-4">
                                <div
                                    v-for="experience in toListExperience"
                                    :key="experience.title"
                                    class="border-l-2 border-purple-600 pl-4"
                                >
                                    <h4 class="font-bold">{{ experience.title }}</h4>
                                    <p class="text-gray-600">{{ experience.duration }}</p>
                                    <p class="text-gray-600 mb-4">
                                        {{ experience.description }}
                                    </p>
                                </div>
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
                        </section>

                        <hr class="my-6" />
                        <section>
                            <h1 class="text-2xl font-bold text-gray-900 mb-4">Skills & Expertise</h1>
                            <h2 class="text-lg font-bold text-gray-900">Tech Stack</h2>
                            <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-6">
                                <div
                                    v-for="skill in skills"
                                    :key="skill"
                                    class="flex items-center space-x-2 px-4 py-2 justify-center"
                                >
                                    <span class="font-medium text-gray-800">{{ skill }}</span>
                                </div>
                            </div>

                            <h2 class="text-lg font-bold text-gray-900">Soft Skills</h2>
                            <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                <div
                                    v-for="skill in softSkills"
                                    :key="skill"
                                    class="flex items-center space-x-2 px-4 py-2 justify-center"
                                >
                                    <span class="font-medium text-gray-800">{{ skill }}</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <!-- Projects Tab -->
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
                            <Icon name="lucide:mail" class="w-6 h-6 text-purple-600" />
                            <div>
                                <p class="text-sm text-gray-500">Email</p>
                                <a href="mailto:iam.ivyquito@gmail.com" class="text-gray-900 hover:text-purple-600">
                                    {{ profileData.email }}
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <Icon name="lucide:linkedin" class="w-6 h-6 text-purple-600" />
                            <div>
                                <p class="text-sm text-gray-500">LinkedIn</p>
                                <a
                                    :href="profileData.linkedin"
                                    target="_blank"
                                    class="text-gray-900 hover:text-purple-600"
                                >
                                    {{ profileData.username }}
                                </a>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <Icon name="lucide:map-pin" class="w-6 h-6 text-purple-600" />
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
                        <div class="bg-gray-50 rounded-lg p-6">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">
                                For my complexity, motivation, design...
                            </h3>
                            <div
                                class="ms-6 block space-x-0 sm:text-left md:flex md:space-x-6 md:text-center items-start"
                            >
                                <div class="w-full my-2">
                                    <span class="text-lg font-bold">God the Father</span>; Provider, Promise keeper
                                </div>
                                <div class="w-full my-2">
                                    <span class="text-lg font-bold">God the Son</span>; my Lord & Savior Jesus Christ
                                </div>
                                <div class="w-full my-2">
                                    <span class="text-lg font-bold">God the Holy Spirit</span>; my Bestfriend
                                </div>
                            </div>
                        </div>

                        <!-- Avatar -->
                        <div class="bg-gray-50 rounded-lg p-6">
                            <div class="flex items-start space-x-4">
                                <img
                                    :src="profileData.image"
                                    alt="Avatar Preview"
                                    class="w-16 h-16 rounded-full border-2 border-white shadow-md"
                                />
                                <div>
                                    <p class="text-gray-600">
                                        Avatar is created using
                                        <a
                                            href="https://www.dicebear.com/styles/adventurer"
                                            target="_blank"
                                            class="text-purple-600 hover:text-purple-700"
                                        >
                                            DiceBear Adventurer
                                        </a>
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
                                        >
                                            CC BY 4.0
                                        </a>
                                        license
                                    </p>
                                </div>
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
            </div>
        </footer>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted, watch, computed } from "vue"

    const profileData = {
        name: "Ivy Marie Quito",
        shortName: "IQuito",
        title: "Senior Frontend Developer",
        username: "iam.ivyquito",
        email: "iam.ivyquito@gmail.com",
        location: "Cebu City, Philippines",
        image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Kingston&flip=true&glasses=variant02,variant04&glassesProbability=100&hair=long06&hairColor=0e0e0e,562306",
        description:
            "Hello! I'm a Senior Frontend Developer with 10 years of experience in the industry. Over the past 6 years, I’ve discovered a true passion for frontend development—crafting intuitive, user-friendly web applications that put people at the center of the experience. I take pride in writing clean, efficient code and enjoy the process of turning ideas into seamless digital solutions. My goal is to help clients grow by creating thoughtful, engaging interfaces that reach more users and support long-term success.<br/><br/>Beyond the screen, my Christian faith shapes how I live, work, and treat others. It’s where I draw my moral compass, my commitment to integrity, and my desire to do work that uplifts and serves.<br/><br/>Lately, I’ve been spending more time on creative pursuits that feel meaningful to me—like writing poetry, capturing moments through photography, and sharing my thoughts through blogging. These creative outlets fuel my passion for building thoughtful digital experiences—feel free to explore the projects tab to see that in action.",
        linkedin: "https://www.linkedin.com/in/iam-ivyquito"
    }
    const activeTab = ref("about")
    const isHeaderVisible = ref(true)
    const originalHeader = ref(null)
    const openMenu = ref(false)
    const showMoreExperience = ref(false)

    const tabs = [
        { id: "about", name: "About" },
        { id: "projects", name: "Projects" },
        { id: "contact", name: "Contact" },
        { id: "credits", name: "Credits" }
    ]

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

    const clickOutBound = e => {
        e.preventDefault()
        const menuIcon = e.target.closest(".menu-icon")
        const menuButton = e.target.closest("#menu-button")

        if (!!menuButton || !!menuIcon) {
            openMenu.value = !openMenu.value
        } else {
            if (openMenu.value) openMenu.value = false
        }
    }

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

        document.querySelector("body").addEventListener("click", clickOutBound)
    })

    onUnmounted(() => {
        if (originalHeader.value) {
            observer.unobserve(originalHeader.value)
        }

        document.querySelector("body").removeEventListener("click", clickOutBound)
    })

    watch(
        () => isHeaderVisible.value,
        isVisible => {
            if (isHeaderVisible.value) {
                openMenu.value = false
            }
        }
    )
</script>
