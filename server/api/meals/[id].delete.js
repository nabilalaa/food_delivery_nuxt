import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const id = event.context.params.id;

	const meal = prisma.meals
		.delete({
			where: { id: Number(id) }
		})
		.catch((error) => {
			console.log(error);
			return error.meta;
		});
	return meal;
});
