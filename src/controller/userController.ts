import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function deteleAll() {
  try {
    const user = await prisma.user.deleteMany();
    return user;
  } catch (error) {
    return error;
  }
}
export async function userAll() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    return error;
  }
}
export async function detele(id: string) {
  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
}
export async function find(id: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
}
type typeData = {
  name: string;
  email: string;
};
export async function create(datat: typeData) {
  try {
    const user = await prisma.user.create({
      data: datat,
    });
    return user;
  } catch (error) {
    return error;
  }
}
export async function update(datat: typeData, id: string) {
  // console.log(datat);
  console.log(id);
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: datat,
    });
    return user;
  } catch (error) {
    return error;
  }
}
