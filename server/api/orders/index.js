import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	// const allUsers = await prisma.food.findMany();
	// console.log(allUsers);
	// return allUsers;
	if (event.node.req.method == "GET") {
		const meals = prisma.meals.findMany();
		// const data = await readBody(event);
		// const food = prisma.food.create({
		// 	data: {
		// 		name: data.name
		// 	}
		console.log(meals);
		// });
		return meals;
	} else if (event.node.req.method == "POST") {
		const data = await readBody(event);
		console.log(data);

		const food = prisma.meals.create({
			data: {
				name: data.name,
				price: data.price,
				desc: data.desc
			}
		});
		return food;
	}
});
