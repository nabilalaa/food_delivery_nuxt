import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const data = await readBody(event);

	const id = event.context.params.id;

	const category = prisma.category.update({
		where: { id: Number(id) },
		data: {
			name: data.name,
			image: data.image
		}
	});
	return category;
});
