<template>
    <main class="h-100">
        <section id="introduction" class="py-6 block mx-auto md:max-w-[1248px]">
            <div class="grid grid-cols-2 text-center justify-center items-center min-h-[700px]">
                <div class="lg:max-w-[360px] lg:m-auto">
                    <h2 class="text-2xl text-semibold">Hi there, I'm Ivy Quito!</h2>
                    <h3 class="text-xl">
                        A <span class="highlight">specializing FrontEnd Developer</span> with over 10 years of
                        experience in the IT industry.
                    </h3>
                    <p class="py-3 text-lg flex item-center justify-center">
                        <IconWrapper name="lucide:map-pin-house" icon-class="size-5 mr-2" />
                        Cebu City, PH
                    </p>
                    <div class="social-media flex item-center justify-center gap-4">
                        <NuxtLink
                            v-for="socials in socilaLinks"
                            :key="socials.id"
                            target="_blank"
                            class="text-blue-600 hover:scale-125 transition duration-150 ease-in-out"
                        >
                            <IconWrapper :name="socials.icon" icon-class="size-6 mr-2" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="p-3 bg-slate rounded-full border-b border-grey">
                    <img
                        src="https://images.pexels.com/photos/14935859/pexels-photo-14935859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        class="rounded-full size-[800px] m-auto"
                    />
                </div>
            </div>
        </section>
        <seciton id="experience-techstack" class="block mx-auto md:max-w-[1248px] my-[3rem]">
            <div class="card bg-slate-50 p-6 rounded-lg">
                <header>
                    <nav class="rounded-md bg-gradient-to-r from-purple-600 to-blue-600 p-2">
                        <button
                            v-for="tab in tabs"
                            :key="tab.id"
                            :class="[
                                'px-4 w-[50%] py-2 text-sm transition-colors rounded-md transition-all transition-discrete',
                                activeTab === tab.id ? 'bg-gray-200 text-black' : 'text-white'
                            ]"
                            @click.prevent="handleChangeTab(tab)"
                        >
                            {{ tab.label }}
                        </button>
                    </nav>
                </header>

                <component :is="activeTabComponent" class="my-6 space-y-6" />
            </div>
        </seciton>
    </main>
</template>

<script lang="ts" setup>
    import IconWrapper from "~/components/IconWrapper.vue"
    import TechStack from "~/components/about/TechStack.vue"
    import Experience from "~/components/about/Experience.vue"

    interface Tab {
        id: string
        label: string
        component: Component
    }

    const activeTab = ref("experience")
    const showMoreExperience = ref(false)
    const activeTabComponent = ref<Component>(Experience)
    const tabs = [
        { id: "experience", label: "Experience", component: Experience },
        { id: "techstack", label: "Tech Stack", component: TechStack }
    ] as Tab[]

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

    const socilaLinks = [{ id: "linkedin", icon: "lucide:linkedin", url: "https://www.linkedin.com/in/iam-ivyquito" }]

    const toListExperience = computed(() => {
        if (showMoreExperience.value) {
            return experiences
        }

        return experiences.slice(0, 3)
    })

    const handleChangeTab = (tab: Tab) => {
        console.log(tab, "tabg")
        activeTab.value = tab.id
        activeTabComponent.value = tab.component
    }
</script>

<style lang="css">
    #sidepanel {
        height: 100%;
        min-height: 91vh;
        position: fixed;
        min-width: 450px;
        top: 0;
        bottom: 0;
    }

    #_display-content {
        position: relative;
        display: block;
        padding: 2rem 2rem 6rem;
    }
</style>
