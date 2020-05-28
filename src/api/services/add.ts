import { Request, Response } from "express";

export function addFunction(req: Request, res: Response) {
    let a = parseInt(req.query.a as string, 10);
    let b = parseInt(req.query.b as string, 10);
    let sum = a + b;
    if (sum % 10 == 0) {
        throw Error("We don't like numbers divisible by 10. This error will show on browser.");
    }
    console.log("Adding", { a, b, sum });
    res.json({ a, b, sum });
}