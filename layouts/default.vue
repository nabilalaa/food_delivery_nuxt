<template>
	<Navbar class="absolute z-40 w-full" />
	<slot></slot>
</template>

<script setup>
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
	initFlowbite();
});
</script>
