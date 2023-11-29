<template>
	<div id="default-carousel" class="relative w-full" data-carousel="slide">
		<!-- Carousel wrapper -->
		<div class="relative h-[100dvh] overflow-hidden">
			<!-- Item 1 -->
			<div class="hidden duration-700 ease-in-out" data-carousel-item>
				<img
					src="../assets/spices.jpg"
					class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt="..."
				/>
				<div
					class="overlay z-50 absolute w-full h-full bg-mainColor bg-opacity-50"
				>
					<div
						class="text-white text-center text-xl md:text-2xl w-full p-8 lg:text-left lg:left-[5%] absolute top-1/2 -translate-y-1/2"
					>
						<h1
							class="text-5xl font-bold bg-gradient-to-br from-mainColor to-thirdColor hover:bg-gradient-to-bl inline-block text-transparent bg-clip-text"
						>
							اختر وجبتك
						</h1>
						<p class="my-8">
							اختر وجبتك المفضلة من اكثر من ١٢٠ ألف وجبة في مطاعم مصر
						</p>
						<NuxtLink
							to="addorder"
							type="button"
							class="text-white bg-gradient-to-br from-mainColor to-thirdColor hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center hover:duration-1000 capitalize text-xl"
						>
							اطلب الأن
						</NuxtLink>
					</div>
				</div>
			</div>
			<!-- Item 2 -->
			<div class="hidden duration-700 ease-in-out" data-carousel-item>
				<img
					src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=900&t=st=1692179297~exp=1692179897~hmac=8daa2bb6823e69ede46a3373917da2d64874511fe77d8aea219c09be2e5c0cac"
					class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt="..."
				/>
				<div
					class="overlay z-50 relative w-full h-full bg-mainColor bg-opacity-50"
				>
					<div
						class="text-white text-center text-xl md:text-2xl w-full p-8 lg:text-right lg:right-[5%] absolute top-1/2 -translate-y-1/2"
					>
						<h1
							class="text-5xl font-bold bg-gradient-to-br from-mainColor to-thirdColor hover:bg-gradient-to-bl inline-block text-transparent bg-clip-text"
						>
							اختر وجبتك
						</h1>
						<p class="my-8">
							اختر وجبتك المفضلة من اكثر من ١٢٠ ألف وجبة في مطاعم مصر
						</p>
						<NuxtLink
							to="addorder"
							type="button"
							class="text-white bg-gradient-to-br from-mainColor to-thirdColor hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center hover:duration-1000 capitalize text-xl"
						>
							اطلب الأن
						</NuxtLink>
					</div>
				</div>
			</div>
			<!-- Item 3 -->
			<div class="hidden duration-700 ease-in-out" data-carousel-item>
				<img
					src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=900&t=st=1692179297~exp=1692179897~hmac=8daa2bb6823e69ede46a3373917da2d64874511fe77d8aea219c09be2e5c0cac"
					class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt="..."
				/>
				<div
					class="overlay z-50 absolute w-full h-full bg-mainColor bg-opacity-50"
				>
					<div
						class="text-white text-center text-xl md:text-2xl w-full p-8 absolute top-1/2 -translate-y-1/2"
					>
						<h1
							class="text-5xl font-bold bg-gradient-to-br from-mainColor to-thirdColor hover:bg-gradient-to-bl inline-block text-transparent bg-clip-text"
						>
							اختر وجبتك
						</h1>
						<p class="my-8">
							اختر وجبتك المفضلة من اكثر من ١٢٠ ألف وجبة في مطاعم مصر
						</p>
						<NuxtLink
							to="addorder"
							type="button"
							class="text-white bg-gradient-to-br from-mainColor to-thirdColor hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center hover:duration-1000 capitalize text-xl"
						>
							اطلب الأن
						</NuxtLink>
					</div>
				</div>
			</div>
			<div class="hidden duration-700 ease-in-out" data-carousel-item>
				<img
					src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=900&t=st=1692179297~exp=1692179897~hmac=8daa2bb6823e69ede46a3373917da2d64874511fe77d8aea219c09be2e5c0cac"
					class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt="..."
				/>
				<div
					class="overlay z-50 absolute w-full h-full bg-mainColor bg-opacity-50"
				>
					<div
						class="text-white text-center text-xl md:text-2xl w-full p-8 absolute top-1/2 -translate-y-1/2"
					>
						<h1
							class="text-5xl font-bold bg-gradient-to-br from-mainColor to-thirdColor hover:bg-gradient-to-bl inline-block text-transparent bg-clip-text"
						>
							اختر وجبتك
						</h1>
						<p class="my-8">
							اختر وجبتك المفضلة من اكثر من ١٢٠ ألف وجبة في مطاعم مصر
						</p>
						<NuxtLink
							to="addorder"
							type="button"
							class="text-white bg-gradient-to-br from-mainColor to-thirdColor hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center hover:duration-1000 capitalize text-xl"
						>
							اطلب الأن
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
		<!-- Slider indicators -->
		<div
			class="absolute z-30 flex flex-row-reverse gap-3 -translate-x-1/2 bottom-5 left-1/2"
		>
			<button
				type="button"
				class="w-3 h-3 rounded-full"
				aria-current="true"
				aria-label="Slide 1"
				data-carousel-slide-to="0"
			></button>
			<button
				type="button"
				class="w-3 h-3 rounded-full"
				aria-current="false"
				aria-label="Slide 2"
				data-carousel-slide-to="1"
			></button>
			<button
				type="button"
				class="w-3 h-3 rounded-full"
				aria-current="false"
				aria-label="Slide 3"
				data-carousel-slide-to="2"
			></button>
			<button
				type="button"
				class="w-3 h-3 rounded-full"
				aria-current="false"
				aria-label="Slide 4"
				data-carousel-slide-to="3"
			></button>
		</div>
		<button
			type="button"
			class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none max-md:hidden"
			data-carousel-next
		>
			<span
				class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				<svg
					class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 1 1 5l4 4"
					/>
				</svg>
				<span class="sr-only">Previous</span>
			</span>
		</button>
		<button
			type="button"
			class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none max-md:hidden"
			data-carousel-prev
		>
			<span
				class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
			>
				<svg
					class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 9 4-4-4-4"
					/>
				</svg>
				<span class="sr-only">Next</span>
			</span>
		</button>
	</div>
</template>

<script setup>
import { initCarousels } from "flowbite";
onMounted(() => {
	initCarousels();
});
</script>

<style lang="scss" scoped></style>
