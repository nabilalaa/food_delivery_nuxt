import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const data = await readBody(event);
	console.log(data);
	const search = prisma.category.findMany({
		where: {
			name: {
				contains: data.search
			}
		}
	});

	return search;
});
