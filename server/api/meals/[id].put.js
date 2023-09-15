import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const data = await readBody(event);

	const id = event.context.params.id;

	const meal = prisma.meals.update({
		where: { id: Number(id) },
		data: {
			name: data.name,
			price: data.price,
			desc: data.desc,
			image: data.image,
			category: data.category
		}
	});
	return meal;
});
