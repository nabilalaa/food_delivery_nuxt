import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const id = event.context.params.id;

	const meals = prisma.meals.findUnique({
		where: { id: Number(id) }
	});

	return meals;
});
