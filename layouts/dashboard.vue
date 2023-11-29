<template>
	<dashboard_Navbar />
	<dashboard_SideMenu />

	<div
		class="lg:w-[calc(100%-16rem)] w-full absolute left-0 mt-14 p-4 dark:bg-gray-800"
	>
		<slot></slot>
	</div>
</template>

<script setup>
import { initFlowbite } from "flowbite";

// onMounted(() => {
// 	setTimeout(() => {
// 		initFlowbite();
// 	}, 1);
// });
</script>
