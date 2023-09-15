import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	console.log(data);
	// const id = readBody(event);
	// console.log(id);
	const id = event.context.params.id;

	const category = prisma.category.update({
		where: { id: Number(id) },
		data: {
			name: data.name
		}
	});
	return category;
});
