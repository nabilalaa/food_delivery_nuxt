<template>
	<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-lg text-gray-500 dark:text-gray-400 text-right">
			<thead
				class="text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
			>
				<tr>
					<th scope="col" class="p-4">
						<div class="flex">
							<input
								id="checkbox-all-search"
								type="checkbox"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label for="checkbox-all-search" class="sr-only">checkbox</label>
						</div>
					</th>

					<th
						v-if="route.path == '/admin/categories'"
						scope="col"
						class="px-6 py-3"
					>
						الاسم
					</th>
					<th
						v-if="route.path == '/admin/categories'"
						scope="col"
						class="px-6 py-3"
					>
						صورة
					</th>
					<th v-if="route.path == '/admin/meals'" scope="col" class="px-6 py-3">
						اسم الوجبة
					</th>
					<th v-if="route.path == '/admin/meals'" scope="col" class="px-6 py-3">
						الصورة
					</th>
					<th v-if="route.path == '/admin/meals'" scope="col" class="px-6 py-3">
						السعر
					</th>
					<th
						v-if="route.path == '/admin/orders'"
						scope="col"
						class="px-6 py-3"
					>
						الاسم كامل
					</th>
					<th
						v-if="route.path == '/admin/orders'"
						scope="col"
						class="px-6 py-3"
					>
						الموبيل
					</th>
					<th
						v-if="route.path == '/admin/admins'"
						scope="col"
						class="px-6 py-3"
					>
						اسم الادمن
					</th>
					<th
						v-if="route.path == '/admin/admins'"
						scope="col"
						class="px-6 py-3"
					>
						الايميل
					</th>
					<th
						v-if="route.path == '/admin/admins'"
						scope="col"
						class="px-6 py-3"
					>
						تاريخ اخر تسجبل دخول
					</th>
					<th scope="col" class="px-6 py-3">الحالة</th>
				</tr>
			</thead>

			<tbody v-if="searchResult">
				<tr
					v-for="item in searchResult"
					:key="item.id"
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="w-4 p-4">
						<div class="flex items-center">
							<input
								id="checkbox-table-search-1"
								type="checkbox"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label for="checkbox-table-search-1" class="sr-only"
								>checkbox</label
							>
						</div>
					</td>
					<th
						v-if="route.path == '/admin/meals'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						{{ item.name }}
					</th>
					<th
						v-if="route.path == '/admin/meals'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						<img
							class="rounded-full w-24 h-24 object-cover"
							:src="item.image"
							alt=""
						/>
					</th>
					<th
						v-if="route.path == '/admin/meals'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						{{ item.price }} ج.م
					</th>
					<th
						v-if="route.path == '/admin/categories'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						{{ item.name }}
					</th>
					<th
						v-if="route.path == '/admin/categories'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						<img
							class="rounded-full w-24 h-24 object-cover"
							:src="item.image"
							alt=""
						/>
					</th>
					<td v-if="route.path == '/admin/categories'" class="px-6 py-4">
						<div class="flex">
							<button
								@click="get_id(item.id)"
								href="#"
								data-modal-target="update-category"
								data-modal-toggle="update-category"
								class="ml-4 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
								type="button"
							>
								تعديل
							</button>

							<a
								@click="deleteitem(item.id)"
								href="#"
								class="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
								type="button"
								>مسح</a
							>
						</div>
					</td>
					<td v-if="route.path == '/admin/meals'" class="px-6 py-4">
						<div class="flex">
							<a
								href="#"
								@click="get_id(item.id)"
								data-modal-target="update-meals"
								data-modal-toggle="update-meals"
								class="ml-4 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
								type="button"
								>تعديل</a
							>
							<a
								@click="deleteitem(item.id)"
								href="#"
								class="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
								type="button"
								>مسح</a
							>
						</div>
					</td>
					<td v-if="route.path == '/admin/orders'" class="px-6 py-4">
						<div class="flex">
							<a
								href="#"
								@click="get_id(item.id)"
								data-modal-target="update-orders"
								data-modal-toggle="update-orders"
								class="ml-4 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
								type="button"
								>تعديل</a
							>
							<a
								@click="deleteitem(item.id)"
								href="#"
								class="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
								type="button"
								>مسح</a
							>
						</div>
					</td>
					<td v-if="route.path == '/admin/admins'" class="px-6 py-4">
						<div class="flex">
							<a
								href="#"
								data-modal-target="update-admins"
								data-modal-toggle="update-admins"
								class="ml-4 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
								type="button"
								>تعديل</a
							>
							<a
								href="#"
								class="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
								type="button"
								>مسح</a
							>
						</div>
					</td>
				</tr>
			</tbody>
			<tbody v-else>
				<tr
					v-for="item in data"
					:key="item.id"
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="w-4 p-4">
						<div class="flex items-center">
							<input
								id="checkbox-table-search-1"
								type="checkbox"
								class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label for="checkbox-table-search-1" class="sr-only"
								>checkbox</label
							>
						</div>
					</td>
					<th
						v-if="route.path == '/admin/meals'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						{{ item.name }}
					</th>
					<th
						v-if="route.path == '/admin/meals'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						<img
							class="rounded-full w-24 h-24 object-cover"
							:src="item.image"
							alt=""
						/>
					</th>
					<th
						v-if="route.path == '/admin/meals'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						{{ item.price }} ج.م
					</th>
					<th
						v-if="route.path == '/admin/categories'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						{{ item.name }}
					</th>
					<th
						v-if="route.path == '/admin/categories'"
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
					>
						<img
							class="rounded-full w-24 h-24 object-cover"
							:src="item.image"
							alt=""
						/>
					</th>
					<td v-if="route.path == '/admin/categories'" class="px-6 py-4">
						<div class="flex">
							<button
								id="update-category"
								@click="openModel(), get_id(item.id)"
								href="#"
								class="ml-4 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
								type="button"
							>
								تعديل
							</button>

							<a
								@click="deleteitem(item.id)"
								href="#"
								class="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
								type="button"
								>مسح</a
							>
						</div>
					</td>
					<td v-if="route.path == '/admin/meals'" class="px-6 py-4">
						<div class="flex">
							<a
								@click="openModel(), get_id(item.id)"
								href="#"
								class="ml-4 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
								type="button"
								>تعديل</a
							>
							<a
								@click="deleteitem(item.id)"
								href="#"
								class="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
								type="button"
								>مسح</a
							>
						</div>
					</td>
					<td v-if="route.path == '/admin/orders'" class="px-6 py-4">
						<div class="flex">
							<a
								href="#"
								@click="get_id(item.id), openModel()"
								class="ml-4 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
								type="button"
								>تعديل</a
							>
							<a
								@click="deleteitem(item.id)"
								href="#"
								class="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
								type="button"
								>مسح</a
							>
						</div>
					</td>
					<td v-if="route.path == '/admin/admins'" class="px-6 py-4">
						<div class="flex">
							<a
								href="#"
								@click="openModel"
								class="ml-4 block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
								type="button"
								>تعديل</a
							>
							<a
								href="#"
								class="block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
								type="button"
								>مسح</a
							>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
		<nav
			class="flex items-center justify-between p-4"
			aria-label="Table navigation"
		>
			<span class="text-lg font-normal text-gray-500 dark:text-gray-400"
				>Showing
				<span class="font-semibold text-gray-900 dark:text-white">1-10</span>
				of
				<span class="font-semibold text-gray-900 dark:text-white"
					>1000</span
				></span
			>
			<ul class="inline-flex space-x-px text-lg h-8">
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>Previous</a
					>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>1</a
					>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>2</a
					>
				</li>
				<li>
					<a
						href="#"
						aria-current="page"
						class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
						>3</a
					>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>4</a
					>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>5</a
					>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>Next</a
					>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script setup>
function openModel(e) {
	document.querySelector("#update").showModal();

	// if (e.target.id == "update-category") {
	// 	document.querySelector("#update-category").showModal();
	// }
}
const emit = defineEmits(["get_item"]);

function get_id(item) {
	emit("get_item", item);
}

const route = useRoute();
defineProps(["data", "deleteitem", "loading", "searchResult"]);
</script>

<style scoped></style>
