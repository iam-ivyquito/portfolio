<template>
    <header>
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 h-[100px]" />
        <div class="grid grid-cols-[1fr_60px] place-items-center fixed top-0 left-5 right-5 gap-3">
            <div class="z-50 rounded-lg bg-white shadow-sm mx-3 my-4 min-w-[100%]">
                <div class="px-4 py-2">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <!-- <img
                            class="size-[52px] rounded-full border-2 border-white shadow"
                            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Kingston&flip=true&glasses=variant02,variant04&glassesProbability=100&hair=long06&hairColor=0e0e0e,562306"
                            alt="Profile Picture"
                        /> -->
                            <h2 class="text-2xl text-black">
                                <span class="font-semibold"><</span>
                                <span class="text-yellow-400 font-bold">i</span>
                                <span class="font-semibold">MQ /></span>
                            </h2>
                        </div>
                        <!-- <div class="navigation-action-holder flex item-center h-[45px] gap-6"> -->
                        <nav class="flex md:hidden space-x-2">
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
                                            @click.prevent="handleTabSelect(tab)"
                                            :class="[
                                                'block px-4 py-2 text-sm text-gray-700 w-full text-left',
                                                { 'bg-purple-600 text-white': activeTab === tab.id }
                                            ]"
                                        >
                                            <template class="flex item-center">
                                                <IconWrapper :name="tab.icon" icon-class="size-5 mr-2" />
                                                <p class="mb-0">{{ tab.name }}</p>
                                            </template>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        <nav class="hidden md:flex space-x-2 rounded-lg bg-white p-1 shadow-sm">
                            <NuxtLink
                                v-for="tab in tabs"
                                :key="tab.id"
                                @click="handleTabSelect(tab)"
                                :to="`/${tab.id}`"
                                :class="[
                                    'px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-purple-600 hover:text-white',
                                    activeTab === tab.id
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                ]"
                            >
                                {{ tab.name }}
                            </NuxtLink>
                        </nav>
                        <!-- </div> -->
                    </div>
                </div>
            </div>
            <div class="rounded-lg my-4">
                <img
                    class="size-[52px] rounded-full border-2 border-white shadow"
                    src="https://api.dicebear.com/9.x/adventurer/svg?seed=Kingston&flip=true&glasses=variant02,variant04&glassesProbability=100&hair=long06&hairColor=0e0e0e,562306"
                    alt="Profile Picture"
                />
            </div>
            <!-- <button
                class="px-5 rounded-lg my-4"
                :class="theme === 'dark' ? 'bg-black' : 'bg-yellow-500'"
                @click.prevent="handleThemeChange"
            >
                <IconWrapper v-if="theme === 'dark'" name="lucide:moon" icon-class="text-gray-100 size-5" />
                <IconWrapper v-else name="lucide:sun" icon-class="text-gray-700 size-5" />
            </button> -->
        </div>
    </header>
</template>

<script lang="ts" setup>
    import { ref, defineProps, onMounted, onUnmounted, watch, computed, defineEmits } from "vue"
    import IconWrapper from "./IconWrapper.vue"

    interface TabType {
        id: string
        name: string
        icon: string
    }

    const openMenu = ref(false)
    const activeTab = ref<string>("")
    const originalHeader = ref(null)
    const observerRef = ref()
    const theme = ref("dark")

    const emit = defineEmits(["change-tab"])

    const tabs = [
        { id: "", name: "About", icon: "lucide:square-user-round" },
        { id: "projects", name: "Projects", icon: "lucide:layers-2" }
        // { id: "credits", name: "Credits", icon: "" }
    ] as TabType[]

    const clickOutBound = (e: any) => {
        e.preventDefault()
        const menuIcon = e.target.closest(".menu-icon")
        const menuButton = e.target.closest("#menu-button")

        if (!!menuButton || !!menuIcon) {
            openMenu.value = !openMenu.value
        } else {
            if (openMenu.value) openMenu.value = false
        }
    }

    const handleTabSelect = (tab: TabType) => {
        activeTab.value = tab.id
    }

    const handleThemeChange = () => {
        theme.value = theme.value === "dark" ? "light" : "dark"
    }

    onMounted(() => {
        document.querySelector("body")?.addEventListener("click", clickOutBound)
    })

    onUnmounted(() => {
        if (originalHeader.value) {
            observerRef.value.unobserve(originalHeader.value)
        }

        document.querySelector("body")?.removeEventListener("click", clickOutBound)
    })

    watch(
        () => activeTab.value,
        tab => emit("change-tab", tab)
    )
</script>
