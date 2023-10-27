import { Request, Response } from 'express';
import userService from '../service/user.service';

async function postUsers(req: Request, res: Response) {
    const { users } = req.body;
    console.log(req.body);
    await userService.postUsers(users);
    return res.status(201).send('Users Added');
}

async function fetchUser(req: Request, res: Response) {
    const users = await userService.fetchUser();
    return res.status(200).send(users);
}

export default {
    postUsers,
    fetchUser
}