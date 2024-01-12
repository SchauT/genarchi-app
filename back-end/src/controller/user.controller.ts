import { Request, Response } from 'express';
import userService from '../service/user.service';
import * as console from "console";

async function postUsers(req: Request, res: Response) {
    const users = req.body;
    await userService.postUsers(users);
    return res.status(201).send('Users Added');
}

async function fetchUser(req: Request, res: Response) {
    const users = await userService.fetchUser();
    return res.status(200).send(users);
}

async function deleteUsers(req: Request, res: Response) {
    const users = req.body;
    await userService.deleteUsers(users);
    return res.status(200).send();
}

export default {
    postUsers,
    fetchUser,
    deleteUsers
}
