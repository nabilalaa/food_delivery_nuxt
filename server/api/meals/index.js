import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	if (event.node.req.method == "GET") {
		const meals = prisma.meals.findMany();

		return meals;
	} else if (event.node.req.method == "POST") {
		const data = await readBody(event);
		console.log(data);

		const meal = prisma.meals.create({
			data: {
				name: data.name,
				price: data.price,
				desc: data.desc,
				image: data.image,
				category: data.category
			}
		});
		return meal;
	}
});
