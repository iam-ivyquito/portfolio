// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
    ssr: false,
    app: {
        head: {
            title: "Ivy Quito",
            meta: [
                { name: "description", content: "Portfolio of Ivy Marie Quito, Senior Frontend Developer" },
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" }
            ]
        },
        baseURL: "/portfolio/",
        buildAssetsDir: "assets"
    },
    nitro: {
        preset: "github-pages"
    },
    nuxtIcon: {
        size: "24px",
        class: "icon",
        aliases: {
            nuxt: "logos:nuxt-icon",
            vue: "logos:vue",
            typescript: "logos:typescript-icon",
            nodejs: "logos:nodejs",
            javascript: "logos:javascript",
            git: "logos:git-icon"
        }
    }
})
