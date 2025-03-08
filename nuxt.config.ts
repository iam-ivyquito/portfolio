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
                { name: "theme-color", content: "#818cf8" },
                { name: "msapplication-TileColor", content: "#818cf8" },
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" }
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/portfolio/favicon.ico" },
                { rel: "shortcut icon", type: "image/x-icon", href: "/portfolio/favicon.ico" },
                { rel: "apple-touch-icon", sizes: "180x180", href: "/portfolio/apple-touch-icon.png" },
                { rel: "icon", type: "image/png", sizes: "32x32", href: "/portfolio/favicon-32x32.png" },
                { rel: "icon", type: "image/png", sizes: "16x16", href: "/portfolio/favicon-16x16.png" },
                { rel: "mask-icon", href: "/portfolio/favicon.ico", color: "#818cf8" }
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
