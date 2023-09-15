// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["~/assets/css/main.css"],
	modules: ["@nuxtjs/cloudinary"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	},
	routeRules: {
		"/admin/**": { ssr: false }
	}
});
