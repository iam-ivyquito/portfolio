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
                            <h1 class="mt-4 text-3xl font-bold text-gray-900">{{ profileData.name }}</h1>
                            <p class="text-gray-600">{{ profileData.location }}</p>
                            <div class="mt-4 flex space-x-4">
                                <!-- <a
                  href="#"
                  class="text-gray-400 hover:text-purple-600 transform hover:scale-110 transition-all duration-300"
                >
                  <Icon name="lucide:github" class="w-6 h-6" />
                </a>
                <a
                  href="#"
                  class="text-gray-400 hover:text-purple-600 transform hover:scale-110 transition-all duration-300"
                >
                  <Icon name="lucide:twitter" class="w-6 h-6" />
                </a>
              -->
                                <a
                                    href="www.linkedin.com/in/iam-ivyquito"
                                    target="_blank"
                                    class="text-gray-400 hover:text-purple-600 transform hover:scale-110 transition-all duration-300"
                                >
                                    <Icon name="lucide:linkedin" class="w-6 h-6" />
                                </a>
                            </div>
                            <div class="mt-4">
                                <!-- Tabs Navigation -->
                                <div class="flex justify-center">
                                    <nav class="flex space-x-2 rounded-lg bg-white p-1 shadow-sm">
                                        <button
                                            v-for="tab in tabs"
                                            :key="tab.id"
                                            @click="activeTab = tab.id"
                                            :class="[
                                                'px-4 py-2 rounded-md text-sm font-medium transition-colors',
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
                            <h2 class="text-lg font-semibold text-gray-900">{{ profileData.name }}</h2>
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

        <!-- Add spacing for content -->
        <div class="h-8"></div>

        <!-- Main Content with Tabs -->
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                                <p class="text-gray-600">
                                    {{ experience.description }}
                                </p>
                            </div>
                            <!-- <div class="border-l-2 border-purple-600 pl-4">
                               
                            </div>
                            <div class="border-l-2 border-purple-600 pl-4">
                                <h4 class="font-bold">Senior Frontend Developer/Contractor - ZEA Informatique Inc.</h4>
                                <p class="text-gray-600">2023 - 2024</p>
                                <p class="text-gray-600">
                                    Led the development of a web application reservation system for clients in the
                                    hospitality industry.
                                </p>
                            </div> -->
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
                            class="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                        >
                            <div class="flex items-center space-x-2">
                                <div
                                    class="w-8 h-8 rounded-full flex items-center justify-center"
                                    :class="skill.bgColor"
                                >
                                    <Icon :name="skill.icon" class="w-5 h-5 text-white" />
                                </div>
                                <span class="font-medium text-gray-800">{{ skill.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Portfolio Tab -->
                <div v-if="activeTab === 'portfolio'" class="space-y-6">
                    <h2 class="text-2xl font-bold text-gray-900 mb-4">My Projects</h2>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div
                            v-for="project in projects"
                            :key="project.title"
                            class="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
                            <div class="p-4">
                                <h3 class="font-bold text-lg mb-2">{{ project.title }}</h3>
                                <p class="text-gray-600 mb-4">{{ project.description }}</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span
                                        v-for="tech in project.technologies"
                                        :key="tech"
                                        class="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-sm"
                                    >
                                        {{ tech }}
                                    </span>
                                </div>
                                <div class="flex gap-4">
                                    <a
                                        :href="project.github"
                                        class="flex items-center text-gray-600 hover:text-gray-900"
                                    >
                                        <Icon name="lucide:github" class="w-5 h-5 mr-1" />
                                        Code
                                    </a>
                                    <a
                                        :href="project.demo"
                                        class="flex items-center text-purple-600 hover:text-purple-700"
                                    >
                                        <Icon name="lucide:external-link" class="w-5 h-5 mr-1" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
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
                            <Icon name="lucide:map-pin" class="w-6 h-6 text-purple-600" />
                            <div>
                                <p class="text-sm text-gray-500">Location</p>
                                <p class="text-gray-900">{{ profileData.location }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Contact Form -->
                    <form @submit.prevent="handleSubmit" class="space-y-4">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    id="name"
                                    v-model="formData.name"
                                    type="text"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                    required
                                />
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    id="email"
                                    v-model="formData.email"
                                    type="email"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                v-model="formData.message"
                                rows="4"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            class="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-white border-t border-gray-200 mt-12 fixed w-screen bottom-0">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p class="text-center text-gray-500">
                    © {{ new Date().getFullYear() }} {{ profileData.shortName }}. All rights reserved.
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
            "Hey there! I am a Senior Frontend Developer with 10 years of experience in the industry, for the last 6 years I have been focusing on specializing in the frontend side of the development. I am a passionate developer who enjoys coding and create user-friendly experiences that helps clients grow their business, reaching more people and making their business more successful."
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

    const formData = ref({
        name: "",
        email: "",
        message: ""
    })

    const tabs = [
        { id: "about", name: "About" },
        { id: "skills", name: "Skills" },
        { id: "portfolio", name: "Portfolio" },
        { id: "contact", name: "Contact" }
    ]

    const skills = [
        { name: "Vue.js", icon: "logos:vue", bgColor: "bg-emerald-500" },
        { name: "TypeScript", icon: "logos:typescript-icon", bgColor: "bg-blue-600" },
        { name: "Node.js", icon: "logos:nodejs", bgColor: "bg-green-600" },
        { name: "Javascript", icon: "logos:javascript", bgColor: "bg-yellow-500" },
        { name: "Git", icon: "logos:git-icon", bgColor: "bg-red-500" }
    ]

    const projects = [
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory management.",
            image: "https://picsum.photos/seed/project1/800/600",
            technologies: ["Vue.js", "Node.js", "MongoDB"],
            github: "#",
            demo: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management tool with real-time updates.",
            image: "https://picsum.photos/seed/project2/800/600",
            technologies: ["React", "Firebase", "Tailwind"],
            github: "#",
            demo: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A weather forecasting application with interactive maps.",
            image: "https://picsum.photos/seed/project3/800/600",
            technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
            github: "#",
            demo: "#"
        },
        {
            title: "Social Media Analytics",
            description: "Analytics dashboard for social media performance tracking.",
            image: "https://picsum.photos/seed/project4/800/600",
            technologies: ["Nuxt.js", "Python", "PostgreSQL"],
            github: "#",
            demo: "#"
        },
        {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution with real-time inventory management.",
            image: "https://picsum.photos/seed/project1/800/600",
            technologies: ["Vue.js", "Node.js", "MongoDB"],
            github: "#",
            demo: "#"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management tool with real-time updates.",
            image: "https://picsum.photos/seed/project2/800/600",
            technologies: ["React", "Firebase", "Tailwind"],
            github: "#",
            demo: "#"
        },
        {
            title: "Weather Dashboard",
            description: "A weather forecasting application with interactive maps.",
            image: "https://picsum.photos/seed/project3/800/600",
            technologies: ["Vue.js", "OpenWeather API", "Chart.js"],
            github: "#",
            demo: "#"
        },
        {
            title: "Social Media Analytics",
            description: "Analytics dashboard for social media performance tracking.",
            image: "https://picsum.photos/seed/project4/800/600",
            technologies: ["Nuxt.js", "Python", "PostgreSQL"],
            github: "#",
            demo: "#"
        }
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
                "Led the development of a web application reservation system for clients in the hospitality industry."
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
            description: "-"
        },
        {
            title: "Junior Software Engineer - IXBase Inc.",
            duration: "2015 - 2016",
            description: "-"
        },
        {
            title: "PHP Developer - OutSourceSG",
            duration: "2015 - 2015",
            description: "-"
        }
    ]

    const handleSubmit = () => {
        // Handle form submission
        console.log("Form submitted:", formData.value)
        // Reset form
        formData.value = {
            name: "",
            email: "",
            message: ""
        }
    }
</script>
