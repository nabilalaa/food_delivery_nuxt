<template>
	<Modal
		v-if="meals !== []"
		TargetName="update-meals"
		Title="تعديل الوجبات"
		bg="white"
		width="5xl"
	>
		<div
			v-if="Alert !== null"
			:class="`flex items-center p-4 mb-4 text-sm text-${alertColor}-800 rounded-lg bg-${alertColor}-50 dark:bg-gray-800 dark:text-${alertColor}-400`"
			role="alert"
		>
			<svg
				class="flex-shrink-0 inline w-4 h-4 mr-3"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
				/>
			</svg>
			<span class="sr-only">Info</span>
			<div class="mr-4">
				{{ Alert }}
			</div>
		</div>
		<form action="#" @submit.prevent="update_meal">
			<div class="grid text-2xl gap-4 mb-4 sm:grid-cols-2">
				<div>
					<label
						for="name"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>الاسم</label
					>
					<input
						v-model="nameupdate"
						type="text"
						name="name"
						id="name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="الاسم"
						required=""
					/>
				</div>
				<div>
					<label
						for="file_input"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>صورة الوجبة</label
					>
					<input
						type="file"
						name="file_input"
						id="file_input"
						class="bg-gray-50 border text-center border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="صورة الوجبة"
					/>
					<img
						class="rounded-full w-24 h-24 object-cover mt-4"
						:src="
							imageupdate
								? imageupdate
								: 'https://placehold.co/600x400'
						"
						alt="My Awesome Image"
					/>
				</div>
				<div>
					<label
						for="price"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>السعر</label
					>
					<input
						v-model="priceupdate"
						type="number"
						name="price"
						id="price"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="السعر"
						required=""
					/>
				</div>
				<div>
					<label
						for="category"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>التصنيف</label
					>
					<select
						id="category"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring -primary-500 dark:focus:border-primary-500"
					>
						<!-- <option disabled selected="">
							{{ categoryupdate }}
						</option> -->
						<option
							selected
							v-for="category in selectcategory"
							:key="category"
							:value="category.name"
						>
							{{
								categoryupdate !== category.name
									? category.name
									: categoryupdate
							}}
						</option>
					</select>
				</div>
				<div class="sm:col-span-2">
					<label
						for="description"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>الوصف</label
					>
					<textarea
						v-model="descupdate"
						id="description"
						rows="4"
						class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="الوصف"
					></textarea>
				</div>
			</div>
			<button
				class="text-white bg-blue-700 m-auto flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
			>
				<p>اضافة تصنيف</p>
			</button>
		</form>
	</Modal>
	<Modal
		TargetName="add-meals"
		Title="اضافة الوجبات"
		bg="white"
		width="5xl"
	>
		<div
			v-if="Alert !== null"
			:class="`flex items-center p-4 mb-4 text-sm text-${alertColor}-800 rounded-lg bg-${alertColor}-50 dark:bg-gray-800 dark:text-${alertColor}-400`"
			role="alert"
		>
			<svg
				class="flex-shrink-0 inline w-4 h-4 mr-3"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="currentColor"
				viewBox="0 0 20 20"
			>
				<path
					d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
				/>
			</svg>
			<span class="sr-only">Info</span>
			<div class="mr-4">
				{{ Alert }}
			</div>
		</div>
		<form action="" @submit.prevent="create_meal">
			<div class="grid text-2xl gap-4 mb-4 sm:grid-cols-2">
				<div>
					<label
						for="name"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>الاسم</label
					>
					<input
						v-model="name"
						type="text"
						name="name"
						id="name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="الاسم"
						required=""
					/>
				</div>
				<div>
					<label
						for="file_input"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>صورة الوجبة</label
					>
					<input
						type="file"
						name="file_input"
						id="file_input"
						class="bg-gray-50 border text-center border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="صورة الوجبة"
					/>
					<CldImage
						v-if="image !== null"
						width="100"
						class="rounded-full w-24 h-24 object-cover mt-4"
						:src="image"
						alt="My Awesome Image"
					/>
				</div>
				<div>
					<label
						for="price"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>السعر</label
					>
					<input
						v-model="price"
						type="number"
						name="price"
						id="price"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="السعر"
						required=""
					/>
				</div>
				<div>
					<label
						for="category"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>التصنيف</label
					>
					<!-- <input type="text" v-model="category" /> -->
					<select
						v-model="category"
						id="category"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					>
						<option selected="">اختيار التصنيف</option>
						<option
							v-for="category in selectcategory"
							:key="category"
							:value="category.name"
						>
							{{ category.name }}
						</option>
					</select>
					{{ category }}
				</div>
				<div class="sm:col-span-2">
					<label
						for="description"
						class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
						>الوصف</label
					>
					<textarea
						v-model="desc"
						id="description"
						rows="4"
						class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="الوصف"
					></textarea>
				</div>
			</div>
			<button
				class="text-white bg-blue-700 m-auto flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
			>
				<p>اضافة تصنيف</p>
			</button>
		</form>
	</Modal>
	<div>
		<h1 class="text-center text-4xl p-5 mb-5 font-bold">
			ادارة الوجبات
		</h1>
		<div class="flex justify-between items-center flex-wrap mb-5">
			<form
				class="sm:w-[60%] w-full sm:m-0 mb-4"
				@submit.prevent=""
			>
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
						@change.prevent="search"
						v-model="searchtext"
						type="search"
						id="default-search"
						class="block w-full p-4 pr-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						placeholder=""
						required
					/>
					<button
						type="button"
						class="text-white absolute left-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						بحث
					</button>
				</div>
			</form>
			<button
				type="button"
				data-modal-target="add-meals"
				data-modal-toggle="add-meals"
				class="text-white bg-blue-700 flex items-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>
				اضافة وجبات
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
		<dashboard_Table
			:data="meals"
			@get_item="get_meal"
			:deleteitem="delete_meal"
			:loading="loading"
			:searchResult="searchResult"
		/>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "dashboard"
});
// data form
const name = ref(null);
const nameupdate = ref(null);

