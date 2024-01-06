

import { PrismaClient } from '@prisma/client'
import * as console from "console";

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
    const userToDelete = await prisma.user.findUnique({
        where: {
            name: user
        }
    })
    if (!userToDelete) {
        throw new Error(`User with name ${user} not found`)
    }

    // I didnt find a way to cascade delete the late entries so I delete them manually
    await prisma.late.deleteMany({
        where: {
            userId: userToDelete.id
        }
    })

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
