// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
    ssr: false,
    app: {
        head: {
            title: "iMQ Portfolio",
            meta: [
                { name: "description", content: "Portfolio of Ivy Marie Quito, Frontend Developer" },
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" }
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
                }
            ]
        },
        baseURL: "/portfolio/",
        buildAssetsDir: "assets"
    },
    nitro: {
        preset: "github-pages"
    },
    // Add explicit configuration for icons
    icon: {
        size: "24px",
        class: "icon",
        icons: {
            logos: true,
            lucide: true
        }
    },
    css: ["@/assets/css/main.css"]
})
