<template>
	<div id="default-carousel" class="relative w-full" data-carousel="static">
		<!-- Carousel wrapper -->
		<div class="relative h-screen overflow-hidden">
			<!-- Item 1 -->
			<div
				class="hidden duration-700 ease-in-out"
				data-carousel-item
			>
				<img
					src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=900&t=st=1692179297~exp=1692179897~hmac=8daa2bb6823e69ede46a3373917da2d64874511fe77d8aea219c09be2e5c0cac"
					class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt="..."
				/>
				<div
					class="overlay z-50 absolute w-full h-full bg-mainColor bg-opacity-50"
				>
					<div
						class="text-white text-2xl md:w-max w-full p-8 md:translate-x-0 md:translate-y-0 absolute md:left-[5%] md:top-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
					>
						<h1>hello</h1>
						<p class="my-8">
							Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Quo,
							ipsam?
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
			<div
				class="hidden duration-700 ease-in-out"
				data-carousel-item
			>
				<img
					src="https://images.unsplash.com/photo-1647823986065-e34c9913a684?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
					class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full h-full object-cover"
					alt="..."
				/>
				<div
					class="overlay z-50 absolute w-full h-full bg-mainColor bg-opacity-50"
				>
					<div
						class="text-white text-2xl md:w-max w-full p-8 md:translate-x-0 md:translate-y-0 absolute md:right-[5%] md:top-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2"
					>
						<h1>hello</h1>
						<p class="my-8">
							Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Quo,
							ipsam?
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
			<div
				class="hidden duration-700 ease-in-out"
				data-carousel-item
			>
				<img
					src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=900&t=st=1692179297~exp=1692179897~hmac=8daa2bb6823e69ede46a3373917da2d64874511fe77d8aea219c09be2e5c0cac"
					class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt="..."
				/>
				<div
					class="overlay z-50 absolute w-full h-full bg-mainColor bg-opacity-50"
				>
					<div
						class="text-white text-2xl absolute left-5 top-1/2"
					>
						<h1>hello</h1>
						<p class="my-8">
							Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Quo,
							ipsam?
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
			<!-- Item 4 -->
			<div
				class="hidden duration-700 ease-in-out"
				data-carousel-item
			>
				<img
					src="https://images.unsplash.com/photo-1691228334686-be5d1eab7d34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
					class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt="..."
				/>
			</div>
			<!-- Item 5 -->
			<div
				class="hidden duration-700 ease-in-out"
				data-carousel-item
			>
				<img
					src="https://images.unsplash.com/photo-1691228334686-be5d1eab7d34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80"
					class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
					alt="..."
				/>
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
			<button
				type="button"
				class="w-3 h-3 rounded-full"
				aria-current="false"
				aria-label="Slide 5"
				data-carousel-slide-to="4"
			></button>
		</div>
	</div>
</template>

<script setup>
import { initCarousels } from "flowbite";
onMounted(() => {
	initCarousels();
});
</script>

<style lang="scss" scoped></style>
