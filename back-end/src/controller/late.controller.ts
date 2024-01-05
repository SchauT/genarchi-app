import { Request, Response } from 'express';
import lateService from '../service/late.service';

async function fetchLateByUsers(req: Request, res: Response) {
    const lateByUser = await lateService.fetchLateByUsers();
    return res.status(200).send(lateByUser);
}

async function postLate(req: Request, res: Response) {
    let { startedAt, userId } = req.body;

    // startedAt = new Date().setHours(12, 0, 0, 0);

    // console.log('startedAt', test)
    // return res.status(201).send({prout: "Late Added"});

    await lateService.postLate(startedAt, userId);
    return res.status(201);
}

export default {
    fetchLateByUsers,
    postLate
}
