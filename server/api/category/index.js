import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	if (event.node.req.method == "GET") {
		const categories = prisma.category.findMany();

		return categories;
	} else if (event.node.req.method == "POST") {
		const data = await readBody(event);
		console.log(data);

		const category = prisma.category.create({
			data: {
				name: data.name,
				image: data.image
			}
		});
		return category;
	}
});