const price = ref(null);
const priceupdate = ref(null);

const image = ref(null);
const imageupdate = ref(null);

const desc = ref(null);
const descupdate = ref(null);

const category = ref(null);
const categoryupdate = ref(null);

const searchtext = ref(null);
const searchResult = ref(null);

// Data
const iid = ref(null);
const Alert = ref(null);
const alertColor = ref(null);
const meals = ref(null);
const loading = ref(false);
const selectcategory = ref(null);

// Methods
// function onFileChange(e) {
// 	var files = e.target.files || e.dataTransfer.files;
// 	console.log(files);
// }
function get_categories() {
	useFetch("/api/category").then((response) => {
		selectcategory.value = response.data.value;
	});
}
function get_meals() {
	useFetch("/api/meals", {}).then((response) => {
		if (!response.pending.value) {
			meals.value = response.data.value;
		} else {
			loading.value = response.pending.value;
		}
	});
}
async function get_meal(id) {
	iid.value = id;

	console.log();
	await $fetch(`/api/meals/${id}`, {}).then((response) => {
		// updateItems.value = response;
		nameupdate.value = response.name;
		priceupdate.value = response.price;
		imageupdate.value = response.image;
		descupdate.value = response.desc;
		categoryupdate.value = response.category;

		console.log(response);
	});
}

async function create_meal(e) {
	alertColor.value = "blue";
	Alert.value = "انتظر ثواني";
	const formdataimage = new FormData();
	formdataimage.append("file", e.target[1].files[0]);
	formdataimage.append("upload_preset", "delivery");

	await useFetch(
		"https://api-ap.cloudinary.com/v1_1/dnru0whph/image/upload",
		{
			method: "post",
			body: formdataimage
		}
	).then((response) => {
		image.value = response.data.value.secure_url;
	});

	await useFetch("/api/meals", {
		method: "post",
		body: {
			name: name.value,
			price: price.value,
			desc: desc.value,
			image: image.value,
			category: category.value
		}
	}).then((response) => {
		if (response.status.value == "success") {
			alertColor.value = "green";
			Alert.value = "تم الاضافة";
			setTimeout(() => {
				reloadNuxtApp();
			}, 1000);
		} else {
			alertColor.value = "red";

			Alert.value = "لم يتم الاضافة";
		}
	});
}

async function update_meal(e) {
	Alert.value = "انتظر ثواني";
	alertColor.value = "blue";

	const formdataimage = new FormData();
	formdataimage.append("file", e.target[1].files[0]);
	formdataimage.append("upload_preset", "delivery");

	await useFetch(
		"https://api-ap.cloudinary.com/v1_1/dnru0whph/image/upload",
		{
			method: "post",
			body: formdataimage
		}
	).then((response) => {
		if (response.status.value !== "error") {
			imageupdate.value = response.data.value.secure_url;
		}
	});
	if (
		nameupdate ||
		priceupdate ||
		descupdate ||
		imageupdate ||
		categoryupdate
	) {
		useFetch(`/api/meals/${iid.value}`, {
			method: "put",
			body: {
				name: nameupdate.value,
				price: priceupdate.value,
				desc: descupdate.value,
				image: imageupdate.value,
				category: categoryupdate.value
			}
		}).then((response) => {
			if (response.status.value == "success") {
				alertColor.value = "green";

				Alert.value = "تم التعديل";
				setTimeout(() => {
					reloadNuxtApp();
				}, 1000);
			} else {
				alertColor.value = "red";

				Alert.value = "لم يتم الاضافة";
			}
		});
	}
}
function delete_meal(id) {
	useFetch(`/api/meals/${id}`, {
		method: "delete"
	}).then((response) => {
		get_meals();
	});
}
async function search() {
	await useFetch(`/api/meals/search`, {
		method: "post",
		body: {
			search: searchtext.value
		}
	}).then((response) => {
		searchResult.value = response.data.value;

		console.log(response.data.value);
	});
}
onMounted(async () => {
	get_meals();
	get_categories();
});
</script>

<style lang="scss" scoped></style>
