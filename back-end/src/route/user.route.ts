import userController from "../controller/user.controller";
import express, { Request, Response, NextFunction } from "express";
import * as console from "console";


const router = express.Router();

router.post('', (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    try {
        userController.postUsers(req, res);
    }
    catch (err) {
        next(err);
    }
});

router.get('', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await userController.fetchUser(req, res);
    }
    catch (err) {
        next(err);
    }
});

router.delete('', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await userController.deleteUsers(req, res);
    }
    catch (err) {
        next(err);
    }
});

export default router;
