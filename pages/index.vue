<template>
    <main class="contaner">
        <!-- <div id="sidepanel" class="border border-2 col-auto">this is the side stuff</div> -->
        <seciton id="_display-content">
            <template class="flex items-center space-x-4 justify-start">
                <Icon
                    name="lucide:square-user-round"
                    class="size-12 text-purple-600 mb-4 animate-wiggle animate-twice"
                />
                <h1 class="text-2xl">About me</h1>
            </template>
            <Experience />
        </seciton>
    </main>
</template>

<script lang="ts" setup>
    import Experience from "~/components/about/Experience.vue"
    // import {PersonStanding}

    const activeTab = ref("about")
    const showMoreExperience = ref(false)

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

    const toListExperience = computed(() => {
        if (showMoreExperience.value) {
            return experiences
        }

        return experiences.slice(0, 3)
    })
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
