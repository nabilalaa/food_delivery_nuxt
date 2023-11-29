<template>
	<Modal TargetName="update-orders" Title="تعديل الطلب">
		<form action="#">
			<div class="grid text-2xl gap-4 mb-4 sm:grid-cols-2">
				<div>
					<label
						for="name"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Name</label
					>
					<input
						type="text"
						name="name"
						id="name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Type product name"
						required=""
					/>
				</div>
				<div>
					<label
						for="brand"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Brand</label
					>
					<input
						type="text"
						name="brand"
						id="brand"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Product brand"
						required=""
					/>
				</div>
				<div>
					<label
						for="price"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Price</label
					>
					<input
						type="number"
						name="price"
						id="price"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="$2999"
						required=""
					/>
				</div>
				<div>
					<label
						for="category"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Category</label
					>
					<select
						id="category"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					>
						<option selected="">Select category</option>
						<option value="TV">TV/Monitors</option>
						<option value="PC">PC</option>
						<option value="GA">Gaming/Console</option>
						<option value="PH">Phones</option>
					</select>
				</div>
				<div class="sm:col-span-2">
					<label
						for="description"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Description</label
					>
					<textarea
						id="description"
						rows="4"
						class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Write product description here"
					></textarea>
				</div>
			</div>
			<button
				type="submit"
				class="text-white bg-blue-700 m-auto flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
			>
				<p>تعديل الطلب</p>
			</button>
		</form>
	</Modal>
	<Modal TargetName="add-orders" Title="اضافة الطلب">
		<form action="#">
			<div class="grid text-2xl gap-4 mb-4 sm:grid-cols-2">
				<div>
					<label
						for="name"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Name</label
					>
					<input
						type="text"
						name="name"
						id="name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Type product name"
						required=""
					/>
				</div>
				<div>
					<label
						for="brand"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Brand</label
					>
					<input
						type="text"
						name="brand"
						id="brand"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Product brand"
						required=""
					/>
				</div>
				<div>
					<label
						for="price"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Price</label
					>
					<input
						type="number"
						name="price"
						id="price"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="$2999"
						required=""
					/>
				</div>
				<div>
					<label
						for="category"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Category</label
					>
					<select
						id="category"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					>
						<option selected="">Select category</option>
						<option value="TV">TV/Monitors</option>
						<option value="PC">PC</option>
						<option value="GA">Gaming/Console</option>
						<option value="PH">Phones</option>
					</select>
				</div>
				<div class="sm:col-span-2">
					<label
						for="description"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>Description</label
					>
					<textarea
						id="description"
						rows="4"
						class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Write product description here"
					></textarea>
				</div>
			</div>
			<button
				type="submit"
				class="text-white bg-blue-700 m-auto flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
			>
				<p>اضافة الطلب</p>
			</button>
		</form>
	</Modal>
	<div>
		<h1 class="text-center text-4xl p-5 mb-5 font-bold">
			ادارة الطلبات
		</h1>
		<div class="flex justify-between items-center flex-wrap mb-5">
			<form class="sm:w-[60%] w-full sm:m-0 mb-4">
				<label
					for="default-search"
					class="mb-2 text-lg font-medium text-gray-900 sr-only dark:text-white"
					>Search</label
				>
				<div class="relative">
					<div
						class="absolute inset-y-0 right-4 flex flex-row-reverse items-center pl-3 pointer-events-none"
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
						type="search"
						id="default-search"
						class="block w-full p-4 pr-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder=""
						required
					/>
					<button
						type="submit"
						class="text-white absolute left-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						بحث
					</button>
				</div>
			</form>
			<button
				type="button"
				data-modal-target="add-orders"
				data-modal-toggle="add-orders"
				class="text-white bg-blue-700 flex items-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>
				اضافة الطلبات
				<svg
					class="mr-1 w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
						clip-rule="evenodd"
					></path>
				</svg>
			</button>
		</div>
		<dashboard_Table :data="orders" />
	</div>
</template>

<script setup>
definePageMeta({
	layout: "dashboard"
});

// form data
const name = ref(null);
const phone = ref(null);

// data
const Alert = ref(null);
const orders = ref(null);
onMounted(async () => {
	await useFetch("/api/orders", {}).then((response) => {
		orders.value = response.data._rawValue;
		console.log(orders);
	});
});

async function create_orders() {
	await useFetch("/api/orders", {
		method: "post",
		body: {
			name: name.value
		}
	}).then((response) => {
		console.log(response.status.value);
		if (response.status.value == "success") {
			Alert.value = "done";
		} else {
			Alert.value = "not done";
		}
	});
}
</script>

<style lang="scss" scoped></style>
