/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./node_modules/flowbite/**/*.{js,ts}",
		"./app.vue"
	],

	theme: {
		container: {
			center: true,
			padding: "2rem"
		},
		extend: {
			colors: {
				mainColor: "#fe9801",
				secondColor: "#f4eec7",
				thirdColor: "#48bb78"
			}
		}
	},
	plugins: [require("flowbite/plugin")]
};
