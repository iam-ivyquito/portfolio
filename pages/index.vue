<template>
    <main class="mb-6">
        <section id="introduction" class="block mx-6">
            <div
                class="grid grid-cols-1 text-center justify-center items-center min-h-[91vh] dark:text-gray-200 ligth:text-gray-800 xl:mx-auto md:max-w-[1248px]"
            >
                <div class="lg:m-auto">
                    <p class="text-2xl text-semibold">Hello, I'm Ivy!</p>
                    <p class="text-[50px] sm:text-[60px] md:text-[70px] py-6">
                        I'm a Senior Frontend Developer—fueled by faith
                        <span class="highlight">& instant coffee,</span> crafting responsive, user-friendly designs one
                        code block at a time.
                    </p>
                    <p class="flex place-items-center justify-center">
                        <IconWrapper name="lucide:map-pin" icon-class="size-5 mr-2 text-red-500" />
                        <span class="text-lg">CEBU CITY, PH</span>
                    </p>
                    <hr class="my-6" />
                    <div class="social-media flex item-center justify-center gap-4">
                        <template v-for="link in socilaLinks" :key="link.id">
                            <button
                                class="border rounded-full px-3 py-2 hover:skew-y-12 transition duration-150 ease-in-out"
                                :style="`color: ${link.color}; border-color: ${link.color}`"
                                @click.prevent="openLink(link.url)"
                            >
                                <IconWrapper :name="link.icon" icon-class="size-6" />
                            </button>
                        </template>
                        <!-- <button
                            class="border border-purple-600 py-1 px-6 text-purple-600 rounded-full flex items-center gap-4 transition duration-150 ease-in-out group hover:bg-purple-600"
                            @click.prevent="handleDownloadCV"
                        > -->
                        <a
                            href="./cv/iquito.pdf"
                            download
                            class="border border-purple-600 py-1 px-6 text-purple-600 rounded-full flex items-center gap-4 transition duration-150 ease-in-out group hover:bg-purple-600"
                        >
                            <IconWrapper
                                name="lucide:download"
                                icon-class="size-6 group-hover:animate-bounce group-hover:text-white"
                            />
                            <span class="text-lg group-hover:text-white">Download my CV</span>
                        </a>
                        <!-- </button> -->
                    </div>
                </div>
            </div>
        </section>
        <seciton id="experience-techstack" class="block mx-4 xl:mx-auto md:max-w-[1248px] my-[3rem]">
            <div class="card bg-slate-50 p-6 rounded-lg">
                <header>
                    <nav class="rounded-md bg-gradient-to-r from-purple-600 to-blue-600 p-2">
                        <button
                            v-for="tab in tabs"
                            :key="tab.id"
                            :class="[
                                'px-4 w-[50%] py-2 text-sm transition-colors rounded-md transition-all transition-discrete',
                                activeTab === tab.id ? 'bg-gray-200 text-black font-semibold' : 'text-white'
                            ]"
                            @click.prevent="handleChangeTab(tab)"
                        >
                            {{ tab.label }}
                        </button>
                    </nav>
                </header>

                <component :is="activeTabComponent" class="m-3 md:m-6" />
            </div>
        </seciton>
    </main>
</template>

<script lang="ts" setup>
    import IconWrapper from "~/components/IconWrapper.vue"
    import SkillSet from "~/components/about/SkillSet.vue"
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
        { id: "skillset", label: "Skill", component: SkillSet }
    ] as Tab[]

    const socilaLinks = [
        {
            id: "linkedin",
            name: "LinkedIn Profile",
            icon: "lucide:linkedin",
            url: "https://www.linkedin.com/in/iam-ivyquito",
            color: "#2563eb"
        }
    ]

    const handleChangeTab = (tab: Tab) => {
        activeTab.value = tab.id
        activeTabComponent.value = tab.component
    }

    const openLink = (url: string) => {
        window.open(url, "")
    }

    const handleDownloadCV = () => {
        const link = document.createElement("a")
        link.href = "/cv/iquito.pdf"
        link.download = "IvyQuito_CV.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
</script>

<style lang="css">
    section#introduction {
        background: radial-gradient(ellipse at top, #071628 0%, #000000 100%);
        background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
    }
    section#introduction > div::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 46rem;
        right: 0;
        z-index: -1;
    }
</style>
