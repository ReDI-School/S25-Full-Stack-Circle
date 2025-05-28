import prisma from "../prisma/client.js";
// get list
export const findAllUsers = () => prisma.user.findMany();
