

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function postUser(name: string,) {
    const newUser = await prisma.user.create({
        data: {
            name: name,
        }
    })

    return newUser;
}

async function fetchUser() {
    const users = await prisma.user.findMany();

    return users;
}

async function deleteUser(user: string) {
    await prisma.user.delete({
        where: {
            name: user
        }
    })
}

export default {
    postUser,
    fetchUser,
    deleteUser
}
