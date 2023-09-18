<template>
	<Modal
		v-show="showmeal"
		TargetName="info-meals"
		Title="معلومات الوجبة"
		bg="mainColor"
		width="max-w-2xl"
	>
		<h3 class="font-bold text-2xl mt-10">
			{{ getmeal ? getmeal.name : "" }}
		</h3>
		<img
			class="m-auto my-6"
			:src="getmeal ? getmeal.image : ''"
			alt=""
		/>
		<div class="flex justify-around">
			<div>{{ getmeal ? getmeal.desc : "" }}</div>
			<div>{{ getmeal ? getmeal.price : "" }}</div>
		</div>
	</Modal>

	<section class="py-36">
		<div class="container">
			<h1 class="text-2xl font-bold mb-4">اضافة الطلبات</h1>
			<div class="search flex items-center relative mb-4">
				<span
					data-v-3ec79cde=""
					class="icon-search absolute block mr-4 z-50"
				></span>

				<form
					class="w-full items-center flex"
					@submit.prevent=""
				>
					<label
						for="default-search"
						class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
						>Search</label
					>
					<div class="relative w-full">
						<div
							class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
						>
							<svg
								class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
						</div>
						<input
							@change="search"
							v-model="searchtext"
							type="search"
							id="default-search"
							class="block w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-mainColor focus:border-mainColor dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-mainColor dark:focus:border-mainColor"
						/>
					</div>
					<button
						type="button"
						class="text-white mr-4 bg-mainColor hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-mainColor dark:focus:ring-blue-800"
					>
						بحث
					</button>
				</form>
			</div>
			<div
				class="items w-full rounded-md border overflow-y-scroll h-96"
			>
				<div v-if="searchtext == null">
					<div
						v-for="meal in meals"
						:key="meal"
						class="item flex p-4 justify-between items-center border-b last-of-type:border-0 md:flex-row flex-col"
					>
						<div class="info flex">
							<div class="ml-4">
								{{ meal.name }}
							</div>
							<div>{{ meal.price }} ج.م</div>
						</div>
						<div class="flex">
							<button
								class="text-white bg-mainColor px-6 py-4 rounded-lg hover:bg-thirdColor transition"
							>
								اضافة
							</button>
							<button
								@click="getMeal(meal.id)"
								data-modal-target="info-meals"
								data-modal-toggle="info-meals"
								class="text-white bg-mainColor px-6 py-4 rounded-lg hover:bg-thirdColor transition mr-4"
							>
								<svg
									class="w-6 h-6 text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 14"
								>
									<g
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
									>
										<path
											d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
										/>
										<path
											d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"
										/>
									</g>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div v-else>
					<div
						v-for="meal in searchResult"
						:key="meal"
						class="item flex p-4 justify-between items-center border-b last-of-type:border-0 md:flex-row flex-col"
					>
						<div class="info flex">
							<div class="ml-4">
								{{
									meal.name
										? meal.name
										: "not find"
								}}
							</div>
							<div>{{ meal.price }} ج.م</div>
						</div>
						<div class="flex">
							<button
								class="text-white bg-mainColor px-6 py-4 rounded-lg hover:bg-thirdColor transition"
							>
								اضافة
							</button>
							<button
								@click="getMeal(meal.id)"
								data-modal-target="info-meals"
								data-modal-toggle="info-meals"
								class="text-white bg-mainColor px-6 py-4 rounded-lg hover:bg-thirdColor transition mr-4"
							>
								<svg
									class="w-6 h-6 text-white"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 20 14"
								>
									<g
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
									>
										<path
											d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
										/>
										<path
											d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z"
										/>
									</g>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const meals = ref(null);
const getmeal = ref(null);
const searchtext = ref(null);
const searchResult = ref(null);
const showmeal = ref(false);

onMounted(async () => {
	await $fetch("/api/meals").then((response) => {
		meals.value = response;
	});
});

async function getMeal(id) {
	showmeal.value = true;
	await $fetch(`/api/meals/${id}`).then((response) => {
		getmeal.value = response;
		console.log(response);
	});
}

async function search() {
	await $fetch(`/api/meals/search`, {
		method: "post",
		body: {
			search: searchtext.value
		}
	}).then((response) => {
		searchResult.value = response;

		// console.log(response.data.value);
	});
}
// import axios from "axios";
// import ModelBox from "@/components/ModelBox.vue";

// export default {
// 	components: {
// 		ModelBox
// 	},
// 	data() {
// 		return {
// 			resultsMeal: [],
// 			meal: "",
// 			detailsMeal: [],
// 			showmodel: false,
// 			showCart: false
// 		};
// 	},
// 	computed: {
// 		filterMeal() {
// 			return this.$store.getters.filter;
// 		},
// 		Meals() {
// 			return this.$store.state.meals;
// 		}
// 	},
// 	methods: {
// 		closeModel() {
// 			this.showmodel = false;
// 			document.body.style.overflow = "auto";
// 		},
// 		async searchMeal() {
// 			await axios
// 				.get(
// 					`http://localhost:1337/api/meals?filters[name][$contains]=${
// 						this.meal
// 					}&filters[category][name][$eq]=${sessionStorage.getItem(
// 						"category"
// 					)}`
// 				)
// 				.then((response) => {
// 					this.resultsMeal = response.data.data;
// 				});
// 		},
// 		details(id) {
// 			axios.get(
// 				`http://localhost:1337/api/meals/${id}?populate=image`
// 			).then((response) => {
// 				this.detailsMeal = response.data.data;
// 				this.showmodel = true;
// 			});
// 		},
// 		addOrder(id) {
// 			axios.get(
// 				`http://localhost:1337/api/meals/${id}?populate=image`
// 			).then((response) => {
// 				this.$store.commit("AddOrder", response.data.data);
// 			});
// 			if (localStorage.getItem("cart").length > 0) {
// 				this.showCart = true;
// 			} else {
// 				this.showCart = false;
// 			}
// 		}
// 	},
// 	mounted() {
// 		this.$store.dispatch("Meals");
// 		if (localStorage.getItem("cart") == "[]") {
// 			this.showCart = false;
// 		} else {
// 			this.showCart = true;
// 		}
// 	}
// };
</script>

<style></style>
