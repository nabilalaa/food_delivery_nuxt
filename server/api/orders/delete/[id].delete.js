import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const id = event.context.params;
	// console.log(id);
	const category = prisma.category
		.delete({
			where: { id: Number(id.id) }
		})
		.catch((error) => {
			console.log(error);
			return error.meta;
		});
	return category;
});
