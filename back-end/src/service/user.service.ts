import userRepository from "../repository/user.repository";
import * as console from "console";



async function postUser(name: string) {
    await userRepository.postUser(name);
}

async function postUsers(names: string[]) {
    console.log("service :", names);
    await Promise.all(names.map((name) => postUser(name)));
}

export async function fetchUser() {
    const users = await userRepository.fetchUser();
    return users;
}

export async function deleteUsers(users: string[]) {
    await Promise.all(users.map((user) => userRepository.deleteUser(user)));
}

export default {
    postUser,
    postUsers,
    fetchUser,
    deleteUsers
}
