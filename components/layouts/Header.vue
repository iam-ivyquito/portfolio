<template>
    <header>
        <div class="bg-gradient-to-r from-purple-600 to-blue-600 h-[600px]" />
        <div
            class="fixed top-0 left-0 right-0 transform transition-transform duration-300 z-50 translate-y-0 rounded-lg bg-white p-1 shadow-sm mx-3 my-4"
        >
            <div class="px-4 sm:px-6 lg:px-8 py-2">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-4">
                        <img
                            class="size-[64px] rounded-full border-2 border-white shadow"
                            src="https://api.dicebear.com/9.x/adventurer/svg?seed=Kingston&flip=true&glasses=variant02,variant04&glassesProbability=100&hair=long06&hairColor=0e0e0e,562306"
                            alt="Profile Picture"
                        />
                        <div>
                            <h2 class="text-lg font-semibold text-gray-900">
                                <span class="hidden sm:inline">Ivy Marie Quito</span>
                                <span class="sm:hidden">iMQ</span>
                            </h2>
                            <!-- <h3 class="text-gray-700">Frontend Developer</h3> -->
                        </div>
                    </div>
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
                                        @click="handleTabSelect(tab)"
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

                    <nav class="hidden md:flex space-x-2 rounded-lg bg-white p-1 shadow-sm">
                        <NuxtLink
                            v-for="tab in tabs"
                            :key="tab.id"
                            @click="handleTabSelect(tab)"
                            :to="`/${tab.id}`"
                            :class="[
                                'px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-purple-600 hover:text-white',
                                activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-900'
                            ]"
                        >
                            {{ tab.name }}
                        </NuxtLink>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
    import { ref, defineProps, onMounted, onUnmounted, watch, computed, defineEmits } from "vue"

    interface TabType {
        id: string
        name: string
    }

    const openMenu = ref(false)
    const activeTab = ref<string>("")
    const originalHeader = ref(null)
    const observerRef = ref()

    const emit = defineEmits(["change-tab"])

    const tabs = [
        { id: "", name: "About" },
        { id: "projects", name: "Projects" },
        // { id: "contact", name: "Contact" },
        { id: "credits", name: "Credits" }
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
        console.log(tab, "tab change")
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
