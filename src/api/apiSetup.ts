import { Express, Router, Request, Response } from "express";

export function apiSetup(app: Express) {

    const apiRouter = Router();
    app.use('/api', apiRouter)

    apiRouter.get('/add', (req: Request, res: Response) => {
        let a = parseInt(req.query.a as string, 10);
        let b = parseInt(req.query.b as string, 10);
        console.log("Adding", { a, b });
        res.status(200).end((a + b).toString());
    });

    apiRouter.get('*', (req: Request, res: Response) => {
        let message = "Unknown API request";
        console.log(message)
        res.status(400).end(message);
    });

}   