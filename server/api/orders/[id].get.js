import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const id = event.context.params.id;
	console.log(id);
	const categories = prisma.category.findUnique({
		where: { id: Number(id) }
	});

	return categories;
});
