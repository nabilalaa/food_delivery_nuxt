<template>
	<nav class="bg-mainColor border-gray-200 dark:bg-gray-900">
		<div
			class="max-w-screen-xl flex md:flex-col flex-wrap items-center justify-between mx-auto p-4"
		>
			<a href="/" class="flex items-center md:mb-8">
				<span
					class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
					>Food Delivery</span
				>
			</a>
			<button
				data-collapse-toggle="navbar-default"
				type="button"
				class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-thirdColor rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="navbar-default"
				aria-expanded="false"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="w-5 h-5"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 17 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M1 1h15M1 7h15M1 13h15"
					/>
				</svg>
			</button>
			<div
				class="hidden w-full md:block md:w-auto"
				id="navbar-default"
			>
				<ul
					class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:bg-transparent bg-white border-gray-100 rounded-md md:flex-row-reverse md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
				>
					<li>
						<NuxtLink
							to="/"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white md:dark:text-blue-500"
							aria-current="page"
							><svg
								class="w-8 h-8 md:text-secondColor text-mainColor hover:text-thirdColor dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
								/>
							</svg>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink
							to="addorder"
							class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							><svg
								class="w-8 h-8 md:text-secondColor text-mainColor hover:text-thirdColor dark:text-white"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 18 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"
								/>
							</svg>
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
import { initCollapses } from "flowbite";

onMounted(() => {
	setTimeout(() => {
		initCollapses();
	}, 1);
});
</script>
